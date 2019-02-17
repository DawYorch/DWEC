document.addEventListener("DOMContentLoaded", cargar, false);

var contador = 0;

function cargar() {

    document.getElementById("anyadir0").addEventListener("click", editarInputs);
    document.getElementById("eliminar0").addEventListener("click", preguntaEliminar);
    document.getElementById("inputD0").addEventListener("input", comprobarInputs);
    document.getElementById("inputN0").addEventListener("input", comprobarInputs);
    document.getElementById("inputA0").addEventListener("input", comprobarInputs);  
    document.getElementById("nuevo").addEventListener("click", nuevoForm);
}

function editarInputs() {
    var array = this.parentNode.getElementsByTagName("input");
    for (let i = 0; i < array.length; i++) {
        array[i].disabled = false;
    }
}

function eliminarInputs(element) {
    var empleado = element.parentNode;
    var jefe = empleado.parentNode;
    jefe.removeChild(empleado);
}

function nuevoForm() {

    idDni = "inputD" + contador;
    idNombre = "inputN" + contador;
    idApellidos = "inputA" + contador;
    idAnyadir = "anyadir" + contador;
    idEliminar = "eliminar" + contador;

    var nodoPadre = document.getElementById("general");

    var div = document.createElement("div");
    div.setAttribute("class", "form-inline");

    //DNI
    var label1 = document.createElement("label");
    label1.setAttribute("for", idDni);
    label1.innerText = "DNI:";

    var input1 = document.createElement("input");
    input1.setAttribute("type", "text");
    input1.setAttribute("class", "form-control");
    input1.setAttribute("id", idDni);
    input1.setAttribute("type", "text");
    input1.disabled = true;
    input1.addEventListener("input", comprobarInputs);

    //Nombre
    var label2 = document.createElement("label");
    label2.setAttribute("for", idNombre);
    label2.innerText = "Nombre:";

    var input2 = document.createElement("input");
    input2.setAttribute("type", "text");
    input2.setAttribute("class", "form-control");
    input2.setAttribute("id", idNombre);
    input2.setAttribute("type", "text");
    input2.disabled = true;
    input2.addEventListener("input", comprobarInputs);

    //Apellidos
    var label3 = document.createElement("label");
    label3.setAttribute("for", idApellidos);
    label3.innerText = "Apellidos:";

    var input3 = document.createElement("input");
    input3.setAttribute("type", "text");
    input3.setAttribute("class", "form-control");
    input3.setAttribute("id", idApellidos);
    input3.setAttribute("type", "text");
    input3.disabled = true;
    input3.addEventListener("input", comprobarInputs);

    //Botones
    var boton1 = document.createElement("button");
    boton1.setAttribute("class", "eliminar");
    boton1.setAttribute("class", "btn btn-default delete");
    boton1.setAttribute("id",idEliminar);
    boton1.innerText = "X";
    boton1.addEventListener("click", preguntaEliminar);
    boton1.disabled = true;

    var boton2 = document.createElement("button");
    boton2.setAttribute("class", "anyadir");
    boton2.setAttribute("class", "btn btn-default new");
    boton2.setAttribute("id",idAnyadir);
    boton2.addEventListener("click", editarInputs);

    var imagen = document.createElement("img");
    imagen.setAttribute("src", "lapiz.png");

    //Añadir hijos al padre
    div.appendChild(label1);
    div.appendChild(input1);
    div.appendChild(label2);
    div.appendChild(input2);
    div.appendChild(label3);
    div.appendChild(input3);
    div.appendChild(boton1);
    div.appendChild(boton2);
    boton2.appendChild(imagen);

    nodoPadre.appendChild(div);

    contador++;
    cargar();
}

function preguntaEliminar() {
    var pregunta = confirm("¿Estas seguro?");
    if (pregunta) {
        eliminarInputs(this);
    }
}

function comprobarInputs() {
    var inputId = this.id;
    var papa = this.parentNode;
    var inputs = papa.getElementsByTagName("input");
    var idPillada = inputId.substring(6, inputId.length);
    var botonEliminar = document.getElementById("eliminar" + idPillada);

    if (inputs[0].value != "" && inputs[1].value != "" && inputs[2].value != "") {
        botonEliminar.disabled = false;
    } else {
        botonEliminar.disabled = true;
}

}