const nombre = document.getElementById('nombre');
const categoria = document.getElementById('categoria');
const salario = document.getElementById('salario');

const button = document.querySelector('.button');
const datos = document.querySelector('.datos');

let aumento = 0;
let aument = 0;

const pAumentos = {
	A: 1.15,
	B: 1.3,
	C: 1.1,
	D: 1.2,
};

button.onclick = () => {
	calcularSalario();
};

function calcularSalario() {
	switch (categoria.value) {
		case 'A':
			aumento = Number(salario.value) * pAumentos.A;
			aument = aumento - Number(salario.value);

			datos.innerHTML = `
<table class="table">
<thead>
<tr>
<th>Nombre</th>
<th>Categoria</th>
<th>Salario</th>
<th>Aumento</th>
<th>Total</th>
</tr>
</thead>
<tbody>
<tr>
<td>${nombre.value}</td>
<td>${categoria.value}</td>
<td>$${salario.value}</td>
<td>$${aument.toFixed(2)}</td>
<td>$${aumento.toFixed(2)}</td>
</tr>
</tbody>
</table>
`;
			break;
		case 'B':
			aumento = Number(salario.value) * pAumentos.B;
			aument = aumento - Number(salario.value);

			datos.innerHTML = `
<table class="table">
<thead>
<tr>
<th>Nombre</th>
<th>Categoria</th>
<th>Salario</th>
<th>Aumento</th>
<th>Total</th>
</tr>
</thead>
<tbody>
<tr>
<td>${nombre.value}</td>
<td>${categoria.value}</td>
<td>$${salario.value}</td>
<td>$${aument.toFixed(2)}</td>
<td>$${aumento.toFixed(2)}</td>
</tr>
</tbody>
</table>
`;
			break;
		case 'C':
			aumento = Number(salario.value) * pAumentos.C;
			aument = aumento - Number(salario.value);
			datos.innerHTML = `
<table class="table">
<thead>
<tr>
<th>Nombre</th>
<th>Categoria</th>
<th>Salario</th>
<th>Aumento</th>
<th>Total</th>
</tr>
</thead>
<tbody>
<tr>
<td>${nombre.value}</td>
<td>${categoria.value}</td>
<td>$${salario.value}</td>
<td>$${aument.toFixed(2)}</td>
<td>$${aumento.toFixed(2)}</td>
</tr>
</tbody>
</table>
`;
			break;
		case 'D':
			aumento = Number(salario.value) * pAumentos.D;
			aument = aumento - Number(salario.value);
			datos.innerHTML = `
<table class="table">
<thead>
<tr>
<th>Nombre</th>
<th>Categoria</th>
<th>Salario</th>
<th>Aumento</th>
<th>Total</th>
</tr>
</thead>
<tbody>
<tr>
<td>${nombre.value}</td>
<td>${categoria.value}</td>
<td>$${salario.value}</td>
<td>$${aument.toFixed(2)}</td>
<td>$${aumento.toFixed(2)}</td>
</tr>
</tbody>
</table>
`;
			break;
		default:
			alert('Seleccione una categoria de las tres de la tabla en mayuscula');
			break;
	}
}
