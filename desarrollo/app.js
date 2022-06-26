/* Modulos Nativos. */
const fs = require("fs");
const path = require("path");

/* Modulos Instalados. */
const express = require("express");
const app = express();
const methodOverride = require("method-override");

/* Modulos Personales. */
const mainRouter = require("./routes/main-routes");

app.listen(3010, () => {
    console.log("Port: 3010");
});

app.set("view engine", "ejs"); //Template engine

app.use("/", mainRouter); //Routeo principal
app.use(express.static(path.join(__dirname, "public"))); //Uso de archivo de carpeta 'public'
app.use(express.urlencoded({ extended: false })); //Obtencion de datos de form
app.use(methodOverride("_method")); //Uso de PUT and DELETE
