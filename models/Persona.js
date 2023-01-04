import { DataTypes } from "sequelize";
import { database } from "../db.js";
import { User } from "./User.js";

export const Persona = database.define(
  "Persona",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true,
    },
    nombres: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    aPaterno: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    aMaterno: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

// relacion uno a uno entre persona y usuario
Persona.hasOne(User);
User.belongsTo(Persona);
