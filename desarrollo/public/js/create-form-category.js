const formulario = document.querySelector("#formulario");

window.onload = function () {
  formulario.nombre.focus();

  formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const errores = [];

    if (formulario.nombre.value == "") {
      errores.push("Ingresá el nombre de la categoría");
      formulario.nombre.parentElement.classList.add("is-invalid");
      formulario.nombre.parentElement.classList.remove("is-valid");
      formulario.nombre.parentElement.querySelector(".error").innerHTML =
        "* Ingresá el nombre de la categoría";
    } else if (formulario.nombre.value.length < 5) {
      errores.push(
        "El nombre de la categoría debe tener al menos cinco caracteres"
      );
      formulario.nombre.parentElement.classList.add("is-invalid");
      formulario.nombre.parentElement.classList.remove("is-valid");
      formulario.nombre.parentElement.querySelector(".error").innerHTML =
        "* El nombre de la categoría debe tener al menos cinco caracteres";
    } else {
      formulario.nombre.parentElement.classList.remove("is-invalid");
      formulario.nombre.parentElement.classList.add("is-valid");
      formulario.nombre.parentElement.querySelector(".error").innerHTML = "";
    }

    if (formulario.descripcion.value == "") {
      errores.push("Ingresá una descripción para la categoría");
      formulario.descripcion.parentElement.classList.add("is-invalid");
      formulario.descripcion.parentElement.classList.remove("is-valid");
      formulario.descripcion.parentElement.querySelector(".error").innerHTML =
        "* Ingresá una descripción para la categoría";
    } else if (formulario.descripcion.value.length < 20) {
      errores.push("La descripción debe tener al menos 20 caracteres");
      formulario.descripcion.parentElement.classList.add("is-invalid");
      formulario.descripcion.parentElement.classList.remove("is-valid");
      formulario.descripcion.parentElement.querySelector(".error").innerHTML =
        "* La descripción debe tener al menos 20 caracteres";
    } else {
      formulario.descripcion.parentElement.classList.remove("is-invalid");
      formulario.descripcion.parentElement.classList.add("is-valid");
      formulario.descripcion.parentElement.querySelector(".error").innerHTML =
        "";
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