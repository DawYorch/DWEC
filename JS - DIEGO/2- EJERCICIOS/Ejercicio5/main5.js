

function obtenerDias(mes, anyo){
    return new Date(anyo , mes , 0).getDate();
}

var mes = prompt("Escribe el mes: ");
var anyo = prompt("Escribe el anyo: ");

// document.write(obtenerDias(mes, anyo));
alert (obtenerDias(mes,anyo));