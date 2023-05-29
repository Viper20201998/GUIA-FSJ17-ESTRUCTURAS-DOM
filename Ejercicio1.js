//creando una funcion que en base a la edad devuelva un mensaje si la persona es mayor de edad o no. utilizar operador ternario.

const edad = document.getElementById('edad');
const button = document.querySelector('.button');
const mensaje = document.querySelector('.mensaje');

button.addEventListener('click', (e) => {
	if (edad.value.length != 0) {
		edad.value >= 18
			? (mensaje.innerHTML = 'Mayor de edad')
			: (mensaje.innerHTML = 'Menor de edad');
	} else {
		alert('Debes ingresar tu edad');
	}
});
