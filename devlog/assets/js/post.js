/* 상세 페이지: <body data-app="앱 id"> 로 어떤 가게인지 알려 주면
   가게 앞 골목, 목차, 이웃 가게를 그려 줍니다. */
(() => {
  const id = document.body.dataset.app;
  const app = APPS.find(a => a.id === id);
  if (!app) return;
  document.documentElement.style.setProperty('--c', app.color);

  // 가게 앞 골목
  const svg = document.getElementById('banner');
  if (svg) {
    Alley.buildStreet(svg, APPS, { focus: id });
    Alley.lightUp(svg);
  }

  // 목차
  const toc = document.getElementById('toc-list');
  const sections = [...document.querySelectorAll('.post section[id]')];
  if (toc && sections.length) {
    toc.innerHTML = sections.map(s =>
      `<li><a href="#${s.id}">${s.querySelector('h2').textContent}</a></li>`).join('');
    const links = new Map([...toc.querySelectorAll('a')].map(a => [a.hash.slice(1), a]));
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        links.forEach(l => l.classList.remove('active'));
        links.get(e.target.id)?.classList.add('active');
      });
    }, { rootMargin: '-20% 0px -70% 0px' });
    sections.forEach(s => io.observe(s));
  }

  // 이웃 가게
  const list = document.getElementById('neighbor-list');
  if (list) Alley.buildRows(list, APPS.filter(a => a.id !== id));
})();
