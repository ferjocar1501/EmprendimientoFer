// Variable para almacenar las reseñas de los clientes
let reviews = [];

function showInicio() {
    closeSidebar();
    document.getElementById("content").innerHTML = `<header>
    <div class="logo">
    </div>
    <nav>
        <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Orientación Vocacional</a></li>
            <li><a href="#">Reseñas</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Quiénes Somos</a></li>
        </ul>
    </nav>
    <div class="login">
        <a href="#">Iniciar Sesión / Registrarse</a>
    </div>
</header>

<!-- Sección de Presentación -->
<section class="presentation">
    <div class="presentation-content">
        <h1>Descubre tu camino hacia el éxito</h1>
        <p>En Sitespool, creemos que cada estudiante tiene un potencial único para alcanzar el éxito en su carrera.
            Nuestra misión es ayudarte a encontrar la vocación perfecta que te lleve hacia el futuro que sueñas.
            ¡Bienvenido a una experiencia de orientación vocacional sin sesgos!</p>
    </div>
    <div class="presentation-image">
        <img src="students.jpg" alt="Estudiantes felices">
    </div>
</section>

<!-- Sección de Quiénes Somos -->
<section class="about-us">
    <div class="about-us-content">
        <h2>¿Quiénes Somos?</h2>
        <p>Sitespool es una plataforma creada por un equipo apasionado de educadores y profesionales que entienden
            el desafío de elegir la carrera universitaria adecuada. Nuestra misión es proporcionar información
            imparcial, precisa y actualizada sobre diversas carreras y campos laborales para que tomes decisiones
            informadas y exitosas en tu futuro académico y profesional.</p>
    </div>
    <div class="about-us-image">
        <img src="team.jpg" alt="Equipo Sitespool">
    </div>
</section>

<!-- Sección de Misión -->
<section class="mission">
    <div class="mission-content">
        <h2>Nuestra Misión</h2>
        <p>Nuestra misión es reducir la tasa de deserción estudiantil al proporcionarte una plataforma integral de
            orientación vocacional. Queremos inspirarte y empoderarte para que descubras tus intereses, habilidades y
            pasiones, y puedas tomar decisiones educativas y profesionales con confianza. En Sitespool, creemos que
            cada estudiante tiene el potencial de crear un futuro brillante y significativo.</p>
    </div>
    <div class="mission-image">
        <img src="mission.jpg" alt="Misión de Sitespool">
    </div>
</section>

<!-- Sección de Visión -->
<section class="vision">
    <div class="vision-content">
        <h2>Nuestra Visión</h2>
        <p>Nuestra visión es un mundo en el que todos los jóvenes tengan acceso a una educación que los motive y guíe
            hacia carreras gratificantes y exitosas. Queremos ser el puente entre tus sueños y la realidad, brindándote
            una experiencia enriquecedora y personalizada de exploración vocacional. En Sitespool, aspiramos a ser tu
            compañero de confianza en el camino hacia el éxito académico y profesional.</p>
    </div>
    <div class="vision-image">
        <img src="vision.jpg" alt="Visión de Sitespool">
    </div>
</section>

<!-- Pie de Página -->
<footer>
    <div class="contact-info">
        <h3>Contacto</h3>
        <p>Correo: info@sitespool.com</p>
        <p>Teléfono: +1 (123) 456-7890</p>
    </div>
    <div class="footer-links">
        <ul>
            <li><a href="#">Política de Privacidad</a></li>
            <li><a href="#">Términos de Servicio</a></li>
        </ul>
        <img src="sinfondo.png" alt="Sitespool Logo">
    </div>
</footer> 
    
    `;
}

document.addEventListener("DOMContentLoaded", () => {
    showOrientacionVocacionalAsistida(); // CAMBIAR LUEGO A INICIO
});

// Variables para almacenar las imágenes seleccionadas en la colección
let selectedImages = [];

function showOrientacionVocacionalAsistida() {
    closeSidebar();
    document.getElementById("content").innerHTML = `
    <h1 style="font-family: 'Roboto Slab', sans-serif">
  Orientación Vocacional Asistida
</h1>
<p style="font-family: 'Nunito', sans-serif">
  Aquí podrás encontrar una serie de cursos de carreras que tal vez llamen tu
  atención. ¡Selecciona el que te guste y añádelo a tu colección!
</p>
<div id="imagePreview">


<!-- Curso 12: Ingeniería Mecatrónica -->
<div class="curso-box">
    <i class="fas fa-robot icon-small"></i>
    <p style="font-weight: bold;">Ingeniería Mecatrónica</p>
    <img class="image-small" src="robot.png" alt="Ingeniería Mecatrónica">
    <button class="add-to-collection-btn" onclick="addToCollection('robot.png', 'Ingeniería Mecatrónica')">
        <i class="fas fa-plus"></i>
    </button>
    <button class="open-modal-btn" onclick="openModal('Ingeniería Mecatrónica', 'Descripción de Ingeniería Mecatrónica', 'ruta_del_video.mp4')">
        <i class="fas fa-book"></i>
    </button>
</div>


<!-- Curso 1: Ingeniería Eléctrica -->
  <div class="curso-box">
          <i class="fas fa-bolt icon-small"></i>
          <p style="font-weight: bold;">Ingeniería Eléctrica</p>
          <img class="image-small" src="electrica.png" alt="Ingeniería Eléctrica">
      <button class="add-to-collection-btn" onclick="addToCollection('electrica.png', 'Ingeniería Eléctrica')">
          <i class="fas fa-plus"></i>
      </button>
      <button class="open-modal-btn" onclick="openModal('Ingeniería Eléctrica', 'Descripción de Ingeniería Eléctrica')">
          <i class="fas fa-book"></i>
      </button>
  </div>


<!-- Curso 2: Ingeniería Telemática -->
  <div class="curso-box">
          <i class="fas fa-network-wired icon-small"></i>
          <p style="font-weight: bold;">Ingeniería Telemática</p>
          <img class="image-small" src="telematica.png" alt="Ingeniería Telemática">
      <button class="add-to-collection-btn" onclick="addToCollection('telematica.png', 'Ingeniería Telemática')">
          <i class="fas fa-plus"></i>
      </button>
      <button class="open-modal-btn" onclick="openModal('Ingeniería Telemática', 'Descripción de Ingeniería Telemática')">
          <i class="fas fa-book"></i>
      </button>
  </div>
  
  <!-- Curso 3: Ingeniería Mecánica -->
  <div class="curso-box">
          <i class="fas fa-cogs icon-small"></i>
          <p style="font-weight: bold;">Ingeniería Mecánica</p>
          <img class="image-small" src="mecanica.png" alt="Ingeniería Mecánica">
      <button class="add-to-collection-btn" onclick="addToCollection('mecanica.png', 'Ingeniería Mecánica')">
          <i class="fas fa-plus"></i>
      </button>
      <button class="open-modal-btn" onclick="openModal('Ingeniería Mecánica', 'Descripción de Ingeniería Mecánica')">
          <i class="fas fa-book"></i>
      </button>
  </div>
  
  <!-- Curso 4: Ingeniería Civil -->
  <div class="curso-box">
          <i class="fas fa-hard-hat icon-small"></i>
          <p style="font-weight: bold;">Ingeniería Civil</p>
          <img class="image-small" src="ingciv.png" alt="Ingeniería Civil">
      <button class="add-to-collection-btn" onclick="addToCollection('ingciv.png', 'Ingeniería Civil')">
          <i class="fas fa-plus"></i>
      </button>
      <button class="open-modal-btn" onclick="openModal('Ingeniería Civil', 'Descripción de Ingeniería Civil')">
          <i class="fas fa-book"></i>
      </button>
  </div>
  
  <!-- Curso 5: Ingeniería Industrial -->
  <div class="curso-box">
          <i class="fas fa-industry icon-small"></i>
          <p style="font-weight: bold;">Ingeniería Industrial</p>
          <img class="image-small" src="industrial.png" alt="Ingeniería Industrial">
      <button class="add-to-collection-btn" onclick="addToCollection('industrial.png', 'Ingeniería Industrial')">
          <i class="fas fa-plus"></i>
      </button>
      <button class="open-modal-btn" onclick="openModal('Ingeniería Industrial', 'Descripción de Ingeniería Industrial')">
          <i class="fas fa-book"></i>
      </button>
  </div>
  
  <!-- Curso 6: Ingeniería de Sistemas -->
  <div class="curso-box">
          <i class="fas fa-laptop-code icon-small"></i>
          <p style="font-weight: bold;">Ingeniería de Sistemas</p>
          <img class="image-small" src="sistemas.png" alt="Ingeniería de Sistemas">
      <button class="add-to-collection-btn" onclick="addToCollection('sistemas.png', 'Ingeniería de Sistemas')">
          <i class="fas fa-plus"></i>
      </button>
      <button class="open-modal-btn" onclick="openModal('Ingeniería de Sistemas', 'Descripción de Ingeniería de Sistemas')">
          <i class="fas fa-book"></i>
      </button>
  </div>
  
  <!-- Curso 7: Ingeniería Estadística -->
  <div class="curso-box">
          <i class="fas fa-chart-bar icon-small"></i>
          <p style="font-weight: bold;">Ingeniería Estadística</p>
          <img class="image-small" src="estadistica.png" alt="Ingeniería Estadística">
      <button class="add-to-collection-btn" onclick="addToCollection('estadistica.png', 'Ingeniería Estadística')">
          <i class="fas fa-plus"></i>
      </button>
      <button class="open-modal-btn" onclick="openModal('Ingeniería Estadística', 'Descripción de Ingeniería Estadística')">
          <i class="fas fa-book"></i>
      </button>
  </div>
  
  <!-- Curso 8: Ingeniería de Petróleos -->
  <div class="curso-box">
          <i class="fas fa-oil-can icon-small"></i>
          <p style="font-weight: bold;">Ingeniería de Petróleos</p>
          <img class="image-small" src="petroleo.png" alt="Ingeniería de Petróleos">
      <button class="add-to-collection-btn" onclick="addToCollection('petroleo.png', 'Ingeniería de Petróleos')">
          <i class="fas fa-plus"></i>
      </button>
      <button class="open-modal-btn" onclick="openModal('Ingeniería de Petróleos', 'Descripción de Ingeniería de Petróleos')">
          <i class="fas fa-book"></i>
      </button>
  </div>
  
  <!-- Curso 9: Ingeniería en Materiales -->
  <div class="curso-box">
          <i class="fas fa-flask icon-small"></i>
          <p style="font-weight: bold;">Ingeniería en Materiales</p>
          <img class="image-small" src="turbina.png" alt="Ingeniería en Materiales">
      <button class="add-to-collection-btn" onclick="addToCollection('turbina.png', 'Ingeniería en Materiales')">
          <i class="fas fa-plus"></i>
      </button>
      <button class="open-modal-btn" onclick="openModal('Ingeniería en Materiales', 'Descripción de Ingeniería en Materiales')">
          <i class="fas fa-book"></i>
      </button>
  </div>
  
  <!-- Curso 10: Ingeniería Naval -->
  <div class="curso-box">
          <i class="fas fa-ship icon-small"></i>
          <p style="font-weight: bold;">Ingeniería Naval</p>
          <img class="image-small" src="naval.png" alt="Ingeniería Naval">
      <button class="add-to-collection-btn" onclick="addToCollection('naval.png', 'Ingeniería Naval')">
          <i class="fas fa-plus"></i>
      </button>
      <button class="open-modal-btn" onclick="openModal('Ingeniería Naval', 'Descripción de Ingeniería Naval')">
          <i class="fas fa-book"></i>
      </button>
  </div>
  
  <!-- Curso 11: Ingeniería en Alimentos -->
  <div class="curso-box">
          <i class="fas fa-utensils icon-small"></i>
          <p style="font-weight: bold;">Ingeniería en Alimentos</p>
          <img class="image-small" src="ali.png" alt="Ingeniería en Alimentos">
      <button class="add-to-collection-btn" onclick="addToCollection('ali.png', 'Ingeniería en Alimentos')">
          <i class="fas fa-plus"></i>
      </button>
      <button class="open-modal-btn" onclick="openModal('Ingeniería en Alimentos', 'Descripción de Ingeniería en Alimentos')">
          <i class="fas fa-book"></i>
      </button>
  </div>
    
        `;
}

function addToCollection(imageSrc, title) {
    // Agregar la imagen y el título a la colección
    selectedImages.push({ src: imageSrc, title: title });

    // Mostrar la modal de curso agregado exitosamente
    const courseAddedModal = document.getElementById("courseAddedModal");
    const courseAddedMessage = document.getElementById("courseAddedMessage");
    courseAddedMessage.innerText = `El curso "${title}" ha sido agregado a la colección.`;
    courseAddedModal.style.display = "block";
    showColeccion();
}
function showColeccion() {
    closeSidebar();
    // Mostrar las imágenes seleccionadas en la colección
    let collectionContent =
        "<h1 style='font-family: Roboto Slab, sans-serif;'>Colección</h1>";

    // Agregar mensaje adicional con tipo de letra Nunito
    collectionContent +=
        "<p style='font-family: Nunito, sans-serif;'>Aquí podrás encontrar todos tus cursos seleccionados. ¿Qué esperas para comenzar?</p>";

    // Agregar el título al contenido
    collectionContent += "<div id='imagePreview'>";

    // Agregar las imágenes al contenido
    selectedImages.forEach((image, index) => {
        collectionContent += `
            <div class="image-item">
                <img class="image-small" src="${image.src}" alt="${image.title}">
                <p>${image.title}</p>
                <i class="fas fa-trash" onclick="removeFromCollection(${index})"></i>
            </div>
        `;
    });

    // Cerrar el contenedor de imágenes
    collectionContent += "</div>";

    // Actualizar el contenido del div con el ID "content"
    document.getElementById("content").innerHTML = collectionContent;
}

function showTestVocacional() {
    closeSidebar();
    document.getElementById("content").innerHTML = `
    <h1 style='font-family: Roboto Slab, sans-serif;'>Test Vocacional</h1>
    <p>Completa el siguiente formulario con tus respuestas:</p>
        <form>
        <label for="respuesta1">Pregunta 1:</label>
            <textarea id="respuesta1" name="respuesta1" rows="4" cols="50" required></textarea>
            <br>
            <label for="respuesta2">Pregunta 2:</label>
            <textarea id="respuesta2" name="respuesta2" rows="4" cols="50" required></textarea>
            <!-- Agrega más preguntas según sea necesario -->
            <br>
            <input type="submit" value="Enviar respuestas">
    `;
}

function showResena() {
    closeSidebar();
    let content =
        "<h1 style='font-family: Roboto Slab, sans-serif;'>Reseñas</h1>";

    // Formulario para que los clientes dejen sus reseñas
    content += `
        <div class="review-form">
            <h2>¡Queremos saber tu opinión!</h2>
            <textarea id="reviewComment" rows="4" placeholder="Escribe tu reseña aquí..."></textarea>
            <div id="estrellas">
            <p>Rating: <span class="star-rating">
		<label for="rate-1" style="--i:1"><i class="fa-solid fa-star"></i></label>
		<input type="radio" name="rating" id="rate-1" value="1">
		<label for="rate-2" style="--i:2"><i class="fa-solid fa-star"></i></label>
		<input type="radio" name="rating" id="rate-2" value="2" checked>
		<label for="rate-3" style="--i:3"><i class="fa-solid fa-star"></i></label>
		<input type="radio" name="rating" id="rate-3" value="3">
		<label for="rate-4" style="--i:4"><i class="fa-solid fa-star"></i></label>
		<input type="radio" name="rating" id="rate-4" value="4">
		<label for="rate-5" style="--i:5"><i class="fa-solid fa-star"></i></label>
		<input type="radio" name="rating" id="rate-5" value="5">
	</span></p>
            </div>
            <button onclick="addReview()">Enviar Reseña</button>
        </div>
    `;

    // Mostrar las reseñas existentes en un cuadro
    if (reviews.length > 0) {
        content += "<div class='reviews-container'>";
        reviews.forEach((review) => {
            content += `
                <div class='review-item'>
                    <p class='review-comment'>${review.comment}</p>
                    <p class='review-rating'>Puntuación: ${review.rating}</p>
                </div>
            `;
        });
        content += "</div>";
    }

    // Actualizar el contenido del div con el ID "content"
    document.getElementById("content").innerHTML = content;
}

function showCurso(curso) {
    // Aquí puedes agregar lógica para almacenar el curso seleccionado en "Colección"
    alert("Has seleccionado el curso: " + curso);
}

// Resto de funciones...

function removeFromCollection(index) {
    selectedImages.splice(index, 1);
    showColeccion();
}

// Función para mostrar el modal de Log Out
function showLogoutModal() {
    const modal = document.getElementById("logoutModal");
    modal.style.display = "block";
}

// Función para cerrar el modal de Log Out
function closeLogoutModal() {
    const modal = document.getElementById("logoutModal");
    modal.style.display = "none";
    window.location.href = "log.html";
}

// Función para cerrar sesión
function logout() {
    // Aquí puedes agregar la lógica para cerrar la sesión del usuario
    // Por ejemplo, redireccionar a la página de inicio de sesión o borrar las cookies de sesión.
    alert("Cierre de sesión exitoso");
    hideModal(); // Ocultar el modal después del cierre de sesión
}

// Variable para almacenar los cursos y sus imágenes relacionadas
const cursos = [
    { curso: "Ingeniería Eléctrica", imagen: "ingelec.avif" },
    { curso: "Ingeniería Telemática", imagen: "ingtel.jpg" },
    { curso: "Ingeniería Mecánica", imagen: "ingmec.webp" },
    // Agregar más cursos con sus imágenes aquí
];

function buscarOrientacionVocacional() {
    const textoBusqueda = document
        .getElementById("ovBuscador")
        .value.toLowerCase();
    const filteredCursos = cursos.filter((curso) =>
        curso.curso.toLowerCase().includes(textoBusqueda)
    );
    mostrarCursos(filteredCursos);
}

function buscarEnColeccion() {
    const textoBusqueda = document
        .getElementById("coleccionBuscador")
        .value.toLowerCase();
    const filteredCursos = cursos.filter((curso) =>
        curso.curso.toLowerCase().includes(textoBusqueda)
    );
    mostrarCursos(filteredCursos);
}

function mostrarCursos(cursos) {
    let content = "<h1>Resultados</h1>";
    content += "<div id='cursoPreview'>";
    cursos.forEach((curso) => {
        content += `
            <div class="curso-item">
                <img class="image-small" src="${curso.imagen}" alt="${curso.curso}">
                <p>${curso.curso}</p>
            </div>
        `;
    });
    content += "</div>";
    document.getElementById("content").innerHTML = content;
}

let courseToDeleteIndex = -1; // Variable para almacenar el índice del curso a eliminar

function removeFromCollection(index) {
    // Mostrar el modal de confirmación
    const confirmModal = document.getElementById("confirmModal");
    confirmModal.style.display = "block";
    courseToDeleteIndex = index; // Guardar el índice del curso a eliminar
}

function removeConfirmed() {
    // Eliminar el curso de la colección y ocultar el modal de confirmación
    if (courseToDeleteIndex >= 0 && courseToDeleteIndex < selectedImages.length) {
        selectedImages.splice(courseToDeleteIndex, 1);
        showColeccion(); // Actualizar la colección en la interfaz
    }
    closeConfirmModal();
}

function closeConfirmModal() {
    // Cerrar el modal de confirmación y restablecer el índice del curso a eliminar
    const confirmModal = document.getElementById("confirmModal");
    confirmModal.style.display = "none";
    courseToDeleteIndex = -1;
}

function addReview() {
    const comment = document.getElementById("reviewComment").value;
    const rating = document.querySelector('input[name="rating"]:checked').value;
    if (comment && rating) {
        const review = { comment: comment, rating: rating };
        reviews.push(review);
        showResena(); // Mostrar nuevamente la página de reseñas actualizada con la nueva reseña
    } else {
        alert("Por favor, ingresa un comentario y selecciona una puntuación.");
    }
}

function toggleSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("open"); // Usa toggle para alternar la clase 'open'
}

function closeSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.remove("open"); // Removemos la clase 'open' para ocultar el sidebar
}

// Agregar un evento de clic al elemento 'document'
document.addEventListener("click", function (event) {
    const sidebar = document.querySelector(".sidebar");
    const targetElement = event.target;

    // Verificar si el clic ocurrió fuera del sidebar y del botón para abrir el sidebar
    if (
        !sidebar.contains(targetElement) &&
        !targetElement.classList.contains("open-sidebar")
    ) {
        closeSidebar();
    }
});

function closeCourseAddedModal() {
    const courseAddedModal = document.getElementById("courseAddedModal");
    courseAddedModal.style.display = "none";
}

function showWelcomeMessage() {
    const welcomeMessageContainer = document.getElementById("welcomeMessageContainer");
    const username = sessionStorage.getItem("username");

    if (username) {
        const welcomeMessage = document.createElement("p");
        welcomeMessage.innerHTML = `¡Bienvenido,<br>${username}!`;
        welcomeMessage.classList.add("welcome-message");

        // Insertar el mensaje al principio del contenedor
        if (welcomeMessageContainer.firstChild) {
            welcomeMessageContainer.insertBefore(welcomeMessage, welcomeMessageContainer.firstChild);
        } else {
            welcomeMessageContainer.appendChild(welcomeMessage);
        }
    }
}


// Mostrar el mensaje de bienvenida cuando el contenido se cargue
document.addEventListener("DOMContentLoaded", () => {
    showWelcomeMessage();
});

function openModal(curso, descripcion, videoSrc) {
    const modal = document.getElementById("modal");
    const modalContent = modal.querySelector(".modal-content");
    const modalTitle = modalContent.querySelector(".modal-title");
    const modalContentText = modalContent.querySelector(".modal-content-text");
    const courseVideo = modalContent.querySelector("#courseVideo");

    // Asignar el título y contenido del modal según el curso seleccionado
    modalTitle.textContent = curso;
    modalContentText.textContent = descripcion;

    // Cargar el video en el reproductor
    courseVideo.src = videoSrc;

    modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("modal");
    const courseVideo = modal.querySelector("#courseVideo");

    // Detener la reproducción del video al cerrar el modal
    courseVideo.pause();
    courseVideo.currentTime = 0;

    modal.style.display = "none";
}

function cargarIconos(){
    let estadoDePago = localStorage.getItem("pagado")
    console.log(estadoDePago);     
    if (estadoDePago){
        let freeIcon = document.getElementById("freeIcon");
        let premiumIcon = document.getElementById("premiumIcon")
        console.log(freeIcon, premiumIcon)
        freeIcon.classList.add("hideIcon")
        premiumIcon.classList.remove("hideIcon")
    } else {
        let freeIcon = document.getElementById("freeIcon");
        let premiumIcon = document.getElementById("premiumIcon")
        console.log(freeIcon, premiumIcon)
        freeIcon.classList.remove("hideIcon")
        premiumIcon.classList.add("hideIcon")
    }
}

function comprarSuscripcion(){
    window.location.href= "index.html"
}
let freeIcon = document.getElementById("freeIcon");

freeIcon.addEventListener("click", comprarSuscripcion)

document.addEventListener("DOMContentLoaded",cargarIconos)

