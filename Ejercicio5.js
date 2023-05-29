const cars = document.getElementById('cars');
const precio = document.getElementById('Precio');
const btn = document.querySelector('.button');
const datos = document.querySelector('.datos');

function precios() {
	if (cars.value == 'FF') {
		precio.value = 3000;
		console.log(precio.value);
	} else if (cars.value == 'FC') {
		precio.value = 2500;
		console.log(precio.value);
	} else if (cars.value == 'FE') {
		precio.value = 4500;
		console.log(precio.value);
	} else {
		precio.value = '';
		console.log(precio.value.length);
	}
}

let pTotal = 0;
let modeloAuto = '';
let descuento = 0;
let pDescuento = 0;
const dAutos = {
	fordF: 0.05,
	fordC: 0.1,
	fordE: 0.2,
};

function cDescuento() {
	if (precio.value.length != 0) {
		switch (cars.value) {
			case 'FF':
				pDescuento = dAutos.fordF * 100;
				descuento = precio.value * dAutos.fordF;
				pTotal = precio.value - descuento;
				modeloAuto = 'Ford Fiesta';
				console.log(pTotal);
				break;
			case 'FC':
				pDescuento = dAutos.fordC * 100;
				descuento = precio.value * dAutos.fordC;
				pTotal = precio.value - descuento;
				modeloAuto = 'Ford Focus';
				console.log(pTotal);
				break;
			case 'FE':
				pDescuento = dAutos.fordE * 100;
				descuento = precio.value * dAutos.fordE;
				pTotal = precio.value - descuento;
				modeloAuto = 'Ford Escape';
				console.log(pTotal);
				break;
		}
	} else {
		alert('escoge un auto');
		return false;
	}
}

function mDatos() {
	console.log(cars);
	cDescuento();
	if (cDescuento() != false) {
		datos.innerHTML = `
			<table class="table">
				<thead>
					<tr>
						<th scope="col">Modelo</th>
						<th scope="col">Precio</th>
						<th scope="col">Porcentaje de descuento</th>
						<th scope="col">Descuento</th>
						<th scope="col">Total</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>${modeloAuto}</td>
						<td>$${precio.value}</td>
						<td>${pDescuento}%</td>
						<td>$${descuento}</td>
						<td>$${pTotal}</td>
					</tr>
				</tbody>
			</table>
		`;

		console.log(datos);
	} else {
		datos.innerHTML = `<p class="text-danger">Escoge un auto antes de calcular el descuento.</p>`;
	}
}

btn.addEventListener('click', mDatos);


