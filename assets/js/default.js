const menuToggle = document.getElementById('menu-toggle');
const menuLinks = document.getElementById('menu-links');

menuToggle.addEventListener('click', function () {
  menuLinks.classList.toggle('hidden');
  menuLinks.classList.toggle('flex');
});
