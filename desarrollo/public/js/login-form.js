const form = document.querySelector("form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const errores = document.querySelector("#errores");
let mensajesErrores = [];

window.addEventListener("load", function () {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    mensajesErrores = [];

    if (email.value == "") {
      mensajesErrores = mensajesErrores.concat(
        "Ingresa tu email"
      );
    }

    if (password.value == "") {
      mensajesErrores = mensajesErrores.concat("Ingresa tu contraseña");
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
