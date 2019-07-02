var arr = [5,4,3,2,1];
console.log(arr[2]);

arr.reverse();
console.log(arr);

arr =  arr.map(
    function(elemento){
        elemento *= 20;
        return elemento;
    }
)
console.log(arr);

arr.push(6);
console.log(arr);

arr.unshift(0);
console.log(arr);

console.log(arr.toString());

//ELIMINAR UNA POSICIÒN DETERMNINADA

arr.splice(1, 5, 99, "tres" ); //desde la posción 1 elimina 5 elementos incluido el 1 e ingresa el 99
console.log(arr);

arr.splice(1, 0, 999, 122, 555);
console.log(arr);

arr = arr.slice(2,4);
console.log(arr);
