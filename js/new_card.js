let productNameForm = document.getElementById("productName");
let productStockForm = document.getElementById("productStock");
let imageProductForm = document.getElementById("imageProduct");
let productDescriptionForm = document.getElementById("productDescription");

let btnAddProducto = document.getElementById("btnAddProduct");
let cardsProductos = document.getElementById("listProducts");

const tituloCards = ["Flor1", "Flor2", "Flor3", "Flor4", "Flor5", "Flor6"];
const cantidadStock = [4, 6, 5, 8, 4, 0];
const descripcionCards = [
  "lorem input flor 1",
  "lorem input flor 2",
  "lorem input flor 3",
  "lorem input flor 4",
  "lorem input flor 5",
  "lorem input flor 6",
];
const imagenCards = ["img1", "img2", "img3", "img4", "img5", "img6"];

const AddProduct = () => {
  tituloCards.push(productNameForm.value);
  cantidadStock.push(productStockForm.value);
  descripcionCards.push(productDescriptionForm.value);
  imagenCards.push(imageProductForm.value);
  for (let index = 0; index < tituloCards.length; index++) {
    const fetch = document.getElementById("listProducts").innerHTML;
    cardsProductos.innerHTML =
      `<div id="cards${index}" class="boxes">
            <div class="box-content">
                <h4>${tituloCards[index]}</h4>
                <h5>Cantidad en Stock ${cantidadStock[index]}</h5>
                <p><small>${descripcionCards[index]}</small></p>
            </div>
        </div>` + fetch;
    let imageCardProduct = document.getElementById(`cards${index}`);
    imageCardProduct.style.backgroundImage = `url('assets/${imagenCards[index]}.jpg')`;
  }
};

btnAddProducto.addEventListener("click", AddProduct);
