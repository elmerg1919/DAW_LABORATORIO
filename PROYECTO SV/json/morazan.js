var informacion = {
    "Morazan": [
        {   "id":"1",
            "imagen": "../img/imgMorazan.png",
            "nombre": "Departamento de Morazan",
            "superficie": "1 447 km²",
            "municipios": "26 municipios",
            "alcalde": "Francisco Gaitán",
            "habitantes": "252,500 habitantes"


        },

     

    ]
};

//Obteniendo el elemento contenedor donde se cargarán
//todos los datos del objeto JSON
var div = document.getElementById("info");
div.innerHTML = datosDepartamento(informacion.Morazan);
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
