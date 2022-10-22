import { DataTypes } from "sequelize";
import { database } from "../db.js";
import { Producto } from "./Producto.js";

export const Marca = database.define("Marca", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
Marca.hasMany(Producto, {
  foreignKey: "marcaId",
  sourceKey: "id",
});
Producto.belongsTo(Marca, {
  foreignKey: "marcaId",
  targetId: "id",
});
