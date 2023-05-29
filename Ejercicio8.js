//crear un programa donde se introduce la temperatura en celcius y salga en fahrenheit javascript.
// var celcius = prompt("Introduce la temperatura en celcius");
// var fahrenheit = (celcius*9/5)+32;
// alert("La temperatura en fahrenheit es: " + fahrenheit);

const grados = document.getElementById('grados');
const btn = document.querySelector('.btn');
const datos = document.querySelector('.datos');

function convertCF(celcius) {
	let fahrenheit = celcius * 1.8 + 32;
	console.log(celcius);
	return fahrenheit;
}

function infoDatos() {
	if (grados.value.length != 0) {
		let fahrenheit = convertCF(grados.value);

		if (fahrenheit >= 14 && fahrenheit <= 32) {
			datos.innerHTML = `<p class="text-info">La temperatura es baja esta a: ${fahrenheit}°F</p>`;
			console.log(fahrenheit);
		} else if (fahrenheit >= 33 && fahrenheit <= 68) {
			datos.innerHTML = `<p class="text-warning">La temperatura es media esta a: ${fahrenheit}°F</p>`;
			console.log(fahrenheit);
		} else if (fahrenheit >= 69 && fahrenheit <= 96) {
			datos.innerHTML = `<p class="text-danger">La temperatura es alta esta a: ${fahrenheit}°F</p>`;
			console.log(fahrenheit);
		} else {
			datos.innerHTML = 'La temperatura es desconocida esta a: ${fahrenheit}°F';
			console.log(fahrenheit);
		}
	} else {
		alert('Ingrese porfavor Grados celcius');
	}
}

btn.addEventListener('click', infoDatos);
