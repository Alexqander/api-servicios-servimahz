import { Servicios } from "../models/Servicios.js";
import { getResponse200, getResponse201, getResponse500 } from "./Responses.js";
import { User } from "../models/User.js";
import { Estado } from "../models/Estado.js";
import { Cliente } from "../models/Cliente.js";
import { Electrodomestico } from "../models/Electrodomestico.js";
import { where } from "sequelize";

export const findServicios = async (req, res) => {};
export const findServiciosById = async (req, res) => {
  const { id } = req.params;
  const servicio = await Servicios.findByPk(id);
};

export const findServiciosByCliente = async (req, res) => {};

export const createServicio = async (req, res) => {
  try {
    const {
      direccion,
      descripcion,
      tipo_servicio,
      fecha_registro,
      estadoId,
      cliente,
    } = req.body;
    const fecha_registroN =
      fecha_registro == null || fecha_registro == undefined
        ? new Date()
        : fecha_registro;
    const newService = await Servicios.create({
      direccion,
      fecha_registro: fecha_registroN,
      descripcion,
      tipo_servicio,
      estadoId,
    });
    const [clienteExist, created] = await Cliente.findOrCreate({
      where: { nombre: cliente.nombre },
      defaults: {
        nombre: cliente.nombre,
        telefono: cliente.telefono,
      },
    });
    if (created) {
      clienteExist.addServicios(newService);
      console.log(clienteExist);
      return getResponse201(res, clienteExist, "register");
    } else {
      clienteExist.addServicios(newService);
      return getResponse201(res, clienteExist, "register");
    }
  } catch (error) {
    return getResponse500(error, res);
  }
};
export const updateServicio = async (req, res) => {
  try {
    const { id } = req.params;
    const { servicio } = req.body;
    const servicioEdit = await Servicios.findOne({
      where: { id: id },
      include: [Estado, Cliente],
    });
    return res.json({ idSer: id, data: servicioEdit });
  } catch (error) {
    return getResponse500(res, error);
  }
};
