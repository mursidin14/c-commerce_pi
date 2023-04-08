const notif = document.querySelector('#notif');
const trolly = document.querySelector('#trolly');
const overlay = document.querySelector('.overlay')
const btnCard = document.querySelector('.btn-card')
const caroAktiv = document.querySelector('.carousel-item')

const  = document.querySelector('.menu-bar');
if (trolly) {
  trolly.addEventListener('click', (event) => {
    event.preventDefault();
    menuBar.classList.toggle('menuActive');
  });
}
const notifForm = document.querySelector('.notif-menu');
if (notif) {
  notif.addEventListener('click', (event) => {
    event.preventDefault();
    notifMenu.classList.toggle('notifActive');
    overlay.classList.add('overlayActive');
  });
}
  const messageForm = document.querySelector('.notif-menu');

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