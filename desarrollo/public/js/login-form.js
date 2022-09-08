const formulario = document.querySelector("#formulario");
const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

window.onload = function (){

    formulario.email.focus();

    formulario.addEventListener("submit", (evt) => {
        evt.preventDefault();

        const errores = [];

        if (formulario.email.value == ""){
            errores.push("Ingresá tu email")
            formulario.email.parentElement.classList.add("is-invalid");
            formulario.email.parentElement.classList.remove("is-valid");
            formulario.email.parentElement.querySelector(".error").innerHTML = "* Ingresá el email";
        } else {
            formulario.email.parentElement.classList.remove("is-invalid");
            formulario.email.parentElement.classList.add("is-valid");
            formulario.email.parentElement.querySelector(".error").innerHTML = "";
        }

        if (formulario.password.value == ""){
            errores.push("Ingresá tu contraseña")
            formulario.password.parentElement.classList.add("is-invalid");
            formulario.password.parentElement.classList.remove("is-valid");
            formulario.password.parentElement.querySelector(".error").innerHTML = "* Ingresá la contraseña";
        } else {
            formulario.password.parentElement.classList.remove("is-invalid");
            formulario.password.parentElement.classList.add("is-valid");
            formulario.password.parentElement.querySelector(".error").innerHTML = "";
        }

        if (errores.length == 0){
            formulario.submit();
            console.log("Sin errores")
        } else {
            console.log(errores)
        }

    })
}

function validateEmail(){
	if( validEmail.test(formulario.email.value) ){
        formulario.email.parentElement.classList.remove("is-invalid");
        formulario.email.parentElement.classList.add("is-valid");
        formulario.email.parentElement.querySelector(".error").innerHTML = "";

	}else{
        formulario.email.parentElement.classList.add("is-invalid");
        formulario.email.parentElement.classList.remove("is-valid");
        formulario.email.parentElement.querySelector(".error").innerHTML = "* Ingresá un email válido";
	}
} 

// const form = document.querySelector("form");
// const email = document.querySelector("#email");
// const password = document.querySelector("#password");
// const errores = document.querySelector("#errores");
// let mensajesErrores = [];

// window.addEventListener("load", function () {
//   form.addEventListener("submit", function (e) {
//     e.preventDefault();
//     mensajesErrores = [];

//     if (email.value == "") {
//       mensajesErrores = mensajesErrores.concat(
//         "Ingresa tu email"
//       );
//     }

//     if (password.value == "") {
//       mensajesErrores = mensajesErrores.concat("Ingresa tu contraseña");
//     }

//     if (mensajesErrores.length > 0) {
//       let ulErrores = document.querySelector("ul");
//       mensajesErrores.forEach(error =>{
//       ulErrores.innerHTML += `<li>${error}</li>`
//       // "<li>" + mensajesErrores[i] + "</li>"
//       })
//       // for (let i = 0; i < mensajesErrores.length; i++) {
//       //   ulErrores.innerHTML += "<li>" + mensajesErrores[i] + "</li>";
//       // }
//     }  else {
//       form.submit();
//     }
//   });
// });

// let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
// else if (formulario.email.value != regex) {
//   errores.push("Ingresá un email válido")
//   formulario.email.parentElement.classList.add("is-invalid");
//   formulario.email.parentElement.classList.remove("is-valid");
//   formulario.email.parentElement.querySelector(".error").innerHTML = "* Ingresá un email válido";
// }
