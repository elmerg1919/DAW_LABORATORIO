const input = document.querySelector("input");
const button = document.querySelector("button");
const departamentoscontainer = document.querySelector(".departamentos-containe");

function getInfodep(){

    fetch("http://localhost:3000/API/Departamentos")
    .then((res)=>res.json())
    .then((data)=>console.log(data));
}

getInfodep();

function crearDep(departamen){
    
}
//funcion crearDeo()