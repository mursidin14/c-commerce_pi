const btnTrolly = document.querySelector('#trolly');
const btnNotif = document.querySelector('#notif');
const btnMessage = document.querySelector('#message');

const trollyForm = document.querySelector('.trolly-menu');
if (btnTrolly) {
  btnTrolly.addEventListener('click', (event) => {
    event.preventDefault();
    trollyForm.classList.toggle('active');
    messageForm.classList.add('d-none');
    notifForm.classList.add('d-none');
  });
}
const notifForm = document.getElementById('notif-menu');
console.log(notifForm, 'asdh;as')

if (btnNotif) {
  btnNotif.addEventListener('click', (event) => {
    event.preventDefault();
    notifForm.classList.toggle('d-none');
    trollyForm.classList.remove('active');
    messageForm.classList.add('d-none');
   
  });
  }

const messageForm = document.querySelector('.message-menu');
if (btnMessage) {
  btnMessage.addEventListener('click', (event) => {
    event.preventDefault();
    messageForm.classList.toggle('d-none');
    trollyForm.classList.remove('active');
    notifForm.classList.add('d-none');
   
  });
}
  window.addEventListener('click', () => {
    messageForm.classList.add('d-none');
    trollyForm.classList.remove('active');
    notifForm.classList.add('d-none');
  });


