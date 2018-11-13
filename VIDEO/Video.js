document.addEventListener("DOMContentLoaded" , cargar , false);



/* Si alguna de las lineas de la funcion cargar falla, fallan las siguientes aunque sean correctas */

function cargar() {
	
	C_Atras();
    document.getElementById("play").addEventListener("click", adelante, false);  
    document.getElementById("avanz").addEventListener("click", avanzar, false);
	document.getElementById("retro").addEventListener("click", retroceder, false); 
	document.getElementById("reiniciar").addEventListener("click", inicio, false);
	document.getElementById("mute").addEventListener("click", mudo, false);
	document.getElementById("menos").addEventListener("click", menosVol, false);
	document.getElementById("mas").addEventListener("click", masVol, false);
	document.getElementById("proyector").addEventListener("timeupdate",progresoBarra, false);
	document.getElementById("equis").addEventListener("click",acceso, false);

	var videos = document.getElementsByClassName("videos");
	for (var i = 0;i < videos.length;i++) {
		videos[i].addEventListener("click",mostrar);
	}
}

function mostrar() {
	document.getElementById("proyector").src = this.id;
	document.getElementById("pub").style.display = "block";
	clearInterval(intervalo);
	C_Atras();
}




var intervalo;


function C_Atras(){
	
	var count=14;
	var number=document.getElementById("cuenta");
	intervalo=setInterval(function(){
		
		count--;
		number.innerHTML = count;
		if(count==0){
			
			clearInterval(intervalo);
			number.innerHTML = "";
			document.getElementById("equis").style.display = "block";

		}
		
	}, 1000);
	
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

function avanzar(){
	
	var video = document.getElementById("proyector");
	video.currentTime += 10;
	
}

function retroceder(){
	
	var video = document.getElementById("proyector");
	video.currentTime -= 10;
}

function inicio(){
	
	var video = document.getElementById("proyector");	
	video.currentTime = 0;
}

function mudo(){
	
	var video = document.getElementById("proyector");
	
	if(video.muted){		
		video.muted = false;
		document.getElementById("imgMute").src="volume.png";
	}else{
		video.muted = true;
		document.getElementById("imgMute").src="mute.png";
		
	}
	
		
}

function menosVol(){
	
	var video = document.getElementById("proyector");
	video.volume -= 0.1;
		
}

function masVol(){
	
	var video = document.getElementById("proyector");
	video.volume += 0.1;
		
}

function progresoBarra(){
	
	var ahora = this.currentTime;
	var total = this.duration;
	var barra = document.getElementById("progreso");
	
	barra.value = (100*ahora)/total;
	
}

function acceso(){
	
	document.getElementById("pub").style.display = "none";
	
}
