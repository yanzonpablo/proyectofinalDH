/* Modulos Nativos. */
const path = require("path");

/* Modulos Instalados. */
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const session = require("express-session");
const cookies = require("cookie-parser");

/* Ruteo principal */
const mainRouter = require("./routes/main-routes");
const userLogged = require("./middlewares/userLoggedMiddleware");


app.use(
  session({
      secret: process.env.SESSION_SECRET || "Tremendo proyecto integrador",
  })
);

app.use(cookies());
app.use(userLogged);

// Conexion al puerto 3010 "localhost"
app.listen(3010, () => {
  console.log("Port: 3010");
});

app.set("view engine", "ejs"); // Template engine

app.use(express.static(path.join(__dirname, "public"))); // Uso de archivo de carpeta 'public'
app.use(express.urlencoded({ extended: false })); // Obtencion de datos de form
app.use(methodOverride("_method")); // Uso de PUT and DELETE

app.use("/", mainRouter); // Routeo principal


// Implementacion Error 404
app.use((req, res, next) => {
  res.status(404).render("not-found");
});
