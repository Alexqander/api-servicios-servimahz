import { DataTypes } from "sequelize";
import { database } from "../db.js";

export const Producto = database.define("Producto", {
  uid: {
    type: DataTypes.STRING(255),
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  secId: {
    type: DataTypes.STRING(255),
    unique: true,
  },
  descripcion: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  eststus: {
    type: DataTypes.STRING(100),
  },
  precio: {
    type: DataTypes.FLOAT,
  },
});
