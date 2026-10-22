# Documentación: `js/buscador.js`

## 📌 Descripción General
`js/buscador.js` gestiona la lógica del formulario de búsqueda situado en el header de todas las páginas del sitio web (`#formBuscador`). Permite al usuario buscar tanto dentro del catálogo local de la tienda como realizar consultas automáticas externas en el motor de búsqueda de Google.

---

## ⚙️ Lógica y Funcionamiento

### 1. Elementos del DOM Controlados
- `#formBuscador`: Formulario contenedor en la barra superior.
- `#inputBuscador`: Campo de entrada de texto donde el usuario escribe el término deseado.
- `#tipoBusqueda`: Menú desplegable (`<select>`) con dos opciones:
  - `value="sitio"`: Búsqueda interna en el catálogo de Bicicletas CYBY.
  - `value="internet"`: Búsqueda externa en Google.

### 2. Manejo del Evento `submit`
Cuando el usuario presiona Enter o hace clic en el botón de búsqueda:
1. Se previene la recarga de página por defecto (`e.preventDefault()`).
2. Se extrae el texto ingresado y se eliminan espacios sobrantes (`trim()`).
3. Si el campo está vacío, se coloca el foco en el input sin realizar ninguna acción.
4. **Si el tipo es `"internet"`:**
   - Construye la consulta codificada con prefijo de marca: `encodeURIComponent('Bicicletas CYBY ' + termino)`.
   - Abre una nueva pestaña hacia `https://www.google.com/search?q=...` mediante `window.open(..., '_blank')`.
5. **Si el tipo es `"sitio"` (por defecto):**
   - Redirige al catálogo con el parámetro de consulta en la URL:
     ```javascript
     window.location.href = `catalogo.html?q=${encodeURIComponent(termino)}`;
     ```
