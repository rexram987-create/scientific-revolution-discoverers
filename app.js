let lang = localStorage.getItem("lang") || "he";

const UI = {
  he:{
    dir:"rtl", langBtn:"English", navTimeline:"ציר זמן", navGallery:"גלריה", navSources:"מקורות",
    eyebrow:"אתר דו־לשוני בעברית ובאנגלית",
    heroTitle:"המגלים ששינו את דרך החשיבה המדעית",
    heroSubtitle:"מקופרניקוס וגלילאו ועד וסאליוס, דקארט ובייקון — מסע חזותי על תגליות, ניסויים, תצפיות, אטימולוגיה והשפעה היסטורית.",
    start:"התחל בגלריה", seeTimeline:"ראה ציר זמן", heroCardTitle:"1543–1687",
    heroCardText:"תקופה שבה תצפית, מתמטיקה וניסוי החלו להחליף סמכות עתיקה.",
    siteIncludes:"מה האתר כולל?", siteIncludesText:"לכל דמות: שנות חיים, מקום לידה ופטירה, גילוי מרכזי, השפעה, אטימולוגיה מפורקת, תמונת דיוקן ותמונה/איור של הגילוי.",
    howToUse:"איך משתמשים?", howToUseText:"לחץ על כרטיס דמות כדי לפתוח חלון מידע מלא. אפשר להחליף שפה בלחיצה אחת בין עברית לאנגלית.",
    timelineEyebrow:"ציר זמן", timelineTitle:"מהפכה מדעית במסלול אחד",
    t1473:"נולד קופרניקוס", t1543:"קופרניקוס מפרסם את De revolutionibus; וסאליוס מפרסם את Fabrica", t1572:"טיכו ברהה מתעד סופרנובה", t1610:"גלילאו משתמש בטלסקופ לתצפיות שמימיות", t1619:"קפלר מפרסם את חוקי תנועת הפלנטות", t1637:"בייקון ודקארט מעצבים מתודה, ספק, תצפית ומתמטיקה",
    galleryEyebrow:"גלריה אינטראקטיבית", galleryTitle:"המגלים והגילויים", sourcesEyebrow:"ביבליוגרפיה ראשונית", sourcesTitle:"מקורות מומלצים להרחבה", footer:"אתר מחקר חזותי — מוכן להעלאה ל־GitHub Pages.",
    birth:"מקום לידה", death:"מקום פטירה", discovery:"הגילוי", impact:"השפעה", etymology:"אטימולוגיה מפורקת", portraitMissing:"הוסף כאן תמונת דיוקן", details:"פתח מידע מלא"
  },
  en:{
    dir:"ltr", langBtn:"עברית", navTimeline:"Timeline", navGallery:"Gallery", navSources:"Sources",
    eyebrow:"A bilingual Hebrew–English website",
    heroTitle:"The discoverers who changed scientific thinking",
    heroSubtitle:"From Copernicus and Galileo to Vesalius, Descartes, and Bacon — a visual journey through discoveries, experiments, observations, etymology, and historical impact.",
    start:"Start with the gallery", seeTimeline:"See timeline", heroCardTitle:"1543–1687",
    heroCardText:"An era in which observation, mathematics, and experiment began replacing ancient authority.",
    siteIncludes:"What does the site include?", siteIncludesText:"For each figure: life years, birth and death places, core discovery, impact, decomposed etymology, portrait image, and image/illustration of the discovery.",
    howToUse:"How to use it", howToUseText:"Click a figure card to open a full information modal. Switch between Hebrew and English with one button.",
    timelineEyebrow:"Timeline", timelineTitle:"The Scientific Revolution in one path",
    t1473:"Copernicus is born", t1543:"Copernicus publishes De revolutionibus; Vesalius publishes the Fabrica", t1572:"Tycho Brahe records a supernova", t1610:"Galileo uses the telescope for celestial observations", t1619:"Kepler publishes the laws of planetary motion", t1637:"Bacon and Descartes reshape method, doubt, observation, and mathematics",
    galleryEyebrow:"Interactive gallery", galleryTitle:"The discoverers and discoveries", sourcesEyebrow:"Initial bibliography", sourcesTitle:"Recommended sources for expansion", footer:"A visual research website — ready for GitHub Pages.",
    birth:"Birth place", death:"Death place", discovery:"Discovery", impact:"Impact", etymology:"Decomposed etymology", portraitMissing:"Add portrait image here", details:"Open full profile"
  }
};

function applyLang(){
  document.documentElement.lang = lang;
  document.documentElement.dir = UI[lang].dir;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.dataset.i18n;
    if(UI[lang][key]) el.textContent = UI[lang][key];
  });
  document.querySelector(".brand").textContent = lang === "he" ? "מגלי המהפכה המדעית" : "Scientific Revolution Discoverers";
  document.getElementById("langBtn").textContent = UI[lang].langBtn;
  renderCards();
}
document.getElementById("langBtn").addEventListener("click",()=>{
  lang = lang === "he" ? "en" : "he";
  localStorage.setItem("lang", lang);
  applyLang();
});

function imageTag(src, alt, fallbackText){
  return `<img src="${src}" alt="${alt}" onerror="this.outerHTML='<div class=&quot;fallback&quot;>${fallbackText}</div>'">`;
}

function renderCards(){
  const cards = document.getElementById("cards");
  cards.innerHTML = SCIENTISTS.map((s,i)=>{
    const t = s[lang];
    return `<article class="card" tabindex="0" onclick="openScientist('${s.id}')" onkeydown="if(event.key==='Enter')openScientist('${s.id}')">
      <div class="card-media">
        ${imageTag(s.portrait, t.name, UI[lang].portraitMissing + "<br>" + s.portrait)}
        ${imageTag(s.visual, t.discovery, t.discovery)}
      </div>
      <div class="card-body">
        <h3>${t.name}</h3>
        <p class="meta">${t.role} · ${t.lifespan}</p>
        <p>${t.summary}</p>
        <p><strong>${UI[lang].details}</strong></p>
      </div>
    </article>`;
  }).join("");
}

function openScientist(id){
  const s = SCIENTISTS.find(x=>x.id===id);
  const t = s[lang];
  document.getElementById("modalBody").innerHTML = `
    <div class="modal-grid">
      <div>
        ${imageTag(s.portrait, t.name, UI[lang].portraitMissing + "<br>" + s.portrait)}
        ${imageTag(s.visual, t.discovery, t.discovery)}
      </div>
      <div>
        <p class="eyebrow">${t.role}</p>
        <h2>${t.name}</h2>
        <p class="meta">${t.lifespan}</p>
        <table class="info-table">
          <tr><th>${UI[lang].birth}</th><td>${t.birth}</td></tr>
          <tr><th>${UI[lang].death}</th><td>${t.death}</td></tr>
          <tr><th>${UI[lang].discovery}</th><td>${t.discovery}</td></tr>
          <tr><th>${UI[lang].impact}</th><td>${t.impact}</td></tr>
        </table>
        <h3>${UI[lang].etymology}</h3>
        <div class="etymology">
          ${t.etymology.map(([term,ex])=>`<div><strong>${term}</strong><br>${ex}</div>`).join("")}
        </div>
      </div>
    </div>`;
  document.getElementById("modal").setAttribute("aria-hidden","false");
}
document.getElementById("closeModal").addEventListener("click",()=>document.getElementById("modal").setAttribute("aria-hidden","true"));
document.getElementById("modal").addEventListener("click",(e)=>{ if(e.target.id==="modal") e.currentTarget.setAttribute("aria-hidden","true"); });
applyLang();
