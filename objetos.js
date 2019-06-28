var obj = {
    nombre: "Rafa",
    edad: "38",
    hobbies: {
        principal: "video juegos",
        alternativo: "ver pelìculas"
        },
    direccion: {
        pais: "Colombia",
        ciudad: "Bogotá",
        barrio: "Prado",
        edificio: {
            nombre: "San Carlos",
            planta: "2",
            apartamento: "808"
        }
    }
}
console.log(obj.direccion.edificio.nombre);
console.log(obj["direccion"]["pais"]);

for (const propiedad in obj) {
    console.log(`${propiedad} = ${obj[propiedad]}`);
    document.write(`${propiedad} = ${obj[propiedad]}` + "<br>");
  }