// Variable para almacenar las reseñas de los clientes
let reviews = [];

function showInicio() {
    closeSidebar();
    document.getElementById("content").innerHTML = `<header>
    <div class="logo">
    </div>

</header>

<!-- Sección de Presentación -->
<section class="presentation">
    <div class="presentation-content">
    <h1 style="font-family: 'Roboto Slab', sans-serif">Descubre tu camino hacia el éxito</h1>
    <p style="font-family: 'Nunito', sans-serif">En Sitespool, creemos que cada estudiante tiene un potencial único para alcanzar el éxito en su carrera.
            Nuestra misión es ayudarte a encontrar la vocación perfecta que te lleve hacia el futuro que sueñas.
            ¡Bienvenido a una experiencia de orientación vocacional!</p>
    </div>
    <div class="presentation-image">
        <img src="students.jpg" alt="Estudiantes felices" style="width: 300px; display: block; margin: 0 auto;">
    </div>
</section>

<!-- Sección de Quiénes Somos -->
<section class="about-us">
    <div class="about-us-content">
    <h2 style="font-family: 'Roboto Slab', sans-serif">¿Quiénes Somos?</h2>
    <p style="font-family: 'Nunito', sans-serif">Sitespool es una plataforma creada por un equipo apasionado de educadores y profesionales que entienden
            el desafío de elegir la carrera universitaria adecuada. Nuestra misión es proporcionar información
            imparcial, precisa y actualizada sobre diversas carreras y campos laborales para que tomes decisiones
            informadas y exitosas en tu futuro académico y profesional.</p>
    </div>
    <div class="about-us-image">
        <img src="team.jpg" alt="Equipo Sitespool" style="width: 300px; display: block; margin: 0 auto;">
    </div>
</section>

<!-- Sección de Misión -->
<section class="mission">
    <div class="mission-content">
    <h2 style="font-family: 'Roboto Slab', sans-serif">Nuestra Misión</h2>
    <p style="font-family: 'Nunito', sans-serif">Nuestra misión es reducir la tasa de deserción estudiantil al proporcionarte una plataforma integral de
            orientación vocacional. Queremos inspirarte y empoderarte para que descubras tus intereses, habilidades y
            pasiones, y puedas tomar decisiones educativas y profesionales con confianza. En Sitespool, creemos que
            cada estudiante tiene el potencial de crear un futuro brillante y significativo.</p>
    </div>
    <div class="mission-image">
        <img src="mision.webp" alt="Misión de Sitespool" style="width: 300px; display: block; margin: 0 auto;">
    </div>
</section>

<!-- Sección de Visión -->
<section class="vision">
    <div class="vision-content">
    <h2 style="font-family: 'Roboto Slab', sans-serif">Nuestra Visión</h2>
    <p style="font-family: 'Nunito', sans-serif">Nuestra visión es un mundo en el que todos los jóvenes tengan acceso a una educación que los motive y guíe
            hacia carreras gratificantes y exitosas. Queremos ser el puente entre tus sueños y la realidad, brindándote
            una experiencia enriquecedora y personalizada de exploración vocacional. En Sitespool, aspiramos a ser tu
            compañero de confianza en el camino hacia el éxito académico y profesional.</p>
    </div>
    <div class="vision-image">
        <img src="vision.jpg" alt="Visión de Sitespool" style="width: 300px; display: block; margin: 0 auto;">
    </div>
</section>

<!-- Pie de Página -->
<footer>
    <div class="contact-info" style="text-align: center;">
        <h3 style="font-family: 'Roboto Slab', sans-serif">Contacto</h3>
        <p style="font-family: 'Nunito', sans-serif">Correo: info@sitespool.com</p>
        <p style="font-family: 'Nunito', sans-serif">Teléfono: +1 (123) 456-7890</p>
    </div>
    <div class="footer-links">
        <ul>
            <li><a href="#">Política de Privacidad</a></li>
            <li><a href="#">Términos de Servicio</a></li>
        </ul>
        <img src="sinfondo.png" alt="Sitespool Logo" style="width: 200px; display: block; margin: 0 auto;">
    </div>
</footer>

`;
}



document.addEventListener("DOMContentLoaded", () => {
    showInicio(); // CAMBIAR LUEGO A INICIO
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

// Parte 1: Generar el contenido del formulario y los botones en el elemento con el id "content"
function generateFormContent() {
    closeSidebar();
    document.getElementById("content").innerHTML = `
        <h1 style='font-family: Roboto Slab, sans-serif;'>Test Vocacional</h1>
        <p>Completa el siguiente formulario con tus respuestas:</p>
        <form id="vocational-test-form">
            <div id="test-container">
                <!-- Las preguntas y opciones se generarán dinámicamente aquí -->
            </div>
            <button id="prev-btn" disabled>Anterior</button>
            <button id="next-btn">Siguiente</button>
            <button id="submit-btn" style="display: none;">Enviar respuestas</button>
        </form>
        <style>

        #form-container {
            max-width: 600px;
            background-color: #fff;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            font-family: 'Roboto Slab', sans-serif;
            margin-bottom: 20px;
        }
        p {
            margin-bottom: 10px;
        }
        form {
            margin-top: 20px;
        }
        .question-container {
            margin-bottom: 20px;
        }
        .options {
            display: flex;
        }
        label {
            margin-left: 5px;
        }
        button {
            margin-top: 10px;
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.2s;
        }
        button:hover {
            background-color: #0056b3;
        }
        button:disabled {
            background-color: #999;
            cursor: not-allowed;
        }
    </style>

    `;
}


// Parte 2: Lógica del test vocacional
function showTestVocacional() {
    generateFormContent();

    const questions = [
        {
            question: "Me gusta manipular herramientas o máquinas y ser capaz de aprovechar todas sus posibilidades",
            careers: [
                { name: "Ingeniería Mecánica", points: 0 },
            ],
        },
        {
            question: "Prefiero las actividades que supongan el contacto con cosas, manipular objetos y utilizar máquinas",
            careers: [
                { name: "Ingeniería Mecánica", points: 0 },
            ],
        },
        {
            question: "Tener un taller de reparación y mantenimiento de carros, tractores, etcétera.",
            careers: [
                { name: "Ingeniería Mecánica", points: 0 },
            ],
        },
        {
            question: "Cuando inicio el conocimiento de un tema nuevo, me entusiasma probar y no lo dejo hasta que consigo comprenderlo e interpretarlo",
            careers: [
                { name: "Ingeniería Telemática", points: 0 },
            ],
        },
        {
            question: "¿Te interesa cómo se comunican los distintos medios de comunicación? (TV, radios, internet)",
            careers: [
                { name: "Ingeniería Telemática", points: 0 },
            ],
        },
        {
            question: "Te gustaría diseñar e implementar sistemas de seguridad para el almacenamiento, la transmisión y accesos a redes y sistemas.",
            careers: [
                { name: "Ingeniería Telemática", points: 0 },
            ],
        },
        {
            question: "Diseñar aplicaciones distribuidas orientadas a la administración y el comercio electrónico.",
            careers: [
                { name: "Ingeniería Telemática", points: 0 },
            ],
        },
        {
            question: "¿Cuándo tienes que resolver un problema matemático, perseveras hasta encontrar la solución?",
            careers: [
                { name: "Ingeniería Estadística", points: 0 },
            ],
        },
        {
            question: "¿Tienes interés por saber cuáles son las causas que determinan ciertos fenómenos, aunque saberlo no altere tu vida?",
            careers: [
                { name: "Ingeniería Estadística", points: 0 },
            ],
        },
        {
            question: "Considero que soy una persona práctica; me gusta ocuparme en trabajos útiles en los que pueda ver pronto los resultados.",
            careers: [
                { name: "Ingeniería Estadística", points: 0 },
            ],
        },
        {
            question: "Prefiero un mismo tipo de ritmo de trabajo cada día que estar continuamente cambiando.",
            careers: [
                { name: "Ingeniería Estadística", points: 0 },
            ],
        },
        {
            question: "¿Te gusta participar en pruebas de investigación?",
            careers: [
                { name: "Ingeniería Estadística", points: 0 },
            ],
        },
        {
            question: "Aplicar conocimientos de estadística en investigaciones en diversas áreas (social, administrativa, salud, etcétera).",
            careers: [
                { name: "Ingeniería Estadística", points: 0 },
            ],
        },
        {
            question: "¿Entablas una relación casi personal con tu ordenador?",
            careers: [
                { name: "Ingeniería de Sistemas", points: 0 },
            ],
        },
        {
            question: "¿Crees que tus ideas son importantes y haces todo lo posible para ponerlas en práctica?",
            careers: [
                { name: "Ingeniería de Sistemas", points: 0 },
            ],
        },
        {
            question: "¿Te cohíbes/inhibes –cortas- al entrar a un lugar nuevo con gente desconocida?",
            careers: [
                { name: "Ingeniería de Sistemas", points: 0 },
            ],
        },
        {
            question: "¿El trabajo individual te resulta más rápido y efectivo que el trabajo grupal?",
            careers: [
                { name: "Ingeniería de Sistemas", points: 0 },
            ],
        },
        {
            question: "Me divierten los juegos que requieren pensar analítico: ajedrez, resolver preguntas matemáticas, deducir combinaciones, aplicar estrategias.",
            careers: [
                { name: "Ingeniería de Sistemas", points: 0 },
            ],
        },
        {
            question: "Diseñar programas de computación y explorar nuevas aplicaciones tecnológicas para uso del internet.",
            careers: [
                { name: "Ingeniería de Sistemas", points: 0 },
            ],
        },
        {
            question: "¿Te gusta resolver rompecabezas?",
            careers: [
                { name: "Ingeniería de Sistemas", points: 0 },
            ],
        },
        {
            question: "¿Cuándo se descompone un artefacto en tu casa, te dispones prontamente a repararlo?",
            careers: [
                { name: "Ingeniería Eléctrica", points: 0 },
            ],
        },
        {
            question: "¿Planificas detalladamente tus trabajos antes de empezar?",
            careers: [
                { name: "Ingeniería Eléctrica", points: 0 },
            ],
        },
        {
            question: "¿Consideras que las energías renovables son el futuro?",
            careers: [
                { name: "Ingeniería Eléctrica", points: 0 },
            ],
        },
        {
            question: "Contribuir al uso eficiente de la energía eléctrica para el desarrollo industrial...",
            careers: [
                { name: "Ingeniería Eléctrica", points: 0 },
            ],
        },
        {
            question: "Manejar y/o dar mantenimiento a dispositivos/aparatos tecnológicos en aviones, barcos, radares, etcétera.",
            careers: [
                { name: "Ingeniería Eléctrica", points: 0 },
            ],
        },
        {
            question: "¿Has obtenido buenas calificaciones en química?",
            careers: [
                { name: "Ingeniería Química", points: 0 },
            ],
        },
        {
            question: "¿Disfrutas de hacer experimentos con distintas sustancias?",
            careers: [
                { name: "Ingeniería Química", points: 0 },
            ],
        },
        {
            question: "¿Te gusta entender las causas que determinan los acontecimientos históricos?",
            careers: [
                { name: "Ingeniería Química", points: 0 },
            ],
        },
        {
            question: "Te gusta leer con la finalidad de buscar la verdad de cualquier asunto.",
            careers: [
                { name: "Ingeniería Química", points: 0 },
            ],
        },
        {
            question: "Investigar y probar nuevos productos farmacéuticos.",
            careers: [
                { name: "Ingeniería Química", points: 0 },
            ],
        },
        {
            question: "¿Te gustaría investigar científicamente sobre cultivos agrícolas?",
            careers: [
                { name: "Ingeniería en Alimentos", points: 0 },
            ],
        },
        {
            question: "¿Te gustaría crear nuevas técnicas para descubrir las patologías de algunas enfermedades a través del microscopio?",
            careers: [
                { name: "Ingeniería en Alimentos", points: 0 },
            ],
        },
        {
            question: "¿Te gustaría trabajar en un laboratorio mientras estudias?",
            careers: [
                { name: "Ingeniería en Alimentos", points: 0 },
            ],
        },
        {
            question: "¿Te gusta la naturaleza?",
            careers: [
                { name: "Ingeniería en Alimentos", points: 0 },
            ],
        },
        {
            question: "¿Te radicarías en una zona agrícola-ganadera para desarrollar tus actividades como profesional?",
            careers: [
                { name: "Ingeniería en Alimentos", points: 0 },
            ],
        },
        {
            question: "¿Aceptarías hacer una práctica pagada en una industria de productos alimenticios en el sector de control de calidad?",
            careers: [
                { name: "Ingeniería en Alimentos", points: 0 },
            ],
        },
        {
            question: "Soy una persona siempre dispuesta a cooperar con los demás y a participar en actividades sociales.",
            careers: [
                { name: "Ingeniería en Alimentos", points: 0 },
            ],
        },
        {
            question: "Trabajar controlando la calidad de los alimentos...",
            careers: [
                { name: "Ingeniería en Alimentos", points: 0 },
            ],
        },
        {
            question: "¿Harías un curso para aprender a fabricar los instrumentos y/o piezas de las máquinas o aparatos con que trabajas?",
            careers: [
                { name: "Ingeniería Industrial", points: 0 },
            ],
        },
        {
            question: "¿Sientes que estás capacitado para contribuir a un mejor rendimiento de una empresa?",
            careers: [
                { name: "Ingeniería Industrial", points: 0 },
            ],
        },
        {
            question: "¿Te gustaría diseñar y planificar el tráfico de tu ciudad?",
            careers: [
                { name: "Ingeniería Industrial", points: 0 },
            ],
        },
        {
            question: "Diseñar y planificar la producción masiva de artículos como muebles, autos, equipos de oficina, empaques y envases para alimentos y otros.",
            careers: [
                { name: "Ingeniería Industrial", points: 0 },
            ],
        },
        {
            question: "Resolver problemas de cálculo para construir un puente.",
            careers: [
                { name: "Ingeniería Civil", points: 0 },
            ],
        },
        {
            question: "¿Te gustaría contribuir al desarrollo de tu país proyectando obras civiles?",
            careers: [
                { name: "Ingeniería Civil", points: 0 },
            ],
        },
        {
            question: "Concebir planos para viviendas, edificios y ciudadelas.",
            careers: [
                { name: "Ingeniería Civil", points: 0 },
            ],
        },
        {
            question: "Elaborar mapas, planos e imágenes para el estudio y análisis de datos geográficos.",
            careers: [
                { name: "Ingeniería Civil", points: 0 },
            ],
        },
        {
            question: "Administrar y ordenar (planificar) adecuadamente la ocupación del espacio físico de ciudades, países, etc., utilizando imágenes de satélite, mapas.",
            careers: [
                { name: "Ingeniería Civil", points: 0 },
            ],
        },
        {
            question: "¿Te incluirías en un proyecto de investigación de los movimientos sísmicos y sus consecuencias?",
            careers: [
                { name: "Ingeniería de Petróleos", points: 0 },
            ],
        },
        {
            question: "¿Formarías parte de un equipo de trabajo orientado a la preservación de la flora y la fauna en extinción?",
            careers: [
                { name: "Ingeniería de Petróleos", points: 0 },
            ],
        },
        {
            question: "¿Te interesan más los misterios de la naturaleza que los secretos de la tecnología?",
            careers: [
                { name: "Ingeniería de Petróleos", points: 0 },
            ],
        },
        {
            question: "¿Te interesa el estudio, la exploración y la producción de hidrocarburos?",
            careers: [
                { name: "Ingeniería de Petróleos", points: 0 },
            ],
        },
        {
            question: "¿Trabajar con objetos, máquinas te resulta más gratificante que trabajar con personas?",
            careers: [
                { name: "Ingeniería Mecatrónica", points: 0 },
            ],
        },
        {
            question: "¿Te gustaría estar informado sobre los nuevos descubrimientos que se están realizando sobre el origen del Universo?",
            careers: [
                { name: "Ingeniería Mecatrónica", points: 0 },
            ],
        },
        {
            question: "¿Te atrae investigar sobre los misterios del universo, por ejemplo, los agujeros negros?",
            careers: [
                { name: "Ingeniería Mecatrónica", points: 0 },
            ],
        },
        {
            question: "Cuando realizo algún trabajo o tarea, me gusta hacerlo de manera original, de forma diferente a la mayoría de las personas.",
            careers: [
                { name: "Ingeniería Mecatrónica", points: 0 },
            ],
        },
        {
            question: "¿Te gustaría construir un robot?",
            careers: [
                { name: "Ingeniería Mecatrónica", points: 0 },
            ],
        },
        {
            question: "Diseñar máquinas que puedan simular actividades humanas.",
            careers: [
                { name: "Ingeniería Mecatrónica", points: 0 },
            ],
        },
        {
            question: "¿Cuándo eras chico, te interesaba saber cómo estaban construidos tus juguetes?",
            careers: [
                { name: "Ingeniería en Materiales", points: 0 },
            ],
        },
        {
            question: "¿Cuándo ocurre un accidente, te interesa conocer las causas?",
            careers: [
                { name: "Ingeniería en Materiales", points: 0 },
            ],
        },
        {
            question: "Te interesa participar en el diseño y desarrollo de productos de ingeniería y estructuras, incluyendo refinerías de petróleo, equipamiento deportivo y tecnología médica, tales como la elaboración de extremidades artificiales.",
            careers: [
                { name: "Ingeniería en Materiales", points: 0 },
            ],
        },
        {
            question: "¿Te gustaría trabajar en laboratorios y visitar talleres o empresas con regularidad?",
            careers: [
                { name: "Ingeniería en Materiales", points: 0 },
            ],
        },
        {
            question: "¿Te interesa la fabricación de los productos que tenemos en la cotidianidad?",
            careers: [
                { name: "Ingeniería en Materiales", points: 0 },
            ],
        },
    ];


    shuffleArray(questions);

    const options = ["poco", "mucho", "bastante"];
    let currentQuestionIndex = 0;
    let points = {};

    // Obtener referencias a los elementos del DOM
    const testContainer = document.getElementById("test-container");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const submitBtn = document.getElementById("submit-btn");

    function showQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        const questionElement = document.createElement("p");
        questionElement.textContent = currentQuestion.question;
        testContainer.innerHTML = "";
        testContainer.appendChild(questionElement);

        // Crear opciones de respuesta para la pregunta actual
        const optionContainer = document.createElement("div");
        optionContainer.classList.add("options");

        for (let i = 0; i < options.length; i++) {
            const option = options[i];
            const optionElement = document.createElement("input");
            optionElement.type = "radio";
            optionElement.name = "answer";
            optionElement.value = option;
            optionElement.id = `option-${i}`;
            optionContainer.appendChild(optionElement);

            const labelElement = document.createElement("label");
            labelElement.textContent = option;
            labelElement.setAttribute("for", `option-${i}`);
            optionContainer.appendChild(labelElement);
        }

        testContainer.appendChild(optionContainer);
    }

    function showResults() {
        // Deshabilitar botones
        prevBtn.disabled = true;
        nextBtn.disabled = true;
        submitBtn.disabled = true;
    
        // Mostrar resultados en orden descendente de puntos
        const sortedResults = Object.entries(points).sort((a, b) => b[1] - a[1]);
        const resultContainer = document.createElement("div");
        resultContainer.style.marginTop = "20px"; // Agregar margen superior para separar los resultados
    
        let resultText = "Tu elección de carrera sería:<br>"; // Añadir <br> para separar las carreras
    
        for (const [career, score] of sortedResults) {
            resultText += `${career} - ${score} puntos<br>`; // Añadir <br> para separar las carreras
        }
    
        resultContainer.innerHTML = resultText; // Usar innerHTML en lugar de textContent
        testContainer.appendChild(resultContainer);
    }
    

    // Lógica para mostrar las preguntas y obtener respuestas

    nextBtn.addEventListener("click", () => {
        const selectedOption = document.querySelector('input[name="answer"]:checked');

        if (selectedOption) {
            const selectedValue = selectedOption.value;
            const currentQuestion = questions[currentQuestionIndex];

            if (selectedValue === "poco") {
                currentQuestion.careers.forEach(career => {
                    points[career.name] = (points[career.name] || 0);
                });
            } else if (selectedValue === "mucho") {
                currentQuestion.careers.forEach(career => {
                    points[career.name] = (points[career.name] || 0) + 3;
                });
            } else if (selectedValue === "bastante") {
                currentQuestion.careers.forEach(career => {
                    points[career.name] = (points[career.name] || 0) + 6;
                });
            }

            currentQuestionIndex++;

            if (currentQuestionIndex < questions.length) {
                showQuestion();
                prevBtn.disabled = false;
            } else {
                // Se han respondido todas las preguntas
                showResults();
            }

            if (currentQuestionIndex >= questions.length - 1) {
                nextBtn.disabled = true;
                submitBtn.style.display = "inline"; // Mostrar el botón "Enviar respuestas"
            }
        }
    });

    // Event listener para el botón "Anterior"
    prevBtn.addEventListener("click", () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            showQuestion();
            nextBtn.disabled = false;
        }

        if (currentQuestionIndex === 0) {
            prevBtn.disabled = true;
        }
    });

    // Event listener para el botón "Siguiente"
    nextBtn.addEventListener("click", () => {
        if (currentQuestionIndex < questions.length) {
            currentQuestionIndex++;
            showQuestion();
            prevBtn.disabled = false;
        }

        if (currentQuestionIndex * questionsPerPage >= questions.length) {
            nextBtn.disabled = true;
            submitBtn.disabled = false;
        }
    });

    // Mostrar las primeras preguntas al cargar la página
    showQuestion();
    nextBtn.disabled = false;


    submitBtn.addEventListener("click", () => {
        showResults();
    });
    
}

showTestVocacional();


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

function cargarIconos() {
    let estadoDePago = localStorage.getItem("pagado")
    console.log(estadoDePago);
    if (estadoDePago == "true") {
        let freeIcon = document.getElementById("freeIcon");
        let premiumIcon = document.getElementById("premiumIcon")
        console.log(freeIcon, premiumIcon)
        freeIcon.classList.add("hideIcon")
        premiumIcon.classList.remove("hideIcon")
    } else {
        let freeIcon = document.getElementById("freeIcon");
        let premiumIcon = document.getElementById("premiumIcon")
        console.log(freeIcon, premiumIcon, "aqui")
        freeIcon.classList.remove("hideIcon")
        premiumIcon.classList.add("hideIcon")
    }
}

function comprarSuscripcion() {
    window.location.href = "index.html"
}
let freeIcon = document.getElementById("freeIcon");

freeIcon.addEventListener("click", comprarSuscripcion)

document.addEventListener("DOMContentLoaded", cargarIconos)

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
