const btnNotif = document.querySelector('#notif');
const btnTrolly = document.querySelector('#trolly');
const btnMessage = document.querySelector('#message');
const btnCard = document.querySelector('.btn-card')

const trollyForm = document.querySelector('.trolly-menu');
if (btnTrolly) {
  btnTrolly.addEventListener('click', (event) => {
    event.preventDefault();
    menuBar.classList.toggle('menuActive');
  });
}
const notifForm = document.querySelector('.notif-menu');
if (btnNotif) {
  btnNotif.addEventListener('click', (event) => {
    event.preventDefault();
    notifMenu.classList.toggle('notifActive');
    overlay.classList.add('overlayActive');
  });
}
  const messageForm = document.querySelector('.message-menu');

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