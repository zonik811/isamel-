// ============================================================
// CARRITO DE COMPRAS & REDIRECCIÓN A WHATSAPP - BICICLETAS CYBY
// ============================================================

const CYBY_WHATSAPP_PHONE = "525555329490"; // 55 5532 9490 con código país México (+52)

class CarritoCYBY {
  constructor() {
    this.items = this.cargarDeStorage();
    this.initUI();
    this.actualizarContador();
  }

  cargarDeStorage() {
    try {
      const guardado = localStorage.getItem("cyby_carrito");
      return guardado ? JSON.parse(guardado) : [];
    } catch (e) {
      console.error("Error al cargar carrito:", e);
      return [];
    }
  }

  guardarEnStorage() {
    try {
      localStorage.setItem("cyby_carrito", JSON.stringify(this.items));
      this.actualizarContador();
    } catch (e) {
      console.error("Error al guardar carrito:", e);
    }
  }

  agregarProducto(id, cantidad = 1) {
    const lista = (typeof PRODUCTOS !== "undefined") ? PRODUCTOS : [];
    const prod = lista.find(p => p.id === Number(id));

    if (!prod) {
      this.mostrarNotificacion("Producto no encontrado", "error");
      return;
    }

    // Limpiar precio numérico
    const precioNumerico = parseInt(String(prod.precio).replace(/[^0-9]/g, ""), 10) || 0;

    const itemExistente = this.items.find(item => item.id === prod.id);

    if (itemExistente) {
      itemExistente.cantidad += cantidad;
    } else {
      this.items.push({
        id: prod.id,
        nombre: prod.nombre,
        precioTexto: prod.precio,
        precioUnitario: precioNumerico,
        imagen: prod.imagen,
        categoria: prod.categoriaTexto || prod.categoria,
        cantidad: cantidad
      });
    }

    this.guardarEnStorage();
    this.renderizarDrawer();
    this.animarBotonCarrito();
    this.mostrarNotificacion(`¡${prod.nombre} añadido al carrito!`, "exito");
  }

  cambiarCantidad(id, delta) {
    const item = this.items.find(i => i.id === Number(id));
    if (!item) return;

    item.cantidad += delta;
    if (item.cantidad <= 0) {
      this.eliminarProducto(id, false);
      return;
    }

    this.guardarEnStorage();
    this.renderizarDrawer();
  }

  eliminarProducto(id, notificar = true) {
    const itemIndex = this.items.findIndex(i => i.id === Number(id));
    if (itemIndex > -1) {
      const eliminado = this.items[itemIndex];
      this.items.splice(itemIndex, 1);
      this.guardarEnStorage();
      this.renderizarDrawer();
      if (notificar) {
        this.mostrarNotificacion(`${eliminado.nombre} eliminado del carrito`, "info");
      }
    }
  }

  vaciarCarrito() {
    if (this.items.length === 0) return;
    if (confirm("¿Seguro que deseas vaciar tu carrito de compras?")) {
      this.items = [];
      this.guardarEnStorage();
      this.renderizarDrawer();
      this.mostrarNotificacion("Carrito vaciado", "info");
    }
  }

  obtenerTotal() {
    return this.items.reduce((total, item) => total + (item.precioUnitario * item.cantidad), 0);
  }

  obtenerCantidadTotal() {
    return this.items.reduce((total, item) => total + item.cantidad, 0);
  }

  actualizarContador() {
    const totalCantidad = this.obtenerCantidadTotal();
    const badges = document.querySelectorAll(".contador-carrito");
    badges.forEach(b => {
      b.textContent = totalCantidad;
      if (totalCantidad > 0) {
        b.style.display = "inline-flex";
      } else {
        b.style.display = "none";
      }
    });
  }

  animarBotonCarrito() {
    const btn = document.getElementById("btnAbrirCarritoFlotante");
    if (btn) {
      btn.classList.add("animacion-pulso");
      setTimeout(() => btn.classList.remove("animacion-pulso"), 600);
    }
  }

  mostrarNotificacion(mensaje, tipo = "exito") {
    let contenedorToast = document.getElementById("contenedorToastCYBY");
    if (!contenedorToast) {
      contenedorToast = document.createElement("div");
      contenedorToast.id = "contenedorToastCYBY";
      contenedorToast.className = "toast-cyby-contenedor";
      document.body.appendChild(contenedorToast);
    }

    const toast = document.createElement("div");
    toast.className = `toast-cyby toast-${tipo}`;
    
    let icono = "bi-check-circle-fill";
    if (tipo === "error") icono = "bi-exclamation-triangle-fill";
    if (tipo === "info") icono = "bi-info-circle-fill";

    toast.innerHTML = `
      <i class="bi ${icono} me-2"></i>
      <span>${mensaje}</span>
    `;

    contenedorToast.appendChild(toast);

    setTimeout(() => {
      toast.classList.add("mostrar");
    }, 10);

    setTimeout(() => {
      toast.classList.remove("mostrar");
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  enviarPedidoWhatsApp() {
    if (this.items.length === 0) {
      this.mostrarNotificacion("Tu carrito está vacío", "error");
      return;
    }

    let mensaje = `¡Hola *Bicicletas CYBY*! 👋🚲\nQuisiera realizar la cotización / pedido del siguiente carrito desde su sitio web:\n\n`;
    mensaje += `🛒 *RESUMEN DE MI PEDIDO:*\n`;
    mensaje += `━━━━━━━━━━━━━━━━━━━━━\n`;

    this.items.forEach((item, index) => {
      const subtotal = (item.precioUnitario * item.cantidad).toLocaleString("es-MX");
      mensaje += `*${index + 1}.* ${item.nombre}\n`;
      mensaje += `   • Cantidad: ${item.cantidad}\n`;
      mensaje += `   • P. Unitario: $${item.precioUnitario.toLocaleString("es-MX")} MXN\n`;
      mensaje += `   • Subtotal: *$${subtotal} MXN*\n\n`;
    });

    const totalFormateado = this.obtenerTotal().toLocaleString("es-MX");
    mensaje += `━━━━━━━━━━━━━━━━━━━━━\n`;
    mensaje += `💰 *TOTAL ESTIMADO:* *$${totalFormateado} MXN*\n\n`;
    mensaje += `📍 *Dirección de envío / entrega:* (Indicar aquí si requiere envío o recoge en taller/tienda)\n\n`;
    mensaje += `¿Podrían confirmarme disponibilidad y formas de pago? ¡Muchas gracias!`;

    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${CYBY_WHATSAPP_PHONE}&text=${encodeURIComponent(mensaje)}`;
    window.open(urlWhatsApp, "_blank");
  }

  initUI() {
    // Inyectar Drawer y Botón Flotante si no existen
    if (!document.getElementById("drawerCarritoCYBY")) {
      const drawer = document.createElement("div");
      drawer.id = "drawerCarritoCYBY";
      drawer.className = "drawer-carrito-overlay";
      drawer.innerHTML = `
        <div class="drawer-carrito-panel">
          <div class="drawer-header">
            <div class="d-flex align-items-center gap-2">
              <i class="bi bi-cart3 fs-4 text-warning"></i>
              <h3 class="m-0 fs-5 fw-bold text-white">Mi Carrito de Compras</h3>
            </div>
            <button class="btn-cerrar-drawer" id="btnCerrarCarrito" title="Cerrar">&times;</button>
          </div>

          <div class="drawer-body" id="drawerContenidoItems">
            <!-- Items del carrito -->
          </div>

          <div class="drawer-footer" id="drawerFooterCarrito">
            <!-- Total y botón WhatsApp -->
          </div>
        </div>
      `;
      document.body.appendChild(drawer);

      // Eventos de apertura/cierre
      document.getElementById("btnCerrarCarrito").addEventListener("click", () => this.cerrarDrawer());
      drawer.addEventListener("click", (e) => {
        if (e.target === drawer) this.cerrarDrawer();
      });
    }

    // Botón flotante de carrito
    if (!document.getElementById("btnAbrirCarritoFlotante")) {
      const btnFlotante = document.createElement("button");
      btnFlotante.id = "btnAbrirCarritoFlotante";
      btnFlotante.className = "btn-flotante-carrito shadow-lg";
      btnFlotante.title = "Ver Carrito";
      btnFlotante.innerHTML = `
        <i class="bi bi-cart3 fs-4"></i>
        <span class="contador-carrito">0</span>
      `;
      btnFlotante.addEventListener("click", () => this.abrirDrawer());
      document.body.appendChild(btnFlotante);
    }

    // Botón flotante de WhatsApp directo
    if (!document.getElementById("btnFlotanteWhatsApp")) {
      const btnWA = document.createElement("a");
      btnWA.id = "btnFlotanteWhatsApp";
      btnWA.className = "btn-flotante-whatsapp shadow-lg";
      btnWA.href = `https://api.whatsapp.com/send?phone=${CYBY_WHATSAPP_PHONE}&text=${encodeURIComponent("¡Hola Bicicletas CYBY! Quisiera información sobre sus productos.")}`;
      btnWA.target = "_blank";
      btnWA.title = "Escríbenos por WhatsApp";
      btnWA.innerHTML = `<i class="bi bi-whatsapp fs-3"></i>`;
      document.body.appendChild(btnWA);
    }

    // Tecla Escape para cerrar
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") this.cerrarDrawer();
    });
  }

  abrirDrawer() {
    this.renderizarDrawer();
    const drawer = document.getElementById("drawerCarritoCYBY");
    if (drawer) {
      drawer.classList.add("activo");
      document.body.style.overflow = "hidden";
    }
  }

  cerrarDrawer() {
    const drawer = document.getElementById("drawerCarritoCYBY");
    if (drawer) {
      drawer.classList.remove("activo");
      document.body.style.overflow = "";
    }
  }

  renderizarDrawer() {
    const contenedor = document.getElementById("drawerContenidoItems");
    const footer = document.getElementById("drawerFooterCarrito");
    if (!contenedor || !footer) return;

    if (this.items.length === 0) {
      contenedor.innerHTML = `
        <div class="carrito-vacio text-center py-5">
          <i class="bi bi-cart-x text-muted" style="font-size: 4rem;"></i>
          <h4 class="mt-3 text-dark fw-bold">Tu carrito está vacío</h4>
          <p class="text-muted small">Explora nuestro catálogo y agrega manubrios, puños, cuadros y refacciones.</p>
          <a href="catalogo.html" class="btn btn-warning fw-bold px-4 py-2 mt-2 rounded-pill" onclick="carritoCYBY.cerrarDrawer()">
            <i class="bi bi-bicycle me-1"></i> Ir al Catálogo
          </a>
        </div>
      `;
      footer.innerHTML = "";
      return;
    }

    let itemsHTML = '<div class="lista-items-carrito">';
    this.items.forEach(item => {
      const subtotal = (item.precioUnitario * item.cantidad).toLocaleString("es-MX");
      itemsHTML += `
        <div class="item-carrito">
          <div class="item-img">
            <img src="${item.imagen}" alt="${item.nombre}">
          </div>
          <div class="item-info">
            <h5 class="item-nombre">${item.nombre}</h5>
            <span class="item-categoria">${item.categoria}</span>
            <div class="item-precio">$${item.precioUnitario.toLocaleString("es-MX")} MXN</div>
            <div class="item-controles">
              <div class="control-cantidad">
                <button onclick="carritoCYBY.cambiarCantidad(${item.id}, -1)" title="Disminuir">-</button>
                <span>${item.cantidad}</span>
                <button onclick="carritoCYBY.cambiarCantidad(${item.id}, 1)" title="Aumentar">+</button>
              </div>
              <span class="item-subtotal">Subtotal: $${subtotal} MXN</span>
            </div>
          </div>
          <button class="btn-eliminar-item" onclick="carritoCYBY.eliminarProducto(${item.id})" title="Eliminar">&times;</button>
        </div>
      `;
    });
    itemsHTML += '</div>';
    contenedor.innerHTML = itemsHTML;

    const totalFormateado = this.obtenerTotal().toLocaleString("es-MX");
    footer.innerHTML = `
      <div class="d-flex justify-content-between align-items-center mb-3">
        <span class="fw-bold text-dark fs-6">Total (${this.obtenerCantidadTotal()} items):</span>
        <span class="fw-bold text-dark fs-4">$${totalFormateado} MXN</span>
      </div>
      <div class="d-grid gap-2">
        <button class="btn btn-success btn-lg fw-bold btn-whatsapp-checkout py-3 d-flex align-items-center justify-content-center gap-2" onclick="carritoCYBY.enviarPedidoWhatsApp()">
          <i class="bi bi-whatsapp fs-5"></i> Pedir por WhatsApp
        </button>
        <div class="d-flex justify-content-between">
          <button class="btn btn-link text-danger text-decoration-none btn-sm" onclick="carritoCYBY.vaciarCarrito()">
            <i class="bi bi-trash"></i> Vaciar Carrito
          </button>
          <button class="btn btn-link text-muted text-decoration-none btn-sm" onclick="carritoCYBY.cerrarDrawer()">
            Seguir comprando →
          </button>
        </div>
      </div>
    `;
  }
}

// Inicializar instancia global
let carritoCYBY;
document.addEventListener("DOMContentLoaded", () => {
  carritoCYBY = new CarritoCYBY();
});
