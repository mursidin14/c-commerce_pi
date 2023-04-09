// Get DOM elements
const btnTrolly = document.querySelector('#trolly');
const btnNotif = document.querySelector('#notif');
const btnMessage = document.querySelector('#message');
const trollyForm = document.querySelector('.trolly-menu');
const notifForm = document.querySelector('#notif-menu');
const messageForm = document.querySelector('.message-menu');
const ovrTrolly = document.querySelector('.ovr-trolly');
const ovrNotif = document.querySelector('.ovr-notif');
const ovrMessage = document.querySelector('.ovr-message');

ovrTrolly.addEventListener('click', () => {
  alert('dsd')
})
// Add event listeners
if (btnTrolly) {
  btnTrolly.addEventListener('click', (event) => {
    event.preventDefault();
    ovrTrolly.classList.toggle('d-none');
    ovrMessage.classList.add('d-none');
    ovrNotif.classList.add('d-none');
  });
}

if (btnNotif) {
  btnNotif.addEventListener('click', (event) => {
    event.preventDefault();
    ovrNotif.classList.toggle('d-none');
    ovrTrolly.classList.add('d-none');
    ovrMessage.classList.add('d-none');
  });
}

if (btnMessage) {
  btnMessage.addEventListener('click', (event) => {
    event.preventDefault();
    ovrMessage.classList.toggle('d-none');
    ovrTrolly.classList.add('d-none');
    ovrNotif.classList.add('d-none');
  });
}

// Add global click event listener
// window.addEventListener('click', () => {
//   messageForm.classList.add('d-none');
//   trollyForm.classList.remove('active');
//   notifForm.classList.add('d-none');
// });
