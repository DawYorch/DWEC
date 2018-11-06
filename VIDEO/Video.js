document.addEventListener("DOMContentLoaded" , cargar , false);


function cargar() {
    document.getElementById("play").addEventListener("click", adelante, false);  
   
}

function adelante(){

    var video = document.getElementById("proyector");

    if(video.paused){
         
        video.play();
        document.getElementById("imgPlay").src="arrowButton.png";

    }else{

        document.getElementById("imgPlay").src="pause.png";
        video.pause();
    }
}

