(function() {
  const menu = document.getElementById('menu-button');
  const body = document.getElementsByTagName('body')[0];
  const navItems = document.getElementsByClassName('nav-item');

  function toggleMenu() {
    const isOpen = menu.classList.contains('is-active');
    if (isOpen) {
      if (menu) {
        menu.classList.remove('is-active');
      }
      if (body) {
        body.classList.remove('menu-open');
      }
    } else {
      if (menu) {
        menu.classList.add('is-active');
      }
      if (body) {
        body.classList.add('menu-open');
      }
    }
  }

  menu.addEventListener('click', toggleMenu);
})();
