// Variables 
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// Contenedor Resultados
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;

const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);

    llenarSelect()
})

marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
    
    filtrarAuto();
})

year.addEventListener('change', e => {
    datosBusqueda.year = e.target.value;

    filtrarAuto();
})

minimo.addEventListener('change', e=> {
    datosBusqueda.minimo = e.target.value;

    filtrarAuto();
})

maximo.addEventListener('change', e=> {
    datosBusqueda.maximo = e.target.value;

    filtrarAuto();
})

puertas.addEventListener('change', e=> {
    datosBusqueda.puertas = e.target.value;

    filtrarAuto();
})

transmision.addEventListener('change', e=> {
    datosBusqueda.transmision = e.target.value;

    filtrarAuto();
})

color.addEventListener('change', e=> {
    datosBusqueda.color = e.target.value;

    filtrarAuto();
})

// Funciones

function filtrarAuto () {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor)

    if(resultado.length) {    
        mostrarAutos(resultado);

    } else {
        noResultado();
    }
}

function noResultado () {
    limpiarHTML();
    
    const noResultado = document.createElement('div')
    noResultado.classList.add('alerta', 'error')
    noResultado.textContent = 'No hay resultados...';
    resultado.appendChild(noResultado);    

}

function filtrarColor (auto) {
    const {color} = datosBusqueda
    if(color) {
        return auto.color === color;
    } else 
    return auto;
    
} 

function filtrarTransmision (auto) {
    const {transmision} = datosBusqueda
    if(transmision) {
        return auto.transmision === transmision;
    } else 
    return auto;
}

function filtrarPuertas (auto) {
    const {puertas} = datosBusqueda
    if(puertas) {
        return auto.puertas === parseInt(puertas);
    } else
    return auto;
}

function filtrarMaximo (auto) {
    const {maximo} = datosBusqueda
    if(maximo) {
        return auto.precio <= maximo;
    } else
    return auto;
}

function filtrarMinimo (auto) {
    const {minimo} = datosBusqueda
    if(minimo) {
        return auto.precio >= minimo;
    } else
    return auto;
}

function filtrarYear (auto) {
    const {year} = datosBusqueda
    if(year) {
        return auto.year === parseInt(year);
    } else
    return auto;
}

function filtrarMarca (auto) {
    const {marca} = datosBusqueda
    if(marca) {
        return auto.marca === marca;
    } else
    return auto;
}

function llenarSelect() {

    for(let i = max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;

        year.appendChild(opcion)
    }
}

function mostrarAutos (autos) {

    limpiarHTML();

    autos.forEach( auto => {
        const {marca, modelo, year, color, puertas, transmision, precio} = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
            ${marca} -
            ${modelo} -
            ${year} -
            ${color} -
            ${puertas} Puertas -
            Transmisión ${transmision} -
            ${precio} Dólares -     
        `;

        resultado.appendChild(autoHTML)
    })

    function limpiarHTML() {
        while(resultado.firstChild){
            resultado.removeChild(resultado.firstChild)
        }
    }

}