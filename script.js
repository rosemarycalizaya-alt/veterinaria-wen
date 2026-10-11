const botonTema = document.querySelector('#btn-tema');

botonTema.addEventListener('click', () => {
  const oscuro = document.body.classList.toggle('oscuro');
  botonTema.textContent = oscuro ? 'Modo claro' : 'Modo oscuro';
  botonTema.setAttribute('aria-pressed', String(oscuro));
});

const formulario = document.querySelector('#form-contacto');
const estado = document.querySelector('#estado-formulario');

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  estado.textContent = 'Formulario validado. Esta es una demostración: tu mensaje no se envió ni se guardó.';
});
