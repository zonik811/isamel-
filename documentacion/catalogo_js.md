# Documentación: `js/catalogo.js`

## 📌 Descripción General
`js/catalogo.js` controla toda la interactividad de la página `catalogo.html`. Se encarga de procesar el listado de productos de `PRODUCTOS`, renderizar las tarjetas dentro del grid, gestionar los filtros por categoría y las búsquedas por texto, así como leer los parámetros iniciales desde la URL del navegador.

---

## ⚙️ Lógica y Funcionamiento

### 1. Inicialización (`DOMContentLoaded`)
- Obtiene referencias al DOM: `#gridCatalogo`, `.filtro-btn`, `#contadorProductos` y `#tituloCatalogo`.
- Lee los parámetros de la URL mediante `URLSearchParams`:
  - `q`: Término de búsqueda textual.
  - `cat`: Categoría solicitada (ejemplo: `punios`, `manubrios`, etc.).

### 2. Función `renderizarProductos(productos)`
- Limpia el contenedor `#gridCatalogo`.
- Si el listado recibido está vacío, genera una vista amigable de "No se encontraron productos" y actualiza el contador a `0 productos`.
- Si existen coincidencias:
  - Actualiza el contador textual (ejemplo: `12 productos`).
  - Itera sobre cada elemento creando dinámicamente una tarjeta `.t-01` con:
    - Título del producto.
    - Imagen (`<img src="${p.imagen}">`).
    - Descripción resumida y precio.
    - Botón para agregar al carrito llamando a `carritoCYBY.agregarProducto(id)`.
    - Enlace a la vista individual `producto.html?id=X`.

### 3. Función `filtrar(categoria, busqueda)`
- Realiza el filtrado combinando criterios:
  - **Por Categoría:** Compara la clave `p.categoria` con la categoría seleccionada (o muestra todos si es `"todos"`).
  - **Por Texto de Búsqueda:** Realiza búsquedas sin distinción de mayúsculas sobre `nombre`, `descripcion` y `categoria`.
- Actualiza dinámicamente el título de la sección (`#tituloCatalogo`):
  - *Resultados de búsqueda: "término"*
  - *Catálogo: MANUBRIOS*
  - *Nuestro Catálogo Completo*
- Ejecuta `renderizarProductos()` con el subconjunto resultante.

### 4. Manejadores de Eventos (Event Listeners)
- Asigna eventos `click` a cada botón `.filtro-btn` para alternar la clase `.activo` y ejecutar el filtrado instantáneo.
- Ejecuta el filtrado inicial si la URL incluía parámetros `q` o `cat`.
