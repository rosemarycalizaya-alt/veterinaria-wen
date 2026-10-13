
// Seleccionamos el botón
const boton = document.querySelector("#btn-confirmar");

// Función para confirmar el encargo
function confirmarEncargo() {

    // Seleccionamos el párrafo del mensaje
    const mensaje = document.querySelector("#mensaje");

    // Escribimos el mensaje de confirmación
    mensaje.textContent =
        "Encargo recibido - te atiende Rosemary Cotaña Calizaya";

    // Quitamos la clase que oculta el mensaje
    mensaje.classList.remove("oculto");
}

// Detectamos el clic del botón
boton.addEventListener("click", confirmarEncargo);
