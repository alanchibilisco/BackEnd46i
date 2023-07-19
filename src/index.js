import express from "express";
import "dotenv/config";
import cors from "cors";
import morgan from "morgan";
import usuarios from "./routes/Usuarios.Routes";
const conectDb = require("./database/db");

console.log("Hello World BACK END 46i");

//creamos una instancia de express
const app = express();

//configuramos el puerto en el que se va a ejecutar nuestro back end

app.set("port", process.env.PORT || 5050);

//inicializamos nuestro back end

const initApp = async () => {
  try {
    await conectDb();
    app.listen(app.get("port"), () => {
    console.log(`BackEnd46i listening to PORT: ${app.get("port")}`);
  })
  .on("error", (error) => {
    console.log("ERROR:", error);
    process.exit(1);
  });
  } catch (error) {
    console.log("ERROR:", error);
    process.exit(1);
  }
};

initApp();

//MIDDLEWARES: config extras del backend antes de que se ejecuten las rutas

app.use("/api", usuarios);



//1-middle nativos de express

app.use(express.json()); //permite recibir obj en formato json
app.use(express.urlencoded({ extended: true })); //permite recibir parametros y queris en las rutas

// 2-middle 3eros

app.use(morgan("dev")); //brinda detalles en nuestra terminal
app.use(cors()); //permite recibir peticiones remotas

app.use("/api", require("./routes/Rutes"));


