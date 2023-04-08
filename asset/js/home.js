const btnTrolly = document.querySelector('#trolly');
const btnNotif = document.querySelector('#notif');
const btnMessage = document.querySelector('#message');

const trollyForm = document.querySelector('.trolly-menu');
if (btnTrolly) {
  btnTrolly.addEventListener('click', (event) => {
    event.preventDefault();
    trollyForm.classList.toggle('active');
    trollyForm.classList.toggle('active');
    trollyForm.classList.toggle('active');
  });
}
const notifForm = document.querySelector('.notif-menu');
if (btnNotif) {
  btnNotif.addEventListener('click', (event) => {
    event.preventDefault();
    notifForm.classList.toggle('active');
    notifForm.classList.toggle('active');
    notifForm.classList.toggle('active');
   
  });
}
const messageForm = document.querySelector('.message-menu');
if (btnMessage) {
  btnMessage.addEventListener('click', (event) => {
    event.preventDefault();
    messageForm.classList.toggle('active');
    trollyForm.classList.toggle('active');
    notifForm.classList.toggle('active');
   
  });
}

if (overlay) {
  window.addEventListener('click', (event) => {
      if (!event.target.closest('.menu-bar') && !event.target.closest('#trolly')) {
        menuBar.classList.remove('menuActive');
        overlay.classList.remove('overlayActive');
      }
  });
}


// btnCard.addEventListener('click', () => {
//   caroAktiv.classList.toggle('active');
//   alert('daddad')
// })