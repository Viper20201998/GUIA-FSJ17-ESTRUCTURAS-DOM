const temprano = document.getElementById('temprano');
const tarde = document.getElementById('tarde');
const noche = document.getElementById('noite');

const btn = document.querySelector('.btn');

const resultado = document.querySelector('.resultado');

function promedioTemp(edades) {
	let p = 0;
	let sumaEdades = 0;

	let ptp = edades.filter((num) => {
		sumaEdades += Number(num);
		p = sumaEdades / 5;
	});
	return p;
}

function promedioTarde(edades) {
	let p = 0;
	let sumaEdades = 0;

	let ptp = edades.filter((num) => {
		sumaEdades += Number(num);
		p = sumaEdades / 11;
	});
	return p;
}

function promedioNoche(edades) {
	let p = 0;
	let sumaEdades = 0;

	let ptp = edades.filter((num) => {
		sumaEdades += Number(num);
		p = sumaEdades / 7;
	});
	return p;
}

btn.addEventListener('click', () => {
	if (
		temprano.value.length != 0 &&
		tarde.value.length != 0 &&
		noche.value.length != 0
	) {
		let numero1 = temprano.value.split(' ');
		let numero2 = tarde.value.split(' ');
		let numero3 = noche.value.split(' ');

		if (
			numero1.length == 5 &&
			numero2.length == 6 &&
			numero3.length == 11 &&
			numero1[4] != '' &&
			numero2[5] != '' &&
			numero3[10] != ''
		) {
			let tem = promedioTemp(numero1);
			let tar = promedioTarde(numero2);
			let noc = promedioNoche(numero3);
			if (tem > tar && tem > noc) {
				resultado.innerHTML = `
				<table class="table">
				<thead>
				<tr>
				<th scope="col">Promedio de la Mañana</th>
				<th scope="col">Promedio de la Tarde</th>
				<th scope="col">Promedio de la Noche</th>
				</tr>
				</thead>
				<tbody>
				<tr>
				<td>${tem}</td>
				<td>${tar}</td>
				<td>${noc}</td>
				</tr>
				</table>
				<p>El Turno de la mañana tiene el promedio de edades mayor</p>
				`;
			} else if (tar > tem && tar > noc) {
				resultado.innerHTML = `
				<table class="table">
				<thead>
				<tr>
				<th scope="col">Promedio de la Mañana</th>
				<th scope="col">Promedio de la Tarde</th>
				<th scope="col">Promedio de la Noche</th>
				</tr>
				</thead>
				<tbody>
				<tr>
				<td>${tem}</td>
				<td>${tar}</td>
				<td>${noc}</td>
				</tr>
				</table>
				<p>El Turno de la tarde tiene el promedi de edades mayor</p>
				`;
			} else {
				resultado.innerHTML = `
				<table class="table">
				<thead>
				<tr>
				<th scope="col">Promedio de la Mañana</th>
				<th scope="col">Promedio de la Tarde</th>
				<th scope="col">Promedio de la Noche</th>
				</tr>
				</thead>
				<tbody>
				<tr>
				<td>${tem.toFixed(0)}</td>
				<td>${tar.toFixed(0)}</td>
				<td>${noc.toFixed(0)}</td>
				</tr>
				</table>
				<p>El Turno de la noche tiene el promedio de edades mayor</p>
				`;
			}
		} else {
			alert(
				'Debes ingresar las edades de los alumnos correspondientes en cada campo o despues del ultimo numero dejastes un espacio'
			);
		}
	} else {
		resultado.innerHTML = `<p class="text-danger">Debes ingresar los datos correspondientes`;
	}
});
