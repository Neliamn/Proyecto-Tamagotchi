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

inicializarGrid(sprites.pantallaInicio.pantallaInicio0);

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

function clickBotonDerecha(){
    inicializarGrid(sprites.huevo.huevo1);
}

function clickBotonIzquierdo(){
    inicializarGrid(sprites.huevo.huevo0);
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
            inicializarGrid(sprites.huevo.huevo0);
            comprobacionFases();
            comprobacionSprites();
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

function comprobacionSprites(){
    comprobacionEstadoHuevo();
}

function comprarTamanioFilas(coleccion, nombre){

    if(coleccion.length == 16){
        console.log(`La coleccion de datos para ${nombre} es correcta.`);
    }
    else{
        console.log(`La coleccion de datos para ${nombre} NO es correcta.`);
    }

}

function comprobacionEstadoHuevo(){
    let huevo = sprites['huevo'];
    let huevosHijo = Object.keys(huevo);

    for(let i=0;i<huevosHijo.length;i++){

        let claveHijo = huevosHijo[i];
        let values = sprites['huevo'][claveHijo];
        let nombresHijos = Object.keys(values);

        if(nombresHijos.length < 16){
            console.log('Se encontró un sprite con un tamaño irregular');
            return;
        }        
    }

    console.log('Todos los sprites del estado huevo, tienen el tamaño correcto.');
}

function inicializarGrid(sprite){
    document.getElementById('screen').innerHTML = generadorFilas(sprite);
}


function generadorFilas(objetoSprite){

    let resultadoFinal = '';

    let arrayFilas = Object.keys(objetoSprite);
    let arrayColumnas = Object.values(objetoSprite);

    for(var i=0;i<arrayFilas.length;i++){

        let fila = `<div id='${i}' class="flex-container">`;
        let arrayColumnas = objetoSprite[arrayFilas[i]];

        for(var a=0;a<arrayColumnas.length;a++){
            if(arrayColumnas[a] == undefined){
                fila = fila + generadorColumnas(i,a,'#74aca3');
            }
            else{
                fila = fila + generadorColumnas(i,a,arrayColumnas[a]);
            }
            
        }

        fila = fila + '</div>';

        resultadoFinal = resultadoFinal + fila;

    }

    return resultadoFinal;

}

function generadorColumnas(indiceFila, indiceColumna, color){
    return `<div id='${indiceFila + '_' + indiceColumna}' class="flex-item" style='background-color:${color}'></div>`;
}
