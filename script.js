function minhafuncao() {
  const jsfelino = document.querySelectorAll('.jsfelino li');
  const jsfelidescri = document.querySelectorAll('.jsfelidescri section');

  if (jsfelino.length && jsfelidescri.length) {
    jsfelidescri[0].classList.add('ativo');

    function activeTab(index) {
      jsfelidescri.forEach((section) => {
        section.classList.remove('ativo');
      });
      jsfelidescri[index].classList.add('ativo');
    }

    jsfelino.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
minhafuncao();

function initscrollSoft() {
  const linkInterno = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  linkInterno.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
initscrollSoft();

function initAnimationScroll() {
  const sections = document.querySelectorAll('js-scroll');
  if(sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScrooll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        if(isSectionVisible) {
          section.classList.add('ativo');
        }
      })
    }

    animaScrooll();

    window.addEventListener('scroll', animaScrooll);
  }
}
initAnimationScroll();