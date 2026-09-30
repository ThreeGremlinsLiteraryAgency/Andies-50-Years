(() => {
  const style = document.createElement('style');
  style.textContent = `
    .fantasy-decor { position:absolute; z-index:4; pointer-events:none; background-image:url('dragon-decorations.png'); background-repeat:no-repeat; box-shadow:0 12px 30px rgba(19,39,59,.22); border:4px solid rgba(247,242,231,.92); }
    .dragon-reading { width:190px; height:190px; left:2.5%; top:16%; border-radius:48% 52% 45% 55%; background-size:800px 533px; background-position:0 0; transform:rotate(-4deg); }
    .dragon-flying { width:220px; height:155px; right:2%; bottom:10%; border-radius:52% 48% 55% 45%; background-size:768px 512px; background-position:100% 0; transform:rotate(4deg); }
    .dragon-sleeping { width:205px; height:170px; right:2.5%; top:13%; border-radius:45% 55% 48% 52%; background-size:800px 533px; background-position:34% 0; transform:rotate(3deg); }
    .scrapbook-dragon { width:150px; height:145px; right:-34px; top:115px; border-radius:50%; background-size:720px 480px; background-position:100% 55%; opacity:.94; }
    .ending-dragon { width:180px; height:150px; left:5%; bottom:12px; border-radius:50%; background-size:720px 480px; background-position:0 100%; opacity:.9; }
    .magic-sparkles { position:absolute; z-index:3; color:#d8c38d; pointer-events:none; font-size:1.35rem; letter-spacing:.55em; text-shadow:0 2px 8px rgba(31,52,76,.25); animation:magicTwinkle 4s ease-in-out infinite; }
    .magic-sparkles.s1 { left:4%; top:47%; }
    .magic-sparkles.s2 { right:5%; top:54%; animation-delay:-1.5s; }
    .magic-sparkles.s3 { left:8%; bottom:18%; animation-delay:-2.5s; }
    @keyframes magicTwinkle { 0%,100% { opacity:.45; transform:translateY(0) scale(1); } 50% { opacity:1; transform:translateY(-7px) scale(1.08); } }
    .storybook-bookmark { position:absolute; z-index:2; width:135px; height:105px; left:-22px; top:44%; background-image:url('dragon-decorations.png'); background-size:680px 453px; background-position:0 58%; border-radius:14px; border:3px solid rgba(247,242,231,.88); box-shadow:0 9px 22px rgba(31,52,76,.18); transform:rotate(-6deg); pointer-events:none; }
    @media(max-width:1100px) { .dragon-reading,.dragon-flying,.dragon-sleeping { width:135px; height:125px; opacity:.78; } .scrapbook-dragon { width:110px; height:105px; right:-18px; } }
    @media(max-width:760px) { .fantasy-decor,.storybook-bookmark { display:none; } .magic-sparkles { font-size:1rem; opacity:.65; } }
  `;
  document.head.appendChild(style);

  const add = (parent, className) => {
    if (!parent) return;
    const el = document.createElement('div');
    el.className = className;
    el.setAttribute('aria-hidden','true');
    parent.appendChild(el);
  };

  const hero = document.querySelector('.hero');
  add(hero, 'fantasy-decor dragon-reading');
  add(hero, 'fantasy-decor dragon-sleeping');
  add(hero, 'fantasy-decor dragon-flying');
  add(hero, 'magic-sparkles s1');
  add(hero, 'magic-sparkles s2');
  add(hero, 'magic-sparkles s3');
  if (hero) {
    hero.querySelector('.s1').textContent = '✦ ✧ ✦';
    hero.querySelector('.s2').textContent = '✧ ✦ ✧';
    hero.querySelector('.s3').textContent = '✦ ✦ ✧';
  }

  const scrapbook = document.querySelector('.scrapbook');
  add(scrapbook, 'fantasy-decor scrapbook-dragon');
  add(scrapbook, 'storybook-bookmark');

  const ending = document.querySelector('.ending');
  add(ending, 'fantasy-decor ending-dragon');
})();