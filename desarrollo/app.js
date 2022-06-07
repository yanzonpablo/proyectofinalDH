const fs = require("fs");
const express = require("express");
const path = require("path");
const app = express();

const mainRouter = require("./routes/main-routes");
app.use(express.static(path.join(__dirname, "public")));

app.listen(3010, () => {
  console.log("Servidor corriendo en puerto 3010");
});

app.set("view engine", "ejs");
app.use("/", mainRouter);
/*
>>>>>>> c320fa157fbb5fdeb362f9aa6aa0523e1c5cac50
*/
