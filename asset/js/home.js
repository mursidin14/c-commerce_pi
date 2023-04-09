// Get DOM elements
const btnTrolly = document.querySelector('#trolly');
const btnNotif = document.querySelector('#notif');
const btnMessage = document.querySelector('#message');
const trollyForm = document.querySelector('.trolly-menu');
const notifForm = document.querySelector('#notif-menu');
const messageForm = document.querySelector('.message-menu');
const ovrTrolly = document.querySelector('.ovr-trolly');

ovrTrolly.addEventListener('click', () => {
  alert('dsd')
})
// Add event listeners
if (btnTrolly) {
  btnTrolly.addEventListener('click', (event) => {
    event.preventDefault();
    trollyForm.classList.toggle('active');
    messageForm.classList.add('d-none');
    notifForm.classList.add('d-none');
  });
}

if (btnNotif) {
  btnNotif.addEventListener('click', (event) => {
    event.preventDefault();
    notifForm.classList.toggle('d-none');
    trollyForm.classList.remove('active');
    messageForm.classList.add('d-none');
  });
}

if (btnMessage) {
  btnMessage.addEventListener('click', (event) => {
    event.preventDefault();
    messageForm.classList.toggle('d-none');
    trollyForm.classList.remove('active');
    notifForm.classList.add('d-none');
  });
}

// Add global click event listener
// window.addEventListener('click', () => {
//   messageForm.classList.add('d-none');
//   trollyForm.classList.remove('active');
//   notifForm.classList.add('d-none');
// });
