const menu = ['comer','curar','limpiar','luces'];

const animaciones = {
    prenacimiento: {
        padre: 'huevo',
        animacion: ['huevo0','huevo1'],
        currentIndex: 0,
        next: 'prenacimiento',
        cicloActual: 0
    },
    eclosion: {
        padre: 'huevo',
        animacion: ['huevo0','huevo1','huevo2','huevo3'],
        currentIndex: 0,
        next: 'bebe',
        cicloActual: 1
    },
    bebe: {
        padre: 'bebe',
        animacion: ['bebe1','bebe2'],
        currentIndex: 0,
        next: 'bebe',
        cicloActual: 2
    }
};