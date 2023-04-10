// Get DOM elements
const btnProfil = document.querySelector('.profil');
const btnDaftar = document.querySelector('.btn-daftar');
const btnTrolly = document.querySelector('#trolly');
const btnNotif = document.querySelector('#notif');
const btnMessage = document.querySelector('#message');
const ovrTrolly = document.querySelector('.ovr-trolly');
const ovrNotif = document.querySelector('.ovr-notif');
const ovrMessage = document.querySelector('.ovr-message');

// Add event listeners
if (btnProfil) {
  btnProfil.addEventListener('click', (event) => {
    event.preventDefault();
  });
}
if (btnDaftar) {
  btnDaftar.addEventListener('click', (event) => {
    event.preventDefault()
  });
}
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