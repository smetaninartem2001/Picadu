let menu_toggle = document.querySelector('#menu-toggle');
let menu = document.querySelector('.sidebar');

menu_toggle.addEventListener('click', function (event) {
  event.preventDefault();
  menu.classList.toggle('visible');
})