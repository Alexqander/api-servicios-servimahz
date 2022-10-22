import { DataTypes } from "sequelize";
import { database } from "../db.js";
export const Servicios = database.define("Servicios", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    autoIncrement: true,
    primaryKey: true,
  },
  direccion: {
    type: DataTypes.STRING(300),
    allowNull: false,
  },
  fehca_registro: {
    type: DataTypes.DATE(),
  },
  estado_servicio: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  descripcio: {
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
