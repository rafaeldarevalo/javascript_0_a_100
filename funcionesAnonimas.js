// DECLARACIÓN DE UNA FUNCIÒN ANÓNIMA
// (function(){})

(function(){
    var a = 10; // SE PROTEJE EL VALOR DE LA VARIABLE A
    console.log(a);
    function cambiarA (){
        a = 20; // SE PROTEJE EL VALOR DE LA VARIABLE A
    }
    cambiarA();
    console.log(a);
})();

(function(){
    var a = 30; // SE PROTEJE EL VALOR DE LA VARIABLE A
    console.log(a);
    function cambiarA (){
        a = 40; // SE PROTEJE EL VALOR DE LA VARIABLE A
    }
    cambiarA();
    console.log(a);
})() 

// OTRA FORMA DE FUNCIÓN ANÓNIMA


function ejecutaFuncion(fn){
    if(fn() === 1){
        return true;    
    }else{
        return false;
    }
}

console.log(
    ejecutaFuncion(function(){
        console.log("Función anónima");
        return 1;
    })
);

