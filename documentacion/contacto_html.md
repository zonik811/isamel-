# Documentación: `contacto.html`

## 📌 Descripción General
`contacto.html` centraliza los canales de atención al cliente, cotización para compras al mayoreo, ubicación física y soporte técnico de **Bicicletas CYBY**.

---

## 🏗️ Estructura del Archivo

### 1. Cabecera y Menú
- Header estandarizado del sitio web con el enlace a "Contacto" activo.

### 2. Contenedor de Contacto (`.contacto-contenedor`)
El diseño divide el contenido en dos columnas principales:

#### A. Columna Izquierda: Formulario de Mensaje (`.formulario-contacto`)
- **Campos del formulario (`#formContacto`):**
  - **Nombre completo:** Campo de texto obligatorio.
  - **Correo electrónico:** Validación de email `type="email"`.
  - **Teléfono / WhatsApp:** Campo numérico para contacto rápido.
  - **Asunto / Motivo:** Selector con opciones (Cotización al Mayoreo, Consulta de Producto, Soporte Técnico, Distribución, Otro).
  - **Mensaje:** Área de texto (`<textarea>`) para detallar la solicitud.
- **Botón de Envío:** Dispara un evento para confirmación visual o redirección asistida.
- **Autocompletado por URL:** Si se accede mediante `contacto.html?producto=Nombre`, el asunto o mensaje puede pre-cargarse con el producto de interés.

#### B. Columna Derecha: Canales y Ubicación (`.datos-contacto`)
- **Dirección física:** Emilio Carranza 444, Col. El retoño, Alc. Iztapalapa, C.P. 09440, CDMX, México.
- **Teléfono directo:** 55 5532 9490.
- **WhatsApp directo:** Botón con enlace dinámico `https://wa.me/525555329490`.
- **Horarios de atención:** Lunes a viernes de 08:00 a 18:00 hrs y sábados de 09:00 a 14:00 hrs.
- **Mapa embebido:** Iframe interactivo de Google Maps que muestra la localización exacta del establecimiento.

### 3. Pie de Página y Scripts
- Incluye el pie de página global, modales de términos/privacidad y scripts habituales (`productos.js`, `modales.js`, `buscador.js`, `carrito.js`).
