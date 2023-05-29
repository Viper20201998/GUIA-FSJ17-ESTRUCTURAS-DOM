//crea una funcion que en base a 2 numeros enteros que ingrese el usuario, calcular cual numero es mayor y devolverlo con operadores ternarios para html y java.

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const btn = document.getElementById('btn');
const cResulatado = document.querySelector('.cResultado');

function operacion(numero1, numero2) {
	if ((num1.value.length != 0) && (num2.value.length != 0)) {
		if (numero1 > numero2) {
			return `El numero mayor es: ${numero1}`;
		} else if (numero2 > numero1) {
			return `El numero mayor es: ${numero2}`;
		} else {
			return 'Los numeros son iguales';
		}
	} else {
		return 'Ingrese dos numeros';
	}
}

btn.addEventListener('click', () => {
	cResulatado.innerHTML = '';
	const mostrar_resultado = document.createElement('p');
	const texto_resultado = document.createTextNode(
		operacion(num1.value, num2.value)
	);

	mostrar_resultado.appendChild(texto_resultado);
	cResulatado.appendChild(mostrar_resultado);

	console.log(cResulatado.innerHTML);
});
