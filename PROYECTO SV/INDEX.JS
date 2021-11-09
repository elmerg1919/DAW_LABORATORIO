var depar = 'http://localhost:3000/API/Departamentos';
function cargar_departamentos(){
    var dato = document.createElement("div");
    dato.className += "row";
    $.ajax({
        url: depar ,
        method: 'GET'
    }).then(function(data){

        data.forEach(function(item) {
            var leng=[],mon=[];
            var celda=document.createElement("div");
            celda.className+="col-xs-6 col-md-3";
            var name= document.createElement("h5");
            name.innerText=item.nombre;
            celda.appendChild(name);
            celda.setAttribute("data-toggle","modal");
            for(i=0; i<item.superficie.length;i++){
                leng[i]=item.superficie[i].nombre;               
            }
            for(j=0; j<item['municipios'].length;j++){
                mon[j]=item['municipios'][j].nombre;
            }

            celda.onclick=function(){info_mapa(item.nombre,item.superficie,leng,mon)};
            dato.appendChild(celda);

            for(k=0; k<item.alcalde.length;k++){
                leng[k]=item.alcalde[k].nombre;               
            }
            for(m=0; m<item['habitantes'].length;j++){
                mon[m]=item['habitantes'][m].nombre;
            }

            celda.onclick=function(){info_mapa(item.alcalde,item.habitantes,leng,mon)};
            dato.appendChild(celda);
        });
        $("#departamentos").html(dato);
    });  
}
function info_departamentos(nombre,superficie,municipios,alcalde,habitantes){
    console.log(superficie);
    console.log(municipios);
    console.log(alcalde);
    console.log(habitantes);
    var cuerpo="";
    var titulo = nombre;
    cuerpo = "Superficie:"+superficie+"<br>"
    cuerpo += "Municipios:"+municipios.join();
    cuerpo += "Alcalde:"+alcalde.join();
    cuerpo += "Habitantes:"+habitantes.join();
    $("#Misdepartamentos .modal-title").html(titulo);
    $("#Misdepartamentos .modal-body").html(cuerpo);
    $("#Misdepartamentos").modelo("show");
}

window.onload = cargar_departamentos();