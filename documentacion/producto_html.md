# Documentación: `producto.html`

## 📌 Descripción General
`producto.html` es una página dinámica con vista de detalle individual. A través del parámetro de consulta `?id=X` en la URL, carga y renderiza toda la información técnica, imagen en alta resolución, precio y opciones de compra del producto correspondiente desde la base de datos `js/productos.js`.

---

## 🏗️ Estructura del Archivo

### 1. Cabecera y Navegación
- Muestra el encabezado general con barra de búsqueda global y menú de navegación.

### 2. Contenedor de Detalle (`#detalleProducto`)
- Este contenedor está vacío inicialmente en el HTML base y es poblado por `js/producto.js` durante el evento `DOMContentLoaded`.
- **Estructura generada dinámicamente:**
  - **Columna Izquierda (`.izquierda`):** Título del producto y contenedor de imagen con efecto zoom.
  - **Columna Derecha (`.derecha`):**
    - Badge con la categoría.
    - Descripción extendida del producto.
    - Precio destacado en formato `$XXX MXN`.
    - Lista de especificaciones técnicas: Materiales, Colores, Dimensiones, Peso y Compatibilidad.
    - **Selector de Cantidad:** Botones `+` y `-` con input numérico (`#cantDetalle`).
    - **Botón "Añadir al Carrito":** Agrega la cantidad seleccionada invocando `carritoCYBY.agregarProducto(id, cant)`.
    - **Botón "Comprar por WhatsApp":** Añade el producto y abre inmediatamente el checkout de WhatsApp con el pedido estructurado.
    - **Botón "Cotizar por Formulario":** Redirige a `contacto.html?producto=...`.

### 3. Estado de Error / Producto no encontrado
Si el parámetro `?id` no existe en la URL o no coincide con ningún producto de `js/productos.js`, el script inyecta una tarjeta de alerta con botón para volver al catálogo:
```html
<div class="card p-5 text-center shadow-sm">
  <h2 class="text-danger mb-3"><i class="bi bi-exclamation-triangle"></i> Producto no encontrado</h2>
  <p class="text-muted mb-4">El producto solicitado no existe o fue removido de nuestro catálogo.</p>
  <a href="catalogo.html" class="btn-volver">Volver al catálogo</a>
</div>
```

### 4. Scripts Requeridos
```html
<script src="js/productos.js"></script>
<script src="js/modales.js"></script>
<script src="js/buscador.js"></script>
<script src="js/carrito.js"></script>
<script src="js/producto.js"></script>
```
