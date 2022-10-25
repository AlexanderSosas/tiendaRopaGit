const btnCarrito = document.querySelector("#cart");
const ventanaCarrito = document.querySelector(".cart-modal-overlay");
const cerrarCarrito = document.querySelector("#close-btn");
const botonesComprar = document.querySelectorAll(".add-to-cart");
const contenedorCarrito = document.querySelector(".product-rows");
const totalCarrito = document.querySelector('.total-price');
const totalProducto = document.querySelector(".cart-quantity");
let carrito = [];

class Producto {
    constructor(id, nombre, precio, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen
    }
}
// abrir el carrito 
btnCarrito.addEventListener("click", ()=> {
    ventanaCarrito.classList.add("open");
})

//cerrar carrito
cerrarCarrito.addEventListener("click", ()=> {
    ventanaCarrito.classList.remove("open");
})

console.log(botonesComprar);
//agregar a cada boton la funcion para agregar el producto al carrito
botonesComprar.forEach(boton => {
    boton.addEventListener("click", agregarCarrito);
})



function agregarCarrito(e){
    boton = e.target;
    console.log(e.target);
    let padre = boton.parentElement;
    let prodID = padre.getAttribute("id");
    let nombreProd = padre.querySelector("h3").textContent;
    let precio = parseFloat(padre.querySelector('.product-price').textContent.replace("$", ""));
    let imagen = padre.querySelector('.product-image').src;
    
    const prodCarrito = new Producto(prodID,nombreProd, precio, imagen);

    carrito.push(prodCarrito);
    popularCarrito();
    ActualizarCantidadCarrito();
}

function popularCarrito(){
    contenedorCarrito.innerHTML = '';
    carrito.forEach(producto => {
        contenedorCarrito.innerHTML += `
            <div class='product-row' id='${producto.id}'>
                <img src='${producto.imagen}' class='cart-image' />
                <span>${producto.nombre}</span>
                <span class='cart-price'>$${producto.precio}</span>
                <input type='number' value='1' class="product-quantity" />
                <button class="remove-btn">Borrar</button>
            </div>
        `
    })
    actualizarTotal();
    
}

function actualizarTotal() {
    let total = carrito.reduce((acc, producto)=>{ 
        return acc + producto.precio 
    },0)
    // console.log(total)
    totalCarrito.innerHTML = `$${total}`
}

function ActualizarCantidadCarrito () {
    totalProducto.textContent = carrito.length;
}

// alert("Bienvenido a la tienda de ropa Online");
// carritoCompra = [];
// // messageSeleccion();

// class Ropa {
//     constructor(nombre, cantidad, precio) {
//         this.nombre = nombre;
//         this.cantidad = cantidad;
//         this.precio = precio;
//     }

//     comprarItem(cantidad) {
//         let cantidadIngresada = parseInt(cantidad);
//         let precioInicial = this.precio;

//         this.cantidad = cantidadIngresada;
//         carritoCompra.push(new Ropa(this.nombre, this.cantidad, this.precio))
//         this.precio = precioInicial;
//     };
// }

// const pantalon = new Ropa("pantalon", 0, 350);
// const vestido = new Ropa("vestido", 0, 550);
// const polo = new Ropa("polo", 0 , 650);
// const blusa = new Ropa("blusa", 0 , 750);


// function messageSeleccion(){
//     let seleccionarOpcion = parseInt(prompt("Actualmente contamos con prendas disponibles : 1- Comprar || 2- Salir"));

//     while (seleccionarOpcion !== 1 && seleccionarOpcion !== 2) {
//         alert("Selección ingresada no es correcta");
//         seleccionarOpcion = parseInt(prompt(" 1- Comprar || 2- Salir"));
//     }
//     if (seleccionarOpcion === 1) {
//         addComprarRopa();
//     } else if (seleccionarOpcion === 2) {
//         alert("Gracias por visitarnos, vuelva pronto");
//     }
// }

// messageSeleccion();

// function addComprarRopa(){
// let seleccion;
// let cantidad;

// seleccion = parseInt(prompt("Seleccionar prenda: 1- pantalon || 2- vestido || 3- polo || 4- blusa"));
// while (seleccion != 1 && seleccion != 2 && seleccion != 3 && seleccion != 4)
// {
// alert("No seleccionaste una opcion correcta")
// seleccion = parseInt(prompt("Seleccionar prenda: 1- pantalon 2- vestido 3- polo 4- blusa"));
// }

// switch(seleccion){

// case (1):
// cantidad = parseInt(prompt("Ingresar cantidad a comprar"));
// item1(cantidad);
// break;            

// case (2):
// cantidad = parseInt(prompt("Ingresar cantidad a comprar"));
// item2(cantidad);
// break;               

// case (3):
// cantidad = parseInt(prompt("Ingresar cantidad a comprar"));
// item3(cantidad);
// break;

// case (4):
// cantidad = parseInt(prompt("Ingresar cantidad a comprar"));
// item4(cantidad);
// break;

// default:
// alert("No seleccionaste una prenda")
// break;        
// }

// totalizarCarrito(carritoCompra);
// alert("Gracias por visitarnos");
// }


// addComprarRopa();

// function totalizarCarrito(carritoCompra) {
//     const totalCarrito = carritoCompra.reduce((acumulador, ropa) => acumulador + (ropa.precio * ropa.cantidad), 0);
//     alert("El precio total de tu compra es de: S./" + totalCarrito)
//     return (totalCarrito)
// }


// function item1(cantidad){
//     pantalon.comprarItem(cantidad);
// }

// function item2(cantidad){
//     vestido.comprarItem(cantidad);
// }

// function item3(cantidad){
//     polo.comprarItem(cantidad);
// }

// function item4(cantidad){
//     blusa.comprarItem(cantidad);
// }
    

//     // let cantidad;
//     // let precio;
//     // let montoTotal = 0;

//     // switch(seleccion){

//     //     case "pantalon":
//     //         cantidad = parseInt(prompt("Ingresa la cantidad que deseas"));
//     //         precio = 50;
//     //         montoTotal = cantidad * precio;
//     //         // alert(`El monto total a pagar es ${montoTotal}`)
//     //         messagePago();
//     //         break;
//     //     case "vestido":
//     //          cantidad = parseInt(prompt("Ingresa la cantidad que deseas"));
//     //          precio = 80;
//     //          montoTotal = cantidad * precio;
//     //         //  alert(`El monto total a pagar es ${montoTotal}`)
//     //         messagePago();
//     //          break;        
//     //     case "polo":
//     //          cantidad = parseInt(prompt("Ingresa la cantidad que deseas"));
//     //          precio = 120;
//     //          montoTotal = cantidad * precio;
//     //         //  alert(`El monto total a pagar es ${montoTotal}`)
//     //         messagePago();
//     //          break;    
//     //     case "blusa":
//     //          cantidad = parseInt(prompt("Ingresa la cantidad que deseas"));
//     //          precio = 90;
//     //          montoTotal = cantidad * precio;
//     //         //  alert(`El monto total a pagar es ${montoTotal}`)
//     //         messagePago();
//     //          break;    
//     //     default:
//     //         alert("No seleccionaste la prenda correcta")
//     //         messageSeleccion();
//     //         messagePago();
//     // }

// // }

// // function messagePago(){
// //     alert(`El monto total a pagar es ${montoTotal}`);
// // }

// // messageSeleccion();

// // let estado;
// // alert(estado = (prompt("Deseas seguir comprando, Si o No").toLowerCase()));
// // if (estado != "" || estado != "no"){
// //     messageSeleccion()
// // } else alert("Gracias por su compra");






// // let edad = parseInt(prompt("cual es tu edad"));
// // if(edad <= 17){
// //     alert("eres un niño");
// // }
// // else if(edad <=40){
// //     alert("sos un joven");
// // }
// // else alert("trajiste tu baston");


// // let edad = parseInt(prompt("Ingresar su edad"));
// // console.log('ver edad', edad);
// // let message = (edad <= 17) ? 'eres un niño': (edad <= 40 ) ? 'sos un joven' : 'trajiste tu baston';
// // alert(message);
// // console.log('ver message', message);

// // 
