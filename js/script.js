let colorProducto
let tipoDeProducto
let nombreUsuario
let shippingCost = 0 // Initialize shipping cost to zero.

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

const productWeight = 2

const destination = prompt("Ingresa tu código postal:")

const shippingMethod = prompt(
  "Selecciona el método de envío:\n1-Envío estándar\n2-Envío express"
)

if (destination && shippingMethod) {
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

  alert(`El costo de envío es: $${shippingCost}`)
} else {
  alert("Por favor, ingresa tu código postal y selecciona un método de envío.")
}
