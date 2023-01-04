import { app } from "./app.js";
import { database } from "./db.js";
import { PORT } from "./config.js";

import "./models/Categoria.js";
import "./models/Cliente.js";
import "./models/Direccion.js";
import "./models/Electrodomestico.js";
import "./models/Estado.js";
import "./models/Marca.js";
import "./models/Pago.js";
import "./models/Persona.js";
import "./models/Producto.js";
import "./models/Roles.js";
import "./models/Servicio.js";
import "./models/Subcategoria.js";
import "./models/User.js";

async function main() {
  try {
    await database.sync({ force: false });
    app.listen(PORT);
    console.log(`server is running in port ${PORT}`);
  } catch (error) {
    console.error("fallo al arancar la aplicacion");
    console.error(error);
  }
}

main();
