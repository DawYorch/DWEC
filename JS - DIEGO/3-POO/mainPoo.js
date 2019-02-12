import Cliente from "./Cliente";
import Libro from "./Libro";


var nombre;
var direccion;
var dni;
var tlf;
var Usuario;

var titulo;
var autor;
var pais;
var isbn;
var Tocho;

function cargar(){

    document.getElementById("botonCliente").addEventListener("click", crearCli);
    document.getElementById("botonLibro").addEventListener("click", crearLib);
    document.getElementById("mostrarDatos").addEventListener("click", mostrar);

    
}

function crearCli(){
    nombre = document.getElementById("nom").value;
    direccion = document.getElementById("dir").value;
    dni = document.getElementById("dni").value;
    tlf = document.getElementById("tlf").value;

    Usuario = new Cliente(nombre, direccion, dni, tlf);

}
function crearLib(){
    titulo = document.getElementById("tit").value;
    autor = document.getElementById("aut").value;
    pais = document.getElementById("pai").value;
    isbn = document.getElementById("isb").value;

    Tocho = new Libro(titulo, autor, pais, isbn);

}
function mostrar(){
    document.getElementById("mostrar").innerHTML=Usuario.nombre+"<br>"+Usuario.direccion;
}





window.addEventListener("load", cargar);