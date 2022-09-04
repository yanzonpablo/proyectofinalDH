const form = document.querySelector("form");
const nombre = document.querySelector("#nombre");
const precio = document.querySelector("#precio");
const descripcion = document.querySelector("#descripcion");
const errores = document.querySelector("#errores");
let mensajesErrores = [];

window.addEventListener("load", function () {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    mensajesErrores = [];

    if (nombre.value == "") {
      mensajesErrores = mensajesErrores.concat(
        "El nombre del producto debe estar completo"
      );
    } else if (nombre.value.length < 4) {
      mensajesErrores = mensajesErrores.concat(
        "El nombre del producto debe tener más de tres caracteres"
      );
    }

    if (precio.value == "") {
      mensajesErrores = mensajesErrores.concat("El precio debe estar completo");
    } else if (precio.value <= 0) {
      mensajesErrores = mensajesErrores.concat("El precio debe ser mayor a 0");
    }

    if (descripcion.value.length < 20) {
      mensajesErrores = mensajesErrores.concat(
        "La descripción debe tener al menos 20 caracteres"
      );
    }

    if (mensajesErrores.length > 0) {
      let ulErrores = document.querySelector("ul");
      for (let i = 0; i < mensajesErrores.length; i++) {
        ulErrores.innerHTML += "<li>" + mensajesErrores[i] + "</li>";
      }
    } else {
      form.submit();
    }
  });
});
