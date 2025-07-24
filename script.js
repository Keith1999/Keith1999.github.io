const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav ul.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
