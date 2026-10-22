// Manejo del formulario de búsqueda
document.addEventListener("DOMContentLoaded", () => {
  const formBuscador = document.getElementById("formBuscador");
  const inputBuscador = document.getElementById("inputBuscador");
  const tipoBusqueda = document.getElementById("tipoBusqueda");

  if (formBuscador && inputBuscador) {
    formBuscador.addEventListener("submit", (e) => {
      e.preventDefault();
      const termino = inputBuscador.value.trim();

      if (!termino) {
        inputBuscador.focus();
        return;
      }

      const tipo = tipoBusqueda ? tipoBusqueda.value : "sitio";

      if (tipo === "internet") {
        // Búsqueda en Google
        const queryGoogle = encodeURIComponent(`Bicicletas CYBY ${termino}`);
        window.open(`https://www.google.com/search?q=${queryGoogle}`, "_blank");
      } else {
        // Búsqueda en el catálogo del sitio
        window.location.href = `catalogo.html?q=${encodeURIComponent(termino)}`;
      }
    });
  }
});
