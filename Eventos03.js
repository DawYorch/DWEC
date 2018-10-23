    
    
window.onload = function Escribe() {

                document.getElementById('button01').onclick = mostrar;
                document.getElementById('button02').addEventListener("click" , boton2 , false);
            }


            function mostrar(){

            alert("It's Alive"+this.id);


                }
    
            
            function boton2(){


                var evento = new Event('click');
                document.getElementById("button01").dispatchEvent(evento);


            }    

    
    