
const heroSlides = [
  {img:'assets/images/products/bijoux-corps/bijoux-corps-01.png',label:'BIJOUX DE CORPS',link:'boutique.html?cat=bijoux-corps'},
  {img:'assets/images/products/colliers/colliers-01.png',label:'COLLIERS',link:'boutique.html?cat=colliers'},
  {img:'assets/images/products/chaines-taille/chaines-taille-01.png',label:'CHAÎNES DE TAILLE',link:'boutique.html?cat=chaines-taille'},
  {img:'assets/images/products/manchettes/manchettes-01.png',label:'MANCHETTES',link:'boutique.html?cat=manchettes'},
  {img:'assets/images/products/ensembles-couple/ensembles-couple-01.png',label:'ENSEMBLES COUPLE',link:'boutique.html?cat=ensembles-couple'}
];
let heroIndex=0, heroTimer;

function showHero(i){
  heroIndex=i;
  const s=heroSlides[i];
  heroSlide.classList.add('fade-out');
  setTimeout(()=>{
    heroSlide.src=s.img;
    heroLabel.textContent=s.label;
    heroLink.href=s.link;
    heroSlide.classList.remove('fade-out');
  },180);
  [...heroDots.children].forEach((d,j)=>d.classList.toggle('active',j===i));
}
function startHero(){
  heroTimer=setInterval(()=>showHero((heroIndex+1)%heroSlides.length),3500);
}
document.addEventListener('DOMContentLoaded', async ()=>{
  heroDots.innerHTML=heroSlides.map((_,i)=>`<button data-hero="${i}" class="${i===0?'active':''}"></button>`).join('');
  heroDots.querySelectorAll('button').forEach(b=>b.onclick=()=>{clearInterval(heroTimer);showHero(+b.dataset.hero);startHero();});
  startHero();

  const [catalog,products]=await Promise.all([BT.catalog(),BT.products()]);
  universeRail.innerHTML=catalog.categories.map((c,i)=>`
    <a class="universe-tile" href="boutique.html?cat=${c.slug}">
      <div class="universe-num">0${i+1}</div>
      <img src="${c.folder}/${c.prefix}-0${(i%3)+1}.png" alt="${c.name}">
      <div class="universe-info"><strong>${c.name}</strong><span>10 créations →</span></div>
    </a>`).join('');

  // Replace classic categories with cinematic cards
  homeCategories.innerHTML=catalog.categories.map((c,i)=>`
    <a class="category-cinematic cat-${i}" href="boutique.html?cat=${c.slug}">
      <img src="${c.folder}/${c.prefix}-0${(i%5)+1}.png" alt="${c.name}">
      <div class="cat-gradient"></div>
      <div class="cat-copy"><small>UNIVERS 0${i+1}</small><h3>${c.name}</h3><span>Explorer →</span></div>
    </a>`).join('');

  const byStyle = {
    'Mystique':['colliers-01','bijoux-corps-01','chaines-taille-01'],
    'Gothique':['manchettes-02','colliers-02','parures-buste-02'],
    'Romantique':['boucles-oreilles-05','colliers-05','ensembles-couple-05'],
    'Égyptien':['chaines-taille-08','bijoux-corps-08','colliers-08'],
    'Minimal':['boucles-oreilles-03','manchettes-03','colliers-03']
  };
  const findById=id=>products.find(p=>p.id===id);
  function renderStyle(style){
    const arr=(byStyle[style]||[]).map(findById).filter(Boolean);
    styleGallery.innerHTML=arr.map((p,i)=>`
      <a href="produit.html?id=${p.id}" class="style-shot shot-${i}">
        <img src="${p.image}" alt="${p.name}">
        <div><small>${style}</small><strong>${p.name}</strong><span>${BT.money(p.price)} · Découvrir →</span></div>
      </a>`).join('');
  }
  styleTabs.querySelectorAll('button').forEach(btn=>btn.onclick=()=>{
    styleTabs.querySelectorAll('button').forEach(x=>x.classList.remove('active'));
    btn.classList.add('active');
    renderStyle(btn.dataset.style);
  });
  renderStyle('Mystique');

  // Product hover: preview second image of same category where possible
  setTimeout(()=>{
    document.querySelectorAll('.product-card').forEach(card=>{
      const link=card.querySelector('.product-photo');
      const img=link?.querySelector('img');
      if(!img) return;
      const original=img.src;
      const m=img.getAttribute('src').match(/(.+)-(\d{2})\.png$/);
      if(m){
        const n=(parseInt(m[2])%10)+1;
        const alt=m[1]+'-'+String(n).padStart(2,'0')+'.png';
        card.addEventListener('mouseenter',()=>{img.classList.add('image-swap');setTimeout(()=>img.src=alt,80)});
        card.addEventListener('mouseleave',()=>{img.src=img.getAttribute('data-original')||original;img.classList.remove('image-swap')});
        img.setAttribute('data-original',img.getAttribute('src'));
      }
    });
  },200);
});
