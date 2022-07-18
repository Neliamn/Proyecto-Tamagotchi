# Juego de Tamagotchi

El proyecto de juego de Tamagotchi se ha programado integramente con JavaScript.
Para la capa de vista, se ha usado HTML + CSS.

Como librerías adicionales se ha optado por utilizar Bootstrap y Sweetalert2.

El funcionamiento básico de la aplicación es la de manejar una cuadrícula de 16px de alto por 32px de ancho que simulan una pantalla de Tamagotchi.
Para la maquetación de la cuadrícula se ha usado Bootstrap y FlexBox.

Todos los sprites de la aplicación han sido extraidos de imagenes montadas en Photoshop y extraidas posteriormente todos los colores pixel a pixel por una aplicación Java.
La extracción de estos pixeles en los sprites se ha organizado en un JSON donde cada sprite tiene 16 filas la cual contiene cada una un array de strings, con una dimensión de 32.

```
    "bebe1": {
        "fila0 ":["#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3"],
        "fila1 ":["#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3"],
        "fila2 ":["#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3"],
        "fila3 ":["#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3"],
        "fila4 ":["#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3"],
        "fila5 ":["#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3"],
        "fila6 ":["#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3"],
        "fila7 ":["#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3"],
        "fila8 ":["#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#70a69e","#71a89f","#71a89f","#71a79e","#70a69d","#70a69d","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3"],
        "fila9 ":["#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#70a69d","#70a69d","#000000","#000000","#000000","#000000","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3"],
        "fila10":["#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#70a69e","#000000","#74aca3","#000000","#000000","#74aca3","#000000","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3"],
        "fila11":["#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#70a69e","#000000","#000000","#000000","#000000","#000000","#000000","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3"],
        "fila12":["#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#70a69e","#000000","#000000","#74aca3","#74aca3","#000000","#000000","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3"],
        "fila13":["#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#70a69e","#000000","#000000","#000000","#000000","#000000","#000000","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3"],
        "fila14":["#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#000000","#000000","#000000","#000000","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3"],
        "fila15":["#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3","#74aca3"]

    }

```

Posteriormente se han creado animaciones, las cuales son objetos como el siguiente:

```
    comer_bebe: {
        padre: 'bebe',
        animacion: ['bebeCome1','bebeComiendo1_1','bebeComiendo1_2','bebeComiendo2_1','bebeComiendo2_2','bebeComiendo3_1','bebeComiendo3_2','bebeCome1'],
        currentIndex: 0,
        cicloActual: 6,
        next: 'bebe'
    }

```

Entre los elementos, el padre nos indica a la familia a la que pertenece la animación.
La animación contiene los sprites que la conforman.
CurrentIndex lleva el indice actual de la animación. Por ejemplo si esta  reproduciendo el sprite 'bebeComiendo1_1', currentIndex  valdrá 1.
CicloActual es una variable de control única para la animación que nos permite a la hora de interactuar descartar animaciones o estados dependiendo del estado o ciclo actual en el que se encuentre.
Next es otra variable de control. Si apunta hacia si misma la animación es un loop, si apunta hacia otra, será la próxima animación en reproducirse.
La reproducción de una animación y mas concreto de un sprite, conlleva la manipulación del DOM para pintar un grid de 16x32 pixeles rellenos con el color de fondo que marque el Sprite. Cada segundo cambia el sprite, haciendo una  simulación de animación.

Se han usado las promesas para simular hilos paralelos a la ejecución del programa y así no producir atascos. Estos hilos paralelos llevan el control de la salud, el hambre, sueño y el tiempo para crecer a adulto.

## Controles

Tenemos un botón superior en rojo para el reset del juego.
El botón izquierdo del Tamagotchi, hará que se mueva la selección por el menú sobre y bajo la pantalla, pudiendo seleccionarse: Comer, Curar, Limpiar y Apagar/Encender la luz.
El botón central ejecutará la acción seleccionada en el menú.
El botón derecho nos muestra el estado del Tamagotchi: Hambre (representado por un pan), Salud (representado por un corazón), Sueño (representado por Zz).

## Tiempos

El juego a modo de demo se ha gestionado con unos tiempos bajos, de forma que pueda verse la totalidad del mismo en 10 minutos. Independientemente de esto, es configurable en un objeto principal que tiene la siguiente estructura:

```
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
        'adulto'    //16
    ],
    cicloActualInfo: -1
}

```

Este objeto sirve de plantilla y durante la ejecución del programa, será almacenado y obtenido del local storage mediante unas funciones desarrolladas a tal efecto.

Barajamos un tiempo de 5 minutos para convertirse en adulto. 
El estado de saciedad o hambre, baja un punto cada 50 segundos.
El estado del sueño, baja cada 2 minutos.
El estado de salud baja dependiendo de los estados anteriores. Más concretamente, si el Tamagotchi está con el estado de hambre a 0, el sueño es 0 o su estado de salud es 3 o inferior (punto en el que empieza a enfermar), bajará 1 punto de salud cada 30 segundos, mientras no se cure. Llegado a una salud de 0, el Tamagotchi morirá.
Una vez muerto el Tamagotchi, los controles se bloquean y el usuario está obligado a resetearlo.


