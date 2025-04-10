document.addEventListener('DOMContentLoaded', function() {
  const codeIcon = document.querySelector('.loader .code-icon .material-symbols-outlined');
  // const animatedText = document.getElementById('animated-text');
  const mainLogo = document.querySelector('.main-logo');
  
  if (mainLogo) {
    const mainIcon = mainLogo.querySelector('.material-symbols-outlined');
    if (mainIcon && codeIcon) {
      const mainIconStyles = window.getComputedStyle(mainIcon);
      codeIcon.style.fontSize = mainIconStyles.fontSize;
      codeIcon.style.padding = mainIconStyles.padding;
      codeIcon.style.borderRadius = mainIconStyles.borderRadius;
    }
  }
  
  setTimeout(() => {
    new TypeIt('#animated-text', {
      speed: 150,
      startDelay: 300,
      waitUntilVisible: true,
      loop: false,
      afterComplete: function() {
        $('.loader').fadeOut(0, function() {
          animateMainLogo();
        });
      }
    })
    .pause(300)  
    .type('fethc')
      .pause(350)
      .delete(2)
      .pause(550)
      .type('chign')
      .pause(750)
      .delete(2)
      .pause(300)
      .type('ng')
      .pause(350)
      .type('logic')
      .pause(1500)
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
});