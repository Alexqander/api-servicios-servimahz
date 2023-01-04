import { DataTypes } from "sequelize";
import { database } from "../db.js";
import { Servicio } from "./Servicio.js";

export const Pago = database.define("Pago", {
  uid: {
    type: DataTypes.STRING(350),
    allowNull: false,
    primaryKey: true,
  },
  tipo_pago: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  cantidad: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  estatus: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  comentarios: {
    type: DataTypes.STRING(350),
    allowNull: false,
    defaultValue: "",
  },
});

Servicio.hasMany(Pago, {
  foreignKey: "servicioId",
  sourceKey: "id",
});
Pago.belongsTo(Servicio, {
  foreignKey: "servicioId",
  targetId: "id",
});
