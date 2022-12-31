import { DataTypes } from "sequelize";
import { database } from "../db.js";
import { Servicios } from "./Servicios.js";

export const Electrodomestico = database.define("Electrodomestico", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    primaryKey: true,
    autoIncrement: true,
  },
  tipo: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  marca: {
    type: DataTypes.STRING(255),
  },
  falla: {
    type: DataTypes.STRING(255),
  },
});
Electrodomestico.hasOne(Servicios);
Servicios.belongsTo(Electrodomestico);
