
let tamagotchi = {
    opcionMenuActual :1, 
    humor:5,
    salud:5,
    hambre: 5,
    amor: 0,
    sucio : false,
    enfermo: false,
    vecesPulsadoBotonCentro: 0,
    iniciado: false,
    cicloActual:1,
    numeroCiclos: 4,
    intervals : {},
    stopCurrentInterval : false,
}

inicializarGrid(sprites.pantallaInicio.pantallaInicio0);
inicializarDesdeMemoria();

function inicializarDesdeMemoria() {
    let memoria = obtenerDeStorage('info');
    if(memoria != undefined && memoria != ''){
        tamagotchi = memoria;
        switch(tamagotchi.cicloActual){
            case 1:
                eclosion();
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                break;
        }
    }    
    else{
        
        animacionInicial(animaciones);
        alert ('pulsa el botón central para que nazca tu tamagotchi')
     
    }
}

function clickBotonCentro () {
    if (!tamagotchi.iniciado) {
        if (tamagotchi.vecesPulsadoBotonCentro<5) {
            tamagotchi.vecesPulsadoBotonCentro ++;
        }
        else {
            tamagotchi.iniciado=true;
            guardarEnStorage(tamagotchi);
            eclosion ();
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

function guardarEnStorage (info){
    let data = JSON.stringify(info);
    localStorage.setItem('info', data);
}
function obtenerDeStorage (key){
    let data = localStorage.getItem (key);
    return JSON.parse(data);    
}
function animacionInicial(animaciones){
    tamagotchi.stopCurrentInterval = false;
    let animacion = animaciones.prenacimiento;
    tamagotchi.intervals['init'] = setInterval(runAnimation(animacion), 1000);
}
function runAnimation(animacion){

    let currentIndex = animacion.currentIndex;
    let padre = animacion.padre;
    let currentAnimacion = animacion.animacion[currentIndex];
    let tamanio = animacion.animacion.length;

    inicializarGrid(sprites[padre][currentAnimacion]);

    setTimeout(()=>{
        clearInterval(tamagotchi.intervals['init']);
        if(currentIndex == (tamanio -1)){
            if(!animacion.loop){
                tamagotchi.stopCurrentInterval = true;
                return;
            }
            currentIndex = 0;
            animacion.currentIndex = currentIndex;
        }
        else{
            currentIndex = currentIndex + 1;
            animacion.currentIndex = currentIndex;
        }
        if(tamagotchi.stopCurrentInterval){
            return;
        }else{
            tamagotchi.intervals['init'] = setInterval(runAnimation(animacion), 1000);
        }

    }, 1000);
}
function eclosion(){
    tamagotchi.stopCurrentInterval = false;
    let animacion = animaciones.eclosion;
    tamagotchi.intervals['init'] = setInterval(runAnimation(animacion), 1000);
}