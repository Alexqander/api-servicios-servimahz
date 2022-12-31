import { DataTypes } from "sequelize";
import { database } from "../db.js";
import { Servicios } from "./Servicios.js";

export const Estado = database.define(
  "Estado",
  {
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
  },
  {
    timestamps: false,
  }
);
Estado.hasMany(Servicios, {
  foreignKey: "estadoId",
  sourceKey: "id",
});
Servicios.belongsTo(Estado, {
  foreignKey: "estadoId",
  targetId: "id",
});
