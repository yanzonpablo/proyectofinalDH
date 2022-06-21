const fs = require("fs");
const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const app = express();

const mainRouter = require("./routes/main-routes");

app.use(express.static(path.join(__dirname, "public"))); //Uso de archivo de carpeta 'public'
app.use(express.urlencoded({ extended: false })); //Obtencion de datos de form

app.listen(3010, () => {
  console.log("Servidor corriendo en puerto 3010");
});

app.set("view engine", "ejs"); //Template engine
app.use(methodOverride("_method")); //Uso de PUT and DELETE
app.use("/", mainRouter); //Routeo principal
