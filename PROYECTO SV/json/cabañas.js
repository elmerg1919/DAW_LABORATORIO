var informacion = {
    "Cabanas": [
        {   "id":"1",
            "imagen": "../img/imgCabañas.png",
            "nombre": "Departamento de Cabañas",
            "superficie": "1,103.51 km²",
            "municipios": "9 municipios",
            "alcalde": "Jesus Edgar Bonilla Navarrete",
            "habitantes": "149,326 habitantes"


        },

     

    ]
};

//Obteniendo el elemento contenedor donde se cargarán
//todos los datos del objeto JSON
var div = document.getElementById("info");
div.innerHTML = datosDepartamento(informacion.Cabanas);
function datosDepartamento(datos) {
    var total = datos.length;

        data = "<div class='container'>";
        data = "<div class='row'>";
    for (var i = 0; i < total; i++) {
        data += "<div class='col-md-12 d-flex justify-content-center align-items-center'>";

        data += "<div class='card mb-3' style='max-width: 900px;'>";
        data += "<div class='row'>";
        data += "<div class='col-md-4'>";
        data += "<img src=" + datos[i].imagen + " class='img-fluid rounded-start' alt='...' >";
        data += "</div>"
        data += "<div class='col-md-8'>";
        data += "<div class='card-body'>";
        data += '<h5 class="card-title"  >' + datos[i].nombre +  '</h5>';
        data += '<p class="card-text"><strong>Superficie: ' + datos[i].superficie + '<br>';
        data += '<p class="card-text">Municipios: ' + datos[i].municipios + '<br>';
        data += '<p class="card-text">Alcalde: ' + datos[i].alcalde + '<br>';
        data += '<p class="card-text">Habitantes: ' + datos[i].habitantes + '<br>';
        data += "</div>"
        data += "</div>"
        data += "</div>"
        data += "</div>"
        data += "</div>"


    }
    data += '</div>'
    data += '</div>'
  
    return data;
}

/*
var sitios = {
    "Arqueologicos": [
        {   "id":"1",
            "imagen": "../img/Espino.jpg",
            "descripcion": "Playa El Espino es una playa de más de 10 kilómetros de longitud, ubicada en el municipio de Jucuarán, departamento de Usulután."
           


        },  

        {   "id":"2",
        "imagen": "../img/Laguna.jpg",
        "descripcion": "Es de origen volcánico y se encuentra asentada sobre el volcán Tecapa, en los Cantones de San Juan y Apastepeque, ambos pertenecientes al Municipio de Alegría, Departamento de Usulután."
       


    },

     

    ]
};

var div = document.getElementById("sitio");
div.innerHTML = datosSitios(sitios.Arqueologicos);
function datosSitios(datos) {
    var total = datos.length;

        data = "<div class='container'>";
        data = "<div class='slider'>";
    for (var i = 0; i < total; i++) {
        data += "<div class='col-md-12 d-flex justify-content-center align-items-center'>";

        data += "<div class='card' style='max-width: 18rem;'>";
        data += "<div class='slider'>";
      
        data += "<img src=" + datos[i].imagen + " class='card-img-top' alt='Card image cap' >";
        data += "</div>"
      
        data += "<div class='card-body'>";
        data += '<p class="card-text">' + datos[i].descripcion + '<br>';
      
        data += "</div>"
        data += "</div>"


  
     
        data += "</div>"


    }
    data += '</div>'
    data += '</div>'
  
    return data;
}
*/