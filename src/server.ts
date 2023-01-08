import app, { httpServer } from "./app";
import AppDataSource from "./data-source";
import "dotenv/config";

(async () => {
  await AppDataSource.initialize().catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

  httpServer.listen(process.env.PORT, () => {
    console.log("Servidor executando");
  });
})();
