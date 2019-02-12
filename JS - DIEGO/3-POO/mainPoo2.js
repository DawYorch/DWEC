import Cliente from "./Cliente.js";
import Libro from "./Libro";

var person = new Cliente("carlos", "calle falsa", "73599688X", "649891176");
var book = new Libro("Mi Libro", "Francisco Franco", "Espanya", "15181818");


console.log(person.getNombre());
person.setNombre("jose");
console.log(person.getNombre());

console.log(book.getAutor());
book.setAutor("Marcos");
console.log(book.getAutor());