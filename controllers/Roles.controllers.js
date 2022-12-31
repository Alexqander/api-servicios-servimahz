import { Roles } from "../models/Roles.js";

export const createRole = async (req, res) => {
  try {
    const { nombre } = req.body;
    const newUser = await Roles.create({
      nombre,
    });
    res.json(newUser);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const getRoles = async (req, res) => {
  try {
    const roles = await Roles.findAll();
    res.json(roles);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};
