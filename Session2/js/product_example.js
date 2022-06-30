/* Objecto en js
    {key: value, key: value}
*/
const product ={
    idProd: 1,
    nombreProd: "Computador",
    marca: "ASUS",
    color: "Color"
}

/* Formas de imprimir el contenido del objeto */
console.log(product);
/* Mostrar únicamente las claves del producto */
console.log(Object.keys(product));
/* Mostrar únicamente las valores asignados a las claves del producto */
console.log(Object.values(product));
/* Mostrar tanto la clave como el valor en tuplas como si fueran arrays independientes */
console.log(Object.entries(product));

