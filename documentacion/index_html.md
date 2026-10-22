# Documentación: `index.html`

## 📌 Descripción General
`index.html` es el punto de entrada principal del sitio web de **Bicicletas CYBY**. Sirve como la página de inicio (Landing Page) que presenta la identidad de la marca, los beneficios clave y una selección curada de productos destacados con acceso directo al catálogo completo y al carrito de compras.

---

## 🏗️ Estructura del Archivo

### 1. Cabecera (`<head>`)
- **Metadatos:** Codificación `UTF-8` y viewport responsivo para dispositivos móviles.
- **Título:** `Bicicletas CYBY | Inicio`.
- **Librerías externas:**
  - `Bootstrap 5.3.3` (CSS) para componentes base y utilidades de espaciado.
  - `Bootstrap Icons 1.11.3` para iconografía ciclista, navegación y acciones.
- **Estilos internos:** Enlace a `css/styles.css`.

### 2. Encabezado (`<header>`)
- **Parte Superior (`.superior`):**
  - Logotipo oficial de la marca (`imgs/logo_cyby01.png`) con enlace a `index.html`.
  - Formulario del buscador con selector de ámbito (búsqueda dentro de CYBY o externa en Google).
- **Parte Inferior (`.inferior` / `<nav>`):**
  - Menú de navegación con enlaces a: Inicio (`index.html` activo), Catálogo (`catalogo.html`), Novedades (`novedades.html`), Quiénes somos (`nosotros.html`) y Contacto (`contacto.html`).

### 3. Sección Hero (`<section class="hero">`)
- Banner visual principal con la imagen de portada de la marca (`imgs/portada01.png`).

### 4. Contenido Principal (`<main class="contenedor">`)
- **Sección Intro (`<section class="intro">`):** Breve descripción corporativa sobre la fabricación y distribución de componentes ciclistas de alta durabilidad.
- **Sección Encabezado:** Título "Productos Destacados" y botón de acceso rápido al catálogo completo.
- **Grid de Productos Destacados (`<section class="catalogo">`):** Muestra 7 tarjetas iniciales con productos representativos (Manubrios, Puños, Sillín, Cuadro MTB, Tijera, Horquilla, Canastilla). Cada tarjeta incluye:
  - Título y miniatura del producto.
  - Breve descripción y precio en formato MXN.
  - Botón de adición directa al carrito invocando `carritoCYBY.agregarProducto(id)`.
  - Enlace al detalle completo del producto (`producto.html?id=X`).

### 5. Pie de Página (`<footer>`)
- Información de contacto, dirección física en CDMX, horarios de atención, enlaces a redes sociales y enlaces para abrir los modales de Aviso Legal y Políticas de Privacidad.

### 6. Modales Legales
- Contenedores `#modalAviso` y `#modalPrivacidad` ocultos por defecto, activados dinámicamente mediante `js/modales.js`.

### 7. Scripts Inyectados
- `Bootstrap 5.3.3 Bundle` (JS con Popper).
- `js/productos.js` (Dataset de productos).
- `js/modales.js` (Control de apertura/cierre de modales).
- `js/buscador.js` (Manejador de consultas de búsqueda).
- `js/carrito.js` (Inicializador global del carrito y botón flotante).

---

## 🔗 Relación con otros archivos
- **Estilos:** Requiere `css/styles.css` para el layout Grid de las tarjetas y estilos visuales.
- **Funcionalidad:** Depende de `js/productos.js` y `js/carrito.js` para que el botón "Añadir al Carrito" funcione interactivamente y mantenga la persistencia en `localStorage`.
