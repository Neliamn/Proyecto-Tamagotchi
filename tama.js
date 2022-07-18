
let tamagotchi = {
    opcionMenuActual: 1,
    fase: 'huevo',
    sueno: 5,
    salud: 5,
    hambre: 3,
    sucio: false,
    enfermo: false,
    vecesPulsadoBotonCentro: 0,
    iniciado: false,
    cicloActual: 0,
    numeroCiclos: 4,
    cicloActualNombres: [
        'huevo',    //0
        'eclosion', //1
        'bebe',     //2
        'adulto',   //3
        'muerto',   //4
        'bebe',     //5
        'bebe',     //6
        'bebe',     //7
        'bebe',     //8
        'bebe',     //9
        'bebe',     //10
        'adulto',   //11
        'adulto',   //12
        'adulto',   //13
        'adulto',   //14
        'adulto',   //15
        'adulto',   //16
        '',
        '',
        '',
        'adulto',   //20
    ],
    cicloActualInfo: -1
}

let sprites;
enlazarEventos();
cargarSpriteJSON()



/**
 * Funcion que mira en el storage para saber si tiene que cargar desde memoria la partida del tamagotchi.
 */
function inicializarDesdeMemoria() {
    let memoria = obtenerTamagotchiDeStorage();

    if (memoria != undefined && memoria != '') {

        if (memoria.iniciado) {
            document.getElementById('mensajeNacimiento').style.display = 'none';
            document.querySelector('#pasar').disabled = false;
        }

        switch (memoria.cicloActual) {
            case 0:
                animacionInicial(animaciones);
                break;
            case 1:
                memoria.iniciado = true;
                guardarEnStorage(memoria);
                cambioDeEtapa(animaciones.eclosion, 1);
                break;
            case 2:
                cambioDeEtapa(animaciones.bebe, 2);
                break;
            case 3:
                cambioDeEtapa(animaciones.adulto, 3);
                break;
            case 16:
                cambioDeEtapa(animaciones.muerto, 16);
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
        });

    }
}

/**
 * Funcion que pinta sobre el div con id screen, las animaciones. 
 */
function inicializarGrid(sprite) {
    document.getElementById('screen').innerHTML = generadorFilasHTML(sprite);
}


/**
 * Recibe un objeto formado por filas y columnas, un sprite. Generará filas y columnas con el color que corresponda a cada celda.
 */
function generadorFilasHTML(objetoSprite) {

    let resultadoFinal = '';

    let arrayFilas = Object.keys(objetoSprite);
    let arrayColumnas = Object.values(objetoSprite);

    for (var i = 0; i < arrayFilas.length; i++) {

        let fila = `<div id='${i}' class="flex-container">`;
        let arrayColumnas = objetoSprite[arrayFilas[i]];

        if (arrayColumnas.length == 0) {
            for (var a = 0; a < 32; a++) {
                fila = fila + generadorColumnasHTML(i, a, '#74aca3');
            }
        }
        else {
            for (var a = 0; a < arrayColumnas.length; a++) {

                if (arrayColumnas[a] == undefined) {
                    fila = fila + generadorColumnasHTML(i, a, '#74aca3');
                }
                else {
                    fila = fila + generadorColumnasHTML(i, a, arrayColumnas[a]);
                }

            }
        }


        fila = fila + '</div>';

        resultadoFinal = resultadoFinal + fila;

    }

    return resultadoFinal;

}

/**
 * Genera una fila que despues contendrá las celdas.
 */
function generadorColumnasHTML(indiceFila, indiceColumna, color) {
    return `<div id='${indiceFila + '_' + indiceColumna}' class="flex-item" style='background-color:${color}'></div>`;
}


/**
 * Limpia el local storage
 */
function limpiarStorage() {
    localStorage.clear();
}


/**
 * Lanza la animación del prenacimiento del tamagotchi.
 */
function animacionInicial(animaciones) {
    let animacion = animaciones.prenacimiento;
    runAnimationByPromises(animacion);
}


/**
 * Funcion que recibe una animación y la pone a funcionar. 
 * Lanza una promesa, la cual lo primero que hace es comprobar si el cicloactual corresponde con el de la animacion que se pretende correr.
 * Si fueran diferentes los ciclos no la ejecutaría.
 * Si fueran iguales correría la animación, avanzaría el indice de la animación (o la reiniciaría si estuviera en el ultimo sprite) y volvería a lanzar la promesa tras 1 segundo.
 */
function runAnimationByPromises(animacion) {

    return new Promise(function (resolve, reject) {
        setTimeout(function () {

            let memoria = obtenerTamagotchiDeStorage();

            if (memoria.cicloActual != animacion.cicloActual) {
                return;
            }

            inicializarGrid(sprites[animacion.padre][animacion.animacion[animacion.currentIndex]]);

            // Si el indice de la animacion ha llegado al final, lo pone a 0 para ejecutarla en bucle. Si no avanza el indice una posicion.
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

/**
 * Función que lanza una promesa de cada X segundos que irá restando al contador de hambre 1 punto.
 */
function controlHambre() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("controlHambre")
            //Restamos uno de comida.
            let memoria = obtenerTamagotchiDeStorage();
            if (memoria.hambre > 0) {
                memoria.hambre--;
            }
            guardarEnStorage(memoria);
            controlHambre();
        }, 60000);
    });
}


function controlSueno() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("controlSueno")
            //Restamos uno del sueño
            let memoria = obtenerTamagotchiDeStorage();
            if (memoria.sueno > 0) {
                memoria.sueno--;
            }
            guardarEnStorage(memoria);
            controlSueno();
        }, 120000);
    });
}

function controlAdulto() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            let memoria = obtenerTamagotchiDeStorage();
            if (memoria.cicloActual == 16) {
                return;
            }
            memoria.fase = 'adulto';
            guardarEnStorage(memoria);
            cambioDeEtapa(animaciones.adulto, 3);
        }, 300000);
    });
}




function controlSalud() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("controlSalud")
            let memoria = obtenerTamagotchiDeStorage();

            if ((memoria.hambre == 0 || memoria.cicloActual == 5
                || memoria.cicloActual == 12 || memoria.sueno == 0
                || memoria.cicloActual == 9 || memoria.cicloActual == 15) && memoria.salud > 0) {
                memoria.salud = memoria.salud - 1;
                guardarEnStorage(memoria);
            }

            if (memoria.salud <= 3 && (memoria.cicloActual != 9 && memoria.cicloActual != 15)) {
                if (memoria.fase == 'bebe') {
                    cambioDeEtapa(animaciones.enfermo_bebe, 9);
                } else {
                    cambioDeEtapa(animaciones.enfermo_adulto, 15);
                }
            }

            if (memoria.salud == 0) {
                cambioDeEtapa(animaciones.muerto, 16);
                document.querySelector('#pasar').disabled = true;
                document.querySelector('#esc').disabled = true;
                document.querySelector('#enter').disabled = true;
                return;
            }

            controlSalud();


        }, 30000);
    });
}


function controlCagar(animacion, cicloActual) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {

            let memoria = obtenerTamagotchiDeStorage();

            if (animacion.padre != memoria.fase || memoria.cicloActual == 5 || memoria.cicloActual == 12 || memoria.cicloActual == 20 || memoria.cicloActual == 10) {
                return;
            }

            cambioDeEtapa(animacion, cicloActual);
        }, 30000);
    });
}



function cambioDeEtapa(animacion, cicloActual) {
    let memoria = obtenerTamagotchiDeStorage();
    memoria.cicloActual = cicloActual;
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

function acciones(animacion, cicloactual) {
    let memoria = obtenerTamagotchiDeStorage();
    memoria.cicloActual = cicloactual;
    guardarEnStorage(memoria);
    runAnimationByPromises(animacion);
}

/**
 * EVENTOS
 */


/**
 * Esta función enlaza los botones con un evento de click.
 */
function enlazarEventos() {

    //El botón de la izquierda está desactivado hasta que no se haya inicializado el tamagotchi (haya nacido)
    document.querySelector('#pasar').disabled = true;
    document.querySelector('#pasar').addEventListener('click', e => {
        clickBotonIzquierdo();
    });

    document.querySelector('#esc').addEventListener('click', e => {
        clickBotonDerecho();
    });

    document.querySelector('#enter').addEventListener('click', e => {
        //Desactivamos el botón de accion para evitar que se pulse repetidamente.
        document.querySelector('#enter').disabled = true;
        clickBotonCentro();
        //Volvemos a activar el botón de accion para evitar que se pulse repetidamente.
        document.querySelector('#enter').disabled = false;
    });

    document.querySelector('#reset').addEventListener('click', e => {
        //Desactivamos el botón de reset para evitar que se pulse repetidamente.
        document.querySelector('#reset').disabled = true;
        clickBotonReset();
    });

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
            controlAdulto();
            controlHambre();
            controlSalud();
            controlSueno();
            memoria.iniciado ? document.getElementById('mensajeNacimiento').style.display = 'none' : false;
            memoria.fase = 'bebe';
            guardarEnStorage(memoria);
            cambioDeEtapa(animaciones.eclosion, 1);
            document.querySelector('#pasar').disabled = false;
        }

    } else {
        let menuActivo = document.querySelector('.menuItemActive');
        if (menuActivo != undefined) {
            let action = menuActivo.id;
            let fase = memoria.fase;
            if (fase == 'bebe') {
                switch (action) {
                    case 'comer':
                        /**
                         * Si está cagado o ya está comiendo, está enfermo , muerto o durmiendo el tamagotchi no comerá.
                         */
                        if (memoria.cicloActual == 5
                            || memoria.cicloActual == 6
                            || memoria.cicloActual == 9
                            || memoria.cicloActual == 16
                            || memoria.cicloActual == 7) {
                            return;
                        }
                        if (memoria.hambre < 5) {
                            memoria.hambre = memoria.hambre + 1;
                        }
                        guardarEnStorage(memoria);
                        acciones(animaciones.comer_bebe, 6);
                        controlCagar(animaciones.bebe_cagado, 5);
                        break;
                    case 'limpiar':
                        if (memoria.cicloActual == 6 || memoria.cicloActual == 7 || memoria.cicloActual == 16) {
                            return;
                        }
                        acciones(animaciones.barrer_bebe, 10);
                        break;
                    case 'curar':
                        /**
                         * Solo si está enfermo
                         */
                        memoria.salud = 5;
                        guardarEnStorage(memoria);
                        if (memoria.cicloActual != 9) {
                            return;
                        }
                        acciones(animaciones.curar_bebe, 8);
                        break;
                    case 'luz':
                        memoria.sueno = 5;
                        guardarEnStorage(memoria);
                        if (memoria.cicloActual == 5
                            || memoria.cicloActual == 6
                            || memoria.cicloActual == 9
                            || memoria.cicloActual == 16) {
                            return;
                        }

                        if (memoria.cicloActual == 7) {
                            acciones(animaciones.bebe, 2);
                        } else {
                            acciones(animaciones.dormir_bebe, 7);
                        }
                        break;
                }
            }
            else if (fase == 'adulto') {
                switch (action) {
                    case 'comer':
                        /**
                         * Si está cagado o ya está comiendo, está enfermo o muerto, el tamagotchi no comerá.
                         */
                        if (memoria.cicloActual == 12
                            || memoria.cicloActual == 11
                            || memoria.cicloActual == 15
                            || memoria.cicloActual == 16
                            || memoria.cicloActual == 14) {
                            return;
                        }
                        memoria.hambre = memoria.hambre + 1;
                        guardarEnStorage(memoria);
                        acciones(animaciones.comer_adulto, 11);
                        controlCagar(animaciones.adulto_cagado, 12);
                        break;
                    case 'limpiar':
                        if (memoria.cicloActual == 11 || memoria.cicloActual == 14 || memoria.cicloActual == 16) {
                            return;
                        }
                        acciones(animaciones.barrer_adulto, 20);
                        break;
                    case 'curar':
                        /**
                         * Solo si está enfermo
                         */
                        memoria.salud = 5;
                        guardarEnStorage(memoria);
                        if (memoria.cicloActual != 15) {
                            return;
                        }

                        acciones(animaciones.curar_adulto, 13);
                    case 'luz':
                        memoria.sueno = 5;
                        guardarEnStorage(memoria);
                        if (memoria.cicloActual == 12
                            || memoria.cicloActual == 11
                            || memoria.cicloActual == 15
                            || memoria.cicloActual == 16) {
                            return;
                        }
                        if (memoria.cicloActual == 14) {
                            acciones(animaciones.adulto, 3);
                        } else {
                            acciones(animaciones.dormir_adulto, 14);
                        }

                        break;
                }
            }
        }

    }
}

function clickBotonDerecho() {
    let memoria = obtenerTamagotchiDeStorage();

    if (memoria.cicloActualInfo == 2) {
        memoria.cicloActualInfo = 0;
    } else {
        memoria.cicloActualInfo = memoria.cicloActualInfo + 1;
    }
    guardarEnStorage(memoria);
    let animacion = modificaPantallaAnimacion();
    controlPantallaInfo(memoria.cicloActualInfo, memoria.cicloActualNombres[memoria.cicloActual], animacion, memoria.cicloActual);

}


function controlPantallaInfo(pantallaInfo, currentAnimation, animacionReproducir, cicloActual) {
    let memoria = obtenerTamagotchiDeStorage();

    let animacion = buscarPorNumeroCiclo(cicloActual);

    switch (pantallaInfo) {
        case 0:
            animaciones.pantalla_hambre.next = animacion;
            memoria.cicloActual = 17;
            guardarEnStorage(memoria);
            runAnimationByPromises(animaciones.pantalla_hambre);
            break;
        case 1:
            animaciones.pantalla_salud.next = animacion;
            memoria.cicloActual = 18;
            guardarEnStorage(memoria);
            runAnimationByPromises(animaciones.pantalla_salud);
            break;
        case 2:
            animaciones.pantalla_sueno.next = animacion;
            memoria.cicloActual = 19;
            guardarEnStorage(memoria);
            runAnimationByPromises(animaciones.pantalla_sueno);
            break;
    }
}

function buscarPorNumeroCiclo(numeroCiclo) {

    const padres = Object.keys(animaciones);

    let animacion = null;

    padres.forEach(item => {
        if (numeroCiclo == animaciones[item].cicloActual) {
            animacion = item;
        }
    });

    return animacion;
}

function modificaPantallaAnimacion() {
    let memoria = obtenerTamagotchiDeStorage();
    const filaInicio1 = 7;
    const filaInicio2 = 8;
    const columnaInicio = 12;
    let animacion;
    let estado;

    switch (memoria.cicloActualInfo) {
        case 0:
            animacion = sprites.funciones.hambre;
            estado = memoria.hambre;
            break;
        case 1:
            animacion = sprites.funciones.salud;
            estado = memoria.salud;
            break;
        case 2:
            animacion = sprites.funciones.sueno;
            estado = memoria.sueno;
            break;
    }

    let primeraFila = animacion['fila' + filaInicio1];
    if (estado == 0) {
        for (let i = 12; i < 27; i++) {
            primeraFila[i] = '#74aca3';
        }
    }
    else {
        for (let i = 0; i < estado; i++) {
            for (let a = ((i * 3) + columnaInicio); a < (((i * 3) + columnaInicio) + 3); a++) {
                primeraFila[a] = '#000000';
            }
            for (let a = estado * 3 + columnaInicio; a < 27; a++) {
                primeraFila[a] = '#74aca3';
            }
        }
    }

    animacion['fila' + filaInicio1] = primeraFila;
    animacion['fila' + filaInicio2] = primeraFila;
    return animacion;
}

function clickBotonIzquierdo() {
    const botonesMenu = document.querySelectorAll('.menuItem');

    let active = -1;

    botonesMenu.forEach((item, index) => {
        if (item.classList.contains('menuItemActive')) {
            botonesMenu[0].classList.remove('menuItemActive');
            active = index;
        }
    });

    if (active == -1) {
        botonesMenu[0].classList.add('menuItemActive');
    } else if (active == (menu.length - 1)) {
        botonesMenu[active].classList.remove('menuItemActive');
    } else {
        botonesMenu[active].classList.remove('menuItemActive');
        botonesMenu[active + 1].classList.add('menuItemActive');
    }

}

function clickBotonReset() {

    let memoria = obtenerTamagotchiDeStorage();
    //Despues de obtener los datos de la memoria, colocamos un ciclo que no existe, el -1. Así, cualquier animación en curso se detendrá.
    memoria.cicloActual = -1;
    guardarEnStorage(memoria);
    setTimeout(function () {
        limpiarStorage();
        document.querySelector('.menuItemActive') ? document.querySelector('.menuItemActive').classList.remove('menuItemActive') : '';
        inicializarDesdeMemoria();
        //Volvemos a activar el botón de reset.
        document.querySelector('#reset').disabled = false;
        document.querySelector('#pasar').disabled = true;
    }, 2000);

}