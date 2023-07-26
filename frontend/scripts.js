// Variable para almacenar las reseñas de los clientes
let reviews = [];


function showInicio() {
    closeSidebar();
    document.getElementById("content").innerHTML = "<h1>Inicio</h1><p>Contenido de la página de Inicio</p>";
}

document.addEventListener('DOMContentLoaded', () => {
    showInicio(); // Mostrar el contenido de la opción "Inicio" al cargar la página
  });

// Variables para almacenar las imágenes seleccionadas en la colección
let selectedImages = [];

function showOrientacionVocacionalAsistida() {
    closeSidebar();
    document.getElementById("content").innerHTML = `
        <h1 style="font-family: 'Roboto Slab', sans-serif;">Orientación Vocacional Asistida</h1>
        <p style="font-family: 'Nunito', sans-serif;">Aquí podrás encontrar una serie de cursos de 
        carreras que tal vez llamen tu atención ¡Selecciona el que te guste y añadelo a tu colección!</p>
        <div id="imagePreview">
            <div class="curso-box" onclick="addToCollection('ingelec.avif', 'Ingeniería Eléctrica')">
                <img class="image-small" src="ingelec.avif" alt="Ingeniería Eléctrica">
                <p>Ingeniería Eléctrica</p>
            </div>
            <div class="curso-box" onclick="addToCollection('ingtel.jpg', 'Ingeniería Telemática')">
                <img class="image-small" src="ingtel.jpg" alt="Ingeniería Telemática">
                <p>Ingeniería Telemática</p>
            </div>
            <div class="curso-box" onclick="addToCollection('ingmec.webp', 'Ingeniería Mecánica')">
                <img class="image-small" src="ingmec.webp" alt="Ingeniería Mecánica">
                <p>Ingeniería Mecánica</p>
            </div>
            <div class="curso-box" onclick="addToCollection('ingciv.jpg', 'Ingeniería Civil')">
                <img class="image-small" src="ingciv.jpg" alt="Ingeniería Civil">
                <p>Ingeniería Civil</p>
            </div>
            <div class="curso-box" onclick="addToCollection('ingind.webp', 'Ingeniería Industrial')">
                <img class="image-small" src="ingind.webp" alt="Ingeniería Industrial">
                <p>Ingeniería Industrial</p>
            </div>
            <div class="curso-box" onclick="addToCollection('ingsis.avif', 'Ingeniería de Sistemas')">
                <img class="image-small" src="ingsis.avif" alt="Ingeniería de Sistemas">
                <p>Ingeniería de Sistemas</p>
            </div>
            <div class="curso-box" onclick="addToCollection('ingest.png', 'Ingeniería Estadística')">
                <img class="image-small" src="ingest.png" alt="Ingeniería Estadística">
                <p>Ingeniería Estadística</p>
            </div>
            <div class="curso-box" onclick="addToCollection('ingpet.png', 'Ingeniería de Petróleos')">
                <img class="image-small" src="ingpet.png" alt="Ingeniería de Petróleos">
                <p>Ingeniería de Petróleos</p>
            </div>
            <div class="curso-box" onclick="addToCollection('ingmat.png', 'Ingeniería en Materiales')">
                <img class="image-small" src="ingmat.png" alt="Ingeniería en Materiales">
                <p>Ingeniería en Materiales</p>
            </div>
            <div class="curso-box" onclick="addToCollection('ingnav.jpg', 'Ingeniería Naval')">
                <img class="image-small" src="ingnav.jpg" alt="Ingeniería Naval">
                <p>Ingeniería Naval</p>
            </div>
            <div class="curso-box" onclick="addToCollection('ingali.avif', 'Ingeniería en Alimentos')">
                <img class="image-small" src="ingali.avif" alt="Ingeniería en Alimentos">
                <p>Ingeniería en Alimentos</p>
            </div>
            <div class="curso-box" onclick="addToCollection('ingmeca.jpg', 'Ingeniería Mecatrónica')">
                <img class="image-small" src="ingmeca.jpg" alt="Ingeniería Mecatrónica">
                <p>Ingeniería Mecatrónica</p>
            </div>
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
    let collectionContent = "<h1>Colección</h1>";

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

function showResena() {
    closeSidebar();
    let content = "<h1>Reseñas</h1>";

    // Formulario para que los clientes dejen sus reseñas
    content += `
        <div class="review-form">
            <h2>Deja tu comentario y puntuación:</h2>
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
    const textoBusqueda = document.getElementById("ovBuscador").value.toLowerCase();
    const filteredCursos = cursos.filter((curso) =>
        curso.curso.toLowerCase().includes(textoBusqueda)
    );
    mostrarCursos(filteredCursos);
}

function buscarEnColeccion() {
    const textoBusqueda = document.getElementById("coleccionBuscador").value.toLowerCase();
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
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open'); // Usa toggle para alternar la clase 'open'
}

function closeSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('open'); // Removemos la clase 'open' para ocultar el sidebar
}

// Agregar un evento de clic al elemento 'document'
document.addEventListener('click', function(event) {
    const sidebar = document.querySelector('.sidebar');
    const targetElement = event.target;

    // Verificar si el clic ocurrió fuera del sidebar y del botón para abrir el sidebar
    if (!sidebar.contains(targetElement) && !targetElement.classList.contains('open-sidebar')) {
        closeSidebar();
    }
});


function closeCourseAddedModal() {
    const courseAddedModal = document.getElementById("courseAddedModal");
    courseAddedModal.style.display = "none";
}

function showWelcomeMessage() {
    const welcomeMessageContainer = document.getElementById("welcomeMessageContainer");
    const username = sessionStorage.getItem('username');
    if (username) {
        const welcomeMessage = document.createElement("p");
        welcomeMessage.innerHTML = `¡Bienvenido!<br>${username}`; // Cambio para agregar el salto de línea
        welcomeMessage.classList.add("welcome-message");
        welcomeMessageContainer.appendChild(welcomeMessage);
    }
}
  
// Mostrar el mensaje de bienvenida cuando el contenido se cargue
document.addEventListener('DOMContentLoaded', () => {
    showWelcomeMessage();
});
