# Documentación: `js/carrito.js`

## 📌 Descripción General
`js/carrito.js` implementa el sistema interactivo de compras para **Bicicletas CYBY**. Maneja el estado global del carrito, el almacenamiento persistente en el navegador (`localStorage`), la interfaz de usuario con botón flotante y panel lateral deslizable (Offcanvas Drawer), el cálculo dinámico de subtotales y totales en MXN, y la exportación y checkout directo estructurado hacia la **API de WhatsApp**.

---

## 🏛️ Arquitectura: Clase `CarritoCYBY`

El script crea e instancia automáticamente un objeto global accesible como `window.carritoCYBY`.

### Constante de Contacto:
```javascript
const CYBY_WHATSAPP_PHONE = "525555329490"; // Número oficial con lada internacional (+52)
```

---

## 🛠️ Métodos Principales

### 1. `constructor()`
- Recupera los productos guardados previamente desde `localStorage` mediante `cargarDeStorage()`.
- Llama a `initUI()` para inyectar dinámicamente el botón flotante del carrito, el panel lateral (`.cyby-cart-drawer`) y el contenedor de notificaciones toast.
- Actualiza el contador de items visibles.

### 2. `cargarDeStorage()` y `guardarEnStorage()`
- **Clave de almacenamiento:** `"cyby_carrito"`.
- Serializa y deserializa el array de productos en formato JSON con control de errores `try...catch`.

### 3. `agregarProducto(id, cantidad = 1)`
- Busca el producto en el array global `PRODUCTOS` de `js/productos.js`.
- Limpia y formatea el valor numérico del precio (ejemplo: `"$1,250 MXN"` -> `1250`).
- Si el producto ya está en el carrito, incrementa su cantidad; si no, lo inserta con sus metadatos (imagen, nombre, precio, categoría).
- Dispara una animación visual y muestra una notificación flotante (Toast).

### 4. `cambiarCantidad(id, delta)`
- Modifica la cantidad del producto especificado (+1 o -1).
- Si la cantidad llega a 0, invoca automáticamente `eliminarProducto(id)`.
- Recalcula los totales en tiempo real.

### 5. `eliminarProducto(id, notificar = true)`
- Remueve el producto del array y actualiza el almacenamiento y la vista.

### 6. `vaciarCarrito()`
- Solicita confirmación al usuario y vacía completamente el carrito.

### 7. `calcularTotales()`
- Retorna un objeto con:
  - `totalItems`: Número total de unidades de productos.
  - `totalPrecio`: Suma monetaria acumulada en pesos mexicanos (MXN).

### 8. `renderizarDrawer()`
- Genera el HTML de cada fila del carrito en el panel lateral:
  - Miniatura de la imagen.
  - Título y precio unitario.
  - Controles de incremento/decremento de cantidad.
  - Subtotal por producto.
  - Botón de eliminar con icono de cesto de basura.
- Muestra el total final en MXN y los botones de acción:
  - **"Pedir por WhatsApp":** Inicia el checkout.
  - **"Vaciar Carrito":** Limpia la lista.

### 9. `enviarPedidoWhatsApp()`
Construye un mensaje codificado para la URL de WhatsApp (`https://api.whatsapp.com/send?phone=...`) con un formato estructurado y profesional:
```text
🚴 *¡HOLA BICICLETAS CYBY!*
Quiero realizar el siguiente pedido desde su catálogo web:

*1.* Manubrios Cross Pro
   • Cantidad: 2
   • Precio unitario: $280 MXN
   • Subtotal: $560 MXN

*2.* Cuadro MTB Reforzado
   • Cantidad: 1
   • Precio unitario: $1,250 MXN
   • Subtotal: $1,250 MXN

═══════════════════
*TOTAL:* $1,810 MXN
*TOTAL DE ARTÍCULOS:* 3
═══════════════════

¿Me podrían confirmar disponibilidad y formas de entrega o envío? ¡Gracias!
```

---

## 🔔 Sistema de Notificaciones Toast
- Método `mostrarNotificacion(mensaje, tipo)`: Genera avisos no invasivos en la esquina superior derecha que se desvanecen automáticamente tras 3 segundos.
