

window.onload = function (){
    const submit = document.getElementById("agregar");
    submit.addEventListener('click', validate);
}

function validate(){
//name
    const names = document.getElementById("name");
    const errornames = document.getElementById("errorname");
    expname = /^([a-zA-Z]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)$/ ;
//correo
const gmails = document.getElementById("gmail");
const errorgmails = document.getElementById("errorgmail");
expgmail = /^\w+@(\w+\.)+\w{2,4}$/;

//consulta
const consultas = document.getElementById("consulta");
const errorconsultas = document.getElementById("errorconsulta");
expconsulta = /^[A-z\s\S]{0,150}$/


    //name
    if(!names.value){
        errornames.classList.add("visible")
        names.classList.add("invalid");
        msj = "Introduzca su nombre"
        errornames.innerHTML= msj;
    } else if (!expname.test(names.value)){
        errornames.classList.add("visible");
        names.classList.add("invalid");
        msj = "Debe contener al menos un nombre y un apellido, no se aceptan numeros"
        errornames.innerHTML = msj;
    } else{
        errornames.classList.remove("visible");
        names.classList.remove("invalid");
    }
    //correo
    if(!gmails.value){
        errorgmails.classList.add("visible");
        gmails.classList.add("invalid");
        msj = "Introduzca su correo electronico"
        errorgmails.innerHTML= msj;
    } else if (!expgmail.test(gmails.value)){
        errorgmails.classList.add("visible");
        gmails.classList.add("invalid");
        msj = "Formato de correo invalido"
        errorgmails.innerHTML = msj;
    } else{
        errorgmails.classList.remove("visible");
        gmails.classList.remove("invalid");
    }
    //consulta
    if(!consultas.value){
        errorconsultas.classList.add("visible");
        consultas.classList.add("invalid");
        msj = "Ingrese su consulta"
        errorconsultas.innerHTML= msj;
    } else if (!expconsulta.test(consultas.value)){
        errorconsultas.classList.add("visible");
        consultas.classList.add("invalid");
        msj = "Debe contener menos de 150 caracteres"
        errorconsultas.innerHTML = msj;
    } else{
        errorconsultas.classList.remove("visible");
        consultas.classList.remove("invalid");
    }

    
}  

var myArrayObject = [];
var divState;
function init() {
    console.log("Carga del formulario realizada.");
    if(addEventListener){
        document.getElementById('agregar').addEventListener('click', save, false);
        document.getElementById('obtener').addEventListener('click', obtain, false);
        document.getElementById('borrar').addEventListener('click', remove, false);
        document.getElementById('limpiar').addEventListener('click', clearStorage, false);
    }

    if(typeof(Storage) == "undefined") {
        alert("Este navegador no soporta HTML5 y almacenamiento local. Por favor, se recomienda actualizarlo");
    }
    else {
        console.log("Este navegador soporta HTML5 y almacenamiento local como LocalStorage y sessionStorage.");
        divState = document.getElementById("estado");
    }
    divState = document.getElementById("estado");
    if (typeof(localStorage) == "undefined") {
        divState.style.display = 'none';
    }
    else {
        divState.style.display = 'block';
    }
}
function save() {
    var nombre = document.getElementById("name");
    var correo = document.getElementById("gmail");
    var pais = document.getElementById("pais");
    var consulta = document.getElementById("consulta");
    var msj;

    try {
        localStorage.setItem("name", nombre.value);
        localStorage.setItem("gmail", correo.value);
        localStorage.setItem("pais", pais.value);
        localStorage.setItem("consulta", consulta.value);
        nombre.value = "";
        correo.value = "";
        pais.value = "";
        consulta.value = "";
        msj = "Datos guardados con éxito en el localStorage.";
        console.log(msj);
        divState.innerHTML = "<p>" + msj + "</p>";

    } catch(e) {
        if (e >= QUOTA_EXCEEDED_ERR) {
            console.log("Error: Se ha alcanzado el límite de almacenamiento local.")
        }
        else {
            console.log("Error: Guardando datos con éxito en el almacenamiento local.");
        }
    }
}
function obtain() {
    var msj = " Recibiendo el dato " + localStorage.key(0) + ", " +
    localStorage.key(1) + ", " + localStorage.key(2) + " y " + localStorage.key(3) + " desde el localStorage.";
    var nombre = document.getElementById("name");
    var correo = document.getElementById("gmail");
    var pais = document.getElementById("pais");
    var consulta = document.getElementById("consulta");
    console.log(msj);
    divState.innerHTML = "<p>" + msj + "</p>";
    nombre.value = localStorage.getItem("name");
    correo.value = localStorage.getItem("gmail");
    pais.value = localStorage.getItem("pais");
    consulta.value = localStorage.getItem("consulta");
}
function remove() {
    var msj = "Removiendo el dato del localStorage.";
    console.log(msj);
    divState.innerHTML = "<p>" + msj + "</p>";
    localStorage.removeItem("name");
    localStorage.removeItem("gmail");
    localStorage.removeItem("pais");
    localStorage.removeItem("consulta");
}
function clearStorage() {
    var msj = "Borrando todos los datos del localStorage.";
    console.log(msj);
    divState.innerHTML = "<p>" + msj + "</p>";
    localStorage.clear();
}


if (window.addEventListener) {
    window.addEventListener("load", init, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", init);
}
