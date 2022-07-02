const productsIUDigital = [
  {
    idProd: 1,
    nomProd: "Producto 1",
    image: "./img/img1.jpg",
    description: "lorem input...",
  },
  {
    idProd: 2,
    nomProd: "Producto 2",
    image: "./img/img2.jpg",
    description: "lorem input...",
  },
  {
    idProd: 3,
    nomProd: "Producto 3",
    image: "./img/img3.jpg",
    description: "lorem input...",
  },
  {
    idProd: 4,
    nomProd: "Producto 4",
    image: "./img/img4.jpg",
    description: "lorem input...",
  },
  {
    idProd: 5,
    nomProd: "Producto 5",
    image: "./img/img5.jpg",
    description: "lorem input...",
  },
  {
    idProd: 6,
    nomProd: "Producto 6",
    image: "./img/img6.jpg",
    description: "lorem input...",
  },
];

for (let index = 0; index < productsIUDigital.length; index++) {
  const element = productsIUDigital[index];
  console.log(element);
}

const recorridoArray = productsIUDigital.map(function (iterador) {
  console.log(
    iterador.idProd +
      " " +
      iterador.nomProd +
      " " +
      iterador.image +
      " " +
      iterador.description
  );
});

const recorridoArray2 = productsIUDigital.map(function (iterador) {
  console.log(
    `IdProducto ${iterador.idProd} NombreProducto ${iterador.nomProd}`
  );
});

const recorridoArray3 = productsIUDigital.map(function (iterador) {
  return `<html lang="en">
  <head>
  <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
    />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    </head>
  <body>
    <div class="col s12 m4 l4">
        <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="${iterador.image}"/>
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4"> ${iterador.nomProd}
                    <i class="material-icons right">more_vert</i>
                </span>
            </div>
            <div class="card-reveal">
                <span class="card-title activator grey-text text-darken-4"> ${iterador.nomProd}
                <i class="material-icons right">close</i>
                </span>
                <p> ${iterador.description}</p>
            </div>
        </div>
    </div>
  </body>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  </html>`;
});

document.getElementById("Productos").innerHTML = recorridoArray3;
