document.addEventListener('DOMContentLoaded', function () {
  const loader = document.getElementById('loader');
  const container = document.querySelector('.container');
  const header = document.querySelector('header');
  const mainLogo = document.querySelector('.main-logo');

  const isIndexPage = location.pathname === '/' || location.pathname.endsWith('index.html');
  const ANIMATION_DELAY = 100;

  if (isIndexPage) {
    if (sessionStorage.getItem('visited')) {
      if (loader) loader.style.display = 'none';
      if (container) container.style.display = 'flex';
      if (header) header.style.opacity = '1';
    } else {
      sessionStorage.setItem('visited', 'true');

      setTimeout(() => {
        new TypeIt('#animated-text', {
          speed: 150,
          startDelay: 300,
          waitUntilVisible: true,
          loop: false,
          afterComplete: function () {
            if (loader) loader.style.display = 'none';
            if (header) header.classList.add('header-visible');
            animateMainLogo();
          }
        })
          .pause(150)
          .type('fethc')
          .pause(150)
          .delete(2)
          .pause(300)
          .type('chign')
          .pause(450)
          .delete(2)
          .pause(100)
          .type('ng')
          .pause(150)
          .type('logic')
          .pause(800)
          .go();
      }, ANIMATION_DELAY);
    }
  } else {
    if (loader) loader.style.display = 'none';
    if (container) container.style.display = 'flex';
    if (header) header.style.opacity = '1';
  }

  function animateMainLogo() {
    if (mainLogo) {
      mainLogo.classList.add('main-logo-animate');
    }
  }
});