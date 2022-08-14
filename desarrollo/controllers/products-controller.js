const db = require("../database/models");

 module.exports = {
  index: (req, res) => {
    db.productos.findAll()
    .then(allProducts => {
    res.render("products-list", { products: allProducts }); 
    });
  }
}
//   details: (req, res) => {
//     // RESTA HACER DINAMICO EL product.ejs
//     res.render("product", {
//       producto: productsFS.findOne(req.params.id),
//     });
//   },
//   create: (req, res) => {
//     res.render("cargarProducto", { categories: allCategories });
//   },
//   store: (req, res) => {
//     const newProduct = req.body;
//     // Crear id en base al ultimo
//     if (allProducts.length) {
//       newProduct.id = allProducts[allProducts.length - 1].id + 1;
//     } else {
//       newProduct.id = 1;
//     }
//     if (req.file) {
//       newProduct.imagen = req.file.filename;
//     } else {
//       newProduct.imagen = "prod-default.jpg";
//     }

//     allProducts.push(newProduct);
//     productsFS.saveAll(allProducts);
//     res.redirect("/products");
//   },
//   edit: (req, res) => {
//     const productToEdit = allProducts.find(
//       (product) => product.id == req.params.id
//     );
//     res.render("editarProducto", {
//       productToEdit: productToEdit,
//       categories: allCategories,
//     });
//   },
//   update: (req, res) => {
//     const product =
//       allProducts[allProducts.findIndex((p) => p.id == req.params.id)];

//     product.nombre = req.body.nombre;
//     product.precio = req.body.precio;
//     product.descripcion = req.body.descripcion;
//     product.categoria = req.body.categoria;
//     product.seccion = req.body.seccion;
//     product.descuento = req.body.descuento;

//     if (req.file) {
//       const pathAbsolute = path.join(__dirname, "../public", product.imagen);
//       fs.unlinkSync(pathAbsolute);
//       product.imagen = req.file.filename;
//     }

//     productsFS.saveAll(allProducts);
//     res.redirect("/products");
//   },
//   destroy: (req, res) => {
//     const filteredProducts = allProducts.filter((p) => {
//       return p.id != req.params.id;
//     });
//     productsFS.saveAll(filteredProducts);
//     res.redirect("/products");
//   },
// };
