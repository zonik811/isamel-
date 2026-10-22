# Documentación: `js/modales.js`

## 📌 Descripción General
`js/modales.js` es el controlador para los diálogos emergentes legales del sitio: **Aviso Legal** y **Políticas de Privacidad**. Proporciona una experiencia de usuario fluida permitiendo abrir, cerrar y descartar los modales a través de múltiples métodos de interacción (clics en botones, clics fuera del contenedor y pulsación de la tecla Escape).

---

## ⚙️ Lógica y Funcionamiento

### 1. Elementos Controlados
- Modales: `#modalAviso` y `#modalPrivacidad`.
- Disparadores de Apertura: `#abrirAviso` y `#abrirPrivacidad` (enlaces en el footer).
- Botones de Cierre: `#cerrarAviso` y `#cerrarPrivacidad` (iconos `&times;` dentro de la tarjeta modal).

### 2. Apertura de Modales
- Escucha el evento `click` sobre los enlaces del pie de página.
- Previene el salto de anclaje predeterminado (`e.preventDefault()`).
- Establece la propiedad CSS `style.display = "block"` sobre el modal correspondiente.

### 3. Métodos de Cierre Implementados

1. **Clic en el botón de cerrar (`x`):**
   - Establece `modal.style.display = "none"`.
2. **Clic fuera de la tarjeta (Backdrop Click):**
   - Escucha clics en `window`. Si `event.target === modal`, detecta que el usuario pulsó sobre el fondo oscuro semitransparente y cierra la ventana.
3. **Pulsación de la tecla Escape (`keydown`):**
   - Si `event.key === "Escape"`, cierra inmediatamente cualquier modal que se encuentre abierto.
