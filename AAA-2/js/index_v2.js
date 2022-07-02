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

const contenido = document.querySelector(".container");
for (let index = 0; index < productsIUDigital.length; index++) {
  const fetch = document.querySelector(".container").innerHTML;
  contenido.innerHTML =
    `<div id ="cards${index}" class="boxes">
    <div class="box-content">
        <h4>${productsIUDigital[index].idProd}</h4>
        <h5>${productsIUDigital[index].nomProd}</h5>
        <p>
        ${productsIUDigital[index].description}
        </p>
    </div>
  </div>
  ` + fetch;
  const imageProducto = document.getElementById(`cards${index}`)
  imageProducto.style.backgroundImage= `url(${productsIUDigital[index].image})`
}
