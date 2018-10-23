

        window.onload = function() {
            document.getElementById('caja').onclick = mostrarPosicionPuntero;
        }




        function mostrarPosicionPuntero(eventoObj){
            var posicionX = eventoObj.clientX;
            var posicionY = eventoObj.clientY;
            var Coordenadas = document.getElementById('coordenadas');
            Coordenadas.innerHTML = 'Posicion x: ' + posicionX + ' - Posicion y: ' + posicionY;
        }