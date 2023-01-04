import { DataTypes } from "sequelize";
import { database } from "../db.js";
export const Servicio = database.define("Servicio", {
  id: {
    type: DataTypes.STRING(350),
    allowNull: true,
    primaryKey: true,
  },
  fecha_registro: {
    type: DataTypes.DATE(),
  },
  tipo_servicio: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT(),
    allowNull: false,
  },
  fecha_Terminado: {
    type: DataTypes.DATE(),
    allowNull: true,
  },
  presupuesto: {
    type: DataTypes.FLOAT(),
    allowNull: true,
  },
  total: {
    type: DataTypes.FLOAT(),
    allowNull: true,
  },
});
