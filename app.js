(function(){
  const S = window.SITE, app = document.getElementById('app');
  const PH = { shopee:'連結待蝦皮分潤審核後放入', klook:'連結待 Klook / KKday 分潤審核後放入', kkday:'連結待 Klook / KKday 分潤審核後放入', ig:'貼文發布後放入', map:'地圖清單製作中' };
  const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const btn = l => l.url
    ? `<a class="btn ${l.type}" href="${esc(l.url)}" target="_blank" rel="noopener sponsored">${esc(l.label)}${(l.type==='klook'||l.type==='kkday'||l.type==='shopee')?' <span class="aff">分潤</span>':''}</a>`
    : `<span class="btn ph" title="${esc(PH[l.type]||'連結待放入')}">${esc(l.label)}<small>🔖 ${esc(PH[l.type]||'連結待放入')}</small></span>`;
  const card = c => `<article class="card"><div class="ph-img" style="background-image:url('${esc(c.img)}')"><span class="tag">${esc(c.tag)}</span></div>
    <div class="body"><h3>${esc(c.title)}</h3><p>${esc(c.text)}</p><div class="btns">${c.links.map(btn).join('')}</div></div></article>`;
  const nav = cur => `<nav class="tabs">${[{id:'',icon:'🏠',title:'首頁'}].concat(S.categories,[{id:'goods',icon:S.goods.icon,title:S.goods.title}]).map(c=>`<a href="#${c.id}" class="${cur===c.id?'on':''}">${c.icon} ${esc(c.title)}</a>`).join('')}</nav>`;
  function home(){
    const recent = (S.featured||[]).map(card).join('');
    return `<header class="hero"><div class="hero-in"><p class="hi">嗨，我們是</p><h1>travel.comcom</h1>
      <p class="lead">台中・中部的吃喝玩樂整理站。<br>賞楓、看展、泡湯、咖啡、出國優惠，幫你先查好、整理好。</p>
      <a class="igbtn" href="${S.ig}" target="_blank" rel="noopener">📷 追蹤 IG @travel.comcom</a></div></header>
      ${nav('')}
      ${recent?`<section class="wrap"><h2 class="sec">近期貼文</h2><div class="cards">${recent}</div></section>`:''}
      <section class="wrap"><h2 class="sec">分類入口</h2><div class="grid">
      ${S.categories.map(c=>`<a class="entry" href="#${c.id}"><span class="ei">${c.icon}</span><b>${esc(c.title)}</b><small>${esc(c.desc)}</small></a>`).join('')}
      <a class="entry goods" href="#goods"><span class="ei">${S.goods.icon}</span><b>${S.goods.title}</b><small>行李、收納、旅行小物推薦</small></a>
      </div></section>`;
  }
  function cat(c){
    return `<header class="bar"><a href="#">← 首頁</a><span>${c.icon} ${esc(c.title)}</span></header>${nav(c.id)}
      <section class="wrap"><p class="desc">${esc(c.desc)}</p><div class="cards">${c.cards.map(card).join('')}</div></section>`;
  }
  function goods(){
    const g = S.goods;
    return `<header class="bar"><a href="#">← 首頁</a><span>${g.icon} ${g.title}</span></header>${nav('goods')}
      <section class="wrap"><p class="desc">${esc(g.desc)}</p>
      <div class="notice">📌 本頁商品連結皆為<b>蝦皮分潤連結</b>，透過連結購買我們會獲得少量分潤，不影響你的價格。目前正在申請中，商品與連結會在審核通過後放入。</div>
      ${g.groups.map(gr=>`<h2 class="sec">${esc(gr.name)}</h2><div class="goods-list">${gr.items.map(it=>`<div class="good">
        <div class="gimg">🧳</div><div><b>${esc(it.name)}</b>${it.note?`<p>${esc(it.note)}</p>`:''}
        ${it.url?`<a class="btn shopee" href="${esc(it.url)}" target="_blank" rel="noopener sponsored">去蝦皮看看 <span class="aff">分潤</span></a>`:`<span class="btn ph">去蝦皮看看<small>🔖 ${PH.shopee}</small></span>`}</div></div>`).join('')}</div>`).join('')}
      </section>`;
  }
  function render(){
    const id = location.hash.replace('#','');
    const c = S.categories.find(x=>x.id===id);
    app.innerHTML = (id==='goods'?goods():c?cat(c):home()) + footer();
    window.scrollTo(0,0);
  }
  const footer = () => `<footer><p class="disc">揭露：本站部分連結為分潤連結（例如 Klook、KKday、蝦皮），透過連結消費我們可能獲得分潤，不會增加你的花費。資訊以官方公告為準，出發前請再確認。</p>
    <p><a href="${S.ig}" target="_blank" rel="noopener">IG @travel.comcom</a> · © travel.comcom</p></footer>`;
  window.addEventListener('hashchange', render); render();
})();
