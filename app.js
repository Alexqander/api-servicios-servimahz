import express from "express";

import indexRoutes from "./routes/index.routes.js";
import rolesRoutes from "./routes/roles.routes.js";
import usersRoutes from "./routes/users.routes.js";
import cors from "cors";

export const app = express();
app.use(cors());
app.use(express.json());

app.use(indexRoutes);
app.use(rolesRoutes);
app.use(usersRoutes);
