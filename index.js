document.addEventListener("DOMContentLoaded", function () {

  const formulario = document.getElementById("miFormulario");
  const nombre = document.getElementById("nombre");
  const mail = document.getElementById("mail");
  const mensaje = document.getElementById("mensaje");
  const mensajesDiv = document.getElementById("mensajesValidacion");

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    mensajesDiv.innerHTML = "";
    let errores = [];

    // Reset clases
    [nombre, mail, mensaje].forEach(input => {
      input.classList.remove("input-error", "input-ok");
    });

    // Validación nombre
    if (nombre.value.trim().length < 3) {
      errores.push("El nombre debe tener al menos 3 caracteres.");
      nombre.classList.add("input-error");
    } else {
      nombre.classList.add("input-ok");
    }

    // Validación email
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(mail.value.trim())) {
      errores.push("Ingrese un correo electrónico válido.");
      mail.classList.add("input-error");
    } else {
      mail.classList.add("input-ok");
    }

    // Validación mensaje
    if (mensaje.value.trim().length < 10) {
      errores.push("El mensaje debe tener al menos 10 caracteres.");
      mensaje.classList.add("input-error");
    } else {
      mensaje.classList.add("input-ok");
    }

    // Mostrar resultados
    if (errores.length > 0) {
      errores.forEach(error => {
        const p = document.createElement("p");
        p.style.color = "red";
        p.textContent = error;
        mensajesDiv.appendChild(p);
      });
    } else {
      const exito = document.createElement("p");
      exito.style.color = "green";
      exito.textContent = "Envío exitoso ✅";
      mensajesDiv.appendChild(exito);

      formulario.reset();
    }
  });
});