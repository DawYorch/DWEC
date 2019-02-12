class Libro{

    constructor(Titulo, Autor, Pais, Isbn){
        this.Titulo = Titulo;
        this.Autor = Autor;
        this.Pais = Pais;
        this.Isbn = Isbn;
    }


        setTitulo(value){
            this.Titulo = value;
        }
        setAutor(value){
            this.Autor = value;
        }
        setPais(value){
            this.Pais = value;
        }
        setIsbn(value){
            this.Isbn = value;
        }

        getTitulo(){
            return this.Titulo;
        }
        getAutor(){
            return this.Autor;
        }
        getPais(){
            return this.Pais;
        }
        getIsbn(){
            return this.Isbn;
        }

}

class Cliente{

    constructor(Nombre, Direccion,Dni,Telefono){
        this.Nombre = Nombre;
        this.Direccion = Direccion;
        this.Dni = Dni;
        this.Telefono = Telefono;
    }


        setNombre(value){
            this.Nombre = value;
        }
        setDireccion(value){
            this.Direccion = value;
        }
        setDni(value){
            this.Dni = value;
        }
        setTelefono(value){
            this.Telefono = value;
        }

        getNombre(){
            return this.Nombre;
        }
        getDireccion(){
            return this.Direccion;
        }
        getDni(){
            return this.Dni;
        }
        getTelefono(){
            return this.Telefono;
        }

}

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
    document.getElementById("mostrar").innerHTML=Usuario.getNombre()+"<br>"+Usuario.getDireccion();
}

window.addEventListener("load", cargar);