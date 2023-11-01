/*EL CODIGO ES SOBRE LA TIENDA MERAQUI DE ACCESORIOS*/

let colorProducto
let tipoDeProducto

let shippingCost = 0 // Inicializa el costo de envío en cero.

const nombreUsuario = document.querySelector("#nombreUsuario").value
const edadUsuario = document.querySelector("#edadUsuario").value

// Valida los datos del formulario
if (!nombreUsuario || !edadUsuario) {
  alert("Por favor, ingresa tu nombre y edad.")
  return
}

// Si la edad del usuario no es un número, asigna el valor "Edad desconocida"
edadUsuario = isNaN(edadUsuario) ? "Edad desconocida" : edadUsuario

// Muestra un mensaje de bienvenida al usuario
alert(`¡Hola, ${nombreUsuario}! Tienes ${edadUsuario} años. Bienvenido.`)

const colorInput = document.querySelector("#colorInput").value

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
    return
}

if (productoElegido.nombre) {
  productoElegido.precio = Math.round(productoElegido.precio * 100) / 100

  // Almacenar el producto elegido en localStorage como JSON
  localStorage.setItem("productoElegido", JSON.stringify(productoElegido))

  return productoElegido
}

// Para recuperar el producto almacenado en localStorage como JSON:
const productoAlmacenado = JSON.parse(localStorage.getItem("productoElegido"))

if (productoAlmacenado) {
  console.log("Producto almacenado en localStorage:", productoAlmacenado)
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

  const valoresProductos = {
    1: 20, // Valor de los aretes en dólares.
    2: 30, // Valor de los anillos en dólares.
    3: 40, // Valor de las pulseras en dólares.
  }

  productValue = valoresProductos[tipoDeProducto] || 30

  const productWeight = productWeights[tipoDeProducto - 1]

  // Definir un objeto con los costos de envío
  const costosDeEnvio = {
    1: {
      "<1": 5,
      "1-5": 10,
      ">5": 15,
    },
    2: {
      "<1": 15,
      "1-5": 20,
      ">5": 25,
    },
  }

  const costoMetodo = costosDeEnvio[shippingMethod]
  let shippingCost

  if (costoMetodo) {
    shippingCost =
      productWeight < 1
        ? costoMetodo["<1"]
        : productWeight >= 1 && productWeight <= 5
        ? costoMetodo["1-5"]
        : costoMetodo[">5"]
    alert(`El costo de envío es: $${shippingCost}`)
  } else {
    alert("Método de envío no válido.")
  }

  const totalCost = productValue + shippingCost

  alert(`El costo de los productos es: $${productValue}`)
  alert(`El costo de envío es: $${shippingCost}`)
  alert(`El costo total es: $${totalCost}`)
} else {
  alert("Por favor, ingresa tu código postal y selecciona un método de envío.")
}
