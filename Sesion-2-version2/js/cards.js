const lenguajesProgramacion = ["JS", "Python", "PHP", "Java", "Elixir"];
const tipoLenguaje = [
  "Dinámico",
  "Dinámico",
  "Dinámico",
  "Estricto",
  "Dinámico",
];

const imagenLenguaje = ["img2", "img3", "img2", "img3", "img2"]

const contenidoDinamico = document.querySelector(".container");

for (let index = 0; index < lenguajesProgramacion.length; index++) {
  const fetch = document.querySelector(".container").innerHTML;
  contenidoDinamico.innerHTML =
    `<div id="cards${index}" class="boxes">
        <div class="box-content">
            <h2>${lenguajesProgramacion[index]}</h2>
            <p>
            ${tipoLenguaje[index]}
            </p>
        <a class="showmore" href="#">Ver más</a>
        </div>
    </div>` + fetch;
    var bgimg = document.getElementById(`cards${index}`)
    bgimg.style.backgroundImage = `url('img/${lenguajesProgramacion[index]}.jpg')`
}

console.log(contenidoDinamico);