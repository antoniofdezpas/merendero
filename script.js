const comidaList = document.getElementById('comida-list');
const bebidaList = document.getElementById('bebida-list');
const vinosList = document.getElementById('vinos-list');
const postreList = document.getElementById('postre-list');
const resumenList = document.getElementById('resumen-list');
const totalAmount = document.getElementById('total-amount');
const numPersonas = document.getElementById('num-personas');
const costePersona = document.getElementById('coste-persona');

const menuItems = [
    // Tapas
    { nombre: 'LOMOS', precio: 1.40, tipo: 'comida' },
    { nombre: 'SALCHICHAS', precio: 1.40, tipo: 'comida' },
    { nombre: 'MORCILLAS', precio: 1.40, tipo: 'comida' },
    { nombre: 'CHORIZO', precio: 1.40, tipo: 'comida' },
    { nombre: 'CHORIZO CRIOLLO', precio: 1.40, tipo: 'comida' },
    { nombre: 'PINCHITOS', precio: 1.60, tipo: 'comida' },
    { nombre: 'PANCETA', precio: 1.50, tipo: 'comida' },
    { nombre: 'SOBRASADA', precio: 1.50, tipo: 'comida' },
    { nombre: 'QUESO A LA PLANCHA', precio: 1.50, tipo: 'comida' },
    { nombre: 'BACALAOS', precio: 0.45, tipo: 'comida' },
    { nombre: 'PATATAS CHIPS (M G)', precio: 1.40, tipo: 'comida' },
    { nombre: 'PATATAS CON AJO', precio: 1.00, tipo: 'comida' },
    { nombre: 'PATATAS CANTONES (M G)', precio: 2.0, tipo: 'comida' },
    { nombre: 'PLATO DE AJO', precio: 1.60, tipo: 'comida' },
    { nombre: 'POLLO AL AST', precio: 14.00, tipo: 'comida' },
    { nombre: 'CONEJO ALAJILLO', precio: 18.00, tipo: 'comida' },
    { nombre: 'PAN(P G)', precio: 1.00, tipo: 'comida' },
    { nombre: 'ENSALADA (M G F)', precio: 3.80, tipo: 'comida' },
    { nombre: 'ENSALADA MURCIANA (M G)', precio: 2.80, tipo: 'comida' },
    { nombre: 'MICHIRONES (M G)', precio: 2.20, tipo: 'comida' },
    { nombre: 'CARACOLES (M G)', precio: 2.50, tipo: 'comida' },
    { nombre: 'ALBONDIGAS SALSA (M G)', precio: 2.20, tipo: 'comida' },
    { nombre: 'TEMPURA VERDURAS', precio: 2.80, tipo: 'comida' },
    { nombre: 'PECHUGA A LA PLANCHA', precio: 6.50, tipo: 'comida' },
    { nombre: 'MAGRA AL VINO (M G)', precio: 3.70, tipo: 'comida' },
    { nombre: 'TORTITAS CAMARON', precio: 3.00, tipo: 'comida' },
    { nombre: 'CALAMARES ROMANA', precio: 3.50, tipo: 'comida' },
    { nombre: 'CAMINANTES (M G)', precio: 2.60, tipo: 'comida' },
    { nombre: 'CATALANA', precio: 1.80, tipo: 'comida' },
    { nombre: 'MEDITERRANEO', precio: 2.20, tipo: 'comida' },
    { nombre: 'BICICLETA', precio: 2.20, tipo: 'comida' },
    // Bebida
    { nombre: 'CERVEZA 1/3', precio: 1.70, tipo: 'bebida' },
    { nombre: 'HEINEKEN 1/3', precio: 1.90, tipo: 'bebida' },
    { nombre: 'CERVEZA 1/3 SIN', precio: 1.70, tipo: 'bebida' },
    { nombre: 'CERVEZA/ LIMON 1/3', precio: 1.80, tipo: 'bebida' },
    { nombre: 'VICHY CATALAN', precio: 1.50, tipo: 'bebida' },
    { nombre: 'NESTEA 300cc', precio: 1.80, tipo: 'bebida' },
    { nombre: 'COCA-COLA 350cc', precio: 1.80, tipo: 'bebida' },
    { nombre: 'COLA ZERO 350cc', precio: 1.80, tipo: 'bebida' },
    { nombre: 'COLA ZERO ZERO 350cc', precio: 1.80, tipo: 'bebida' },
    { nombre: 'COCA-COLA LIGTH 350cc', precio: 1.80, tipo: 'bebida' },
    { nombre: 'FANTA LIMON 350cc', precio: 1.80, tipo: 'bebida' },
    { nombre: 'AQUARIUS 300cc', precio: 1.80, tipo: 'bebida' },
    { nombre: 'SPRITE 350cc', precio: 1.80, tipo: 'bebida' },
    { nombre: 'GASEOSA 1L.', precio: 2.10, tipo: 'bebida' },
    { nombre: 'GASEOSA 1/2L', precio: 1.50, tipo: 'bebida' },
    { nombre: 'AGUA 1L.', precio: 1.80, tipo: 'bebida' },
    { nombre: 'AGUA 1/2L', precio: 1.20, tipo: 'bebida' },
    { nombre: 'ZUMOS (P M)', precio: 1.50, tipo: 'bebida' },
    { nombre: 'BITTER', precio: 1.80, tipo: 'bebida' },
    { nombre: 'SANGRIA (J T)', precio: 5.00, tipo: 'bebida' },
    // Vinos
    { nombre: 'DE LA CASA 3/4', precio: 3.40, tipo: 'vinos' },
    { nombre: 'CHATO DE VINO', precio: 0.80, tipo: 'vinos' },
    { nombre: 'RUEDA 3/4 C', precio: 6.00, tipo: 'vinos' },
    { nombre: 'CRIANZA 3/4', precio: 10.00, tipo: 'vinos' },
    { nombre: 'RIBERA DEL DUERO', precio: 8.00, tipo: 'vinos' },
    { nombre: 'ROSADO 3/4', precio: 7.00, tipo: 'vinos' },
    // Postres
    { nombre: 'TOCINO DE CIELO', precio: 2.10, tipo: 'postre' },
    { nombre: 'FLAN DE HUEVO', precio: 2.00, tipo: 'postre' },
    { nombre: 'ARROZ CON LECHE', precio: 2.00, tipo: 'postre' },
    { nombre: 'PAN DE CALATRAVA', precio: 2.10, tipo: 'postre' },
    { nombre: 'TARTA DE QUESO', precio: 2.90, tipo: 'postre' },
    { nombre: 'NATILLAS CON GALLETAS', precio: 2.00, tipo: 'postre' },
    { nombre: 'PROFITEROLES', precio: 2.50, tipo: 'postre' },
    { nombre: 'TARTA TIRAMISSU', precio: 2.50, tipo: 'postre' },
    { nombre: 'TARTA AL WHISKY', precio: 3.00, tipo: 'postre' },
    { nombre: 'TARTA DE LA ABUELA', precio: 2.30, tipo: 'postre' },
    { nombre: 'FRUTA NATURAL', precio: 2.20, tipo: 'postre' },
    { nombre: 'TARTA DE LA ABUELA', precio: 2.30, tipo: 'postre' },
    { nombre: 'TARTA DE CHOCOLATE', precio: 2.20, tipo: 'postre' },
    { nombre: 'CREMA QUESO/TOCINO/PIÑONES', precio: 2.00, tipo: 'postre' },
    { nombre: 'TARTA CLASICA', precio: 2.20, tipo: 'postre' },
    { nombre: 'CAFE SOLO', precio: 1.10, tipo: 'postre' },
    { nombre: 'CAFE CON LECHE', precio: 1.30, tipo: 'postre' },
    { nombre: 'CORTADO C N', precio: 1.30, tipo: 'postre' },
    { nombre: 'CARAJILLO', precio: 1.40, tipo: 'postre' },
    { nombre: 'BELMONTE', precio: 1.50, tipo: 'postre' },
    { nombre: 'INFUSIONES', precio: 1.10, tipo: 'postre' },
    ];

const sectionTitles = document.querySelectorAll('.section-title');

sectionTitles.forEach(title => {
    title.addEventListener('click', () => {
        const section = title.parentElement;
        const itemList = section.querySelector('.item-list');
        section.classList.toggle('collapsed');
    });
});


menuItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.className = 'item';
    listItem.innerHTML = `
        <div class="item-name">${item.nombre}</div>
        <div class="item-price">${item.precio.toFixed(2)} €</div>
        <div class="item-controls">
            <button class="btn-minus">-</button>
            <span class="cantidad">0</span>
            <button class="btn-plus">+</button>
        </div>
    `;

    if (item.tipo === 'comida') {
        comidaList.appendChild(listItem);
    } else if (item.tipo === 'bebida') {
        bebidaList.appendChild(listItem);
    } else if (item.tipo === 'vinos') {
        vinosList.appendChild(listItem);
    } else {
        postreList.appendChild(listItem);
    }

    const btnMinus = listItem.querySelector('.btn-minus');
    const btnPlus = listItem.querySelector('.btn-plus');
    const cantidadElement = listItem.querySelector('.cantidad');

    btnMinus.addEventListener('click', () => {
        let cantidad = parseInt(cantidadElement.textContent);
        cantidad = Math.max(0, cantidad - 1);
        cantidadElement.textContent = cantidad;
        updateResumen();
    });

    btnPlus.addEventListener('click', () => {
        let cantidad = parseInt(cantidadElement.textContent);
        cantidadElement.textContent = cantidad + 1;
        updateResumen();
    });
});

const btnLimpiar = document.getElementById('btn-limpiar');

btnLimpiar.addEventListener('click', () => {
    const cantidades = document.querySelectorAll('.cantidad');
    cantidades.forEach(cantidad => {
        cantidad.textContent = '0';
    });

    updateResumen();
});


function updateResumen() {
    const items = document.querySelectorAll('.item');
    let total = 0;

    resumenList.innerHTML = '';

    items.forEach(item => {
        const cantidad = parseInt(item.querySelector('.cantidad').textContent);

        if (cantidad > 0) {
            const nombre = item.querySelector('.item-name').textContent;
            const precio = parseFloat(item.querySelector('.item-price').textContent.split(' ')[0]);
            total += precio * cantidad;

            const resumenItem = document.createElement('li');
            resumenItem.textContent = `${cantidad}x ${nombre}  -  ${precio}€ Ud.`;
            resumenList.appendChild(resumenItem);
        }
    });

    totalAmount.textContent = `${total.toFixed(2)} €`;

    const personas = parseInt(numPersonas.value);

    if (!isNaN(personas) && personas > 0) {
        const costePorPersona = total / personas;
        costePersona.textContent = `${costePorPersona.toFixed(2)} €`;
    } else {
        costePersona.textContent = `0.00 €`;
    }
}


const inputPersonas = document.getElementById('num-personas');
const btnMinusPersonas = document.querySelector('.btn-minus-personas');
const btnPlusPersonas = document.querySelector('.btn-plus-personas');

btnMinusPersonas.addEventListener('click', () => {
    let personas = parseInt(inputPersonas.value);
    personas = Math.max(1, personas - 1);
    inputPersonas.value = personas;
    updateResumen();
});

btnPlusPersonas.addEventListener('click', () => {
    let personas = parseInt(inputPersonas.value);
    inputPersonas.value = personas + 1;
    updateResumen();
});


numPersonas.addEventListener('input', updateResumen);

updateResumen();
