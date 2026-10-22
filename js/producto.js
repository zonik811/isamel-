// Página detalle de producto
document.addEventListener("DOMContentLoaded", function () {
  const contenedor = document.getElementById("detalleProducto");
  if (!contenedor) return;

  // Obtener el id de la URL
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"), 10);

  // Usar PRODUCTOS (definidos en js/productos.js) o fallback local
  const listaProductos = (typeof PRODUCTOS !== "undefined") ? PRODUCTOS : [];
  const producto = listaProductos.find((p) => p.id === id);

  if (!producto) {
    contenedor.innerHTML = `
      <div class="card p-5 text-center shadow-sm">
        <h2 class="text-danger mb-3"><i class="bi bi-exclamation-triangle"></i> Producto no encontrado</h2>
        <p class="text-muted mb-4">El producto solicitado no existe o fue removido de nuestro catálogo.</p>
        <div>
          <a href="catalogo.html" class="btn-volver"><i class="bi bi-arrow-left me-1"></i> Volver al catálogo</a>
        </div>
      </div>
    `;
    return;
  }

  // Actualizar título de la página
  document.title = `${producto.nombre} | Bicicletas CYBY`;

  contenedor.innerHTML = `
    <div class="ficha">
      <div class="izquierda">
        <h2>${producto.nombre}</h2>
        <div class="contenedor-img-detalle">
          <img src="${producto.imagen}" alt="${producto.nombre}">
        </div>
      </div>
      <div class="derecha">
        <span class="etiqueta-categoria"><i class="bi bi-tag-fill me-1"></i>${producto.categoriaTexto || producto.categoria}</span>
        <p class="descripcion-producto">${producto.descripcion}</p>
        <div class="precio-destacado">${producto.precio || "Consultar precio"}</div>
        <ul class="especificaciones">
          <li><strong><i class="bi bi-layers me-1 text-warning"></i> Materiales:</strong> <span>${producto.materiales || "No especificado"}</span></li>
          <li><strong><i class="bi bi-palette me-1 text-warning"></i> Colores:</strong> <span>${producto.colores || "No especificado"}</span></li>
          <li><strong><i class="bi bi-aspect-ratio me-1 text-warning"></i> Dimensiones:</strong> <span>${producto.dimensiones || "Estándar"}</span></li>
          <li><strong><i class="bi bi-speedometer2 me-1 text-warning"></i> Peso:</strong> <span>${producto.peso || "No especificado"}</span></li>
          <li><strong><i class="bi bi-cash-coin me-1 text-warning"></i> Precio:</strong> <span class="fw-bold text-dark">${producto.precio || "Consultar"}</span></li>
        </ul>
        <div class="d-flex align-items-center gap-3 mb-4">
          <div class="d-flex align-items-center border rounded-3 bg-light p-1">
            <button class="btn btn-sm btn-outline-secondary border-0 px-2 fw-bold" onclick="let inp = document.getElementById('cantDetalle'); if(inp.value > 1) inp.value--;">-</button>
            <input type="number" id="cantDetalle" value="1" min="1" max="99" class="form-control text-center border-0 bg-transparent fw-bold p-0" style="width: 45px;">
            <button class="btn btn-sm btn-outline-secondary border-0 px-2 fw-bold" onclick="let inp = document.getElementById('cantDetalle'); inp.value++;">+</button>
          </div>
          <button class="btn-agregar-carrito py-2 px-4 fs-6" onclick="const cant = parseInt(document.getElementById('cantDetalle').value, 10) || 1; carritoCYBY.agregarProducto(${producto.id}, cant);">
            <i class="bi bi-cart-plus fs-5"></i> Añadir al Carrito
          </button>
        </div>
        <div class="acciones-producto">
          <button class="btn btn-success d-flex align-items-center gap-2 px-4 py-2 rounded-3 fw-bold shadow-sm" onclick="const cant = parseInt(document.getElementById('cantDetalle').value, 10) || 1; carritoCYBY.agregarProducto(${producto.id}, cant); carritoCYBY.enviarPedidoWhatsApp();">
            <i class="bi bi-whatsapp fs-5"></i> Comprar por WhatsApp
          </button>
          <a href="contacto.html?producto=${encodeURIComponent(producto.nombre)}" class="btn-cotizar"><i class="bi bi-envelope me-1"></i> Cotizar por Formulario</a>
        </div>
      </div>
    </div>
    <div class="volver-wrapper">
      <a href="catalogo.html" class="btn-volver"><i class="bi bi-arrow-left me-1"></i> Volver al catálogo</a>
    </div>
  `;
});
