/* los ciclos del tama son huevo, bebe, adulto, muerto */
const numeroCiclos = 4;
let cicloActual = 1;
/* las opciones de menu son comer, limpiar, dormir, jugar, curar, mimos */
let opcionMenuActual = 1;
let humor = 5;
let salud = 5;
let hambre = 5;
let amor = 0;
let sucio = false;
let enfermo = false;
let vecesPulsadoBotonCentro = 0;
let iniciado = false;

alert ('Tu tamagochi esta apunto de nacer, ayudalo a nacer pulsando el boton central');

function clickBotonCentro () {
    if (!iniciado) {
        if (vecesPulsadoBotonCentro<5) {
            vecesPulsadoBotonCentro ++;
        }
        else {
            iniciado=true;
            inicio ();
        }

    }
}

function inicio () {
    console.log ('se inicia el juego');
    /* comprobamos el estado del tamagotchi */
    if (humor < 5 || salud < 5 || hambre < 5 || cicloActual == 4) {
        console.log ('no es posible iniciar el juego porque el tamagotchi esta muerto o no se encuentra bien');
        return;
    }
    else {
        nacimiento ();
    }
}


function nacimiento () {

    let haNacido = false;
    const numeroNacimiento = 12;
    while (!haNacido) {
            const numAleatorio = Math.floor (Math.random()* (200000)) +1;
        if (numAleatorio == 12) {
            console.log ('ha nacido');
            haNacido = true;
            comprobacionFases();
        }

    }
}

function comprobacionFases(){

    if(fases != undefined && fases.length > 0){
        console.log("Las fases existentes del tamagotchi son:")
        for(let i=0;i<fases.length;i++){
            console.log(`Fase ${i+1}: ${fases[i]}`);
        }
    }else{
        console.log("El array de fases no es válido o no está completo.");
    }

}
