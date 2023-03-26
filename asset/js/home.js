const menuBar = document.querySelector('.menu-bar');
const trolly = document.querySelector('#trolly');
const overlay = document.querySelector('.overlay')

if (trolly) {
  trolly.addEventListener('click', () => {
      menuBar.classList.toggle('menuActive');
      overlay.classList.toggle('overlayActive')
    });
    
//     trolly.addEventListener('mouseenter', () => {
//         menuBar.classList.add('menuActive');
//         overlay.classList.toggle('overlayActive')
//     });
    
//     trolly.addEventListener('mouseleave', () => {
//         menuBar.classList.remove('menuActive');
//         overlay.classList.toggle('overlayActive')
//   });
}

if (overlay) {
  window.addEventListener('click', (event) => {
      if (!event.target.closest('.menu-bar') && !event.target.closest('#trolly')) {
        menuBar.classList.remove('menuActive');
        overlay.classList.remove('overlayActive');
      }
  });
}
