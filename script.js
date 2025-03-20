//NavBar
// Función para alternar la visibilidad del menú de navegación
function toggleMenu() {
  let menu = document.getElementById("menu");
  let overlay = document.getElementById("overlay");
  let checkbox = document.getElementById("burger");
  // Alterna la clase 'active' en el menú y overlay según el estado del checkbox
  menu.classList.toggle("active", checkbox.checked);
  overlay.classList.toggle("active", checkbox.checked);
}
// Función para cerrar el menú de navegación
function closeMenu() {
  document.getElementById("menu").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
  document.getElementById("burger").checked = false;
}
// Cierra el menú cuando un enlace del menú es clicado
document.querySelectorAll(".nav__li_item a").forEach((item) => {
  item.addEventListener("click", closeMenu);
});

//Inicio
// Efecto de animación de imagen al hacer scrol
document.addEventListener("DOMContentLoaded", function () {
  const craneImage = document.getElementById("crane");
  const initialOffset = 150; // Ajusta la posición inicial de la imagen fuera de la pantalla
  // Configura la posición inicial y la transición de la imagen
  craneImage.style.transform = `translateX(${initialOffset}px)`;
  craneImage.style.transition = "transform 1s ease-out, opacity 0.8s ease-in"; // Hacer más rápida la aparición al hacer scroll hacia arriba

  function updateImagePosition() {
    const imagePosition = craneImage.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (imagePosition < windowHeight * 0.9 && imagePosition > -100) {
      // Ajustar umbrales para que desaparezca más tarde
      const translateX = Math.max(
        0,
        initialOffset - (windowHeight * 0.9 - imagePosition) * 0.3
      ); // Movimiento más gradual
      craneImage.style.transform = `translateX(${translateX}px)`;
      craneImage.style.opacity = "1";
    } else if (imagePosition <= -150) {
      // Ajustar punto de desaparición más abajo
      craneImage.style.opacity = "0"; // Línea que controla la desaparición de la imagen
    }
  }

  window.addEventListener("scroll", updateImagePosition);
  updateImagePosition();

  // Compatibilidad con el otro script
  craneImage.style.webkitMask =
    "url(imgs/mask_head.png) no-repeat 80% 100% / 0 0";
  craneImage.style.mask = "url(imgs/mask_head.png) no-repeat 80% 100% / 0 0";
  craneImage.style.transition +=
    ", mask-size 1.5s ease-in, -webkit-mask-size 1.5s ease-in";

  function revealMask() {
    craneImage.style.webkitMaskSize = "130% 150%"; // Aumentamos el tamaño para moverlo más a la izquierda
    craneImage.style.maskSize = "130% 150%";
  }

  function resetMask() {
    craneImage.style.webkitMaskSize = "0 0";
    craneImage.style.maskSize = "0 0";
  }

  // Efecto al cargar la página
  setTimeout(revealMask, 500);

  // Control de scroll para la máscara
  window.addEventListener("scroll", function () {
    const cranePosition = craneImage.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (cranePosition < windowHeight * 0.8) {
      revealMask();
    } else {
      resetMask();
    }
  });
});

//Sinopsis
document.addEventListener("DOMContentLoaded", function () {
  const raisImage = document.getElementById("rais");
  if (!raisImage) return; // Evita errores si el elemento no existe

  const initialOffset = 150; // Posición inicial fuera de la pantalla
  raisImage.style.transform = `translateX(${initialOffset}px)`; // Corrección de template literal
  raisImage.style.transition = "transform 1s ease-out, opacity 0.8s ease-in";

  function updateImagePosition() {
    const imagePosition = raisImage.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (imagePosition < windowHeight * 0.9 && imagePosition > -100) {
      const translateX = Math.max(
        0,
        initialOffset - (windowHeight * 0.9 - imagePosition) * 0.3
      );
      raisImage.style.transform = `translateX(${translateX}px)`; // Corrección de template literal
      raisImage.style.opacity = "1";
    } else if (imagePosition <= -150) {
      raisImage.style.opacity = "0";
    }
  }

  window.addEventListener("scroll", updateImagePosition);
  updateImagePosition();
});

//Galeria
document.querySelectorAll('.contenerdor_galeria div').forEach(div => {
  const img = document.createElement('img');
  img.src = div.dataset.img;
  img.style.position = 'absolute';
  img.style.opacity = '0';
  img.style.transform = 'scale(0.8)';
  img.style.transition = 'opacity 0.3s ease-in, transform 0.3s ease-in';
  img.style.pointerEvents = 'none'; // Evita que interfiera cuando está oculta
  div.appendChild(img);

  div.addEventListener('mouseenter', () => {
      img.style.opacity = '1';
      img.style.transform = 'scale(1)';
  });

  div.addEventListener('mouseleave', () => {
      img.style.opacity = '0';
      img.style.transform = 'scale(0.8)';
  });
});
//CARRUSEL
document.addEventListener("DOMContentLoaded", function () {
  let index = 0;
  const slides = document.querySelector(".carousel-slide");
  const totalSlides = slides.children.length;
  let autoSlide;

  /**
         * Mueve el carrusel en la dirección indicada.
         */
  function moverSlide(n) {
    index = (index + n + totalSlides) % totalSlides;
    slides.style.transform = `translateX(${-index * 100}vw)`;
    reiniciarAutoSlide();
  }

  /**
   * Reinicia el auto-desplazamiento del carrusel.
   */
  function reiniciarAutoSlide() {
      clearInterval(autoSlide);
      autoSlide = setInterval(() => moverSlide(1), 7000);
  }

  // Inicia el auto-carrusel
  reiniciarAutoSlide();


  // Hacer que la función moverSlide esté disponible globalmente
  window.moverSlide = moverSlide;
});

//Formulario
document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("reporteForm");
  const modoBtn = document.getElementById("modoBtn");

  // Alternar modo Día/Noche
  modoBtn.addEventListener("click", function () {
    document.body.classList.toggle("noche");

    if (document.body.classList.contains("noche")) {
      modoBtn.innerHTML = "☀️ Modo Día";
      modoBtn.classList.remove("btn-dark");
      modoBtn.classList.add("btn-light");
    } else {
      modoBtn.innerHTML = "🌙 Modo Noche";
      modoBtn.classList.remove("btn-light");
      modoBtn.classList.add("btn-dark");
    }
  });

  // Manejar envío del formulario
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtener valores
    const nombre = document.getElementById("nombre").value;
    const tipo = document.getElementById("tipo").value;
    const descripcion = document.getElementById("descripcion").value;

    // Validación básica
    if (
      nombre.trim() === "" ||
      tipo.trim() === "" ||
      descripcion.trim() === ""
    ) {
      alert("Completa todos los campos obligatorios.");
      return;
    }

    // Simulación de envío con animación
    formulario.innerHTML = `
        <div class="text-center">
          <h3>📡 Enviando Reporte...</h3>
          <p>Conectando con la Torre de Radio...</p>
          <div class="spinner-border text-danger" role="status"></div>
        </div>
      `;

    setTimeout(() => {
      formulario.innerHTML = `
          <div class="text-center">
            <h3>✅ Reporte Enviado</h3>
            <p>Gracias, superviviente ${nombre}. Tu información ha sido enviada.</p>
            <button onclick="location.reload()" class="btn btn-warning">Enviar Otro Reporte</button>
          </div>
        `;
    }, 3000);
  });
});
