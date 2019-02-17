function cargar(){

    document.addEventListener( "keydown" ,moverCosas);  //funciona con window o document
}

function moverCosas(ev){

        var codigo = ev.keyCode;

        var divDer = document.getElementById("der");
        var divIzq = document.getElementById("izq");

        var derLeft = divDer.offsetLeft;
        var izqLeft = divIzq.offsetLeft; 
        // offsetLet nos da en px la distancia hasta el margen izquierdo
        // para que funcione debe estar el elemento con absolute en el CSS
        var derTop = divDer.offsetTop;
        var izqTop = divIzq.offsetTop;
        // offsetTop nos da en px la distancia hasta el margen superior
        // para que funcione debe estar el elemento con absolute en el CSS

        
        

        switch(codigo){

            case 100:  // Flecha IZQ
            divDer.style.left = derLeft - 100 + "px";
            break;

            case 102:  // Flecha DER
            divDer.style.left = derLeft + 100 + "px";
            break;

            case 104:  // Flecha ARRIBA
            divDer.style.top = derTop - 20 + "px";
            break;

            case 98:  // Flecha ABAJO
            divDer.style.top = derTop + 20 + "px";
            break;



            case 65:  // Letra a
            divIzq.style.left = izqLeft - 100 + "px";
            break;

            case 68:  // Letra d
            divIzq.style.left = izqLeft + 100 + "px";
            break;

            case 87:  // Letra w
            divIzq.style.top = izqTop - 20 + "px";
            break;

            case 88:  // Letra x
            divIzq.style.top = izqTop + 20 + "px";
            break;
           
        }
}


window.addEventListener("load" , cargar);