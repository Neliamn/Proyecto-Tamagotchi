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
    },
    bebe_cagado: {
        padre: 'bebe',
        animacion: ['bebeCagao1','bebeCagao2'],
        currentIndex: 0,
        cicloActual: 11,
        next: 'bebe_cagado'
    },
    barrer: {
        padre: 'funciones',
        animacion: ['barrer1','barrer2','barrer3','barrer4','barrer5','barrer6'],
        currentIndex: 0,
        cicloActual: 10,
        next: ''        
    },
    comer_bebe: {
        padre: 'bebe',
        animacion: ['bebeCome1','bebeComiendo1_1','bebeComiendo1_2','bebeComiendo2_1','bebeComiendo2_2','bebeComiendo3_1','bebeComiendo3_2','bebeCome1'],
        currentIndex: 0,
        cicloActual: 12,
        next: 'bebe'
    }
};