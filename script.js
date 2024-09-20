// Select the menu button and the navigation wrapper
const menuBtn = document.getElementById('menu-btn');
const navWrapper = document.querySelector('.nav-wrapper');

menuBtn.addEventListener('click', () => {
  navWrapper.classList.toggle('active');
  
  // change the icon (menu/close) when toggling
  if (navWrapper.classList.contains('active')) {
    menuBtn.src = './assets/close.svg'; // Change to a close icon
  } else {
    menuBtn.src = './assets/menu.svg'; // Revert to menu icon
  }
});