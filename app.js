const productos = [
    { nombre: "oreos", precio: 52},
    { nombre: "pepitos", precio: 67},
    { nombre: "macucas", precio: 43},
    { nombre: "pepas", precio: 35},
]

let carrito = []

let seleccion = prompt("Desea comprar galletitas? si o no");

while(seleccion != "si" && seleccion != "no");{
    alert("por favor ingrese si o no");
    seleccion = prompt("Desa comprar galletitas? si o no");
}

if(seleccion == "si"){
    alert("A continuacion nuestra lista de galletitas");
    let todosLosProductos = productos.map((productos) => productos.nombre + " " + productos.precio + "$")
    alert(todosLosProductos.join(" - "))
} else if (seleccion == "no"){
    alert("Gracias por venir, la proxima compre galletitas")
}

while(seleccion != "no"){
    let producto = prompt("Agrega algunas galletitas a tu carrito");
    let precio = 0;

    if(producto === "oreos" || producto === "pepitos" || producto === "macucas" || producto === "pepas"){
        switch(producto){
            case "oreos":
            precio = 52;
            break;

            case "pepitos":
            precio = 67;
            break;

            case "macucas":
            precio = 43;
            break;

            case "pepas":
            precio = 35;
            break;

            default:
            break;
    }

    let unidades = parseInt(prompt("cuantas unidades quiere llevar?"))

    carrito.push({producto, unidades, precio})
} else {
    alert("Galletita no disponible")
}

seleccion = prompt("Desea seguir comprando?")

while(seleccion === "no"){
    alert("Gracias por la compra")
    carrito.forEach((carritoFinal) => {
        alert(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio} $ `)
    })
break;
}

}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
alert(`el total a pagar por su compra es: ${total}$`)