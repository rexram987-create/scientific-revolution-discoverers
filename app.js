let lang = localStorage.getItem("lang") || "he";

const UI = {
  he:{
    dir:"rtl", langBtn:"English", navSources:"מקורות", discoverersBtn:"מגלים",
    eyebrow:"אתר דו־לשוני בעברית ובאנגלית",
    heroTitle:"מגלי המהפכה המדעית",
    heroSubtitle:"אתר קצר ונקי על שבע דמויות ששינו את המדע: תצפית, מתמטיקה, אנטומיה והשיטה המדעית.",
    galleryEyebrow:"בחר מגלה", galleryTitle:"דפים נפרדים לכל מגלה",
    sourcesEyebrow:"מקורות", sourcesTitle:"מקורות מומלצים להרחבה",
    footer:"אתר מחקר חזותי — מוכן להעלאה ל־GitHub Pages.",
    birth:"מקום לידה", death:"מקום פטירה", discovery:"הגילוי", impact:"השפעה", etymology:"אטימולוגיה מפורקת",
    portraitMissing:"הוסף כאן תמונת דיוקן", openPage:"פתח דף נפרד", home:"חזרה לדף הבית", summary:"תקציר", biography:"רקע היסטורי", discoveryTitle:"הגילוי המרכזי", impactTitle:"השפעה היסטורית"
  },
  en:{
    dir:"ltr", langBtn:"עברית", navSources:"Sources", discoverersBtn:"Discoverers",
    eyebrow:"A bilingual Hebrew–English website",
    heroTitle:"Discoverers of the Scientific Revolution",
    heroSubtitle:"A clean bilingual site about seven figures who changed science through observation, mathematics, anatomy, and scientific method.",
    galleryEyebrow:"Choose a discoverer", galleryTitle:"Separate pages for each discoverer",
    sourcesEyebrow:"Sources", sourcesTitle:"Recommended sources for expansion",
    footer:"A visual research website — ready for GitHub Pages.",
    birth:"Birth place", death:"Death place", discovery:"Discovery", impact:"Impact", etymology:"Decomposed etymology",
    portraitMissing:"Add portrait image here", openPage:"Open separate page", home:"Back to homepage", summary:"Summary", biography:"Historical background", discoveryTitle:"Core discovery", impactTitle:"Historical impact"
  }
};

function applyLang(){
  document.documentElement.lang = lang;
  document.documentElement.dir = UI[lang].dir;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.dataset.i18n;
    if(UI[lang][key]) el.textContent = UI[lang][key];
  });
  const brand = document.querySelector(".brand");
  if(brand) brand.textContent = lang === "he" ? "מגלי המהפכה המדעית" : "Scientific Revolution Discoverers";
  const langBtn = document.getElementById("langBtn");
  if(langBtn) langBtn.textContent = UI[lang].langBtn;
  renderDiscoverersMenu();
  renderCards();
  renderProfilePage();
}

const langBtn = document.getElementById("langBtn");
if(langBtn){
  langBtn.addEventListener("click",()=>{
    lang = lang === "he" ? "en" : "he";
    localStorage.setItem("lang", lang);
    applyLang();
  });
}

function imageTag(src, alt, fallbackText, cls=""){
  return `<img class="${cls}" src="${src}" alt="${alt}" onerror="this.outerHTML='<div class=&quot;fallback&quot;>${fallbackText}</div>'">`;
}

function pageUrl(id){
  return `discoverer.html?id=${encodeURIComponent(id)}`;
}

function renderDiscoverersMenu(){
  const panel = document.getElementById("discoverersPanel");
  if(!panel) return;
  panel.innerHTML = SCIENTISTS.map(s=>{
    const t = s[lang];
    return `<a class="discoverer-link" href="${pageUrl(s.id)}">
      <img src="${s.portrait}" alt="${t.name}">
      <span><strong>${t.name}</strong>${t.lifespan}</span>
    </a>`;
  }).join("");
}

const discoverersBtn = document.getElementById("discoverersBtn");
const discoverersPanel = document.getElementById("discoverersPanel");
if(discoverersBtn && discoverersPanel){
  discoverersBtn.addEventListener("click",()=>{
    const isOpen = discoverersPanel.getAttribute("aria-hidden") === "false";
    discoverersPanel.setAttribute("aria-hidden", String(isOpen));
    discoverersBtn.setAttribute("aria-expanded", String(!isOpen));
  });
  document.addEventListener("click",(e)=>{
    if(!e.target.closest(".discoverers-menu")){
      discoverersPanel.setAttribute("aria-hidden","true");
      discoverersBtn.setAttribute("aria-expanded","false");
    }
  });
}

function renderCards(){
  const cards = document.getElementById("cards");
  if(!cards) return;
  cards.innerHTML = SCIENTISTS.map(s=>{
    const t = s[lang];
    return `<article class="card">
      <a href="${pageUrl(s.id)}" aria-label="${t.name}">
        <div class="card-media">
          ${imageTag(s.portrait, t.name, UI[lang].portraitMissing + "<br>" + s.portrait)}
          ${imageTag(s.visual, t.discovery, t.discovery)}
        </div>
      </a>
      <div class="card-body">
        <h3>${t.name}</h3>
        <p class="meta">${t.role} · ${t.lifespan}</p>
        <p>${t.summary}</p>
        <div class="card-actions"><a class="button" href="${pageUrl(s.id)}">${UI[lang].openPage}</a></div>
      </div>
    </article>`;
  }).join("");
}

function getCurrentScientist(){
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || "galileo";
  return SCIENTISTS.find(s=>s.id===id) || SCIENTISTS[0];
}

function renderProfilePage(){
  const root = document.getElementById("profileRoot");
  if(!root) return;
  const s = getCurrentScientist();
  const t = s[lang];
  document.title = `${t.name} | ${lang === "he" ? "מגלי המהפכה המדעית" : "Scientific Revolution Discoverers"}`;
  root.innerHTML = `
    <a class="back-link" href="index.html">← ${UI[lang].home}</a>
    <section class="profile-hero">
      <div class="profile-images">
        ${imageTag(s.portrait, t.name, UI[lang].portraitMissing + "<br>" + s.portrait, "profile-portrait")}
        ${imageTag(s.visual, t.discovery, t.discovery, "profile-visual")}
      </div>
      <div class="profile-content">
        <p class="eyebrow">${t.role}</p>
        <h1>${t.name}</h1>
        <p class="meta">${t.lifespan}</p>
        <table class="info-table">
          <tr><th>${UI[lang].birth}</th><td>${t.birth}</td></tr>
          <tr><th>${UI[lang].death}</th><td>${t.death}</td></tr>
          <tr><th>${UI[lang].discovery}</th><td>${t.discovery}</td></tr>
          <tr><th>${UI[lang].impact}</th><td>${t.impact}</td></tr>
        </table>
        <div class="detail-grid">
          <div class="detail-box"><h2>${UI[lang].summary}</h2><p>${t.summary}</p></div>
          <div class="detail-box"><h2>${UI[lang].discoveryTitle}</h2><p>${t.discovery}</p></div>
          <div class="detail-box"><h2>${UI[lang].impactTitle}</h2><p>${t.impact}</p></div>
          <div class="detail-box"><h2>${UI[lang].etymology}</h2><div class="etymology">${t.etymology.map(([term,ex])=>`<div><strong>${term}</strong><br>${ex}</div>`).join("")}</div></div>
        </div>
      </div>
    </section>`;
}

applyLang();
