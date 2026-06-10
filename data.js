const SCIENTISTS = [
  {
    "id": "galileo",
    "he": {
      "name": "גליליאו גליליי",
      "role": "אסטרונום, פיזיקאי ומהנדס איטלקי",
      "lifespan": "1564–1642",
      "birth": "פיזה, דוכסות פירנצה",
      "death": "ארצ׳טרי, טוסקנה",
      "summary": "מהדמויות המרכזיות במהפכה המדעית. שיפר את הטלסקופ והשתמש בו לתצפיות שהחלישו את המודל הגאוצנטרי: ירחי צדק, מופעי נוגה, פני הירח וכתמי שמש.",
      "discovery": "תצפיות טלסקופיות ששינו את האסטרונומיה: ארבעת הירחים הגדולים של צדק, מופעי נוגה, הרי הירח וכתמי שמש.",
      "impact": "התצפיות הראו שלא הכול סובב סביב כדור הארץ וחיזקו את התפיסה ההליוצנטרית.",
      "expanded": "גלילאו לא הסתפק בהשערה תאורטית. הוא לקח מכשיר אופטי חדש יחסית, שיפר אותו, והפך אותו לכלי מחקר שמימי. התצפיות שלו בירחי צדק הראו שקיימים גופים שמימיים שאינם מקיפים את כדור הארץ. מופעי נוגה התאימו היטב למודל שבו נוגה מקיף את השמש. תצפיותיו בפני הירח ובכתמי השמש ערערו גם את התפיסה האריסטוטלית שלפיה גרמי השמים מושלמים, חלקים ובלתי משתנים.",
      "personalConsequences": "הגילויים הפכו את גלילאו לדמות מפורסמת ומבוקשת, אך גם הביאו אותו לעימות חריף עם סמכויות דתיות ואקדמיות. תמיכתו הפומבית בקופרניקוס הובילה למשפט בפני האינקוויזיציה, לגינוי רעיונותיו ולהגבלתו למעצר בית בשנותיו האחרונות. מבחינה אישית, התהילה המדעית שלו לוותה בבידוד, זהירות כפויה וצורך לנסח את רעיונותיו בזהירות רבה יותר.",
      "etymology": [["גליליאו", "שם פרטי איטלקי; קשור לשורש הלטיני/המקראי Galilaeus, כלומר 'איש הגליל'."], ["גליליי / Galilei", "שם משפחה פלורנטיני; צורת רבים/שושלת ממשפחת Galileo."], ["טלסקופ", "מיוונית tele = רחוק, skopein = לראות / להתבונן."]]
    },
    "en": {
      "name": "Galileo Galilei",
      "role": "Italian astronomer, physicist, and engineer",
      "lifespan": "1564–1642",
      "birth": "Pisa, Duchy of Florence",
      "death": "Arcetri, Tuscany",
      "summary": "A central figure of the Scientific Revolution. He improved the telescope and used it for observations that challenged geocentric astronomy: Jupiter’s moons, Venus’s phases, the Moon’s surface, and sunspots.",
      "discovery": "Telescopic discoveries: Jupiter’s four largest moons, phases of Venus, lunar mountains and craters, and sunspots.",
      "impact": "His observations showed that not everything revolves around Earth and strongly supported heliocentric astronomy.",
      "expanded": "Galileo did not rely only on abstract theory. He took a relatively new optical device, improved it, and turned it into an instrument for celestial research. His observations of Jupiter’s moons showed that some heavenly bodies do not orbit Earth. The phases of Venus fit the idea that Venus orbits the Sun. His observations of the Moon and sunspots also challenged the Aristotelian belief that heavenly bodies were perfect, smooth, and unchanging.",
      "personalConsequences": "The discoveries made Galileo famous, but they also brought him into direct conflict with religious and academic authorities. His public support for Copernicanism led to a trial before the Inquisition, condemnation of his views, and house arrest in his final years. Personally, his scientific prestige came with isolation, forced caution, and the need to express his ideas more carefully.",
      "etymology": [["Galileo", "Italian given name related to Latin/Biblical Galilaeus, 'a Galilean'."], ["Galilei", "Florentine family name; a lineage form connected with Galileo."], ["Telescope", "Greek tele = far, skopein = to look / observe."]]
    },
    "portrait": "assets/people/galileo-galilei-portrait.jpg",
    "visual": "assets/discoveries/galileo-jupiter-moons.svg"
  },
  {
    "id": "copernicus",
    "he": {
      "name": "ניקולאוס קופרניקוס",
      "role": "אסטרונום ומתמטיקאי מתקופת הרנסנס",
      "lifespan": "1473–1543",
      "birth": "טורון, פרוסיה המלכותית, ממלכת פולין",
      "death": "פרומבורק, פרוסיה המלכותית, ממלכת פולין",
      "summary": "ניסח את המודל ההליוצנטרי שלפיו הארץ וכוכבי הלכת סובבים סביב השמש. ספרו פורסם בשנת 1543 ושינה את תמונת היקום האירופית.",
      "discovery": "המודל ההליוצנטרי הקופרניקאי: השמש קרובה למרכז המערכת, וכדור הארץ הוא כוכב לכת נע.",
      "impact": "העביר את מרכז הכובד המדעי מן הארץ אל השמש ופתח דרך לקפלר, גלילאו וניוטון.",
      "expanded": "קופרניקוס פעל בעולם שבו המודל הגאוצנטרי היה חלק ממסורת מדעית, פילוסופית ודתית ארוכה. הוא לא הציע מערכת פשוטה לגמרי, אך הציב רעיון מהפכני: כדור הארץ איננו מרכז היקום הנייח, אלא גוף שמימי הנע סביב השמש ומסתובב סביב צירו. בכך הוא שינה את שאלת היסוד של האסטרונומיה — לא כיצד השמים נעים סביבנו, אלא מהו מקומו האמיתי של האדם בתוך מערכת רחבה יותר.",
      "personalConsequences": "קופרניקוס נהג בזהירות רבה ולא מיהר לפרסם את ספרו המרכזי. נראה שחשש מביקורת מדעית ותאולוגית, ולכן עבודתו הגדולה הופיעה רק סמוך מאוד למותו. מבחינה אישית, הגילוי לא הביא לו עימות פומבי גדול בחייו כמו אצל גלילאו, אך הוא הפך לאחר מותו לדמות שהציתה מחלוקת עצומה וששמה נקשר במהפכה מחשבתית רחבת היקף.",
      "etymology": [["קופרניקוס / Copernicus", "צורה לטינית של שם שמקורו כנראה בשם מקום בשלזיה: Koperniki."], ["הליו־צנטרי", "מיוונית helios = שמש, kentron = מרכז."], ["De revolutionibus", "לטינית: 'על הסיבובים/המהפכות' של הגופים השמימיים."]]
    },
    "en": {
      "name": "Nicolaus Copernicus",
      "role": "Renaissance astronomer and mathematician",
      "lifespan": "1473–1543",
      "birth": "Toruń, Royal Prussia, Kingdom of Poland",
      "death": "Frombork, Royal Prussia, Kingdom of Poland",
      "summary": "Formulated the heliocentric model in which Earth and the planets orbit the Sun. His 1543 book changed Europe’s cosmic picture.",
      "discovery": "Copernican heliocentrism: the Sun is near the center, and Earth is a moving planet.",
      "impact": "Shifted astronomy away from an Earth-centered universe and prepared the way for Kepler, Galileo, and Newton.",
      "expanded": "Copernicus worked in a world where geocentric astronomy was part of a long scientific, philosophical, and religious tradition. His system was not simple in every detail, but it introduced a revolutionary idea: Earth was not the motionless center of the cosmos, but a heavenly body that orbits the Sun and rotates on its axis. He changed the basic question of astronomy from how the heavens move around us to what humanity’s real place is within a larger system.",
      "personalConsequences": "Copernicus was cautious and did not rush to publish his major book. He seems to have feared scientific and theological criticism, so his great work appeared only near the end of his life. Personally, his discovery did not bring him the kind of public trial later faced by Galileo, but after his death his name became attached to a vast intellectual revolution.",
      "etymology": [["Copernicus", "Latinized form probably connected with the Silesian place-name Koperniki."], ["Heliocentric", "Greek helios = Sun, kentron = center."], ["De revolutionibus", "Latin: 'On the revolutions' of the heavenly spheres."]]
    },
    "portrait": "assets/people/nicolaus-copernicus-portrait.jpg",
    "visual": "assets/discoveries/copernicus-heliocentric-model.svg"
  },
  {
    "id": "kepler",
    "he": {
      "name": "יוהאנס קפלר",
      "role": "אסטרונום ומתמטיקאי גרמני",
      "lifespan": "1571–1630",
      "birth": "וייל דר שטאט, האימפריה הרומית הקדושה",
      "death": "רגנסבורג, האימפריה הרומית הקדושה",
      "summary": "גילה את חוקי תנועת הפלנטות והראה שהמסלולים אינם מעגלים מושלמים אלא אליפסות.",
      "discovery": "שלושת חוקי קפלר: מסלולים אליפטיים, שטחים שווים בזמנים שווים, ויחס מתמטי בין זמן המחזור למרחק מהשמש.",
      "impact": "הפך את המודל הקופרניקאי למדויק יותר והכין את הקרקע לחוק הכבידה של ניוטון.",
      "expanded": "קפלר קיבל מטיכו ברהה מאגר עצום של מדידות אסטרונומיות מדויקות. במקום לכפות על הנתונים את האידיאל העתיק של מעגלים מושלמים, הוא נתן למדידות להוביל אותו. כך הגיע לרעיון שהמסלול של מאדים, ובהמשך של הפלנטות בכלל, הוא אליפטי. שלושת חוקיו יצרו חיבור חדש בין תצפית, מתמטיקה ופיזיקה: תנועת כוכבי הלכת נעשתה תופעה שניתן לתאר במספרים מדויקים.",
      "personalConsequences": "הגילויים העניקו לקפלר מעמד מדעי יוצא דופן, אך חייו האישיים נשארו קשים ורצופי טלטלות. הוא התמודד עם אי־יציבות פוליטית ודתית, קשיי פרנסה, נדודים, מחלות ואסונות משפחתיים. עבודתו גם דרשה ממנו להיפרד מאידיאלים מתמטיים ישנים של שלמות מעגלית, דבר שהיה משמעותי מבחינה אינטלקטואלית ואישית כאחד.",
      "etymology": [["Kepler", "שם משפחה גרמני; ייתכן קשור למילה Kappe / כובע או לכינוי מקצועי/מקומי."], ["אליפסה", "מיוונית elleipsis = חֶסֶר / השמטה; צורה גאומטרית סגורה בעלת שני מוקדים."], ["פלנטה", "מיוונית planetes = נודד, משום שכוכבי הלכת נראו 'נודדים' על פני השמים."]]
    },
    "en": {
      "name": "Johannes Kepler",
      "role": "German astronomer and mathematician",
      "lifespan": "1571–1630",
      "birth": "Weil der Stadt, Holy Roman Empire",
      "death": "Regensburg, Holy Roman Empire",
      "summary": "Discovered the laws of planetary motion and showed that planetary orbits are ellipses, not perfect circles.",
      "discovery": "Kepler’s three laws: elliptical orbits, equal areas in equal times, and a mathematical relation between orbital period and distance.",
      "impact": "Made the Copernican system mathematically precise and prepared the way for Newton’s law of gravitation.",
      "expanded": "Kepler inherited Tycho Brahe’s vast body of precise astronomical measurements. Instead of forcing the data into the ancient ideal of perfect circles, he allowed the observations to guide him. This led him to the idea that the orbit of Mars, and eventually planetary orbits in general, are elliptical. His three laws created a new connection between observation, mathematics, and physics: planetary motion became a phenomenon that could be described by precise numbers.",
      "personalConsequences": "The discoveries gave Kepler extraordinary scientific status, but his personal life remained difficult and unstable. He faced political and religious turmoil, financial strain, travel, illness, and family tragedies. His work also forced him to abandon older ideals of circular perfection, a shift that was both intellectually and personally significant.",
      "etymology": [["Kepler", "German surname; possibly linked with Kappe / cap or a local/professional nickname."], ["Ellipse", "Greek elleipsis = omission / falling short; a closed curve with two foci."], ["Planet", "Greek planetes = wanderer, because planets seem to wander across the sky."]]
    },
    "portrait": "assets/people/johannes-kepler-portrait.jpg",
    "visual": "assets/discoveries/kepler-elliptical-orbit.svg"
  },
  {
    "id": "tycho",
    "he": {
      "name": "טיכו ברהה",
      "role": "אסטרונום דני",
      "lifespan": "1546–1601",
      "birth": "טירת קנוטסטורפ, סקאניה, דנמרק־נורווגיה",
      "death": "פראג, ממלכת בוהמיה",
      "summary": "גדול האסטרונומים התצפיתיים לפני עידן הטלסקופ. בנה מצפי כוכבים ומדד מיקומי כוכבים וכוכבי לכת בדיוק חסר תקדים.",
      "discovery": "תצפיות מדויקות בכוכבים, בסופרנובה של 1572 ובשביט של 1577; הנתונים שלו אפשרו לקפלר לגלות את חוקי התנועה.",
      "impact": "הוכיח שהשמים אינם 'בלתי משתנים' וסיפק מסד נתונים שהפך את האסטרונומיה למדע מדיד.",
      "expanded": "טיכו ברהה היה מהפכן מסוג אחר: הוא לא בנה בעיקר תאוריה חדשה, אלא יצר תשתית תצפיתית מדויקת. בעידן שלפני הטלסקופ הוא פיתח מכשירי מדידה גדולים, הקים את מצפה אורניבורג, ותיעד מיקומי כוכבים וכוכבי לכת ברמת דיוק יוצאת דופן. הסופרנובה של 1572 והשביט של 1577 סייעו לערער את הרעיון שהשמיים הם תחום נצחי ובלתי משתנה.",
      "personalConsequences": "הצלחתו המדעית של טיכו הייתה קשורה ישירות למעמדו החברתי ולחסות מלכותית. הוא זכה למשאבים עצומים, אך גם היה תלוי בפטרונים פוליטיים. כאשר יחסיו עם השלטון הדני השתנו, הוא איבד את בסיסו בדנמרק ונאלץ לעבור לפראג. במובן אישי, המדע שלו היה מפעל חיים מפואר אך פגיע, שתלוי בממון, כוח ויוקרה.",
      "etymology": [["Tycho", "צורה לטינית/דנית של השם Tyge; שם סקנדינבי עתיק."], ["Brahe", "שם אצולה דני־שוודי."], ["אורניבורג / Uraniborg", "'טירת אורניה' — אורניה היא מוזת האסטרונומיה במיתולוגיה היוונית."]]
    },
    "en": {
      "name": "Tycho Brahe",
      "role": "Danish astronomer",
      "lifespan": "1546–1601",
      "birth": "Knutstorp Castle, Scania, Denmark–Norway",
      "death": "Prague, Kingdom of Bohemia",
      "summary": "The great observational astronomer before the telescope. He built observatories and measured stellar and planetary positions with unprecedented accuracy.",
      "discovery": "Precise observations of stars, the 1572 supernova, and the 1577 comet; his data enabled Kepler’s laws.",
      "impact": "Showed that the heavens were not unchanging and provided the data foundation for mathematical astronomy.",
      "expanded": "Tycho Brahe was a different kind of revolutionary. He did not mainly build a new theory; he built an observational foundation. Before the telescope, he developed large measuring instruments, established the observatory Uraniborg, and recorded stellar and planetary positions with extraordinary precision. The supernova of 1572 and the comet of 1577 helped challenge the idea that the heavens were eternal and unchanging.",
      "personalConsequences": "Tycho’s scientific success was directly tied to social rank and royal patronage. He received enormous resources, but he also depended on political sponsors. When his relationship with Danish authority changed, he lost his base in Denmark and moved to Prague. Personally, his science was a magnificent but vulnerable life project, dependent on money, power, and prestige.",
      "etymology": [["Tycho", "Latin/Danish form of Tyge, an old Scandinavian name."], ["Brahe", "Danish–Swedish noble family name."], ["Uraniborg", "'Castle of Urania'; Urania is the Greek muse of astronomy."]]
    },
    "portrait": "assets/people/tycho-brahe-portrait.jpg",
    "visual": "assets/discoveries/tycho-observatory.svg"
  },
  {
    "id": "bacon",
    "he": {
      "name": "פרנסיס בייקון",
      "role": "פילוסוף ומדינאי אנגלי",
      "lifespan": "1561–1626",
      "birth": "לונדון, אנגליה",
      "death": "הייגייט, ליד לונדון, אנגליה",
      "summary": "מהמעצבים החשובים של השיטה המדעית המודרנית: איסוף תצפיות, ניסוי שיטתי, זהירות מדעות קדומות והסקה אינדוקטיבית.",
      "discovery": "ניסוח פילוסופי של מתודה מדעית המבוססת על תצפית וניסוי.",
      "impact": "השפיע על האופן שבו מדע מודרני מבדיל בין אמונה, סמכות, תצפית וניסוי.",
      "expanded": "בייקון לא גילה כוכב לכת או איבר חדש בגוף, אלא עיצב דרך חשיבה. הוא תקף הסתמכות עיוורת על סמכות ועל מסורת, והדגיש איסוף שיטתי של עובדות, ניסויים חוזרים, בדיקת הטיות והסקה מן הפרטים אל הכלל. חשיבותו הייתה ביצירת אידיאל חדש של ידע: ידע שאינו רק פרשנות לטקסטים עתיקים, אלא תהליך פעיל של חקירה, תיקון ובדיקה.",
      "personalConsequences": "בייקון היה גם איש מדינה בכיר, והקריירה הציבורית שלו ידעה עליות וירידות חדות. נפילתו הפוליטית והאשמות בשחיתות פגעו במעמדו, אך אפשרו גם לקרוא את כתביו המדעיים והפילוסופיים בנפרד ממעמדו הרשמי. במובן אישי, מורשתו המדעית שרדה ואף גברה על כישלונותיו הפוליטיים.",
      "etymology": [["Francis", "מן הלטינית Franciscus = פרנקי / צרפתי."], ["Bacon", "שם משפחה אנגלי; במקור ייתכן כינוי הקשור למילה bacon או לשם גרמאני."], ["אינדוקציה", "מלטינית inducere = להוביל פנימה; הסקה מפרטים רבים אל כלל."]]
    },
    "en": {
      "name": "Francis Bacon",
      "role": "English philosopher and statesman",
      "lifespan": "1561–1626",
      "birth": "London, England",
      "death": "Highgate, near London, England",
      "summary": "A major architect of modern scientific method: systematic observation, experiment, caution against bias, and inductive reasoning.",
      "discovery": "A philosophical formulation of scientific method based on observation and experiment.",
      "impact": "Helped shape the modern separation between authority, belief, observation, and testable experiment.",
      "expanded": "Bacon did not discover a planet or a new organ; he shaped a method of thinking. He criticized blind dependence on authority and tradition, emphasizing systematic collection of facts, repeated experiments, awareness of bias, and reasoning from particulars to general principles. His importance lay in creating a new ideal of knowledge: not merely commentary on ancient texts, but an active process of investigation, correction, and testing.",
      "personalConsequences": "Bacon was also a high-ranking statesman, and his public career had sharp rises and falls. His political downfall and accusations of corruption damaged his status, but they also allowed later readers to separate his scientific and philosophical writings from his official career. Personally, his scientific legacy outlived and overshadowed his political failures.",
      "etymology": [["Francis", "From Latin Franciscus = Frankish / French."], ["Bacon", "English surname; possibly linked to the word bacon or to a Germanic personal name."], ["Induction", "Latin inducere = to lead in; reasoning from many particulars to a general rule."]]
    },
    "portrait": "assets/people/francis-bacon-portrait.jpg",
    "visual": "assets/discoveries/bacon-scientific-method.svg"
  },
  {
    "id": "descartes",
    "he": {
      "name": "רנה דקארט",
      "role": "פילוסוף ומתמטיקאי צרפתי",
      "lifespan": "1596–1650",
      "birth": "לה היי אן טורן, צרפת",
      "death": "סטוקהולם, שוודיה",
      "summary": "פיתח את הגאומטריה האנליטית — חיבור בין אלגברה לגאומטריה באמצעות מערכת צירים. מן ההוגים החשובים של הרציונליזם המודרני.",
      "discovery": "הגאומטריה האנליטית והמערכת הקרטזית, שבה נקודה מתוארת באמצעות זוג מספרים.",
      "impact": "יצר שפה מתמטית שהפכה בסיס לפיזיקה, הנדסה, גרפים, אנליזה ומחשוב.",
      "expanded": "דקארט חיבר בין שני עולמות שנראו עד אז נפרדים: צורה ומספר. באמצעות מערכת צירים אפשר לתאר קו, עקומה או נקודה בעזרת משוואות. החיבור הזה הוליד את הגאומטריה האנליטית, והוא הפך את המרחב לשפה מתמטית מדויקת. מבחינה פילוסופית, דקארט ביקש לבנות ידע ודאי מן היסוד, מתוך ספק שיטתי ומתוך אמון בכוחו של ההיגיון.",
      "personalConsequences": "הרעיונות של דקארט העניקו לו שם בינלאומי, אך גם גרמו לו לנקוט זהירות. הוא חי שנים רבות מחוץ לצרפת, בעיקר בארצות השפלה, שבהן יכול היה לעבוד בחופש יחסי. פרסום רעיונותיו דרש ממנו איזון בין חדשנות, ביקורת דתית וזהירות פוליטית. בסוף חייו עבר לשוודיה, ושם מת לאחר תקופה קצרה בתנאים קשים יחסית.",
      "etymology": [["René", "צרפתית; מן הלטינית Renatus = נולד מחדש."], ["Descartes", "שם משפחה צרפתי; קשור לצורה des Cartes = מן/של המקומות או הקרטות."], ["קרטזי", "על שם Descartes; מערכת צירים שבה כל נקודה מקבלת קואורדינטות."]]
    },
    "en": {
      "name": "René Descartes",
      "role": "French philosopher and mathematician",
      "lifespan": "1596–1650",
      "birth": "La Haye en Touraine, France",
      "death": "Stockholm, Sweden",
      "summary": "Developed analytic geometry, linking algebra and geometry through coordinates. A leading figure of modern rationalism.",
      "discovery": "Analytic geometry and the Cartesian coordinate system, where a point is described by numbers.",
      "impact": "Created a mathematical language fundamental to physics, engineering, graphs, analysis, and computing.",
      "expanded": "Descartes connected two worlds that had often seemed separate: shape and number. With a coordinate system, a line, curve, or point can be described by equations. This connection produced analytic geometry and turned space into a precise mathematical language. Philosophically, Descartes sought to rebuild knowledge from the ground up through systematic doubt and confidence in reason.",
      "personalConsequences": "Descartes’ ideas gave him an international reputation, but they also made caution necessary. He spent many years outside France, especially in the Dutch Republic, where he could work with relative freedom. Publishing his ideas required a balance between innovation, religious criticism, and political prudence. Late in life he moved to Sweden, where he died after a short period in difficult conditions.",
      "etymology": [["René", "French from Latin Renatus = born again."], ["Descartes", "French surname; associated with des Cartes = of/from the Cartes."], ["Cartesian", "Named after Descartes; a coordinate system assigning numbers to points."]]
    },
    "portrait": "assets/people/rene-descartes-portrait.jpg",
    "visual": "assets/discoveries/descartes-coordinate-plane.svg"
  },
  {
    "id": "vesalius",
    "he": {
      "name": "אנדראס וסאליוס",
      "role": "רופא ואנטומיסט פלמי",
      "lifespan": "1514–1564",
      "birth": "בריסל, ארצות השפלה ההבסבורגיות",
      "death": "זקינתוס, האיים היוניים",
      "summary": "נחשב לאבי האנטומיה המודרנית. ספרו מ־1543, De humani corporis fabrica, תיעד את גוף האדם על בסיס נתיחות ותצפית ישירה.",
      "discovery": "תיאור אנטומי מדויק של מבנה גוף האדם, תוך תיקון טעויות שהועברו ממסורת גלנוס.",
      "impact": "העביר את לימוד הרפואה מסמכות טקסטואלית עתיקה אל תצפית, נתיחה והדגמה חזותית.",
      "expanded": "וסאליוס שינה את לימוד הרפואה בכך שהחזיר את גוף האדם עצמו למרכז המחקר. במקום להסתמך רק על כתבי גלנוס ועל מסורת עתיקה, הוא התבסס על נתיחות, תצפית ישירה ואיורים מדויקים. ספרו משנת 1543 היה לא רק חיבור רפואי אלא גם יצירת דפוס חזותית מרשימה, שבה הטקסט והדימוי פעלו יחד כדי ללמד אנטומיה חדשה ומדויקת יותר.",
      "personalConsequences": "עבודתו של וסאליוס העניקה לו תהילה מקצועית ומעמד בחצרות שליטים, אך גם עוררה התנגדות מצד רופאים ומורים שהיו מחויבים למסורת גלנוס. הוא נאלץ להתמודד עם ביקורת על כך שתיקן סמכויות עתיקות. חייו המאוחרים כללו מעבר מתפקיד חוקר ומורה לתפקיד רופא חצר, והמסע האחרון שלו הסתיים במותו באי זקינתוס.",
      "etymology": [["Andreas", "מיוונית andreios = גברי / אמיץ; מקביל לאנדרו."], ["Vesalius", "צורה לטינית של שם משפחה פלמי/בריסליאני."], ["אנטומיה", "מיוונית ana = למעלה/לחלקים, temnein = לחתוך; 'חיתוך לגורמים'."]]
    },
    "en": {
      "name": "Andreas Vesalius",
      "role": "Flemish physician and anatomist",
      "lifespan": "1514–1564",
      "birth": "Brussels, Habsburg Netherlands",
      "death": "Zakynthos, Ionian Islands",
      "summary": "Often called the father of modern anatomy. His 1543 De humani corporis fabrica documented the human body through dissection and direct observation.",
      "discovery": "Accurate anatomical description of the human body, correcting errors inherited from Galenic tradition.",
      "impact": "Shifted medicine from ancient textual authority toward observation, dissection, and visual demonstration.",
      "expanded": "Vesalius changed medical education by putting the human body itself back at the center of study. Instead of relying only on Galen’s writings and ancient tradition, he used dissection, direct observation, and precise illustrations. His 1543 book was not only a medical treatise but also a visually powerful printed work in which text and image worked together to teach a new and more accurate anatomy.",
      "personalConsequences": "Vesalius’ work brought him professional fame and positions in royal courts, but it also provoked resistance from physicians and teachers committed to Galenic tradition. He had to face criticism for correcting ancient authorities. His later life shifted from researcher and teacher to court physician, and his final journey ended with his death on the island of Zakynthos.",
      "etymology": [["Andreas", "Greek andreios = manly / brave; related to Andrew."], ["Vesalius", "Latinized form of a Flemish/Brussels family name."], ["Anatomy", "Greek ana = up/apart, temnein = to cut; 'cutting up' for study."]]
    },
    "portrait": "assets/people/andreas-vesalius-portrait.jpg",
    "visual": "assets/discoveries/vesalius-anatomy-study.svg"
  }
];
