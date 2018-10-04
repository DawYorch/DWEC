function validar01(elemento){
    if(elemento.value==""){

        alert("Nombre vacío")
    }else{
        elemento.value = MaysPrimera(elemento.value);
    }

}

function MaysPrimera(elemento){
    elemento = elemento.toLowerCase();
    return elemento.charAt(0).toUpperCase() + elemento.substring(1);
    
  }