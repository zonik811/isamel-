# Documentación: `home.html`

## 📌 Descripción General
`home.html` actúa como una vista de inicio alternativa que replica de forma fiel el diseño y la estructura visual de `index.html`. Permite mantener redundancia y compatibilidad con enlaces internos y rutas fijas que referencian `home.html`.

---

## 🏗️ Estructura del Archivo

### 1. Metadatos y Encabezado
- Carga de Bootstrap 5, Bootstrap Icons y `css/styles.css`.
- Configuración del título: `Bicicletas CYBY | Inicio`.

### 2. Header y Menú
- Header estandarizado con barra de búsqueda dual (Interna / Google).
- Menú de navegación idéntico que resalta la opción activa de "Inicio" y enlaza a todas las demás páginas del sitio.

### 3. Hero y Productos Destacados
- Sección con el banner oficial `portada01.png`.
- 7 tarjetas de productos destacados con integración a los scripts de carrito `carritoCYBY.agregarProducto(id)` y enlaces a la vista individual `producto.html?id=X`.

### 4. Footer y Modales
- Bloque de pie de página con información legal, ubicación y redes sociales.
- Modales `#modalAviso` y `#modalPrivacidad`.

### 5. Inclusión de Scripts
- `js/productos.js`
- `js/modales.js`
- `js/buscador.js`
- `js/carrito.js`

---

## 💡 Buenas Prácticas y Mantenimiento
Cualquier cambio de contenido en la portada (como promociones, banners o tarjetas destacadas) debe reflejarse sincronizadamente tanto en `index.html` como en `home.html`.
