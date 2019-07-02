function Persona (){
    this.nombre = "Rafael";
    this.apellido = "Arevalo";
    this.edad = 38;
    this.pais = "Colombia"
    
}

var raf = new Persona();
// raf.imprimirInfo(); 

Persona.prototype.imprimirInfo =  function(){ // crea el mètodo
    console.log(this.nombre +" "+ this.apellido + " " + this.edad)
}

console.log(raf.imprimirInfo());


