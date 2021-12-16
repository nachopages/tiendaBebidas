let mostrarLista = prompt("queres ver la lista?")



const productos = [
    { id: 1, producto: "vodka", precio: 1900, imagen: "./img/absolut.jpg" },
    { id: 2, producto: "whisky", precio: 2500, imagen: "./img/whisky.jpg" },
    { id: 3, producto: "cerveza", precio: 280, imagen: "./img/cerveza.jpg" }
]


function validarEdad() {
    edad = prompt("ingrese edad")

    edad = parseInt(edad)
    while (typeof edad === "number") {
        if (edad < 18) {
            edad = prompt("sos menor de edad! Intentelo nuevamente")
            edad = parseInt(edad)
        } else if (edad >= 18) {
            alert("Lista de precios x consola")
            console.log(vodka, whisky, cerveza)
            break;
        }
    }
}


function comprar() {
    preg1 = prompt('vas a comprar?')
    while (typeof preg1 == 'string') {
        preg2 = prompt('que vas a comprar?')
        if (preg2 == 'Vodka') {
            cantidad = prompt("ingrese cantidad")
            cantidad = parseInt(cantidad)
            precioFinal = vodka[2] * cantidad
            alert(`precio final es ${precioFinal}`)
        } else if (preg2 == 'Whisky') {
            cantidad = prompt("ingrese cantidad")
            cantidad = parseInt(cantidad)
            precioFinal = whisky[2] * cantidad
            alert(`precio final es ${precioFinal}`)
        } else if (preg2 == 'Cerveza') {
            cantidad = prompt("ingrese cantidad")
            cantidad = parseInt(cantidad)
            precioFinal = cerveza[2] * cantidad
            alert(`precio final es ${precioFinal}`)
        } else if (preg2 == 'finalizar') {
            alert('Adios!')
            break;
        }
    }
}



//DOM//


if (mostrarLista == 'si') {
    const contenedor = document.getElementById("container")
    productos.forEach((productos) => {
        let card = document.createElement("div")
        card.classList.add("card")
        card.innerHTML = `
    <img src="${productos.imagen}">
    <h5>${productos.producto}</h5>
    <span> precio:${productos.precio}</span>
    <button id="enviar">comprar</button>
    `
        contenedor.appendChild(card)
    })
}