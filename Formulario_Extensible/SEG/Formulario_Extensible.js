var contador = 0;


document.addEventListener("DOMContentLoaded",inicio,false);


function inicio(){
    document.getElementById("mas").addEventListener("click",nuevaFila);
	document.getElementById("edi").addEventListener("click",Rellenar);
	document.getElementById("eli").addEventListener("click",Eliminar01);
}

function Rellenar(){
	
    var array = this.parentNode.getElementsByTagName("input");	
    this.disabled = true;
    this.className = "btn-warning editar";
	
    for (let i = 0; i < array.length; i++) {
        array[i].disabled = false;		
    }
		
}

function Eliminar01(){
	
	var borrar = true;
    var array2 = this.parentNode.getElementsByTagName("input");		
	
    for (let i = 0; i < array2.length; i++) {
        if(array2[i].value.length==0){
			
			borrar = false;			
		}
    }
		if (borrar){

			var pregunta = confirm("¿Estas seguro de querer borrar");
    
	        if (pregunta) {
		
                    Eliminar02(this);
    
		    }		
			
		}		
    
		
}

function Eliminar02(elemento){
	

    var arriba = elemento.parentNode.parentNode;
	arriba.removeChild(elemento.parentNode);
		
}



function nuevaFila(){
	
	var blok = document.getElementById("bloque");



    //FILA
    var renglonex = document.createElement("div");
    renglonex.classList.add("form-inline");

    //DNI
    contador++;
    var dni= document.createElement("div");
    var texDni = document.createTextNode("DNI");
    var inDni = document.createElement("input");

/*     inDni.id = "dni"+contador; // Esto es equivalente a Set Atribute.
 */
	inDni.setAttribute("id", "inD"+contador);
	inDni.disabled = true;
    inDni.classList.add("form-control");

    //NOMBRE
    var nombre = document.createElement("div");
    var texNom = document.createTextNode("Nombre");
    var inNom = document.createElement("input");
	inNom.setAttribute("id", "inN"+contador);
    inNom.disabled = true;
    inNom.classList.add("form-control");
    //APELLIDOS

    var apellidos = document.createElement("div");
    var texApel = document.createTextNode("Apellidos");
    var inApel = document.createElement("input");
	inApel.setAttribute("id", "inA"+contador);	
    inApel.disabled = true;
    inApel.classList.add("form-control");



    //BORRAR

    var eliminar = document.createElement("button");
	eliminar.addEventListener("click",Eliminar01);
	eliminar.setAttribute("id", "eli");
	var texEli = document.createTextNode("X");
    
    eliminar.classList.add("btn-danger");
	eliminar.classList.add("eliminar");

    //EDITAR


    var editar = document.createElement("button");
	editar.addEventListener("click", Rellenar);
	editar.setAttribute("id", "edi");
	var texEdi = document.createTextNode("Abc");
    
    editar.classList.add("btn-success");
	eliminar.classList.add("editar");
	


    //FILA
	
    blok.appendChild(renglonex);  //Crea un div dentro de "bloque2 donde insertar lo siguiente

    //DNI
		
    dni.appendChild(texDni);   //dni crea un div .appenchild(textDni) introduce dentro el texto
    dni.appendChild(inDni);
	//
    renglonex.appendChild(dni);
	
    
    //NOMBRE
	
    nombre.appendChild(texNom);
    nombre.appendChild(inNom);
	
    renglonex.appendChild(nombre);
	


    //APELLIDOS
	
    apellidos.appendChild(texApel);
    apellidos.appendChild(inApel);
    renglonex.appendChild(apellidos);


    //BORRAR

	eliminar.appendChild(texEli);
	renglonex.appendChild(eliminar);

    //EDITAR

	editar.appendChild(texEdi);
	renglonex.appendChild(editar);
    

}


document.addEventListener("DOMContentLoaded",inicio,false);