// Lógica para la página de Catálogo (catalogo.html)
document.addEventListener("DOMContentLoaded", () => {
  const gridCatalogo = document.getElementById("gridCatalogo");
  const filtroBotones = document.querySelectorAll(".filtro-btn");
  const contadorProductos = document.getElementById("contadorProductos");
  const tituloSeccion = document.getElementById("tituloCatalogo");

  if (!gridCatalogo) return;

  const listaProductos = (typeof PRODUCTOS !== "undefined") ? PRODUCTOS : [];

  // Parámetros de URL para búsqueda o filtro inicial
  const params = new URLSearchParams(window.location.search);
  const busquedaParam = params.get("q") ? params.get("q").toLowerCase().trim() : "";
  const catParam = params.get("cat") ? params.get("cat").toLowerCase().trim() : "todos";

  function renderizarProductos(productos) {
    gridCatalogo.innerHTML = "";

    if (productos.length === 0) {
      gridCatalogo.innerHTML = `
        <div class="col-12 text-center py-5">
          <div class="card p-4 border-0 shadow-sm">
            <i class="bi bi-search text-warning fs-1 mb-3"></i>
            <h3 class="h4 text-dark">No se encontraron productos</h3>
            <p class="text-muted">Intenta con otra categoría o término de búsqueda.</p>
          </div>
        </div>
      `;
      if (contadorProductos) contadorProductos.textContent = "0 productos";
      return;
    }

    if (contadorProductos) {
      contadorProductos.textContent = `${productos.length} producto${productos.length > 1 ? "s" : ""}`;
    }

    productos.forEach((p) => {
      const card = document.createElement("div");
      card.className = "t-01";
      card.innerHTML = `
        <div class="titulo-tarjeta">
          <h2>${p.nombre}</h2>
        </div>
        <div class="img-t-01">
          <img src="${p.imagen}" alt="${p.nombre}">
        </div>
        <div class="texto-t-01">
          <p>${p.descripcion}</p>
          <span class="precio-tarjeta">${p.precio}</span>
          <div class="acciones-tarjeta">
            <button class="btn-agregar-carrito" onclick="carritoCYBY.agregarProducto(${p.id})">
              <i class="bi bi-cart-plus"></i> Añadir
            </button>
            <a href="producto.html?id=${p.id}" class="btn-detalle" title="Ver Detalle">
              <i class="bi bi-eye"></i>
            </a>
          </div>
        </div>
      `;
      gridCatalogo.appendChild(card);
    });
  }

  function filtrar(categoria = "todos", busqueda = "") {
    let filtrados = listaProductos;

    if (categoria && categoria !== "todos") {
      filtrados = filtrados.filter((p) => p.categoria.toLowerCase() === categoria.toLowerCase());
    }

    if (busqueda) {
      filtrados = filtrados.filter((p) => 
        p.nombre.toLowerCase().includes(busqueda) || 
        p.descripcion.toLowerCase().includes(busqueda) ||
        p.categoria.toLowerCase().includes(busqueda) ||
        (p.categoriaTexto && p.categoriaTexto.toLowerCase().includes(busqueda))
      );
      if (tituloSeccion) {
        tituloSeccion.textContent = `Resultados de búsqueda: "${busqueda}"`;
      }
    } else if (categoria !== "todos" && tituloSeccion) {
      tituloSeccion.textContent = `Catálogo: ${categoria.toUpperCase()}`;
    } else if (tituloSeccion) {
      tituloSeccion.textContent = "Nuestro Catálogo Completo";
    }

    renderizarProductos(filtrados);
  }

  // Event listeners para los filtros
  filtroBotones.forEach((btn) => {
    btn.addEventListener("click", () => {
      filtroBotones.forEach((b) => b.classList.remove("activo"));
      btn.classList.add("activo");
      const categoria = btn.dataset.categoria || "todos";
      filtrar(categoria, "");
    });
  });

  // Carga inicial basada en parámetros o todos
  if (busquedaParam) {
    filtrar("todos", busquedaParam);
  } else if (catParam && catParam !== "todos") {
    filtrar(catParam, "");
    filtroBotones.forEach((b) => {
      if (b.dataset.categoria === catParam) b.classList.add("activo");
      else b.classList.remove("activo");
    });
  } else {
    filtrar("todos", "");
  }
});
