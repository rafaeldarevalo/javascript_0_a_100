// 1
edad = "23"
var muestraEdad = function(){
    console.log(edad);
}

muestraEdad();

// 2 Pasar tipos primitivos

function imprimeNombres(nombre, apellido){
    apellido = apellido || "Falta el apellido";
    console.log(nombre+" " + apellido );
}
imprimeNombres("Rafael", "Arevalo"); // Es una variable anónima

// 2 Pasar por objetos anónimos

function imprimeNombres2(persona){
    
    console.log(persona);
    console.log(persona.nombre + " " + persona.apellido);
} 
imprimeNombres2({
    // Es un objeto anonimo
    nombre: "July",
    apellido: "Castañeda"
})

// 2.1 Pasar por objetos explicitos
// las variables explícitas son declaras con la palabra reservada var

function imprimeNombres3(persona){
    console.log(persona.nombre + " " + persona.apellido);
} 
var objNombres = {
    nombre: "Lady",
    apellido: "Quiñones"
}
imprimeNombres3(objNombres)

// 3 función por parámetro

function imprimir(fn){ // Recibe la función anónima
    fn(); // Ejecuta la función anónima. 
}
imprimir(function(){
    console.log("Función anónima")
});

//RETORNO DE LAS FUNCIONES DE JAVASCRIPT

function obteneAleatorio(){
    return Math.random();
}
 console.log("Número aleatorio" + obteneAleatorio());

function muestraNombre(){
    return "Diego";
}

var nombre = muestraNombre();
console.log(nombre + " Pineda");

function verdaderoFalso(){
    var numero = obteneAleatorio();
    console.log(numero);
    if  (numero > 0.500) {
        return true;
    } 
    else{
        return false;
    }
}

console.log(verdaderoFalso());


function objetoNombre(nombre, apellido){
    return {
        nombre: nombre,
        apellido: apellido
    }
}
var nombres = objetoNombre("Felipe", "García");
console.log(nombres );

var suma = function(num1, num2){
    var resultado = num1 + num2;
    return resultado; // Detiene la ejecución de la función
    var resultado2 = num1 * num2;
    return resultado2;
}
console.log(suma(10,2));


// ===============================
// FUNCIONES DE PRIMERA CLASE
// ===============================

var agregaPropiedad = function (nombrePropiedad){
    console.log("agrega una propiedad")
}
agregaPropiedad();
agregaPropiedad.nombre = "Samuel";
agregaPropiedad.direccion = {
    pais : "Colombia",
    ciudad: "Bogota" 
} 

// Propiedades y métodos

var pelicula = {
    nombre: "Spiderman", //PROPIEDADES
    genero: "Acción",
    imprimeNombrePelicula: function(){ // METODOS
        console.log(this)
    }
}

pelicula.imprimeNombrePelicula();

// new 

function Persona(){
    this.apellido = "Lopez";
    this.edad = "30"
}
var juan = new Persona();



function Paises(nombre, ciudad){
    var self = this;
    this.nombre = nombre;
    this.ciudad = ciudad;
    this.imprimePais = function(){
        return this.nombre 
    }
}

var pais = new Paises("Colombia", "Bogota");
console.log(pais.imprimePais());

