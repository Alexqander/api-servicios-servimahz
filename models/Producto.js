import { DataTypes } from "sequelize";
import { database } from "../db.js";

export const Producto = database.define("Producto", {
  id: {
    type: DataTypes.STRING,
    allowNull: true,
    primaryKey: true,
  },
  descripcion: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  precio: {
    type: DataTypes.FLOAT,
  },
});
