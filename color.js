
window.colores = window.colores || [
  { fondo: "#222", texto: "#f1f1f1" },
  { fondo: "#0f0", texto: "#000" },
  { fondo: "#005f73", texto: "#fffff0" },
  { fondo: "#ffc107", texto: "#212529" }
];

const btnColor = document.getElementById("btnColor");
if (btnColor) {
  btnColor.addEventListener("click", () => {
    const random = Math.floor(Math.random() * window.colores.length);
    const tema = window.colores[random];

    // Cambiar fondo y texto del body
    document.body.style.backgroundColor = tema.fondo;
    document.body.style.color = tema.texto;

    // Navbar
    const nav = document.querySelector(".navbar");
    if (nav) {
      nav.style.backgroundColor = tema.texto;
      nav.style.color = tema.fondo;
    }

    // Links de navegación
    const links = document.querySelectorAll(".nav-link");
    links.forEach(link => {
      link.style.color = tema.fondo;
    });

    // Quitar clases de conflicto y aplicar colores en tarjetas
    const tarjetas = document.querySelectorAll(".card, .card-body, .card-title, .card-text");
    tarjetas.forEach(card => {
      card.classList.remove("text-dark", "text-light");
      card.style.backgroundColor = tema.fondo;
      card.style.color = tema.texto;
    });
  });
}

function toggleMenu() {
  document.getElementById("navLinks")?.classList.toggle("active");
}
