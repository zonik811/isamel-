# Documentación: `css/styles.css`

## 📌 Descripción General
`css/styles.css` es la hoja de estilos principal del proyecto. Define la identidad visual de **Bicicletas CYBY**, variables de diseño, tipografía, paleta de colores oscuros/dorados, maquetación basada en CSS Grid y Flexbox, efectos visuales (Glassmorphism, hover transitions, sombras) y el diseño totalmente responsivo para móviles, tablets y monitores de escritorio.

---

## 🎨 Variables CSS (`:root`)
El archivo centraliza tokens de diseño para mantener la coherencia visual:

```css
:root {
  --color-primario: #0f172a;       /* Azul marino oscuro (slate 900) */
  --color-secundario: #1e293b;     /* Fondo secundario de tarjetas */
  --color-dorado: #f59e0b;         /* Acento principal amarillo/dorado CYBY */
  --color-dorado-hover: #d97706;   /* Tono hover dorado */
  --color-texto: #f8fafc;          /* Blanco de alto contraste */
  --color-texto-muted: #94a3b8;    /* Gris secundario para descripciones */
  --color-borde: rgba(255, 255, 255, 0.08); /* Bordes sutiles con transparencia */
  --radio-borde: 14px;             /* Radio estándar de tarjetas y botones */
  --sombra-card: 0 10px 25px -5px rgba(0, 0, 0, 0.4);
}
```

---

## 🧩 Bloques y Módulos de Estilo

### 1. Reset y Estilos Globales
- Tipografía moderna `system-ui, -apple-system, Segoe UI, Roboto, sans-serif`.
- Configuración de `box-sizing: border-box`, `smooth scrolling` y colores de fondo con degradados radiales.

### 2. Header y Navegación
- `.superior`: Contenedor flexible con alineación de logo y barra de búsqueda.
- `.buscador`: Input estilizado con selector desplegable de búsqueda (sitio vs internet) y botón integrado con lupa.
- `.inferior` y `.menu`: Barra de navegación horizontal con indicadores de estado activo (`.activo`) y efectos de hover con subrayado animado o iluminación en dorado.

### 3. Grid de Catálogo y Tarjetas (`.catalogo`, `.t-01`)
- Maquetación `display: grid` con `grid-template-columns: repeat(auto-fill, minmax(260px, 1fr))` para adaptación automática al tamaño de pantalla.
- `.t-01`: Tarjeta con diseño tipo Glassmorphism, borde semi-transparente, animación de elevación en `:hover` (`transform: translateY(-5px)`).
- `.img-t-01`: Contenedor de imagen centrado con fondo oscuro y efecto de zoom suave (`transform: scale(1.05)`).
- `.precio-tarjeta`: Tipografía destacada en color dorado CYBY (`#f59e0b`).
- `.acciones-tarjeta`: Fila de botones para añadir al carrito y ver detalle.

### 4. Botones del Sistema
- `.btn-agregar-carrito`: Botón llamativo con degradado dorado, texto oscuro e icono.
- `.btn-detalle`: Botón secundario con borde sutil para ingresar a la vista completa.
- `.btn-volver`: Botón de navegación hacia atrás con icono animado.

### 5. Ficha de Detalle de Producto (`.ficha`)
- Layout en 2 columnas (imagen ampliada a la izquierda + información técnica a la derecha).
- `.especificaciones`: Lista de especificaciones con iconos de Bootstrap en color de acento.
- Selectores de cantidad numéricos estilizados.

### 6. Sistema de Modales (`.modal`, `.modal-contenido`)
- Contenedor fijo de pantalla completa con backdrop oscuro semitransparente (`rgba(0, 0, 0, 0.7)`).
- Ventana modal centrada con animación `fadeIn`, botón de cierre `&times;` y texto justificado.

### 7. Componentes del Carrito de Compras
- `.cyby-cart-btn`: Botón flotante circular en la esquina inferior derecha con badge de conteo de productos.
- `.cyby-cart-drawer`: Panel lateral derecho (Offcanvas) con animación de entrada suave.
- `.cyby-cart-item`: Fila individual de producto con miniatura, controles de cantidad `+` / `-`, subtotales y botón de eliminar.
- `.cyby-notificacion-toast`: Mensajes emergentes (Toast) para confirmar acciones ("Producto añadido", "Carrito vaciado").

### 8. Footer Corporativo
- Distribución en columnas responsivas (Ubicación, Horarios, Contacto, Enlaces Legales).
- Franja inferior con derechos reservados.

---

## 📱 Media Queries y Diseño Responsivo
- `@media (max-width: 992px)`: Ajusta menús y fichas técnicas a layouts de una sola columna.
- `@media (max-width: 768px)`: Reorganiza la barra de búsqueda en el header, apila las columnas del footer y adapta las tarjetas del catálogo para pantallas táctiles.
- `@media (max-width: 480px)`: Reduce paddings, ajusta tamaños de fuente y amplía los botones a ancho completo para facilitar la interacción móvil.
