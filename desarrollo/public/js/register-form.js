const form = document.querySelector("form");
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const errores = document.querySelector("#errores");
let mensajesErrores = [];

window.addEventListener("load", function () {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    mensajesErrores = [];

    if (nombre.value == "") {
      mensajesErrores = mensajesErrores.concat("El nombre debe estar completo");
    } else if (nombre.value.length < 4) {
      mensajesErrores = mensajesErrores.concat(
        "El nombre debe tener más de tres caracteres"
      );
    }

    if (apellido.value == "") {
      mensajesErrores = mensajesErrores.concat(
        "El apellido debe estar completo"
      );
    } else if (apellido.value.length < 4) {
      mensajesErrores = mensajesErrores.concat(
        "El apellido debe tener más de tres caracteres"
      );
    }

    if (email.value == "") {
      mensajesErrores = mensajesErrores.concat("Ingresa tu email");
    }

    if (password.value == "") {
      mensajesErrores = mensajesErrores.concat("Ingresa tu contraseña");
    }

    if (mensajesErrores.length > 0) {
      let ulErrores = document.querySelector(".errores");
      for (let i = 0; i < mensajesErrores.length; i++) {
        ulErrores.innerHTML += "<li>" + mensajesErrores[i] + "</li>";
      }
    } else {
      form.submit();
    }
  });
});
