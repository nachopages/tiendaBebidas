const productos = [
    { id: 1, producto: "vodka", precio: 1900 },
    { id: 2, producto: "whisky", precio: 2500 },
    { id: 3, producto: "cerveza", precio: 280 }
]

console.log(productos.sort(function(a, b) {
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1
    }
    return a.precio - b.precio;
}))