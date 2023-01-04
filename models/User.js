import { DataTypes } from "sequelize";
import { database } from "../db.js";
import { Roles } from "./Roles.js";
import { Servicio } from "./Servicio.js";
export const User = database.define("User", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(255),
  },
  telephone: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
});
User.belongsToMany(Roles, { through: "UserRoles" });
Roles.belongsToMany(User, { through: "UserRoles" });
User.hasMany(Servicio, {
  foreignKey: "tecnico_id",
  sourceKey: "id",
});
Servicio.belongsTo(User, {
  foreignKey: "tecnico_id",
  targetId: "id",
});
