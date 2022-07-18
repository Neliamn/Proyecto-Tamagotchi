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
        cicloActual: 5,
        next: 'bebe_cagado'
    },
    comer_bebe: {
        padre: 'bebe',
        animacion: ['bebeCome1','bebeComiendo1_1','bebeComiendo1_2','bebeComiendo2_1','bebeComiendo2_2','bebeComiendo3_1','bebeComiendo3_2','bebeCome1'],
        currentIndex: 0,
        cicloActual: 6,
        next: 'bebe'
    },
    dormir_bebe:{
        cicloActual: 7,
        padre: 'funciones',
        animacion: ['dormir1','dormir2'],
        currentIndex: 0,
        next: 'dormir_bebe'
    },   
    curar_bebe:{
        cicloActual: 8,
        padre: 'bebe',
        animacion: ['bebeCurar'],
        currentIndex: 0,
        next: 'bebe'
    }, 
    enfermo_bebe:{
        cicloActual: 9,
        padre: 'bebe',
        animacion: ['bebeEnfermo1','bebeEnfermo2'],
        currentIndex: 0,
        next: 'enfermo_bebe'
    },
    barrer_bebe: {
        padre: 'funciones',
        animacion: ['barrer1','barrer2','barrer3','barrer4','barrer5','barrer6'],
        currentIndex: 0,
        cicloActual: 10,
        next: 'bebe'        
    },
    adulto: {
        padre: 'adulto',
        animacion: ['adulto1','adulto2'],
        currentIndex: 0,
        cicloActual: 3,
        next: 'adulto'
    },
    comer_adulto:{
        padre: 'adulto',
        animacion: ['adultoComiendo1','adultoComiendo2','adultoComiendo3','adultoComiendo4','adultoComiendo5','adultoComiendo6','adultoComiendo7'],
        currentIndex: 0,
        cicloActual: 11,
        next: 'adulto'        
    },
    adulto_cagado:{
        cicloActual: 12,
        padre: 'adulto',
        animacion: ['adultoCaca1','adultoCaca2'],
        currentIndex: 0,
        next: 'adulto_cagado'
    },
    curar_adulto:{
        cicloActual: 13,
        padre: 'adulto',
        animacion: ['adultoCurar'],
        currentIndex: 0,
        next: 'adulto'
    },
    dormir_adulto:{
        cicloActual: 14,
        padre: 'adulto',
        animacion: ['dormir1','dormir2'],
        currentIndex: 0,
        next: 'dormir_adulto'
    },
    enfermo_adulto:{
        cicloActual: 15,
        padre: 'adulto',
        animacion: ['adultoEnfermo1','adultoenfermo2'],
        currentIndex: 0,
        next: 'enfermo_adulto'
    },
    muerto:{
        cicloActual: 16,
        padre: 'muerto',
        animacion: ['muerto'],
        currentIndex: 0,
        next: 'muerto'
    },
    barrer_adulto:{
        padre: 'funciones',
        animacion: ['barrer1','barrer2','barrer3','barrer4','barrer5','barrer6'],
        currentIndex: 0,
        cicloActual: 20,
        next: 'adulto'       
    },
    pantalla_hambre: {
        padre: 'funciones',
        animacion: ['hambre','hambre'],
        currentIndex: 0,
        cicloActual: 17,
        next: ''
    },
    pantalla_salud: {
        padre: 'funciones',
        animacion: ['salud','salud'],
        currentIndex: 0,
        cicloActual: 18,
        next: ''
    },
    pantalla_sueno: {
        padre: 'funciones',
        animacion: ['sueno','sueno'],
        currentIndex: 0,
        cicloActual: 19,
        next: ''
    }
};