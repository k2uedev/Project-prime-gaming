document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const overlay = document.querySelector('.overlay');
  const menu = document.querySelector('.menu');

  hamburger.addEventListener('click', function () {
      overlay.style.display = 'block';
      menu.style.transform = 'translateX(0)';
  });

  overlay.addEventListener('click', function () {
      overlay.style.display = 'none';
      menu.style.transform = 'translateX(-100%)';
  });
});