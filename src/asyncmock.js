const products = [
    {nombre: "Yerba", precio: 500, id: 1, img: "./img/yerba.jpg"},
    {nombre: "Fideos", precio: 180, id: 2, img: "./img/fideos.jpg"},
    {nombre: "Arroz", precio: 200, id: 3, img: "./img/arroz.jpg"},
    {nombre: "Aceite", precio: 400, id: 4, img: "./img/aceite.jpg"}
]


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(products);
        }, 2000)
    })
}