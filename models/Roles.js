import { DataTypes } from "sequelize";
import { database } from "../db.js";
export const Roles = database.define("Roles", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
});
