const navbar = document.getElementById('navbar');

const div = document.createElement('div');
div.classList.add('container-fluid');

//clases "collapse navbar-collapse" id="navbarSupportedContent"
const div2 = document.createElement('div');
div2.classList.add('collapse');
div2.classList.add('navbar-collapse');
div2.setAttribute('id', 'navbarSupportedContent');

div.innerHTML = `
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
`;

const ul = document.createElement('ul');
ul.classList.add('navbar-nav');
ul.classList.add('me-auto');
ul.classList.add('mb-2');
ul.classList.add('mb-lg-0');



ul.innerHTML = `
<li class="nav-item">
<a class="nav-link" href="/">Home</a>
</li>
<li class="nav-item">
<a class="nav-link" href="./ejercicio1.html">Ejercicio 1</a>
</li>
<li class="nav-item">
<a class="nav-link" href="./ejercicio2.html">Ejercicio 2</a>
</li>
<li class="nav-item">
<a class="nav-link" href="./ejercicio3.html">Ejercicio 3</a>
</li>
<li class="nav-item">
<a class="nav-link" href="./ejercicio4.html">Ejercicio 4</a>
</li>
<li class="nav-item">
<a class="nav-link" href="./ejercicio5.html">Ejercicio 5</a>
</li>
<li class="nav-item">
<a class="nav-link" href="./ejercicio6.html">Ejercicio 6</a>
</li>
<li class="nav-item">
<a class="nav-link" href="./ejercicio7.html">Ejercicio 7</a>
</li>
<li class="nav-item">
<a class="nav-link" href="./ejercicio8.html">Ejercicio 8</a>
</li>
<li class="nav-item">
<a class="nav-link" href="./ejercicio9.html">Ejercicio 9</a>
</li>
<li class="nav-item">
<a class="nav-link" href="./ejercicio10.html">Ejercicio 10</a>
</li>
`;



div2.appendChild(ul);


div.appendChild(div2);

navbar.appendChild(div);
