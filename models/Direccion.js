import { DataTypes } from "sequelize";
import { database } from "../db.js";
import { Persona } from "./Persona.js";
import { Servicio } from "./Servicio.js";

export const Direccion = database.define(
  "Direccion",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    calle: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    noExterior: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    noInterior: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    colonia: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    cp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    referencias: {
      type: DataTypes.STRING(350),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

// relacion uno a uno entre direccion y persona
Direccion.hasOne(Persona);
Persona.belongsTo(Direccion);

// relacion uno a uno entre direccion y servicio
Direccion.hasOne(Servicio);
Servicio.belongsTo(Direccion);
