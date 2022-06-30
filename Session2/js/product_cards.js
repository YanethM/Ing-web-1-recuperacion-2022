const productosIUDigital = [
  {
    idProd: 1,
    nombreProd: "Computador portatil",
    imagen: "./assets/jpg/img1.jpg",
    marca: "Apple",
    descripcion: "lorem input ...",
  },
  {
    idProd: 2,
    nombreProd: "Computador portatil",
    imagen: "./assets/jpg/img2.jpg",
    marca: "Apple",
    descripcion: "lorem input ...",
  },
  {
    idProd: 3,
    nombreProd: "Computador portatil",
    imagen: "./assets/jpg/img3.jpg",
    marca: "Apple",
    descripcion: "lorem input ...",
  },
  {
    idProd: 4,
    nombreProd: "Computador portatil",
    imagen: "./assets/jpg/img1.jpg",
    marca: "Apple",
    descripcion: "lorem input ...",
  },
  {
    idProd: 5,
    nombreProd: "Computador portatil",
    imagen: "./assets/jpg/img1.jpg",
    marca: "Apple",
    descripcion: "lorem input ...",
  },
];

console.log(productosIUDigital);

/*  Mediante la función map que nos permite iterar todo el arreglo productosIUDigital
    crearemos una función anónima conocida como closure, la cual en cada iteración 
    creara un card
*/
const listaProductos = productosIUDigital.map(function (iterador) {
  return `<html lang="en">
    <head>
    <link rel="stylesheet"href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
  />
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body>
    <div class="col s12 l4 m4">
        <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="${iterador.imagen}" alt="">
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">${iterador.nombreProd}
                    <i class="material-icons right">more_vert</i>
                </span>
                <p>${iterador.marca}</p>
            </div>
        <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">${iterador.idProd}
                <i class="material-icons right">close</i>
            </span>
            <p>${iterador.descripcion}</p>
        </div>
        </div>
    </div>
</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
</html>
`;
});

document.getElementById("listaProd").innerHTML = listaProductos