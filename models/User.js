import { DataTypes } from "sequelize";
import { database } from "../db.js";
import { Roles } from "./Roles.js";
import { Servicios } from "./Servicios.js";
export const User = database.define("User", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  telephone: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
});
User.belongsToMany(Roles, { through: "UserRoles" });
Roles.belongsToMany(User, { through: "UserRoles" });
User.hasMany(Servicios, {
  foreignKey: "tecnico_id",
  sourceKey: "id",
});
Servicios.belongsTo(User, {
  foreignKey: "tecnico_id",
  targetId: "id",
});
