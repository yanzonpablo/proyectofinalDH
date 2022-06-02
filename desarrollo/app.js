const express = require("express");
const path = require("path");
const app = express();

const mainRouter = require("./routes/main-routes");
app.use(express.static(path.join(__dirname, "public")));

app.listen(3010, () => {
  console.log("Servidor corriendo en puerto 3010");
});

app.use("/", mainRouter);
// app.get("/login", (req, res) => {
//   res.sendFile(path.join(__dirname, "views/login.html"));
// });
// app.get("/register", (req, res) => {
//   res.sendFile(path.join(__dirname, "views/register.html"));
// });
// app.get("/nav", (req, res) => {
//   res.sendFile(path.join(__dirname, "views/nav.html"));
// });
// app.get("/cart", (req, res) => {
//   res.sendFile(path.join(__dirname, "views/compras.html"));
// });
// app.get("/product", (req, res) => {
//   res.sendFile(path.join(__dirname, "views/producto.html"));
// });
