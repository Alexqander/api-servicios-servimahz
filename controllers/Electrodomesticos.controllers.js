// esta funcion busca un electrodomestico por el id del servicio

import { Electrodomestico } from "../models/Electrodomestico.js";
import { Servicio } from "../models/Servicio.js";
import { getResponse200, getResponse404 } from "./helpers/Responses.js";

// y agrega productos al electrodomestico a repara
export const addProductsElect = async (req, res) => {
  // id del servicio
  const { id } = req.params;
  // se realiza la consulta del servicio
  const servicio = await Servicio.findOne({
    where: { id: id },
    attributes: ["id"],
    include: [Electrodomestico],
  });

  return servicio ?? false
    ? getResponse200(res, servicio, "updated")
    : getResponse404(res);
};
