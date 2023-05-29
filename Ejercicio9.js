//crear un programa en javascript que me diga la cantidad de numeros negativos ingresados.

const info = document.getElementById('info');
const btn = document.querySelector('.btn');
const datos = document.querySelector('.datos');

function valoresNegativos(numeros) {
	let negativos = 0;
	numeros = numeros.split(' ');
	//console.log(numeros.length);
	for (let i = 0; i < numeros.length; i++) {
		if (numeros[i] < 0) {
			negativos++;
		}
	}
	return negativos;
}

function valoresPositivos(numeros) {
	let positivos = 0;
	numeros = numeros.split(' ');
	//console.log(numeros.length);
	for (let i = 0; i < 10; i++) {
		if (numeros[i] > 0) {
			positivos++;
		}
	}
	return positivos;
}

//deseo conocer la cantidad multiplo de 15
//crear un programa en javascript que me diga la cantidad de numeros multiplos de 15 ingresados.

function multi(numeros) {
	let numeros2 = numeros.split(' ');
	let numeros3 = numeros2.filter((num) => {
		if (num % 15 === 0) {
			return true;
		}
	});
	return numeros3.length;
}

//el valor de los numeros ingresados que son pares
//crear un programa en javascript que me diga el valor de los numeros ingresados que son pares.
function par(numeros) {
	let cantidadVA = 0;
	let numeros2 = numeros.split(' ', 10);
	numeros2 = numeros2.filter((num) => {
		if (num % 2 === 0) {
			cantidadVA += Number(num);
			return true;
		}
	});
	return cantidadVA;
}

btn.addEventListener('click', () => {
	if (info.value.length != 0) {
		let numeros = info.value.split(' ');
		if (numeros.length <= 10) {
			let cantidadNegativos = valoresNegativos(info.value);
			let cantidadPositivos = valoresPositivos(info.value);
			let cantidadMulti = multi(info.value);
			let cantidadPar = par(info.value);
			datos.innerHTML = `
			<table class="table">
				<thead>
					<tr>
						<th>Valores Negativos</th>
						<th>Valores Positivos</th>
						<th>Cantidad de Numeros Multiplos de 15</th>
						<th>Valor acumulado de Numeros Pares</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>${cantidadNegativos}</td>
						<td>${cantidadPositivos}</td>
						<td>${cantidadMulti}</td>
						<td>${cantidadPar}</td>
					</tr>
				</tbody>
			</table>
			`;
		} else {
			datos.innerHTML=`<p class="text-danger">Solo se permiten 10 numeros enteros</p>`
		}
	} else {
		datos.innerHTML = 'Ingrese numeros';
	}
});

