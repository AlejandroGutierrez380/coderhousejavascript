/*EL CODIGO ES SOBRE LA TIENDA MERAQUI DE ACCESORIOS*/

let colorProducto
let tipoDeProducto

let shippingCost = 0 // Inicializa el costo de envío en cero.

let nombreUsuario = prompt("¡Hola! Ingresa tu nombre")
let edadUsuario = prompt("Por favor, ingresa tu edad")

alert(
  "¡Hola, " + nombreUsuario + "! Tienes " + edadUsuario + " años. Bienvenido."
)

function obtenerColorProducto() {
  while (true) {
    const colorInput = prompt(
      "Ingrese el color del producto que desea:\n1-Negro\n2-Plateado\n3-Dorado"
    )

    const colorProducto = parseInt(colorInput)
    let productoElegido = {}

    switch (colorProducto) {
      case 1:
        productoElegido = {
          nombre: "Negro",
          precio: 100.567, // Precio con decimales
          modelo: "Modelo Negro",
          caracteristicas: ["Cromado", "Carbón"],
        }
        break
      case 2:
        productoElegido = {
          nombre: "Plateado",
          precio: 120.789, // Precio con decimales
          modelo: "Modelo Plateado",
          caracteristicas: ["Cromado", "Plata"],
        }
        break
      case 3:
        productoElegido = {
          nombre: "Dorado",
          precio: 130.345, // Precio con decimales
          modelo: "Modelo Dorado",
          caracteristicas: ["Cromado", "Oro"],
        }
        break
      default:
        alert("No has introducido un valor válido.")
        break
    }

    // Redondear el precio a dos decimales
    productoElegido.precio = Math.round(productoElegido.precio * 100) / 100

    return productoElegido
  }
}

// Llama a la función para obtener el color del producto
const colorElegido = obtenerColorProducto()

console.log("El color elegido es:", colorElegido)

// Función para obtener el tipo de producto
function obtenerTipoDeProducto() {
  let productosElegidos = [] // Array para almacenar los productos
  let costoEnvio = 10
  let totalAccesorios = 0 // Variable para rastrear el número total de accesorios seleccionados

  while (true) {
    const tipoDeProducto = parseInt(
      prompt("Ingrese el producto que desea:\n1-Aretes\n2-Anillos\n3-Pulseras")
    )

    if (isNaN(tipoDeProducto) || tipoDeProducto < 1 || tipoDeProducto > 3) {
      alert("No has introducido un valor válido.")
      continue // Continuar el bucle para solicitar una entrada válida
    }

    let cantidad = 0
    let precioUnitario = 0

    switch (tipoDeProducto) {
      case 1:
        cantidad = parseInt(prompt("Ingrese la cantidad de aretes que desea:"))
        precioUnitario = Math.abs(25) // Precio unitario con valor absoluto
        productosElegidos.push({
          tipo: "Aretes",
          precioUnitario: precioUnitario,
          material: "Acero Inoxidable",
          cantidad: cantidad,
          costoTotal: cantidad * precioUnitario,
        })
        totalAccesorios += cantidad // Sumar la cantidad de aretes seleccionados al total
        break
      case 2:
        cantidad = parseInt(prompt("Ingrese la cantidad de anillos que desea:"))
        precioUnitario = Math.abs(30) // Precio unitario con valor absoluto
        productosElegidos.push({
          tipo: "Anillos",
          precioUnitario: precioUnitario,
          material: "Plata",
          cantidad: cantidad,
          costoTotal: cantidad * precioUnitario,
        })
        totalAccesorios += cantidad // Sumar la cantidad de anillos seleccionados al total
        break
      case 3:
        cantidad = parseInt(
          prompt("Ingrese la cantidad de pulseras que desea:")
        )
        precioUnitario = Math.abs(40) // Precio unitario con valor absoluto
        productosElegidos.push({
          tipo: "Pulseras",
          precioUnitario: precioUnitario,
          material: "Cuero",
          cantidad: cantidad,
          costoTotal: cantidad * precioUnitario,
        })
        totalAccesorios += cantidad // Sumar la cantidad de pulseras seleccionadas al total
        break
      default:
        alert("No has introducido un valor válido.")
        continue // Continuar el bucle para solicitar una entrada válida
    }

    // Si el usuario selecciona un producto válido, salir del bucle.
    break
  }

  // Calcular la suma total de los productos
  let sumaTotal = productosElegidos.reduce(function (acumulador, producto) {
    return acumulador + producto.costoTotal
  }, 0)

  // Agregar el número total de accesorios al costo total
  sumaTotal += totalAccesorios

  // Sumar el costo de envío a la suma total
  sumaTotal += costoEnvio

  return {
    productos: productosElegidos,
    costoEnvio: costoEnvio,
    sumaTotal: sumaTotal,
  }
}
// Llamamos a la función para obtener el tipo de producto
const tipoElegido = obtenerTipoDeProducto()

console.log("El tipo de producto elegido es:", tipoElegido)

const productWeights = [0.5, 0.8, 1.2] // Pesos de los productos (en kilogramos).

const destination = prompt("Ingresa tu código postal:")

const shippingMethod = prompt(
  "Selecciona el método de envío:\n1-Envío estándar\n2-Envío express"
)

if (destination && shippingMethod) {
  let productValue

  switch (tipoDeProducto) {
    case 1:
      productValue = 20 // Valor de los aretes en dólares.
      break
    case 2:
      productValue = 30 // Valor de los anillos en dólares.
      break
    case 3:
      productValue = 40 // Valor de las pulseras en dólares.
      break
    default:
      productValue = 30
  }

  const productWeight = productWeights[tipoDeProducto - 1]

  switch (shippingMethod) {
    case "1":
      if (productWeight < 1) {
        shippingCost = 5
      } else if (productWeight >= 1 && productWeight <= 5) {
        shippingCost = 10
      } else {
        shippingCost = 15
      }
      break
    case "2":
      if (productWeight < 1) {
        shippingCost = 15
      } else if (productWeight >= 1 && productWeight <= 5) {
        shippingCost = 20
      } else {
        shippingCost = 25
      }
      break
    default:
      alert("Método de envío no válido.")
  }

  const totalCost = productValue + shippingCost

  alert(`El costo de los productos es: $${productValue}`)
  alert(`El costo de envío es: $${shippingCost}`)
  alert(`El costo total es: $${totalCost}`)
} else {
  alert("Por favor, ingresa tu código postal y selecciona un método de envío.")
}
