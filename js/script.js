/*EL CODIGO ES SOBRE LA TIENDA MERAQUI DE ACCESORIOS*/

let colorProducto
let tipoDeProducto
let nombreUsuario
let shippingCost = 0 // Inicializa el costo de envío en cero.

nombreUsuario = prompt("¡Hola! Ingresa tu nombre")

while (true) {
  colorProducto = parseInt(
    prompt(
      "Ingrese el color del producto que desea:\n1-Negro\n2-Plateado\n3-Dorado"
    )
  )
  switch (colorProducto) {
    case 1:
    case 2:
    case 3:
      break
    default:
      alert("No has introducido un valor válido.")
  }
  if (colorProducto >= 1 && colorProducto <= 3) {
    break
  }
}

while (true) {
  tipoDeProducto = parseInt(
    prompt("Ingrese el producto que desea:\n1-Aretes\n2-Anillos\n3-Pulseras")
  )
  switch (tipoDeProducto) {
    case 1:
    case 2:
    case 3:
      break
    default:
      alert("No has introducido un valor válido.")
  }
  if (tipoDeProducto >= 1 && tipoDeProducto <= 3) {
    break
  }
}

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
      productValue = 0
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
