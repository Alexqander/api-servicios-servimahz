import { DataTypes } from "sequelize";
import { database } from "../db.js";
import { Servicios } from "./Servicios.js";
const Cliente = database.define("Cliente", {
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
  telefon: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
});
Cliente.hasMany(Servicios, {
  foreignKey: "clienteId",
  sourceKey: "id",
});
Servicios.belongsTo(Cliente, {
  foreignKey: "clienteId",
  targetId: "id",
});
