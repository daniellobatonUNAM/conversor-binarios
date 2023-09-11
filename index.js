let frase = 'Esta semana, Samsung informó sobre su desempeño financiero en el segundo trimestre de 2023, y fue un período especialmente difícil, con una pérdida operativa masiva de 3.4 mil millones de dólares. Estas pérdidas provienen principalmente de su negocio de semiconductores, debido a la continua caída en las ventas y los precios de los chips de memoria NAND 3D y DRAM.';

let btnConvertir = document.querySelector('#btn-convertir');
let areaFrase = document.querySelector('#area-frase');
let template = ``;

let gridTabla = document.querySelector('#grid-tabla');

btnConvertir.addEventListener('click', () => {

    frase = areaFrase.value;

    gridTabla.innerHTML = '';
    template = `
        <div class="grid-codigo encabezado-grid">n</div>
        <div class="grid-codigo encabezado-grid">Caracter</div>
        <div class="grid-codigo encabezado-grid">Hexadecimal</div>
        <div class="grid-codigo encabezado-grid">Binario</div>
    `;

    convertir();

    console.log(template); 

    llenar();

});


const convertir = () => {

    for(let i = 0; i < frase.length; i++){

        let caracter = frase[i];

        template += `<div class="grid-codigo">${i+1}</div>`;

        template += `<div class="grid-codigo">${caracter}</div>`;

        template += `<div class="grid-codigo">${caracter.charCodeAt(0).toString(16)}</div>`;

        let binario = caracter.charCodeAt(0).toString(2) + '';

        while (binario.length < 8) {
            binario = "0" + binario;
        }

        let binarioConEspacios = "";

        for (let i = 0; i < binario.length; i += 2) {
        const grupo = binario.substring(i, i + 2);
        binarioConEspacios += grupo + " ";
        }

        binarioConEspacios = binarioConEspacios.trim();

        template += `<div class="grid-codigo">${binarioConEspacios}</div>`;

    }

}

const llenar = () => {

    gridTabla.insertAdjacentHTML('beforeend', template);

}

