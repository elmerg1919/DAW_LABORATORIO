

window.onload = function (){
    const submit = document.getElementById("submit");
    submit.addEventListener('click', validate);
}

function validate(){
//year
    const names = document.getElementById("name");
    const errornames = document.getElementById("errorname");
    expname = /^([a-zA-Z]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)$/ ;
//ccv
const gmails = document.getElementById("gmail");
const errorgmails = document.getElementById("errorgmail");
expgmail = /^\w+@(\w+\.)+\w{2,4}$/;

//consulta
const consultas = document.getElementById("consulta");
const errorconsultas = document.getElementById("errorconsulta");
expconsulta = /^[A-z\s\S]{0,150}$/


    //mes
    if(!names.value){
        errornames.classList.add("visible")
        names.classList.add("invalid");
        msj = "Introduzca su nombre"
        errornames.innerHTML= msj;
    } else if (!expname.test(names.value)){
        errornames.classList.add("visible");
        names.classList.add("invalid");
        msj = "Debe contener al menos un nombre y un apellido"
        errornames.innerHTML = msj;
    } else{
        errornames.classList.remove("visible");
        names.classList.remove("invalid");
    }
    //year
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

    
    
    var nombreVariable=document.getElementById('pai');
    if(nombreVariable.value==0 ||
     nombreVariable.value == "")
      {
       alert("Selecciona Una opción");
         nombreVariable.focus();}
      
       


}