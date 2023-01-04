import {
  generateUid,
  generateUidElectrodomestico,
} from "../controllers/helpers/funciones.js";
import { getMessage } from "../controllers/helpers/Messages.js";
import { Cliente } from "../models/Cliente.js";
import { Direccion } from "../models/Direccion.js";
import { Electrodomestico } from "../models/Electrodomestico.js";
import { Estado } from "../models/Estado.js";
import { Marca } from "../models/Marca.js";
import { Servicio } from "../models/Servicio.js";

export const getServiciosById = async (id) => {
  try {
    const servicio = await Servicio.findOne({
      where: { id: id },
      include: [
        Direccion,
        Cliente,
        Estado,
        { model: Electrodomestico, include: { model: Marca } },
      ],
    });
    return getMessage(false, servicio ?? null, "succes");
  } catch (error) {
    console.log(error);
    return getMessage(true, error, "error");
  }
};

export const registerServicio = async (servicio) => {
  try {
    const {
      direccion,
      descripcion,
      tipo_servicio,
      fecha_registro,
      estadoId,
      cliente,
      electrodomestico,
    } = servicio;
    const fecha_registroN = fecha_registro ?? new Date();
    const newService = await Servicio.create({
      id: generateUid(),
      fecha_registro: fecha_registroN,
      direccion,
      tipo_servicio,
      descripcion,
      estadoId,
    });
    newService.createDireccion(direccion);
    //se evalua si llegaron el modelo y el numero de serie si no devuelve un string vacio.
    const uidVal =
      (electrodomestico.modelo ?? false) && (electrodomestico.noSerie ?? false)
        ? generateUidElectrodomestico(
            electrodomestico.modelo,
            electrodomestico.noSerie
          )
        : "";
    // se crea el registro del electrodomestico
    const newElectrodomestico = await Electrodomestico.create({
      uid: uidVal,
      tipo: electrodomestico.tipo,
      marcaId: electrodomestico.marcaId,
      falla: electrodomestico.falla,
    });
    // aqui se hace la relacion del electrodomestico con el servicio 1 a 1
    await newService.setElectrodomestico(newElectrodomestico);
    // se verifica si el cliente existe , si no existe se crea uno nuevo
    const [clienteExist, created] = await Cliente.findOrCreate({
      where: { nombre: cliente.nombre },
      defaults: {
        nombre: cliente.nombre,
        telefono: cliente.telefono,
      },
    });
    // si se registro al nuevo cliente se relaciona con el servicio
    if (created) {
      clienteExist.addServicios(newService);
      return getMessage(false, clienteExist, "succes");
    } else {
      // si ya habia sido registrado antes se relaciona al cliente existente con el nuevo servicio
      clienteExist.addServicios(newService);
      return getMessage(false, clienteExist, "succes");
    }
  } catch (error) {
    console.error(error.message);
    return getMessage(true, error, "error");
  }
};

export const getServicioByCliente = async (cliente) => {
  try {
  } catch (error) {
    return getMessage(true, error, "error");
  }
};

export const updateServicio = async (servicio, id) => {
  try {
    const servicioEdit = await Servicio.findOne({
      where: { id: id },
      include: [Estado, Cliente],
    });
    servicioEdit.set(servicio);
    await servicioEdit.save();
    return getMessage(false, servicioEdit, "succes");
  } catch (error) {
    return getMessage(true, error, "error");
  }
};
