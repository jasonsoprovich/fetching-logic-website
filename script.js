document.addEventListener('DOMContentLoaded', function() {
  const loader = document.getElementById('loader');
  const container = document.querySelector('.container');
  const header = document.querySelector('header');
  
  // Only run the loader animation on index.html
  const isIndexPage = location.pathname.endsWith('index.html') || 
                      location.pathname === '/' || 
                      location.pathname.endsWith('/');
  
  if (isIndexPage) {
    if (sessionStorage.getItem('visited')) {
      loader.style.display = 'none';
      container.style.display = 'flex';
      header.style.opacity = '1';
    } else {
      sessionStorage.setItem('visited', 'true');
      
      // Initialize the TypeIt animation for the loader
      setTimeout(() => {
        new TypeIt('#animated-text', {
          speed: 150,
          startDelay: 300,
          waitUntilVisible: true,
          loop: false,
          afterComplete: function () {
            $('.loader').fadeOut(0, function () {
              $('header').css('opacity', '1');
              animateMainLogo();
            });
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
      }, 100);

      function animateMainLogo() {
        const mainLogo = document.querySelector('.main-logo');
        mainLogo.style.opacity = '0';
        mainLogo.style.transform = 'translateY(20px)';
        mainLogo.style.transition = 'opacity 1s ease, transform 1s ease';

        setTimeout(() => {
          mainLogo.style.opacity = '1';
          mainLogo.style.transform = 'translateY(0)';
        }, 100);
      }
    }
  } else {
    loader.style.display = 'none';
    container.style.display = 'flex';
    header.style.opacity = '1';
  }
});