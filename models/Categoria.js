import { DataTypes } from "sequelize";
import { database } from "../db.js";
import { Subcategoria } from "./Subcategoria.js";

const Categoria = database.define(
  "Categoria",
  {
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
  },
  {
    timestamps: false,
  }
);
Categoria.hasMany(Subcategoria, {
  foreignKey: "categoriaId",
  sourceKey: "id",
});
Subcategoria.belongsTo(Categoria, {
  foreignKey: "categoriaId",
  targetId: "id",
});
