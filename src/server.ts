import app, { httpServer } from "./app";
import AppDataSource from "./data-source";

(async () => {
  await AppDataSource.initialize().catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

  httpServer.listen(3000, () => {
    console.log("Servidor executando");
  });
})();
