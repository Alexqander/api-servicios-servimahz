import { jwt } from "jsonwebtoken";

export const generateJwt = (user) => {
  return jwt.sign(
    {
      user: user,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
};

export const loginUser = async (req, res) => {};
