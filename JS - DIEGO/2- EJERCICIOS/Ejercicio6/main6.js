
function decirMesPrueba(fecha2){

        
        var mes =["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
        var informacion = new Date(consulta).getMonth();
        return mes[informacion];  //Este funciona muy bien
}



function decirMes(fecha){

    var mes =["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    var dato = fecha.split("/");
    return mes[dato[1]-1];  //XQ no funciona con + 1 ???????????? Dice undefined en vez de darme el mes siguiente

}
var consulta = prompt("Introduzca una fecha: ");
document.write(decirMesPrueba(consulta));
