
let tamagotchi = {
    opcionMenuActual: 1,
    humor: 5,
    salud: 5,
    hambre: 5,
    amor: 0,
    sucio: false,
    enfermo: false,
    vecesPulsadoBotonCentro: 0,
    iniciado: false,
    cicloActual: 0,
    numeroCiclos: 4,
    intervals: {},
    stopCurrentInterval: false,
}

let sprites;
cargarSpriteJSON() 




function inicializarDesdeMemoria() {
    let memoria = obtenerTamagotchiDeStorage();

    //controlHambre();

    if (memoria != undefined && memoria != '') {

        memoria.iniciado ? document.getElementById('mensajeNacimiento').style.display = 'none' : false;

        switch (memoria.cicloActual) {
            case 0:
                animacionInicial(animaciones);
                break;
            case 1:
                eclosion();
                break;
            case 2:
                bebe();
                break;
            case 3:
                break;
            case 4:
                break;
        }
    }
    else {
        guardarEnStorage(tamagotchi);
        document.getElementById('mensajeNacimiento').style.display = '';
        animacionInicial(animaciones);
        Swal.fire({
            title: 'Pulsa el botón central para que nazca tu tamagotchi',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })

    }
}

function clickBotonCentro() {
    let memoria = obtenerTamagotchiDeStorage();
    if (!memoria.iniciado) {
        if (memoria.vecesPulsadoBotonCentro < 5) {
            memoria.vecesPulsadoBotonCentro++;
            guardarEnStorage(memoria);
        }
        else {
            memoria.iniciado = true;
            memoria.iniciado ? document.getElementById('mensajeNacimiento').style.display = 'none' : false;
            guardarEnStorage(memoria);
            eclosion();
        }

    }
}

function clickBotonDerecha() {
    inicializarGrid(sprites.huevo.huevo1);
}

function clickBotonIzquierdo() {
    const botonesMenu = document.querySelectorAll('.menuItem');

    let active = -1;

    botonesMenu.forEach((item,index)=> {
        if(item.classList.contains('menuItemActive')){
            botonesMenu[0].classList.remove('menuItemActive'); 
            active = index;
        }
    });

    if(active == -1){
        botonesMenu[0].classList.add('menuItemActive'); 
    }else if(active == (menu.length -1)){
        botonesMenu[active].classList.remove('menuItemActive');
    }else{
        botonesMenu[active].classList.remove('menuItemActive'); 
        botonesMenu[active + 1].classList.add('menuItemActive'); 
    }


}

function clickBotonReset() {
    limpiarStorage();
    inicializaTamagotchi();
    inicializarDesdeMemoria();
}

function inicializaTamagotchi() {
    guardarEnStorage(tamagotchi);
}

function inicio() {
    console.log('se inicia el juego');
    /* comprobamos el estado del tamagotchi */
    if (humor < 5 || salud < 5 || hambre < 5 || cicloActual == 4) {
        console.log('no es posible iniciar el juego porque el tamagotchi esta muerto o no se encuentra bien');
        return;
    }
    else {
        nacimiento();
    }
}

function nacimiento() {

    let haNacido = false;
    const numeroNacimiento = 12;
    while (!haNacido) {
        const numAleatorio = Math.floor(Math.random() * (200000)) + 1;
        if (numAleatorio == 12) {
            console.log('ha nacido');
            haNacido = true;
            inicializarGrid(sprites.huevo.huevo0);
            comprobacionFases();
            comprobacionSprites();
        }

    }
}

function comprobacionFases() {

    if (fases != undefined && fases.length > 0) {
        console.log("Las fases existentes del tamagotchi son:")
        for (let i = 0; i < fases.length; i++) {
            console.log(`Fase ${i + 1}: ${fases[i]}`);
        }
    } else {
        console.log("El array de fases no es válido o no está completo.");
    }

}

function comprobacionSprites() {
    comprobacionEstadoHuevo();
}

function comprarTamanioFilas(coleccion, nombre) {

    coleccion.length == 16 ? console.log(`La coleccion de datos para ${nombre} es correcta.`) : console.log(`La coleccion de datos para ${nombre} NO es correcta.`);

}

function comprobacionEstadoHuevo() {
    let huevo = sprites['huevo'];
    let huevosHijo = Object.keys(huevo);

    for (let i = 0; i < huevosHijo.length; i++) {

        let claveHijo = huevosHijo[i];
        let values = sprites['huevo'][claveHijo];
        let nombresHijos = Object.keys(values);

        if (nombresHijos.length < 16) {
            console.log('Se encontró un sprite con un tamaño irregular');
            return;
        }
    }

    console.log('Todos los sprites del estado huevo, tienen el tamaño correcto.');
}

function inicializarGrid(sprite) {
    document.getElementById('screen').innerHTML = generadorFilas(sprite);
}


function generadorFilas(objetoSprite) {

    let resultadoFinal = '';

    let arrayFilas = Object.keys(objetoSprite);
    let arrayColumnas = Object.values(objetoSprite);

    for (var i = 0; i < arrayFilas.length; i++) {

        let fila = `<div id='${i}' class="flex-container">`;
        let arrayColumnas = objetoSprite[arrayFilas[i]];

        if (arrayColumnas.length == 0) {
            for (var a = 0; a < 32; a++) {
                fila = fila + generadorColumnas(i, a, '#74aca3');
            }
        }
        else {
            for (var a = 0; a < arrayColumnas.length; a++) {

                if (arrayColumnas[a] == undefined) {
                    fila = fila + generadorColumnas(i, a, '#74aca3');
                }
                else {
                    fila = fila + generadorColumnas(i, a, arrayColumnas[a]);
                }

            }
        }


        fila = fila + '</div>';

        resultadoFinal = resultadoFinal + fila;

    }

    return resultadoFinal;

}

function generadorColumnas(indiceFila, indiceColumna, color) {
    return `<div id='${indiceFila + '_' + indiceColumna}' class="flex-item" style='background-color:${color}'></div>`;
}



function limpiarStorage() {
    localStorage.clear();
}


function animacionInicial(animaciones) {
    let animacion = animaciones.prenacimiento;
    runAnimationByPromises(animacion);
}



function runAnimationByPromises(animacion) {

    return new Promise(function (resolve, reject) {
        setTimeout(function () {

            let memoria = obtenerTamagotchiDeStorage();

            if (memoria.cicloActual != animacion.cicloActual) {
                return;
            }

            inicializarGrid(sprites[animacion.padre][animacion.animacion[animacion.currentIndex]]);


            if (animacion.currentIndex == (animacion.animacion.length - 1)) {
                animacion.currentIndex = 0;
                memoria.cicloActual = animaciones[animacion.next].cicloActual;
                guardarEnStorage(memoria);
                runAnimationByPromises(animaciones[animacion.next]);
            } else {
                animacion.currentIndex++;
                runAnimationByPromises(animacion);
            }

            resolve('success');

        }, 1000);
    });

}


function controlHambre() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            //Restamos uno de comida.
            let memoria = obtenerTamagotchiDeStorage();
            memoria.hambre--;
            console.log("estado de hambre = " + memoria.hambre);
            guardarEnStorage(memoria);
            controlHambre();
        }, 1000000000);
    });
}

function eclosion() {
    let animacion = animaciones.eclosion;
    let memoria = obtenerTamagotchiDeStorage();
    memoria.cicloActual = 1;
    memoria.iniciado = true;
    guardarEnStorage(memoria);
    runAnimationByPromises(animacion);
}

function bebe() {
    let animacion = animaciones.bebe;
    let memoria = obtenerTamagotchiDeStorage();
    memoria.cicloActual = 2;
    guardarEnStorage(memoria);
    runAnimationByPromises(animacion);
}


function obtenerTamagotchiDeStorage() {
    let data = localStorage.getItem('info');
    return JSON.parse(data);
}

function guardarEnStorage(info) {
    let data = JSON.stringify(info);
    localStorage.setItem('info', data);
}


function cargarSpriteJSON() {
    fetch('sprites.json')
        .then(
            (response) => response.json())
        .then(
            (data) => {
                sprites = data.sprites;
                console.log(data);
                inicializarGrid(sprites.pantallaInicio.pantallaInicio0);
                inicializarDesdeMemoria();

            }
        )
        .catch((error) => console.log('Se ha producido un error al recuperar la información del JSON.' + error));
}