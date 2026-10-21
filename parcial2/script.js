const formulario = document.querySelector("#form-horno");
const aviso = document.querySelector("#aviso-horno");

function validarPedido(event) {
  const nombre = document.querySelector("#nombre").value.trim();
  const correo = document.querySelector("#correo").value.trim();
  const pedido = document.querySelector("#pedido").value;

  if (nombre === "" || correo === "") {
    event.preventDefault();
    aviso.textContent = "Sin tu nombre y tu correo no anotamos el pedido.";
    aviso.classList.add("error");
    aviso.classList.remove("exito");
  } else if (!correo.includes("@")) {
    event.preventDefault();
    aviso.textContent = "A ese correo le falta el arroba - corregilo antes de enviar.";
    aviso.classList.add("error");
    aviso.classList.remove("exito");
  } else {
    aviso.textContent = "Pedido tomado - te atiende [TU NOMBRE COMPLETO]";
    aviso.classList.add("exito");
    aviso.classList.remove("error");
    // No usamos preventDefault: el navegador envía el formulario a procesar.php.
  }
}

formulario.addEventListener("submit", validarPedido);
