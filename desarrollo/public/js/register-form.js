const formulario = document.querySelector("#formulario");
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const errores = document.querySelector("#errores");
let mensajesErrores = [];
const regexEmail = "^[w-.]+@([w-]+.)+[w-]{2,4}$";

window.onload = function () {
  formulario.nombre.focus();

  formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const errores = [];

    if (formulario.nombre.value == "") {
      errores.push("Ingresá tu nombre");
      formulario.nombre.parentElement.classList.add("is-invalid");
      formulario.nombre.parentElement.classList.remove("is-valid");
      formulario.nombre.parentElement.querySelector(".error").innerHTML =
        "* Ingresá tu nombre";
    } else if (formulario.nombre.value.length < 3) {
      errores.push("El nombre debe tener más de dos caracteres");
      formulario.nombre.parentElement.classList.add("is-invalid");
      formulario.nombre.parentElement.classList.remove("is-valid");
      formulario.nombre.parentElement.querySelector(".error").innerHTML =
        "* El nombre debe tener más de dos caracteres";
    } else {
      formulario.nombre.parentElement.classList.remove("is-invalid");
      formulario.nombre.parentElement.classList.add("is-valid");
      formulario.nombre.parentElement.querySelector(".error").innerHTML = "";
    }

    if (formulario.apellido.value == "") {
      errores.push("Ingresá tu apellido");
      formulario.apellido.parentElement.classList.add("is-invalid");
      formulario.apellido.parentElement.classList.remove("is-valid");
      formulario.apellido.parentElement.querySelector(".error").innerHTML =
        "* Ingresá tu apellido";
    } else if (formulario.apellido.value.length < 3) {
      errores.push("El apellido debe tener más de dos caracteres");
      formulario.apellido.parentElement.classList.add("is-invalid");
      formulario.apellido.parentElement.classList.remove("is-valid");
      formulario.apellido.parentElement.querySelector(".error").innerHTML =
        "* El apellido debe tener más de dos caracteres";
    } else {
      formulario.apellido.parentElement.classList.remove("is-invalid");
      formulario.apellido.parentElement.classList.add("is-valid");
      formulario.apellido.parentElement.querySelector(".error").innerHTML = "";
    }

    if (formulario.email.value == "") {
      errores.push("Ingresá tu email");
      formulario.email.parentElement.classList.add("is-invalid");
      formulario.email.parentElement.classList.remove("is-valid");
      formulario.email.parentElement.querySelector(".error").innerHTML =
        "* Ingresá tu email";
    } else {
      formulario.email.parentElement.classList.remove("is-invalid");
      formulario.email.parentElement.classList.add("is-valid");
      formulario.email.parentElement.querySelector(".error").innerHTML = "";
    }

    if (formulario.password.value == "") {
      errores.push("Ingresá tu contraseña");
      formulario.password.parentElement.classList.add("is-invalid");
      formulario.password.parentElement.classList.remove("is-valid");
      formulario.password.parentElement.querySelector(".error").innerHTML =
        "* Ingresá tu contraseña";
    } else if (formulario.password.value.length < 8) {
      errores.push("La contraseña debe tener al menos ocho caracteres");
      formulario.password.parentElement.classList.add("is-invalid");
      formulario.password.parentElement.classList.remove("is-valid");
      formulario.password.parentElement.querySelector(".error").innerHTML =
        "* La contraseña debe tener al menos ocho caracteres";
    } else {
      formulario.password.parentElement.classList.remove("is-invalid");
      formulario.password.parentElement.classList.add("is-valid");
      formulario.password.parentElement.querySelector(".error").innerHTML = "";
    }

    if (errores.length == 0) {
      formulario.submit();
      console.log("Sin errores");
    } else {
      console.log(errores);
    }
  });
};

function fileValidation() {
  var fileInput = 
      document.getElementById('imagen');
    
  var filePath = fileInput.value;

  // Allowing file type
  var allowedExtensions = 
          /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    
  if (!allowedExtensions.exec(filePath)) {
      alert('Ingresá un archivo válido (JPG, JPEG, PNG, GIF)');
      fileInput.value = '';
      return false;
  } 
  else 
  {
  return true;
}
}
// window.addEventListener("load", function () {
//   formulario.addEventListener("submit", function (e) {
//     e.preventDefault();
//     mensajesErrores = [];

//     if (nombre.value == "") {
//       mensajesErrores = mensajesErrores.concat("El nombre debe estar completo");
//     } else if (nombre.value.length < 4) {
//       mensajesErrores = mensajesErrores.concat(
//         "El nombre debe tener más de tres caracteres"
//       );
//     }

//     if (apellido.value == "") {
//       mensajesErrores = mensajesErrores.concat(
//         "El apellido debe estar completo"
//       );
//     } else if (apellido.value.length < 4) {
//       mensajesErrores = mensajesErrores.concat(
//         "El apellido debe tener más de tres caracteres"
//       );
//     }

//     if (email.value == "") {
//       mensajesErrores = mensajesErrores.concat("Ingresa tu email");
//     }

//     if (password.value == "") {
//       mensajesErrores = mensajesErrores.concat("Ingresa tu contraseña");
//     }

//     if (mensajesErrores.length > 0) {
//       let ulErrores = document.querySelector(".errores");
//       for (let i = 0; i < mensajesErrores.length; i++) {
//         ulErrores.innerHTML += "<li>" + mensajesErrores[i] + "</li>";
//       }
//     } else {
//       form.submit();
//     }
//   });
// });
