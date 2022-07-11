(() => {
  const refs = {
    openMenuBtn: document.querySelector('.mobil-btn__open'),
    closeMenuBtn: document.querySelector('.mobil-btn__close'),
    menu: document.querySelector('.mobil-menu'),
    body: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
