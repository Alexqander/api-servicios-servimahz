import express from "express";
import dotenv from "dotenv";

import indexRoutes from "./routes/index.routes.js";
import rolesRoutes from "./routes/roles.routes.js";
import usersRoutes from "./routes/users.routes.js";
import serviciosRoutes from "./routes/servicios.routes.js";
import cors from "cors";

dotenv.config();
export const app = express();
app.use(cors());
app.use(express.json());

app.use(indexRoutes);
app.use(rolesRoutes);
app.use(usersRoutes);
app.use(serviciosRoutes);
