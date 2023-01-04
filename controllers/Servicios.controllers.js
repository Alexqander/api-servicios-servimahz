import {
  getResponse200,
  getResponse201,
  getResponse404,
  getResponse500,
} from "./helpers/Responses.js";
import {
  getServiciosById,
  registerServicio,
  updateServicio,
} from "../services/Servicios.services.js";

export const findServicios = async (req, res) => {};
export const findServiciosById = async (req, res) => {
  const { id } = req.params;
  const servicio = await getServiciosById(id);
  if (!!servicio.error) {
    return getResponse500(servicio.data.message, res);
  } else {
    return servicio ?? false
      ? getResponse200(res, servicio, "consulted")
      : getResponse404(res);
  }
};

export const getServiciosByCliente = async (req, res) => {};

export const createServicio = async (req, res) => {
  const newServicio = await registerServicio(req.body);
  if (!!newServicio.error) {
    return getResponse500(newServicio.data.message, res);
  } else {
    return getResponse200(res, newServicio.data, "created");
  }
};
export const editServicio = async (req, res) => {
  const { id } = req.params;
  const servicio = req.body;
  const servicioUpdate = await updateServicio(servicio, id);
  if (!!servicioUpdate.error) {
    return getResponse500(error, res);
  } else {
    getResponse201(res, servicioUpdate.data, "Updated");
  }
};
