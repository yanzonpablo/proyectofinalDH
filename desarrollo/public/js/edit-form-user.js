const formulario = document.querySelector("#formulario");
const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

window.onload = function () {
  formulario.nombre.focus();

  formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const errores = [];

    if (formulario.nombre.value == "") {
      errores.push("Este campo no puede estar vacío");
      formulario.nombre.parentElement.classList.add("is-invalid");
      formulario.nombre.parentElement.classList.remove("is-valid");
      formulario.nombre.parentElement.querySelector(".error").innerHTML =
        "* Este campo no puede estar vacío";
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
      errores.push("Este campo no puede estar vacío");
      formulario.apellido.parentElement.classList.add("is-invalid");
      formulario.apellido.parentElement.classList.remove("is-valid");
      formulario.apellido.parentElement.querySelector(".error").innerHTML =
        "* Este campo no puede estar vacío";
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
      errores.push("Este campo no puede estar vacío");
      formulario.email.parentElement.classList.add("is-invalid");
      formulario.email.parentElement.classList.remove("is-valid");
      formulario.email.parentElement.querySelector(".error").innerHTML =
        "* Este campo no puede estar vacío";
    } else {
      formulario.email.parentElement.classList.remove("is-invalid");
      formulario.email.parentElement.classList.add("is-valid");
      formulario.email.parentElement.querySelector(".error").innerHTML = "";
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