# Documentación: `js/producto.js`

## 📌 Descripción General
`js/producto.js` es el motor de renderizado para la vista de producto individual (`producto.html`). Obtiene el identificador (`id`) desde los parámetros de la URL, localiza el artículo en el dataset de `PRODUCTOS` y construye dinámicamente la ficha técnica con selectores interactivos de cantidad y opciones de compra inmediata.

---

## ⚙️ Lógica y Funcionamiento

### 1. Inicialización y Lectura de Parámetros
- Al dispararse `DOMContentLoaded`, busca el contenedor `#detalleProducto`.
- Parsea la URL con `URLSearchParams`:
  ```javascript
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"), 10);
  ```

### 2. Validación de Existencia
- Busca el objeto coincidente en `PRODUCTOS` con `p.id === id`.
- **Si no existe o el ID es inválido:** Renderiza una pantalla de advertencia con un botón de retorno a `catalogo.html`.

### 3. Renderizado de la Ficha Técnica
Si el producto es encontrado, realiza lo siguiente:
- Actualiza dinámicamente la etiqueta `<title>` del documento: `${producto.nombre} | Bicicletas CYBY`.
- Inyecta el contenido estructurado en `#detalleProducto`:
  1. **Visual:** Imagen ampliada del producto con texto alternativo.
  2. **Metadata:** Etiqueta de categoría, título y descripción extendida.
  3. **Especificaciones:** Lista con iconos que detalla materiales, colores, dimensiones, peso y precio.
  4. **Controles de Cantidad:** Input `#cantDetalle` con botones decrementales y de incremento.
  5. **Botón "Añadir al Carrito":**
     ```javascript
     const cant = parseInt(document.getElementById('cantDetalle').value, 10) || 1;
     carritoCYBY.agregarProducto(producto.id, cant);
     ```
  6. **Botón "Comprar por WhatsApp":** Añade el producto al carrito y ejecuta inmediatamente `carritoCYBY.enviarPedidoWhatsApp()`.
  7. **Botón "Cotizar por Formulario":** Redirige hacia `contacto.html?producto=NombreDelProducto`.
  8. **Botón "Volver al catálogo":** Enlace directo a `catalogo.html`.
