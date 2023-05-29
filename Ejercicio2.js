const nombre = document.getElementById('nombre');
const carnet = document.getElementById('carnet');

const materia = document.getElementById('materia');

const examen = document.getElementById('examen');
const tareas = document.getElementById('tareas');
const asistencia = document.getElementById('asistencia');
const investigacion = document.getElementById('investigacion');

const button = document.querySelector('.button');

const datosAlumno = document.querySelector('.datosAlumno');

button.addEventListener('click', () => {
	if (
		nombre.value.length != 0 &&
		carnet.value.length != 0 &&
		materia.value.length != 0 &&
		examen.value.length != 0 &&
		tareas.value.length != 0 &&
		asistencia.value.length != 0 &&
		investigacion.value.length != 0
	) {
		let nExamen = examen.value * 0.2;
		let nTareas = tareas.value * 0.4;
		let nAsistencia = asistencia.value * 0.1;
		let nInvestigacion = investigacion.value * 0.3;
		let nTotal = nExamen + nTareas + nAsistencia + nInvestigacion;

		datosAlumno.innerHTML = `
<table class="table">
<thead>
<tr>
<th>Nombre</th>
<th>Carnet</th>
<th>Materia</th>
<th>Examen</th>
<th>Tareas</th>
<th>Asistencia</th>
<th>Investigacion</th>
<th>Nota Final</th>
</tr>
</thead>
<tbody>
<tr>
<td>${nombre.value}</td>
<td>${carnet.value}</td>
<td>${materia.value}</td>
<td>${examen.value}</td>
<td>${tareas.value}</td>
<td>${asistencia.value}</td>
<td>${investigacion.value}</td>
<td>${nTotal.toFixed(1)}</td>
</tr>
</tbody>
</table>
		`;
	} else {
		alert('Debes ingresar todos los datos');
	}
});


