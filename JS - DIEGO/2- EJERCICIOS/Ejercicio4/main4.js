function esDate(elemento){

    if (elemento instanceof Date){
        return true;
    }else{
        return false;
    }
}

var posibleFecha = new Date("10/09/1976");

if(esDate(posibleFecha)){
    document.write("Es un objeto Date");
}else{
    document.write("No es Date");
}