import { DataTypes } from "sequelize";
import { database } from "../db.js";
import { Producto } from "./Producto.js";

export const Subcategoria = database.define("Subcategoria", {
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
Subcategoria.hasMany(Producto, {
  foreignKey: "subCategoriaId",
  sourceKey: "id",
});
Producto.belongsTo(Subcategoria, {
  foreignKey: "subCategoriaId",
  targetId: "id",
});
