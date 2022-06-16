const fases = ['huevo', 'bebe', 'adulto', 'muerto'];

const sprites = {
    pantallaInicio: {
        pantallaInicio0: {
            fila0: new Array(32),
            fila1: new Array(32),
            fila2: new Array(32),
            fila3: new Array(32),
            fila4: new Array(32),
            fila5: new Array(32),
            fila6: new Array(32),
            fila7: new Array(32),
            fila8: new Array(32),
            fila9: new Array(32),
            fila10: new Array(32),
            fila11: new Array(32),
            fila12: new Array(32),
            fila13: new Array(32),
            fila14: new Array(32),
            fila15: new Array(32)
        }
    },
    huevo: {
        huevo0: {
            fila0: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila1: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila2: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila3: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila4: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila5: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#000000', '#000000', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila6: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#74aca3', '#74aca3', '#74aca3', '#000000', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila7: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#000000', '#000000', '#74aca3', '#74aca3', '#000000', '#000000', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila8: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#000000', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila9: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila10: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#74aca3', '#74aca3', '#74aca3', '#000000', '#000000', '#74aca3', '#74aca3', '#74aca3', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila11: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#74aca3', '#74aca3', '#74aca3', '#000000', '#000000', '#74aca3', '#74aca3', '#74aca3', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila12: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#000000', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila13: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#000000', '#74aca3', '#74aca3', '#74aca3', '#000000', '#000000', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila14: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#000000', '#74aca3', '#74aca3', '#000000', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila15: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3']
        },
        huevo1: {
            fila0: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila1: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila2: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila3: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila4: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila5: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila6: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#000000', '#000000', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila7: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#74aca3', '#74aca3', '#74aca3', '#000000', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila8: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#000000', '#000000', '#74aca3', '#74aca3', '#000000', '#000000', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila9: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#000000', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila10: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#000000', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila11: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#74aca3', '#74aca3', '#74aca3', '#000000', '#000000', '#74aca3', '#74aca3', '#74aca3', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila12: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#74aca3', '#74aca3', '#74aca3', '#000000', '#000000', '#74aca3', '#74aca3', '#74aca3', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila13: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila14: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#000000', '#74aca3', '#74aca3', '#000000', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila15: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3']
        },
        huevo2: {
            fila0: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila1: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila2: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#000000', '#000000', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila3: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#74aca3', '#74aca3', '#74aca3', '#000000', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila4: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#000000', '#000000', '#74aca3', '#74aca3', '#000000', '#000000', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila5: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#000000', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila6: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#000000', '#000000', '#74aca3', '#74aca3', '#000000', '#000000', '#74aca3', '#74aca3', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila7: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#74aca3', '#74aca3', '#000000', '#000000', '#74aca3', '#74aca3', '#000000', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila8: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila9: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila10: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#000000', '#74aca3', '#000000', '#000000', '#000000', '#74aca3', '#000000', '#000000', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila11: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#74aca3', '#000000', '#74aca3', '#000000', '#000000', '#000000', '#74aca3', '#74aca3', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila12: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#000000', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila13: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#000000', '#74aca3', '#74aca3', '#74aca3', '#000000', '#000000', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila14: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#000000', '#74aca3', '#74aca3', '#000000', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila15: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3']
        },
        huevo3: {
            fila0: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila1: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila2: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila3: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#000000', '#000000', '#74aca3', '#74aca3', '#000000', '#74aca3', '#74aca3', '#74aca3', '#000000', '#000000', '#74aca3', '#74aca3', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila4: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#000000', '#000000', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#000000', '#000000', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila5: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#74aca3', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#74aca3', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila6: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#74aca3', '#74aca3', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#74aca3', '#74aca3', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila7: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#74aca3', '#000000', '#74aca3', '#74aca3', '#74aca3', '#000000', '#000000', '#000000', '#000000', '#74aca3', '#74aca3', '#000000', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila8: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#000000', '#74aca3', '#74aca3', '#74aca3', '#000000', '#74aca3', '#000000', '#000000', '#74aca3', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila9: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#000000', '#74aca3', '#74aca3', '#000000', '#000000', '#74aca3', '#74aca3', '#74aca3', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila10: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#74aca3', '#74aca3', '#74aca3', '#000000', '#000000', '#74aca3', '#74aca3', '#000000', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila11: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#74aca3', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila12: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#74aca3', '#74aca3', '#000000', '#000000', '#000000', '#000000', '#74aca3', '#000000', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila13: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#74aca3', '#74aca3', '#000000', '#000000', '#000000', '#000000', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila14: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#000000', '#000000', '#74aca3', '#74aca3', '#000000', '#74aca3', '#74aca3', '#74aca3', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3'],
            fila15: ['#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#000000', '#74aca3', '#74aca3', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3', '#74aca3']
        }
    },
    bebe: {
        bebe1: {
            fila0: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff',],
            fila1: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff',],
            fila2: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff',],
            fila3: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff',],
            fila4: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff',],
            fila5: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff',],
            fila6: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff',],
            fila7: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff',],
            fila8: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff',],
            fila9: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff',],
            fila10: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff',],
            fila11: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff',],
            fila12: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff',],
            fila13: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff',],
            fila14: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff',],
            fila15: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff',]

        },
        bebe2: {
            fila0: ['#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',],
            fila1: ['#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',],
            fila2: ['#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',],
            fila3: ['#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',],
            fila4: ['#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',],
            fila5: ['#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',],
            fila6: ['#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',],
            fila7: ['#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',],
            fila8: ['#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',],
            fila9: ['#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',],
            fila10:['#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',],
            fila11:['#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',],
            fila12:['#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#000000','#000000','#000000','#000000','#000000','#000000','#000000','#000000','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',],
            fila13:['#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#000000','#000000','#000000','#000000','#000000','#000000','#000000','#000000','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',],
            fila14:['#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#000000','#000000','#000000','#000000','#000000','#000000','#000000','#000000','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',],
            fila15:['#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',]
        }
    }
}

const animaciones = {
    prenacimiento: {
        padre: 'huevo',
        animacion: ['huevo0','huevo1'],
        currentIndex: 0,
        loop: true
    },
    eclosion: {
        padre: 'huevo',
        animacion: ['huevo0','huevo1','huevo2','huevo3'],
        currentIndex: 0,
        loop: false
    }
};