let carrito = [];

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    alert(`"${nombre}" se ha agregado al carrito.`);
}

function mostrarModalCarrito() {
    const modal = document.getElementById('modalCarrito');
    const listaCarrito = document.getElementById('listaCarrito');
    const totalCarrito = document.getElementById('totalCarrito');

    // Limpiar el contenido actual del carrito
    listaCarrito.innerHTML = '';

    // Agregar elementos al carrito dinámicamente
    let total = 0;
    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio}`;
        listaCarrito.appendChild(li);
        total += item.precio;
    });

    totalCarrito.textContent = `Total: $${total}`;

    modal.style.display = 'block';
}

function cerrarModalCarrito() {
    const modal = document.getElementById('modalCarrito');
    modal.style.opacity = 0; // Establecer la opacidad a 0
    setTimeout(() => {
        modal.style.display = 'none'; // Ocultar la modal después de 0.3 segundos
    }, 300);
}

function mostrarModalPago() {
    const modal = document.getElementById('modalPago');
    modal.style.display = 'block';
}

function cerrarModalPago() {
    const modal = document.getElementById('modalPago');
    modal.style.opacity = 0; // Establecer la opacidad a 0
    setTimeout(() => {
        modal.style.display = 'none'; // Ocultar la modal después de 0.3 segundos
    }, 300);
}

function mostrarModalPagoCompletado() {
    const modal = document.getElementById('modalPagoCompletado');
    modal.style.display = 'block';
}

function cerrarModalPagoCompletado() {
    const modal = document.getElementById('modalPagoCompletado');
    modal.style.opacity = 0; // Establecer la opacidad a 0
    setTimeout(() => {
      modal.style.display = 'none'; // Ocultar la modal después de 0.3 segundos
      const cargandoContenedor = document.getElementById('cargando-contenedor');
      cargandoContenedor.style.display = 'block'; // Mostrar el contenedor del mensaje de "Cargando"
      setTimeout(() => {
        window.location.href = "body.html"; // Redireccionar a body.html después de 5 segundos (ajusta el tiempo según tus necesidades)
      }, 5000); // Esperamos 5 segundos antes de redireccionar
    }, 100); // Esperamos 3 segundos antes de ocultar la modal
  }
  

let metodoSeleccionado = '';

function realizarPago() {
    const radios = document.getElementsByName('metodoPago');
    radios.forEach(radio => {
        if (radio.checked) {
            metodoSeleccionado = radio.value;
        }
    });

    // ... (el código de pago anterior permanece igual)

    carrito = []; // Vaciar el carrito después del pago
    mostrarModalCarrito(); // Actualizar el modal del carrito vacío
    cerrarModalPago(); // Cerrar la modal de pago
    mostrarModalPagoCompletado(); // Mostrar la modal de pago completado
}
    // Función para abrir automáticamente este archivo cuando se cargue la página
    document.addEventListener('DOMContentLoaded', () => {
        abrirOrientacionVocacional();
    });


function aumentarTamaño(plan) {
    plan.style.transform = 'scale(1.05)';
}

function disminuirTamaño(plan) {
    plan.style.transform = 'scale(1)';
}

function aumentarTamañoCarrito(carritoIcon) {
    carritoIcon.style.transform = 'scale(1.3)';
}

// Función para disminuir el tamaño del ícono del carrito
function disminuirTamañoCarrito(carritoIcon) {
    carritoIcon.style.transform = 'scale(1)';
}