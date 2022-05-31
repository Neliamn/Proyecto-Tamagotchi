const fases = ['huevo', 'bebe', 'adulto', 'muerto'];
const sprites = {
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
    }
}