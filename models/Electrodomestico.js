import { DataTypes } from "sequelize";
import { database } from "../db.js";
import { Producto } from "./Producto.js";
import { Servicio } from "./Servicio.js";

export const Electrodomestico = database.define(
  "Electrodomestico",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true,
    },
    uid: {
      type: DataTypes.STRING(255),
      unique: true,
      allowNull: true,
    },
    tipo: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    falla: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);
Electrodomestico.hasOne(Servicio);
Servicio.belongsTo(Electrodomestico);

Electrodomestico.hasMany(Producto, {
  foreignKey: "electrodomesticoId",
  sourceKey: "id",
});
Producto.belongsTo(Electrodomestico, {
  foreignKey: "electrodomesticoId",
  targetId: "id",
});
