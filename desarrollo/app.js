/* Modulos Nativos. */
const fs = require("fs");
const path = require("path");

/* Modulos Instalados. */
const express = require("express");
const app = express();
const methodOverride = require("method-override");

/* Modulos Personales. */
const mainRouter = require("./routes/main-routes");
const userRoutes = require("./routes/users-routes");

// Conexion al puerto 3010 "localhost"
app.listen(3010, () => {
    console.log("Port: 3010");
});

app.set("view engine", "ejs"); //Template engine

app.use("/", mainRouter); //Routeo principal
app.use("/user", userRoutes); // Ruteo Usuarios

app.use(express.static(path.join(__dirname, "public"))); //Uso de archivo de carpeta 'public'
app.use(express.urlencoded({ extended: false })); //Obtencion de datos de form
app.use(methodOverride("_method")); //Uso de PUT and DELETE

// Error 404
app.use((req, res, next) => {
    res.status(404).render("not-found");
});