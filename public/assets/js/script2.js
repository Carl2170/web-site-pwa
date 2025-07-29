function initPopupWhatsApp() {
  
  let btnClosePopup = document.querySelector(".closePopup");
  let btnOpenPopup = document.querySelector(".whatsapp-button");
  let popup = document.querySelector(".popup-whatsapp");
  let sendBtn = document.getElementById("send-btn");
  let inputField = document.getElementById("whats-in");

  btnClosePopup.addEventListener("click", () => {
    popup.classList.toggle("is-active-whatsapp-popup");
  });

  btnOpenPopup.addEventListener("click", () => {
    popup.classList.toggle("is-active-whatsapp-popup");
    popup.style.animation = "fadeIn .6s 0.0s both";
  });

  sendBtn.addEventListener("click", () => {
    let msg = inputField.value;
    let relmsg = msg.replace(/ /g, "%20");

    if (msg.trim() !== "") {
      // Verificar que no esté vacío
      window.open("https://wa.me/59173776340?text=" + relmsg, "_blank");
      inputField.value = ""; // Limpiar el campo de entrada
      
      // Mostrar un toast de éxito
      Swal.fire({
        icon: 'success',
        title: 'Mensaje enviado',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
      });
    } else {
      // Mostrar alerta de advertencia con SweetAlert
      // Swal.fire({
      //   icon: 'warning',
      //   title: 'Campo vacío',
      //   text: 'Por favor, escribe un mensaje antes de enviar.',
      //   showConfirmButton: true,
      //   timer: 2000
      // });
      
      // Mostrar un toast de advertencia
      Swal.fire({
        icon: 'warning',
        title: 'Por favor, escribe un mensaje antes de enviar.',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
      });
    }
  });

  setTimeout(() => {
    popup.classList.toggle("is-active-whatsapp-popup");
  }, 3000);
}
