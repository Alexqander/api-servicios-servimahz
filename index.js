import { app } from "./app.js";
import { database } from "./db.js";
import { PORT } from "./config.js";

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
