function emailValidation() {
  const form = document.getElementById('form');
  const emailField = form.email;
  const contentField= document.getElementById(`content0`)
  const emailConfirmField = form.email_confirm;
  const errorElement = document.createElement('p');
  errorElement.classList.add("alert", "compact-error"); // Agrega una nueva clase "compact-error"
  errorElement.style.display = "none"; // Oculta el mensaje de error inicialmente

  // Agrega el elemento de error al final del formulario, justo debajo del campo de confirmación de correo electrónico
  emailConfirmField.parentNode.appendChild(errorElement);

  emailConfirmField.addEventListener('input', () => {
    if (emailField.value !== emailConfirmField.value) {
      contentField.parentNode.insertBefore(errorElement, contentField);
      emailConfirmField.classList.add("alert_bg");
      errorElement.textContent = "The Email does not match";
      errorElement.style.display = "block"; // Muestra el mensaje de error
      emailConfirmField.style.backgroundColor = 'rgba(230, 169, 171, 0.5)'; // Cambia el fondo a rojo
    } else {
      errorElement.style.display = "none"; // Oculta el mensaje de error
      emailConfirmField.style.backgroundColor = ''; // Restaura el fondo
    }
  });
}

window.onload = emailValidation;