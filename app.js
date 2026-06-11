let lang = localStorage.getItem("lang") || "he";

const UI = {
  he:{
    dir:"rtl", langBtn:"English", navSources:"מקורות", navAbout:"אודות", discoverersBtn:"מגלים",
    eyebrow:"אתר דו־לשוני בעברית ובאנגלית",
    heroTitle:"מגלי המהפכה המדעית",
    heroSubtitle:"אתר מבוא על שבע דמויות מרכזיות ששינו את המדע האירופי בראשית העת החדשה — דרך תצפית, מתמטיקה, אנטומיה, ניסוי ושיטה מדעית.",
    introEyebrow:"על האתר", introTitle:"מה אפשר למצוא כאן?",
    introOneTitle:"מסע בין מגלים",
    introOneText:"האתר מציג את גליליאו, קופרניקוס, קפלר, טיכו ברהה, פרנסיס בייקון, רנה דקארט ואנדראס וסאליוס — דמויות שפעלו בתחומי האסטרונומיה, המתמטיקה, הפילוסופיה, הרפואה והשיטה המדעית.",
    introTwoTitle:"דף נפרד לכל דמות",
    introTwoText:"לכל מגלה יש דף משלו עם שנות חיים, מקום לידה ופטירה, גילוי מרכזי, השפעה היסטורית ואטימולוגיה מפורקת של מושגים ושמות חשובים.",
    introThreeTitle:"איך מנווטים?",
    introThreeText:"לחיצה על כפתור “מגלים” בסרגל הניווט פותחת תפריט נגלל עם שמות כל הדמויות. משם אפשר לעבור ישירות לדף האישי של כל מגלה.",
    sourcesEyebrow:"מקורות", sourcesTitle:"מקורות מומלצים להרחבה",
    footer:"אתר מחקר חזותי — מוכן להעלאה ל־GitHub Pages.",
    birth:"מקום לידה", death:"מקום פטירה", discovery:"הגילוי", impact:"השפעה", etymology:"אטימולוגיה מפורקת",
    portraitMissing:"הוסף כאן תמונת דיוקן", home:"חזרה לדף הבית", summary:"תקציר", expandedTitle:"הרחבת התוכן", discoveryTitle:"הגילוי המרכזי", impactTitle:"השפעה היסטורית", personalConsequencesTitle:"השלכות אישיות על המגלה",
    aboutEyebrow:"אודות היוצר", aboutTitle:"על האתר ועל היוצר",
    aboutTextOne:"האתר הזה נוצר כפרויקט מחקר חזותי על מגלי המהפכה המדעית — אנשים ששינו את הדרך שבה אנו מבינים את היקום, את גוף האדם, את המתמטיקה ואת השיטה המדעית.",
    aboutTextTwo:"המטרה היא להציג ידע היסטורי בצורה נגישה, נקייה ודו־לשונית: עברית ואנגלית. כל דף מוקדש לדמות אחרת, ומשלב ביוגרפיה, גילוי מרכזי, השפעה היסטורית, אטימולוגיה ותמונות.",
    aboutBack:"חזרה לדף הבית", aboutStart:"התחל מהדף של גלילאו",
    aboutWhyEyebrow:"הרעיון", aboutWhyTitle:"למה הקמתי את האתר?",
    aboutWhyTextOne:"האתר נועד לחבר בין סיפור היסטורי לבין חוויית קריאה חזותית. במקום להציג רק רשימת שמות ותאריכים, הוא מנסה להראות כיצד רעיונות, תצפיות ואנשים אמיתיים שינו את הדרך שבה העולם הובן.",
    aboutWhyTextTwo:"המהפכה המדעית מעניינת במיוחד משום שהיא אינה רק אוסף של תגליות. היא שינוי עמוק בשאלה איך יודעים דבר: האם מסתמכים על סמכות, או בודקים, מודדים, מתבוננים ומשווים?",
    aboutMethodEyebrow:"דרך העבודה", aboutMethodTitle:"איך האתר בנוי?",
    aboutMethodTextOne:"כל דמות באתר מקבלת דף נפרד עם מבנה קבוע: תקציר, גילוי מרכזי, השפעה היסטורית, הרחבת תוכן, השלכות אישיות ואטימולוגיה מפורקת.",
    aboutMethodTextTwo:"העיצוב נבנה בסגנון כהה ומוזיאוני, כדי לתת תחושה של תערוכה דיגיטלית. התפריט מאפשר מעבר מהיר בין המגלים, והאתר כולו מותאם גם לקריאה מהנייד.",
    aboutLearningEyebrow:"למידה", aboutLearningTitle:"למי האתר מתאים?",
    aboutLearningTextOne:"האתר מתאים ללמידה עצמית, להיכרות ראשונית עם המהפכה המדעית, להשראה לפרויקטים חינוכיים, ולבניית מאגר ידע היסטורי נגיש בעברית ובאנגלית.",
    aboutLearningTextTwo:"הוא מתאים במיוחד למי שאוהב היסטוריה של המדע, ביוגרפיות של מגלים, אטימולוגיה של מושגים, ואת החיבור בין טקסט, תמונה ועיצוב אינטראקטיבי.",
    aboutFutureEyebrow:"המשך הדרך", aboutFutureTitle:"כיווני הרחבה עתידיים",
    aboutFutureTextOne:"בהמשך אפשר להוסיף ציר זמן נפרד, מפות, דפי מקורות, גלריית כתבי יד, השוואות בין המודלים המדעיים, ודמויות נוספות כמו ניוטון, הויגנס, בויל, הארווי והוק.",
    aboutFutureTextTwo:"כך האתר יוכל להתפתח ממבוא חזותי לאנציקלופדיה קטנה של המהפכה המדעית ושל ראשית המדע המודרני.",
    aboutProjectEyebrow:"הפרויקט", aboutProjectTitle:"מה כבר קיים באתר?",
    aboutStepOne:"דף בית נקי עם מבוא קצר.", aboutStepTwo:"תפריט מגלים נגלל עם מעבר לדפים אישיים.", aboutStepThree:"דף מפורט לכל מגלה עם תמונות ותוכן מורחב.", aboutStepFour:"דף אודות אישי שמסביר את מטרת האתר."
  },
  en:{
    dir:"ltr", langBtn:"עברית", navSources:"Sources", navAbout:"About", discoverersBtn:"Discoverers",
    eyebrow:"A bilingual Hebrew–English website",
    heroTitle:"Discoverers of the Scientific Revolution",
    heroSubtitle:"An introductory site about seven central figures who changed early modern European science through observation, mathematics, anatomy, experiment, and scientific method.",
    introEyebrow:"About the site", introTitle:"What can you find here?",
    introOneTitle:"A journey through discoverers",
    introOneText:"The site presents Galileo, Copernicus, Kepler, Tycho Brahe, Francis Bacon, René Descartes, and Andreas Vesalius — figures active in astronomy, mathematics, philosophy, medicine, and scientific method.",
    introTwoTitle:"A separate page for each figure",
    introTwoText:"Each discoverer has a dedicated page with life years, birth and death places, a core discovery, historical impact, and decomposed etymology of important terms and names.",
    introThreeTitle:"How to navigate",
    introThreeText:"Click the “Discoverers” button in the navigation bar to open a scrollable menu with all the figures. From there, you can go directly to each discoverer’s personal page.",
    sourcesEyebrow:"Sources", sourcesTitle:"Recommended sources for expansion",
    footer:"A visual research website — ready for GitHub Pages.",
    birth:"Birth place", death:"Death place", discovery:"Discovery", impact:"Impact", etymology:"Decomposed etymology",
    portraitMissing:"Add portrait image here", home:"Back to homepage", summary:"Summary", expandedTitle:"Expanded content", discoveryTitle:"Core discovery", impactTitle:"Historical impact", personalConsequencesTitle:"Personal consequences for the discoverer",
    aboutEyebrow:"About the creator", aboutTitle:"About the site and its creator",
    aboutTextOne:"This site was created as a visual research project about the discoverers of the Scientific Revolution — people who changed how we understand the universe, the human body, mathematics, and scientific method.",
    aboutTextTwo:"The goal is to present historical knowledge in a clean, accessible, bilingual format: Hebrew and English. Each page focuses on a different figure and combines biography, core discovery, historical impact, etymology, and images.",
    aboutBack:"Back to homepage", aboutStart:"Start with Galileo",
    aboutWhyEyebrow:"The idea", aboutWhyTitle:"Why I created this site",
    aboutWhyTextOne:"The site connects historical storytelling with a visual reading experience. Instead of showing only names and dates, it shows how ideas, observations, and real people changed the way the world was understood.",
    aboutWhyTextTwo:"The Scientific Revolution is especially interesting because it is not only a collection of discoveries. It is a deep change in how people know things: do they rely on authority, or do they test, measure, observe, and compare?",
    aboutMethodEyebrow:"Method", aboutMethodTitle:"How the site is built",
    aboutMethodTextOne:"Each figure has a dedicated page with a fixed structure: summary, core discovery, historical impact, expanded content, personal consequences, and decomposed etymology.",
    aboutMethodTextTwo:"The design uses a dark museum-like style to create the feeling of a digital exhibition. The menu provides quick movement between discoverers, and the whole site is adapted for mobile reading.",
    aboutLearningEyebrow:"Learning", aboutLearningTitle:"Who is the site for?",
    aboutLearningTextOne:"The site is suitable for self-learning, a first introduction to the Scientific Revolution, educational project inspiration, and building an accessible historical knowledge base in Hebrew and English.",
    aboutLearningTextTwo:"It is especially suited for readers who enjoy history of science, biographies of discoverers, etymology of concepts, and the connection between text, image, and interactive design.",
    aboutFutureEyebrow:"Next steps", aboutFutureTitle:"Future expansion directions",
    aboutFutureTextOne:"In the future the site can add a separate timeline, maps, source pages, manuscript galleries, comparisons between scientific models, and additional figures such as Newton, Huygens, Boyle, Harvey, and Hooke.",
    aboutFutureTextTwo:"In this way the site can grow from a visual introduction into a small encyclopedia of the Scientific Revolution and early modern science.",
    aboutProjectEyebrow:"The project", aboutProjectTitle:"What already exists on the site?",
    aboutStepOne:"A clean homepage with a short introduction.", aboutStepTwo:"A scrollable discoverers menu leading to personal pages.", aboutStepThree:"A detailed page for each discoverer with images and expanded content.", aboutStepFour:"A personal About page explaining the purpose of the site."
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

function renderTextBlock(value){
  const parts = Array.isArray(value) ? value : String(value || "").split("\n").filter(Boolean);
  return parts.map(part => `<p>${part}</p>`).join("");
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
          <tr><th>${UI[lang].discovery}</th><td>${renderTextBlock(t.discovery)}</td></tr>
          <tr><th>${UI[lang].impact}</th><td>${renderTextBlock(t.impact)}</td></tr>
        </table>
        <div class="detail-grid">
          <div class="detail-box wide"><h2>${UI[lang].summary}</h2>${renderTextBlock(t.summary)}</div>
          <div class="detail-box wide"><h2>${UI[lang].expandedTitle}</h2>${renderTextBlock(t.expanded || t.summary)}</div>
          <div class="detail-box"><h2>${UI[lang].discoveryTitle}</h2>${renderTextBlock(t.discovery)}</div>
          <div class="detail-box"><h2>${UI[lang].impactTitle}</h2>${renderTextBlock(t.impact)}</div>
          <div class="detail-box wide"><h2>${UI[lang].personalConsequencesTitle}</h2>${renderTextBlock(t.personalConsequences || "")}</div>
          <div class="detail-box wide"><h2>${UI[lang].etymology}</h2><div class="etymology">${t.etymology.map(([term,ex])=>`<div><strong>${term}</strong><br>${ex}</div>`).join("")}</div></div>
        </div>
      </div>
    </section>`;
}

applyLang();
