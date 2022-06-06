const fs = require("fs");
const express = require("express");
const path = require("path");
const app = express();

<<<<<<< HEAD
=======
const mainRouter = require("./routes/main-routes");
app.use(express.static(path.join(__dirname, "public")));

>>>>>>> c320fa157fbb5fdeb362f9aa6aa0523e1c5cac50
app.listen(3010, () => {
    console.log("Servidor corriendo en puerto 3010");
});
<<<<<<< HEAD
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/index.html"));
});
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "views/login.html"));
});
app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "views/register.html"));
});
app.get("/nav", (req, res) => {
    res.sendFile(path.join(__dirname, "views/nav.html"));
});
app.get("/cart", (req, res) => {
    res.sendFile(path.join(__dirname, "views/compras.html"));
});
app.get("/product", (req, res) => {
    res.sendFile(path.join(__dirname, "views/product.html"));
});
=======

app.set("view engine", "ejs");
app.use("/", mainRouter);
>>>>>>> c320fa157fbb5fdeb362f9aa6aa0523e1c5cac50
