const menuButton = document.getElementById('menu-btn');
const toggleMenu = document.getElementById('toggle-menu');
const closeButton = document.getElementById('close-btn');

menuButton.addEventListener('click', function() {
  toggleMenu.classList.toggle('active');
});

closeButton.addEventListener('click', function() {
  toggleMenu.classList.remove('active');
});