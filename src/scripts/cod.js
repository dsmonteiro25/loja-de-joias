function toggleMenu() {
  const nav = document.querySelector('.nav');
  nav.classList.toggle('show');
}

document.addEventListener('click', function (event) {
  const nav = document.querySelector('.nav');
  const menu = document.querySelector('.menu');
  
 
  if (!nav.contains(event.target) && !menu.contains(event.target)) {
    nav.classList.remove('show');
  }
});
