import { User } from "../models/User.js";
import { Roles } from "../models/Roles.js";

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    return res.status(500).json({ message: err.message });
  }
};
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user === null) {
      console.log("No se encontraron usuarios");
    } else {
      res.status(200).json({ data: user });
    }
  } catch (error) {
    return res.status(500).json({ message: err.message });
  }
};
export const createUser = async (req, res) => {
  try {
    const { name, email, telephone, RoleId } = req.body;
    const newUser = await User.create({
      name,
      email,
      telephone,
    });
    const role = await Roles.findByPk(RoleId);
    role.addUsers(newUser);
    res.json(newUser);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};
export const updateUser = async (req, res) => {
  try {
    const { name, email, telephone } = req.body;
    const userEdit = await User.findByPk(req.params.id);
    userEdit.set({
      name,
      email,
      telephone,
    });
    await userEdit.save();
    res.json(userEdit);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};
export const deleteUser = async (req, res) => {};
