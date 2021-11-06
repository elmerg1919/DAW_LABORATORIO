var datos = 'http://localhost:3000/API/Departamentos';
function cargar_datos(){
    var dato = document.createElement("div");
    dato.className += "row";
    $.ajax({
        url: datos ,
        method: 'GET'
    }).then(function(data){

        data.forEach(function(item) {
            var leng=[],mon=[];
            var celda=document.createElement("div");
            celda.className+="col";
            var name= document.createElement("h5");
            name.innerText=item.nombre.superficie.municipios.alcalde.habitantes;
            celda.appendChild(name);
            celda.setAttribute("modelo");
            for(i=0; i<item.nombre.superficie.municipios.alcalde.habitantes.length;i++){
                leng[i]=item.superficie[i].nombre;               
            }
            for(j=0; j<item['municipios'].length;j++){
                mon[j]=item['municipios'][j].nombre;
            }
            celda.onclick=function(){info_mapa(item.nombre,superficie,municipios,alcalde,habitantes)}
            dato.appendChild(celda);
        });
        $("#mapa").html(dato);
    });
}
function info_mapa(nombre,superficie,municipios,alcalde,habitantes){
    console.log(superficie);
    console.log(municipios);
    console.log(alcalde);
    console.log(habitantes);
    var cuerpo="";
    var titulo = nombre;
    cuerpo = "Nombre:"+nombre+"<br>"
    cuerpo += "Superficie:"+superficie.join();
    cuerpo += "Municipios:"+municipios.join();
    cuerpo += "Alcalde:"+alcalde.join();
    cuerpo += "Habitantes:"+habitantes.join();
    $("#Mimapa .modelo-titulo").html(titulo);
    $("#Mimapa .modelo-cuerpo").html(cuerpo);
    $("$Mimapa").modelo("show");
}

window.onload = cargar_datos();