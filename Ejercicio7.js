const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const btn = document.querySelector('.btn');
const resultado = document.querySelector('.resultado');

function promedio(numero1, numero2) {
	let resul1 = numero1 * 0.3;
	let resul2 = numero2 * 0.7;

	return resul1 + resul2;
}

btn.addEventListener('click', () => {
	if (num1.value.length != 0 && num2.value.length != 0) {
		let ponderacion = promedio(num1.value, num2.value);
		resultado.innerHTML = `
    	<p>El promedio es: ${Math.round(ponderacion)}</p>
    `;

		console.log(ponderacion);
	}else{
    resultado.innerHTML = `
			<p> Debes ingresar las 2 notas los campos son obligatorios</p>
		`
  }
});
