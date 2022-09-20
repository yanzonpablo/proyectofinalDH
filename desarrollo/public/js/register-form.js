const formulario = document.querySelector("#formulario");
const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
const strongPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/

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
    } else if (!isNaN(formulario.apellido.value)) {
      errores.push("El apellido debe contener sólo letras");
      formulario.apellido.parentElement.classList.add("is-invalid");
      formulario.apellido.parentElement.classList.remove("is-valid");
      formulario.apellido.parentElement.querySelector(".error").innerHTML =
        "* El apellido debe contener sólo letras";
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
    } else if (!(formulario.password.value.match(strongPassword))) {
      errores.push("Debe contener al menos una letra mayúscula, una minúscula, un número y un carácter especial");
      formulario.password.parentElement.classList.add("is-invalid");
      formulario.password.parentElement.classList.remove("is-valid");
      formulario.password.parentElement.querySelector(".error").innerHTML =
        "* Debe contener al menos una letra mayúscula, una minúscula, un número y un carácter especial";
    } else {
      formulario.password.parentElement.classList.remove("is-invalid");
      formulario.password.parentElement.classList.add("is-valid");
      formulario.password.parentElement.querySelector(".error").innerHTML = "";
    }
    
    if (formulario.rePassword.value == "") {
      errores.push("Ingresa nuevamente tu contraseña");
      formulario.rePassword.parentElement.classList.add("is-invalid");
      formulario.rePassword.parentElement.classList.remove("is-valid");
      formulario.rePassword.parentElement.querySelector(".error").innerHTML =
        "* Ingresa nuevamente tu contraseña";
    } else if (formulario.password.value != formulario.rePassword.value) {
      errores.push("Las contraseñas no coinciden");
      formulario.rePassword.parentElement.classList.add("is-invalid");
      formulario.rePassword.parentElement.classList.remove("is-valid");
      formulario.rePassword.parentElement.querySelector(".error").innerHTML =
        "* Las contraseñas no coinciden";
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

function validateEmail() {
  if (validEmail.test(formulario.email.value)) {
    formulario.email.parentElement.classList.remove("is-invalid");
    formulario.email.parentElement.classList.add("is-valid");
    formulario.email.parentElement.querySelector(".error").innerHTML = "";
  } else {
    formulario.email.parentElement.classList.add("is-invalid");
    formulario.email.parentElement.classList.remove("is-valid");
    formulario.email.parentElement.querySelector(".error").innerHTML =
      "* Ingresá un email válido";
  }
}

function fileValidation() {
  const fileInput = document.getElementById("imagen");
  const filePath = fileInput.value;
  const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

  if (!allowedExtensions.exec(filePath)) {
    formulario.imagen.parentElement.classList.add("is-invalid");
    formulario.imagen.parentElement.classList.remove("is-valid");
    formulario.imagen.parentElement.querySelector(".error").innerHTML =
      "* Ingresá un archivo válido (JPG, JPEG, PNG, GIF)";
    fileInput.value = "";
    return false;
  } else {
    formulario.imagen.parentElement.classList.add("is-valid");
    formulario.imagen.parentElement.classList.remove("is-invalid");
    formulario.imagen.parentElement.querySelector(".error").innerHTML = "";
    return true;
  }
}