const fs = require("fs");
const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const app = express();

const mainRouter = require("./routes/main-routes");
const productsRouter = require("./routes/products-routes");

app.use(express.static(path.join(__dirname, "public")));

app.listen(3010, () => {
  console.log("Servidor corriendo en puerto 3010");
});

app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use("/", mainRouter);
app.use("/product/", productsRouter);
