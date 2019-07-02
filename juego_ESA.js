function Jugador (nombre){
    this.nombre = nombre;
    this.pv = 100;
    this.sp = 100;
    this.curar = function (jugadorObjetivo){
        if(this.sp >= 40) {
            this.sp -= 40;
            jugadorObjetivo.pv += 20;
        }else{
            console.info(this.nombre + " no tiene sp");
        }
        this.estado(jugadorObjetivo);
    }
    this.estado = function(jugadorObjetivo){
        console.info( this );
        console.info( jugadorObjetivo );
       
    }
}

var gandalf = new Jugador("Gandalf");
var legolas = new Jugador("Legolas");

gandalf.curar(legolas);
 




