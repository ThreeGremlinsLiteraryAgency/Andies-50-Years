(() => {
  const style = document.createElement('style');
  style.textContent = `
    /* Decorative layer only — no scrapbook/data logic is changed. */
    .fantasy-decor { position:absolute; z-index:3; pointer-events:none; }

    /* The uploaded dragon-decorations.png in the repo is currently only 2 bytes,
       so don't render broken/cropped image placeholders. */
    .dragon-art { display:none !important; }

    .magic-sparkles {
      position:absolute;
      z-index:3;
      color:#d8c38d;
      pointer-events:none;
      font-family:Georgia,serif;
      text-shadow:0 2px 8px rgba(31,52,76,.28);
      animation:magicTwinkle 4s ease-in-out infinite;
    }
    .magic-sparkles.s1 { left:4%; top:22%; font-size:1.45rem; }
    .magic-sparkles.s2 { right:4%; top:64%; font-size:1.3rem; animation-delay:-1.5s; }
    .magic-sparkles.s3 { left:7%; bottom:15%; font-size:1.15rem; animation-delay:-2.5s; }

    @keyframes magicTwinkle {
      0%,100% { opacity:.48; transform:translateY(0) scale(1); }
      50% { opacity:1; transform:translateY(-7px) scale(1.08); }
    }

    /* Extra storybook book stacks made with CSS so they always render cleanly. */
    .decor-book-stack {
      position:absolute;
      width:155px;
      height:118px;
      z-index:3;
      pointer-events:none;
      filter:drop-shadow(0 8px 8px rgba(24,45,66,.18));
    }
    .decor-book-stack.left { left:3%; bottom:7%; transform:rotate(-6deg) scale(.88); }
    .decor-book-stack.right { right:3%; top:14%; transform:rotate(7deg) scale(.82); }
    .decor-book-stack span {
      position:absolute;
      left:0;
      display:block;
      height:27px;
      border-radius:4px 9px 9px 4px;
    }
    .decor-book-stack span::after {
      content:'';
      position:absolute;
      left:9px;
      right:5px;
      top:5px;
      bottom:5px;
      border-radius:2px 6px 6px 2px;
      background:#f4ead3;
      box-shadow:inset 0 -1px 0 rgba(71,91,108,.14);
    }
    .decor-book-stack .b1 { width:148px; bottom:5px; background:#233b57; }
    .decor-book-stack .b2 { width:132px; left:14px; bottom:40px; background:#91a8b9; transform:rotate(-3deg); }
    .decor-book-stack .b3 { width:145px; left:3px; bottom:76px; background:#b89a5b; transform:rotate(4deg); }

    /* Small gold flourishes around the scrapbook itself. */
    .scrapbook-flourish {
      position:absolute;
      z-index:2;
      color:#b89a5b;
      pointer-events:none;
      font-size:1.25rem;
      letter-spacing:.45em;
      opacity:.8;
    }
    .scrapbook-flourish.top { top:24px; right:4%; }
    .scrapbook-flourish.bottom { bottom:28px; left:4%; }

    @media(max-width:1100px) {
      .decor-book-stack { transform:scale(.7); opacity:.82; }
      .decor-book-stack.left { left:1%; }
      .decor-book-stack.right { right:1%; }
    }

    @media(max-width:760px) {
      .decor-book-stack { display:none; }
      .magic-sparkles { font-size:1rem !important; opacity:.65; }
      .scrapbook-flourish { opacity:.55; }
    }
  `;
  document.head.appendChild(style);

  const add = (parent, className, text = '') => {
    if (!parent) return null;
    const el = document.createElement('div');
    el.className = className;
    el.setAttribute('aria-hidden','true');
    if (text) el.textContent = text;
    parent.appendChild(el);
    return el;
  };

  const addBooks = (parent, side) => {
    const stack = add(parent, `decor-book-stack ${side}`);
    if (!stack) return;
    stack.innerHTML = '<span class="b1"></span><span class="b2"></span><span class="b3"></span>';
  };

  const hero = document.querySelector('.hero');
  add(hero, 'magic-sparkles s1', '✦  ✧  ✦');
  add(hero, 'magic-sparkles s2', '✧  ✦  ✧');
  add(hero, 'magic-sparkles s3', '✦  ✦  ✧');
  addBooks(hero, 'left');
  addBooks(hero, 'right');

  const scrapbook = document.querySelector('.scrapbook');
  add(scrapbook, 'scrapbook-flourish top', '✦  ✧  ✦');
  add(scrapbook, 'scrapbook-flourish bottom', '✧  ✦  ✧');
})();