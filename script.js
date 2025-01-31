function initTabNav() {

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
initTabNav();
