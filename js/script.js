let carrito = []

function iniciarCarrito() {
  const nombre = document.getElementById("nombre").value
  const edad = document.getElementById("edad").value

  if (nombre && edad) {
    const edadNumero = parseInt(edad)
    mostrarBienvenida(nombre, edadNumero)
  } else {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Debes ingresar tu nombre y edad.",
    })
  }
}

function mostrarBienvenida(nombre, edad) {
  Swal.fire({
    icon: "success",
    title: "Bienvenido",
    text: `¡Bienvenido, ${nombre}! Tienes ${edad} años.`,
  })
}

// Función para agregar un producto al carrito
function agregarAlCarrito(nombre, edad) {
  const producto = document.getElementById("producto").value
  const color = document.getElementById("color").value
  const cantidad = parseInt(document.getElementById("cantidad").value)
  const envio = document.getElementById("envio").value

  let precio = 0
  switch (producto) {
    case "Pulsera":
      precio = Math.floor(Math.random() * 50) // Precio aleatorio entre 0 y 49
      break
    case "Anillo":
      precio = Math.floor(Math.random() * 30) // Precio aleatorio entre 0 y 29
      break
    case "Cadena":
      precio = Math.floor(Math.random() * 40) // Precio aleatorio entre 0 y 39
      break
    default:
      precio = 0
  }

  // Calculamos el costo total del producto
  let costoTotal = precio * cantidad

  // Creamos un objeto para el producto
  const productoEnCarrito = {
    tipo: producto,
    color: color,
    cantidad: cantidad,
    envio: envio,
    precioTotal: costoTotal > 0 ? costoTotal : 0,
  }

  // Convertimos el objeto a una cadena JSON
  const productoEnCarritoJSON = JSON.stringify(productoEnCarrito)

  // Almacenamos la cadena JSON en localStorage
  localStorage.setItem("productoEnCarrito", productoEnCarritoJSON)

  // Agregamos el producto al carrito
  carrito.push(productoEnCarrito)

  // Actualizamos el resumen del carrito
  actualizarResumenCarrito()
}

// Función para actualizar el resumen del carrito
function actualizarResumenCarrito() {
  const carritoList = document.getElementById("carrito")
  const totalElement = document.getElementById("total")
  let total = 0

  // Limpiamos el resumen del carrito
  carritoList.innerHTML = ""

  // Recorremos los productos en el carrito y los mostramos en el resumen
  carrito.forEach((producto) => {
    const { cantidad, color, tipo, envio, precioTotal } = producto // Desestructuración

    const listItem = document.createElement("li")
    listItem.textContent = `${cantidad} ${color} ${tipo}(s) - ${envio} - $${precioTotal}`
    carritoList.appendChild(listItem)

    total += precioTotal
  })

  // Función para cargar productos usando Fetch
  async function cargarProductos() {
    try {
      return await fetch("/productos.json", { method: "GET" })
        .then((res) => res.json())
        .then((data) => data)
    } catch (error) {
      console.log(error)
    }
  }

  // Función para mostrar los productos en el carrito
  function mostrarProductosEnCarrito() {
    const carritoList = document.getElementById("carrito")
    let total = 0

    cargarProductos()
      .then((productos) => {
        if (productos) {
          productos.forEach((producto) => {
            const { cantidad, color, tipo, envio, precioTotal } = producto // Desestructuración

            const listItem = document.createElement("li")
            listItem.textContent = `${cantidad} ${color} ${tipo}(s) - ${envio} - $${precioTotal}`
            carritoList.appendChild(listItem)

            total += precioTotal
          })
        }
      })
      .then(() => {
        // Muestra una alerta de SweetAlert para indicar que la compra se ha finalizado
        Swal.fire({
          title: "Compra Finalizada",
          text: "¡Gracias por tu compra!",
          icon: "success",
          confirmButtonText: "Aceptar",
        })
      })
      .catch((error) => {
        console.error(error)
      })

    // Actualiza el total en el carrito
    const totalElement = document.getElementById("total")
    totalElement.textContent = total
  }

  // Llama a la función para mostrar los productos en el carrito cuando se inicia el carrito
  mostrarProductosEnCarrito()

  // Actualizamos el total de la compra
  totalElement.textContent = total
}
