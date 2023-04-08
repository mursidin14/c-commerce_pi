const btnTrolly = document.querySelector('#trolly');
const btnNotif = document.querySelector('#notif');
const btnMessage = document.querySelector('#message');

const trollyForm = document.querySelector('.trolly-menu');
if (btnTrolly) {
  btnTrolly.addEventListener('click', (event) => {
    event.preventDefault();
    trollyForm.classList.toggle('active');
    messageForm.classList.remove('active');
    notifForm.classList.remove('active');
  });
}
const notifForm = document.querySelector('#notif-menu');
if (btnNotif) {
  btnNotif.addEventListener('click', (event) => {
    event.preventDefault();
    alert('daasasfsa')
    notifForm.classList.toggle('active');
    // trollyForm.classList.remove('active');
    // messageForm.classList.remove('active');
   
  });
}
const messageForm = document.querySelector('.message-menu');
if (btnMessage) {
  btnMessage.addEventListener('click', (event) => {
    event.preventDefault();
    alert('daasasfsa')
    messageForm.classList.toggle('active');
    trollyForm.classList.remove('active');
    notifForm.classList.remove('active');
   
  });
}

// if (overlay) {
//   window.addEventListener('click', (event) => {
//       if (!event.target.closest('.menu-bar') && !event.target.closest('#trolly')) {
//         menuBar.classList.remove('menuActive');
//         overlay.classList.remove('overlayActive');
//       }
//   });
// }

