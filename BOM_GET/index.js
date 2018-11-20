var enviado = location.search;
var enviado = enviado.substring(1,enviado.length);

var datos = enviado.split("&");

var nombre = (datos[0].split("="))[1];
var apellido = (datos[1].split("="))[1];
var correo = (datos[2].split("="))[1];
correo = correo.split("%40");
correo = correo[0] + "@" + correo[1];

alert("El usuario " + nombre + " " + apellido + ", tiene como dirección de correo electrónico, " + correo);
