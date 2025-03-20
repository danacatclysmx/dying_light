// NavBar
// Función para alternar la visibilidad del menú de navegación
function toggleMenu() {
  // Obtiene el elemento del menú de navegación por su ID
  let menu = document.getElementById("menu");
  // Obtiene el elemento del overlay (fondo oscuro que cubre la pantalla cuando el menú está activo)
  let overlay = document.getElementById("overlay");
  // Obtiene el elemento del checkbox (botón de hamburguesa) por su ID
  let checkbox = document.getElementById("burger");
  // Alterna la clase 'active' en el menú de navegación dependiendo del estado del checkbox
  // Si el checkbox está marcado (checked), se agrega 'active', si no, se quita
  menu.classList.toggle("active", checkbox.checked);// Hace lo mismo con el overlay, agregando o quitando la clase 'active'
  overlay.classList.toggle("active", checkbox.checked);
}

// Función para cerrar el menú de navegación
function closeMenu() {
  // Remueve la clase 'active' del menú de navegación para ocultarlo
  document.getElementById("menu").classList.remove("active");
  // Remueve la clase 'active' del overlay para ocultar el fondo oscuro
  document.getElementById("overlay").classList.remove("active");
 // Desmarca el checkbox del botón de hamburguesa para restablecer su estado
  document.getElementById("burger").checked = false;
}

// Selecciona todos los enlaces dentro de los elementos con la clase 'nav__li_item'
document.querySelectorAll(".nav__li_item a").forEach((item) => {
  // Agrega un evento de clic a cada enlace
  item.addEventListener("click", closeMenu); // Cuando un enlace es clicado, se ejecuta la función closeMenu para cerrar el menú
});

//Inicio
document.addEventListener("DOMContentLoaded", function () { // Espera a que el documento esté completamente cargado antes de ejecutar el código

  const craneImage = document.getElementById("crane"); // Obtiene el elemento de la imagen con el ID "crane"
  const initialOffset = 150; // Ajusta la posición inicial de la imagen fuera de la pantalla

  craneImage.style.transform = `translateX(${initialOffset}px)`; // Configura la posición inicial de la imagen moviéndola hacia la derecha
  craneImage.style.transition = "transform 1s ease-out, opacity 0.8s ease-in"; // Define una transición suave para el movimiento y la opacidad

  function updateImagePosition() { // Función para actualizar la posición de la imagen en función del scroll

    const imagePosition = craneImage.getBoundingClientRect().top; // Obtiene la posición actual de la imagen con respecto a la parte superior de la ventana
    const windowHeight = window.innerHeight; // Obtiene la altura de la ventana del navegador

    if (imagePosition < windowHeight * 0.9 && imagePosition > -100) { // Verifica si la imagen está dentro del área visible de la pantalla
      
      const translateX = Math.max(0, initialOffset - (windowHeight * 0.9 - imagePosition) * 0.3); // Calcula un desplazamiento gradual de la imagen basado en su posición en la pantalla
      craneImage.style.transform = `translateX(${translateX}px)`; // Aplica el nuevo desplazamiento en el eje X
      craneImage.style.opacity = "1"; // Hace la imagen completamente visible
    } else if (imagePosition <= -150) { // Si la imagen se desplaza demasiado hacia arriba
      craneImage.style.opacity = "0"; // Reduce la opacidad a 0 para ocultarla
    }
  }

  window.addEventListener("scroll", updateImagePosition); // Agrega un evento para actualizar la posición de la imagen cuando el usuario hace scroll
  updateImagePosition(); // Llama a la función una vez para ajustar la imagen al cargar la página

  craneImage.style.webkitMask = "url(imgs/mask_head.png) no-repeat 80% 100% / 0 0"; // Aplica una máscara a la imagen para compatibilidad con WebKit
  craneImage.style.mask = "url(imgs/mask_head.png) no-repeat 80% 100% / 0 0"; // Aplica la máscara en navegadores compatibles con mask
  craneImage.style.transition += ", mask-size 1.5s ease-in, -webkit-mask-size 1.5s ease-in"; // Agrega transición a la máscara para suavizar su aparición

  function revealMask() { // Función para mostrar la máscara con una animación
    craneImage.style.webkitMaskSize = "130% 150%"; // Aumenta el tamaño de la máscara para moverla más a la izquierda
    craneImage.style.maskSize = "130% 150%";
  }

  function resetMask() { // Función para ocultar la máscara
    craneImage.style.webkitMaskSize = "0 0";
    craneImage.style.maskSize = "0 0";
  }

  setTimeout(revealMask, 500); // Inicia la animación de la máscara después de 500ms al cargar la página

  window.addEventListener("scroll", function () { // Agrega un evento para controlar la máscara al hacer scroll
    const cranePosition = craneImage.getBoundingClientRect().top; // Obtiene la posición actual de la imagen
    const windowHeight = window.innerHeight; // Obtiene la altura de la ventana

    if (cranePosition < windowHeight * 0.8) { // Si la imagen entra en el área visible, muestra la máscara
      revealMask();
    } else { // Si la imagen está fuera del área visible, oculta la máscara
      resetMask();
    }
  });

});


//Sinopsis
document.addEventListener("DOMContentLoaded", function () { // Espera a que el documento esté completamente cargado antes de ejecutar el código

  const raisImage = document.getElementById("rais"); // Obtiene el elemento de la imagen con el ID "rais"
  if (!raisImage) return; // Si el elemento no existe, detiene la ejecución para evitar errores
  const initialOffset = 150; // Define la posición inicial de la imagen fuera de la pantalla

  raisImage.style.transform = `translateX(${initialOffset}px)`; // Mueve la imagen a la posición inicial hacia la derecha
  raisImage.style.transition = "transform 1s ease-out, opacity 0.8s ease-in"; // Define una transición suave para el movimiento y la opacidad

  function updateImagePosition() { // Función para actualizar la posición de la imagen en función del scroll

    const imagePosition = raisImage.getBoundingClientRect().top; // Obtiene la posición actual de la imagen con respecto a la parte superior de la ventana
    const windowHeight = window.innerHeight; // Obtiene la altura de la ventana del navegador

    if (imagePosition < windowHeight * 0.9 && imagePosition > -100) { // Verifica si la imagen está dentro del área visible de la pantalla

      const translateX = Math.max( // Calcula un desplazamiento gradual de la imagen basado en su posición en la pantalla
        0,
        initialOffset - (windowHeight * 0.9 - imagePosition) * 0.3
      );

      raisImage.style.transform = `translateX(${translateX}px)`; // Aplica el nuevo desplazamiento en el eje X
      raisImage.style.opacity = "1"; // Hace la imagen completamente visible

    } else if (imagePosition <= -150) { // Si la imagen se desplaza demasiado hacia arriba
      raisImage.style.opacity = "0"; // Reduce la opacidad a 0 para ocultarla
    }
  }

  window.addEventListener("scroll", updateImagePosition); // Agrega un evento para actualizar la posición de la imagen cuando el usuario hace scroll
  updateImagePosition(); // Llama a la función una vez para ajustar la imagen al cargar la página
});


//Galeria
// Galería
document.querySelectorAll('.contenerdor_galeria div').forEach(div => { // Selecciona todos los divs dentro del contenedor de la galería y ejecuta una función por cada uno
  const img = document.createElement('img'); // Crea un nuevo elemento de imagen
  img.src = div.dataset.img; // Asigna la imagen usando el atributo "data-img" del div
  img.style.position = 'absolute'; // Posiciona la imagen de manera absoluta dentro del div
  img.style.opacity = '0'; // Hace que la imagen sea inicialmente invisible
  img.style.transform = 'scale(0.8)'; // Reduce el tamaño de la imagen para un efecto de escala
  img.style.transition = 'opacity 0.3s ease-in, transform 0.3s ease-in'; // Aplica una animación suave a la opacidad y la escala
  img.style.pointerEvents = 'none'; // Evita que la imagen interfiera con eventos de ratón cuando está oculta
  div.appendChild(img); // Agrega la imagen como un hijo del div

  div.addEventListener('mouseenter', () => { // Evento cuando el mouse entra en el div
    img.style.opacity = '1'; // Hace visible la imagen
    img.style.transform = 'scale(1)'; // Restaura el tamaño original de la imagen
  });

  div.addEventListener('mouseleave', () => { // Evento cuando el mouse sale del div
    img.style.opacity = '0'; // Oculta la imagen
    img.style.transform = 'scale(0.8)'; // Reduce nuevamente el tamaño de la imagen
  });
});

// CARRUSEL
document.addEventListener("DOMContentLoaded", function () { // Espera a que el documento esté completamente cargado antes de ejecutar el código

  let index = 0; // Índice para rastrear la diapositiva actual
  const slides = document.querySelector(".carousel-slide"); // Obtiene el contenedor de las diapositivas del carrusel
  const totalSlides = slides.children.length; // Cuenta el número total de diapositivas
  let autoSlide; // Variable para almacenar el temporizador de auto-desplazamiento del carrusel
  /**
   * Mueve el carrusel en la dirección indicada.
   */
  function moverSlide(n) { 
    index = (index + n + totalSlides) % totalSlides; // Calcula el nuevo índice de la diapositiva, asegurando que se mantenga en rango
    slides.style.transform = `translateX(${-index * 100}vw)`; // Mueve el carrusel a la nueva posición en función del índice
    reiniciarAutoSlide(); // Reinicia el auto-desplazamiento después de cambiar de diapositiva
  }
  /**
   * Reinicia el auto-desplazamiento del carrusel.
   */
  function reiniciarAutoSlide() { 
    clearInterval(autoSlide); // Detiene el temporizador actual para evitar superposiciones
    autoSlide = setInterval(() => moverSlide(1), 7000); // Inicia un nuevo temporizador para mover el carrusel cada 7 segundos
  }

  reiniciarAutoSlide(); // Inicia el auto-carrusel al cargar la página
  window.moverSlide = moverSlide; // Hace que la función moverSlide esté disponible globalmente para ser llamada desde otros scripts o botones

});

// FORMULARIO
document.addEventListener("DOMContentLoaded", function () { // Espera a que el documento esté completamente cargado antes de ejecutar el código

  const formulario = document.getElementById("reporteForm"); // Obtiene el formulario de reporte
  const modoBtn = document.getElementById("modoBtn"); // Obtiene el botón de cambio de modo Día/Noche

  // Alternar modo Día/Noche
  modoBtn.addEventListener("click", function () { // Agrega un evento de clic al botón de modo
    document.body.classList.toggle("noche"); // Alterna la clase 'noche' en el cuerpo del documento

    if (document.body.classList.contains("noche")) { // Si el modo noche está activo
      modoBtn.innerHTML = "☀️ Modo Día"; // Cambia el texto del botón a Modo Día
      modoBtn.classList.remove("btn-dark"); // Quita la clase de botón oscuro
      modoBtn.classList.add("btn-light"); // Agrega la clase de botón claro
    } else { // Si el modo noche no está activo
      modoBtn.innerHTML = "🌙 Modo Noche"; // Cambia el texto del botón a Modo Noche
      modoBtn.classList.remove("btn-light"); // Quita la clase de botón claro
      modoBtn.classList.add("btn-dark"); // Agrega la clase de botón oscuro
    }
  });

  // Manejar envío del formulario
  formulario.addEventListener("submit", function (event) { // Agrega un evento al enviar el formulario
    event.preventDefault(); // Previene el envío por defecto del formulario

    // Obtener valores
    const nombre = document.getElementById("nombre").value; // Obtiene el valor del campo 'nombre'
    const tipo = document.getElementById("tipo").value; // Obtiene el valor del campo 'tipo'
    const descripcion = document.getElementById("descripcion").value; // Obtiene el valor del campo 'descripcion'

    // Validación básica
    if (
      nombre.trim() === "" || // Verifica si el campo 'nombre' está vacío
      tipo.trim() === "" || // Verifica si el campo 'tipo' está vacío
      descripcion.trim() === "" // Verifica si el campo 'descripcion' está vacío
    ) {
      alert("Completa todos los campos obligatorios."); // Muestra una alerta si falta información
      return; // Detiene la ejecución de la función si la validación falla
    }

    // Simulación de envío con animación
    formulario.innerHTML = ` 
        <div class="text-center"> 
          <h3>📡 Enviando Reporte...</h3> 
          <p>Conectando con la Torre de Radio...</p> 
          <div class="spinner-border text-danger" role="status"></div> 
        </div> 
      `; // Reemplaza el contenido del formulario con un mensaje de carga

    setTimeout(() => { // Simula un tiempo de espera antes de mostrar la confirmación
      formulario.innerHTML = ` 
          <div class="text-center"> 
            <h3>✅ Reporte Enviado</h3> 
            <p>Gracias, superviviente ${nombre}. Tu información ha sido enviada.</p> 
            <button onclick="location.reload()" class="btn btn-warning">Enviar Otro Reporte</button> 
          </div> 
        `; // Reemplaza el formulario con un mensaje de éxito y un botón para recargar la página
    }, 3000); // Tiempo de espera de 3 segundos antes de mostrar la confirmación
  });

});
