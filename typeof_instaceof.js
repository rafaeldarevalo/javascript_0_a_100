var a = 1;
console.log("Es de tipo "+ typeof a);
var b = "Rafael";
console.log("Es de tipo "+ typeof b);

function identifica(param){
    console.log("Es un " + typeof param)
}

identifica(2);
identifica("hola");
identifica({});

function persona(){
    this.nombre = "Rafa";
    this.apellido = "Arevalo";
    this.edad = 38;
}

var rafa = new persona();
console.log("imprime objeto " + rafa.nombre + " " + rafa.apellido);

identifica(rafa.edad);