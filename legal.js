// Nyelv: ?lang=hu|en, különben a böngésző nyelve (magyarul magyar, minden más angol).
(function () {
  var param = new URLSearchParams(location.search).get('lang');
  var browser = (navigator.languages || [navigator.language]).some(function (l) {
    return (l || '').slice(0, 2).toLowerCase() === 'hu';
  });
  var lang = param === 'hu' || param === 'en' ? param : (browser ? 'hu' : 'en');
  document.documentElement.lang = lang;
  document.querySelectorAll('article[lang]').forEach(function (a) { a.hidden = a.lang !== lang; });
  document.querySelectorAll('[data-lang]').forEach(function (a) {
    a.classList.toggle('on', a.dataset.lang === lang);
  });
  var title = document.querySelector('article[lang="' + lang + '"] h1');
  if (title) document.title = 'Mind Duel – ' + title.textContent;
  // A cím a forrásban nem szerepel egyben (botok ellen); csak kattintásra áll össze.
  document.querySelectorAll('button.reveal').forEach(function (b) {
    b.addEventListener('click', function () {
      var addr = ['tfos', 'todeR', 'utuf'].join('').split('').reverse().join('').toLowerCase() +
        String.fromCharCode(64) + ['gmail', 'com'].join('.');
      var a = document.createElement('a');
      a.href = 'mailto:' + addr;
      a.textContent = addr;
      b.replaceWith(a);
    });
  });
})();
