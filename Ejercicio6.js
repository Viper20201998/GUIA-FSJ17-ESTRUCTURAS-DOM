//crea una funcion para calcular el descuento en viajes turisticos tomando en cuenta lo siguiente:

//si el usuario introduce como origen la ciudad de Palma y como destino La Costa del Sol, el descuento es de 5%, si el destino es Panchimalco el descuento sera del 10% y si el destino es Puerto el Triunfo el descuento sera del 15%.

const origen = document.getElementById('origen');
const destino = document.getElementById('destino');
const precio = document.getElementById('precio');
const btn = document.querySelector('.btn');
const datos = document.querySelector('.datos');

const dViajes = {
	Costa_sol: {
		codigo: 'CS',
		precio: 2000,
		descuento: 0.05,
	},
	Panchimalco: {
		codigo: 'P',
		precio: 3000,
		descuento: 0.1,
	},
	Puerto_Triunfo: {
		codigo: 'PT',
		precio: 4000,
		descuento: 0.15,
	},
};
destino.addEventListener('change', () => {
	if (destino.value == dViajes.Costa_sol.codigo) {
		precio.value = dViajes.Costa_sol.precio;
		console.log(precio.value);
		console.log(dViajes.Costa_sol);
	} else if (destino.value == dViajes.Panchimalco.codigo) {
		precio.value = dViajes.Panchimalco.precio;
		console.log(precio.value);
	} else if ((destino.value = dViajes.Puerto_Triunfo.codigo)) {
		precio.value = dViajes.Puerto_Triunfo.precio;
		console.log(precio.value);
	} else {
		precio.value = '';
	}
});

let descuento = 0;
let pDescuento = 0;
let pTotal = 0;
const cDescuento = () => {
	switch (destino.value) {
		case dViajes.Costa_sol.codigo:
			descuento = dViajes.Costa_sol.descuento * 100;
			pDescuento = precio.value * dViajes.Costa_sol.descuento;
			pTotal = precio.value - pDescuento;
			console.log(pTotal);
			break;
		case dViajes.Panchimalco.codigo:
			descuento = dViajes.Panchimalco.descuento * 100;
			pDescuento = precio.value * dViajes.Panchimalco.descuento;
			pTotal = precio.value - pDescuento;
			console.log(pTotal);
			break;
		case dViajes.Puerto_Triunfo.codigo:
			descuento = dViajes.Puerto_Triunfo.descuento * 100;
			pDescuento = precio.value * dViajes.Puerto_Triunfo.descuento;
			pTotal = precio.value - pDescuento;
			console.log(pTotal);
	}
};

btn.addEventListener('click', () => {
	if (precio.value.length != 0) {
		cDescuento();

		datos.innerHTML = `
			<table class="table">
				<thead>
					<tr>
						<th>Precio del Viaje</th>
						<th>porcentaje de descuento</th>
						<th>Descuento</th>
						<th>Total a Pagar</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>$${precio.value}</td>
						<td>${descuento}%</td>
						<td>$${pDescuento}</td>
						<td>$${pTotal}</td>
					</tr>
				</tbody>
			</table>
		`;
	} else {
		datos.innerHTML = `<p class="text-danger">Escoge un destino antes de calcular el descuento.</p>`;
	}
});

