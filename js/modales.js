// Manejo de ventanas modales: Aviso Legal y Políticas de Privacidad
document.addEventListener("DOMContentLoaded", () => {
  const modalAviso = document.getElementById("modalAviso");
  const modalPrivacidad = document.getElementById("modalPrivacidad");

  const abrirAviso = document.getElementById("abrirAviso");
  const abrirPrivacidad = document.getElementById("abrirPrivacidad");

  const cerrarAviso = document.getElementById("cerrarAviso");
  const cerrarPrivacidad = document.getElementById("cerrarPrivacidad");

  // Abrir modal de Aviso Legal
  if (abrirAviso && modalAviso) {
    abrirAviso.addEventListener("click", (e) => {
      e.preventDefault();
      modalAviso.style.display = "block";
    });
  }

  // Abrir modal de Privacidad
  if (abrirPrivacidad && modalPrivacidad) {
    abrirPrivacidad.addEventListener("click", (e) => {
      e.preventDefault();
      modalPrivacidad.style.display = "block";
    });
  }

  // Cerrar botones (x)
  if (cerrarAviso && modalAviso) {
    cerrarAviso.addEventListener("click", () => {
      modalAviso.style.display = "none";
    });
  }

  if (cerrarPrivacidad && modalPrivacidad) {
    cerrarPrivacidad.addEventListener("click", () => {
      modalPrivacidad.style.display = "none";
    });
  }

  // Cerrar haciendo clic fuera del contenido modal
  window.addEventListener("click", (event) => {
    if (modalAviso && event.target === modalAviso) {
      modalAviso.style.display = "none";
    }
    if (modalPrivacidad && event.target === modalPrivacidad) {
      modalPrivacidad.style.display = "none";
    }
  });

  // Cerrar con tecla Escape
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (modalAviso) modalAviso.style.display = "none";
      if (modalPrivacidad) modalPrivacidad.style.display = "none";
    }
  });
});
