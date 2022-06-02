const express = require("express");
const path = require("path");
const app = express();

const mainRouter = require("./routes/main-routes");
app.use(express.static(path.join(__dirname, "public")));

app.listen(3010, () => {
  console.log("Servidor corriendo en puerto 3010");
});

app.use("/", mainRouter);
