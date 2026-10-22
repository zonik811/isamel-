# Documentación: `catalogo.html`

## 📌 Descripción General
`catalogo.html` es la vista principal del catálogo de compras de **Bicicletas CYBY**. Ofrece una interfaz dinámica donde el usuario puede explorar los 47 productos organizados por categorías, filtrar interactivamente sin recargar la página y realizar búsquedas de texto.

---

## 🏗️ Estructura del Archivo

### 1. Cabecera y Navegación
- Incluye el `<header>` compartido del sitio con el formulario de búsqueda global.
- Resalta la pestaña **Catálogo** como activa en el menú de navegación (`class="activo"`).

### 2. Barra de Filtros por Categoría (`.barra-filtros`)
Ofrece botones de filtrado rápido identificados con el atributo `data-categoria`:
- **Todos:** Muestra el catálogo completo.
- **Manubrios:** `data-categoria="manubrios"`
- **Puños:** `data-categoria="punios"`
- **Sillines:** `data-categoria="sillines"`
- **Cuadros:** `data-categoria="cuadros"`
- **Horquillas & Tijeras:** `data-categoria="horquillas"`
- **Accesorios & Canastillas:** `data-categoria="accesorios"`

### 3. Encabezado de Resultados
- `#tituloCatalogo`: Encabezado que se actualiza dinámicamente según el filtro seleccionado o el término buscado.
- `#contadorProductos`: Muestra la cantidad de artículos visibles (ejemplo: *"47 productos"*).

### 4. Contenedor de Resultados (`#gridCatalogo`)
- Contenedor con clase CSS `.catalogo` donde el script `js/catalogo.js` inyecta las tarjetas de producto de manera dinámica.
- Si no hay coincidencias, muestra un mensaje informativo de "No se encontraron productos".

### 5. Scripts Requeridos
```html
<script src="js/productos.js"></script>
<script src="js/modales.js"></script>
<script src="js/buscador.js"></script>
<script src="js/carrito.js"></script>
<script src="js/catalogo.js"></script>
```

---

## ⚙️ Parámetros de URL Soportados
`catalogo.html` interpreta automáticamente parámetros vía query string:
- `?cat=punios`: Carga directamente el catálogo filtrado por la categoría de puños.
- `?q=cross`: Filtra los productos cuyo nombre, descripción o categoría contengan "cross".
