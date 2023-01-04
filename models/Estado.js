import { DataTypes } from "sequelize";
import { database } from "../db.js";
import { Servicio } from "./Servicio.js";

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
Estado.hasMany(Servicio, {
  foreignKey: "estadoId",
  sourceKey: "id",
});
Servicio.belongsTo(Estado, {
  foreignKey: "estadoId",
  targetId: "id",
});
