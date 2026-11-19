/* =========================================================
   i18n.js — motor de traducción EN / ES / DE / FR / RU
   - EN por defecto
   - Inyecta con textContent (nunca innerHTML)
   - Soporta data-i18n (texto) y data-i18n-attr="attr:clave"
   - Persiste en localStorage y sincroniza <html lang>
   - Detección automática vía navigator.language
   ========================================================= */
const DICT = {
  en: {
    "skip": "Skip to content",
    "nav.services": "Services",
    "nav.areas": "Areas",
    "nav.process": "How we work",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact",
    "hero.eyebrow": "Certified electrician · Orihuela Costa · English spoken",
    "hero.title": "Second home empty for months? Don't let the electrics surprise you.",
    "hero.lead": "Authorised installer and official Boletín Eléctrico issuer. Fuse box replacements, 24/7 emergencies and smart-home checks for second homes — in English, from neighbours who live here.",
    "hero.ctaWhatsapp": "Chat on WhatsApp",
    "hero.ctaQuote": "Get a free quote",
    "certs.boletin": "Official Boletín Eléctrico",
    "certs.autonomo": "Registered installer (Comunitat Valenciana)",
    "certs.rc": "Liability insurance included",
    "services.title": "What we do",
    "services.lead": "Practical electrical work for owners who aren't always here. Every job ends with a written report and photos you can send to your insurer.",
    "services.1.title": "Fuse box replacement",
    "services.1.body": "Old 80s/90s boards upgraded to current regulations. Faster trips, real RCD protection, and paperwork your buyer's lawyer will love.",
    "services.2.title": "Safety check & report",
    "services.2.body": "Full electrical inspection with a photo report for your insurer, gestor or future buyer. Fixed price, no surprises.",
    "services.3.title": "Second-home monitoring",
    "services.3.body": "Smart plugs, leak sensors and Alexa/Google-home control so you can see from the UK if the RCD tripped — and we go check for you.",
    "services.4.title": "EV charger installation",
    "services.4.body": "Type 2 chargers for villas and garages, installed to Spanish regulation. Winter-ready for your rented car.",
    "services.5.title": "UK-style sockets & earthing",
    "services.5.body": "Switched sockets, kettles, earthing checks for British appliances. Same voltage, but we make it feel like home.",
    "services.6.title": "24/7 emergencies",
    "services.6.body": "Pool alarm tripping? Fridge off? We go, we check, we send photos and a written diagnosis. Call or WhatsApp any hour.",
    "areas.title": "Where we work",
    "areas.lead": "Local to the Orihuela Costa urbanisations. If you're a neighbour, we're 10–15 minutes away.",
    "areas.1": "La Zenia",
    "areas.2": "Cabo Roig",
    "areas.3": "Playa Flamenca",
    "areas.4": "Punta Prima",
    "areas.5": "Villamartín",
    "areas.6": "Campoamor",
    "areas.7": "Dehesa de Campoamor",
    "areas.8": "Las Ramblas",
    "areas.support": "Houses, apartments and second homes across the coast — occupied year-round or just for the summer. Same-day quotes for anything within 15 minutes of us.",
    "process.title": "How we work",
    "process.lead": "No hidden fees. Fixed quotes in writing before we touch a cable.",
    "process.1.title": "WhatsApp us",
    "process.1.body": "Send a photo and a description. We reply the same day.",
    "process.2.title": "Written quote",
    "process.2.body": "Fixed price by email. You approve before we start.",
    "process.3.title": "We fix, we report",
    "process.3.body": "We finish, send photos and a written report. Nothing else to pay.",
    "reviews.title": "What neighbours say",
    "cta.title": "Ready for a proper electrician?",
    "cta.lead": "Free quotes, English spoken, Spanish regulation respected.",
    "cta.whatsapp": "Chat on WhatsApp",
    "footer.legal": "Orihuela Costa · Comunitat Valenciana · Spain"
  },
  es: {
    "skip": "Saltar al contenido",
    "nav.services": "Servicios",
    "nav.areas": "Zonas",
    "nav.process": "Cómo trabajamos",
    "nav.reviews": "Opiniones",
    "nav.contact": "Contacto",
    "hero.eyebrow": "Electricista certificado · Orihuela Costa",
    "hero.title": "Electricistas de confianza para tu casa en Orihuela Costa",
    "hero.lead": "Instalador autorizado y emisor oficial del Boletín Eléctrico. Sustitución de cuadros, urgencias 24/7 y revisión de domótica para segundas residencias — en tu idioma, por vecinos que viven aquí.",
    "hero.ctaWhatsapp": "Hablar por WhatsApp",
    "hero.ctaQuote": "Presupuesto gratis",
    "certs.boletin": "Boletín Eléctrico oficial",
    "certs.autonomo": "Instalador autorizado (Comunitat Valenciana)",
    "certs.rc": "Seguro de responsabilidad civil incluido",
    "services.title": "Qué hacemos",
    "services.lead": "Trabajo eléctrico práctico para propietarios que no siempre están. Cada trabajo termina con informe escrito y fotos para tu seguro.",
    "services.1.title": "Cambio de cuadro eléctrico",
    "services.1.body": "Cuadros de los 80/90 actualizados a normativa vigente. Diferenciales que no saltan por gusto y documentación en regla.",
    "services.2.title": "Revisión de seguridad + informe",
    "services.2.body": "Inspección eléctrica completa con informe fotográfico para tu seguro, gestoría o futuro comprador. Precio cerrado.",
    "services.3.title": "Vigilancia para segundas residencias",
    "services.3.body": "Enchufes inteligentes, sensores de fuga y control Alexa/Google-home para ver desde UK si ha saltado el diferencial — y vamos a comprobarlo.",
    "services.4.title": "Instalación de cargador VE",
    "services.4.body": "Cargadores Tipo 2 para villas y garajes, instalados según normativa española. Listo para el invierno.",
    "services.5.title": "Enchufes estilo UK y tomas de tierra",
    "services.5.body": "Enchufes con interruptor, hervidores y revisión de tierra para aparatos británicos. Mismo voltaje, sensación de casa.",
    "services.6.title": "Urgencias 24/7",
    "services.6.body": "¿Salta la alarma de piscina? ¿La nevera no va? Vamos, revisamos y te enviamos fotos y diagnóstico escrito. WhatsApp a cualquier hora.",
    "areas.title": "Dónde trabajamos",
    "areas.lead": "Cubrimos las urbanizaciones de la costa de Orihuela. Si vives cerca, estamos a 10–15 minutos.",
    "areas.1": "La Zenia",
    "areas.2": "Cabo Roig",
    "areas.3": "Playa Flamenca",
    "areas.4": "Punta Prima",
    "areas.5": "Villamartín",
    "areas.6": "Campoamor",
    "areas.7": "Dehesa de Campoamor",
    "areas.8": "Las Ramblas",
    "areas.support": "Casas, apartamentos y segundas residencias en toda la costa — habitadas todo el año o solo en verano. Presupuesto el mismo día para cualquier aviso a menos de 15 minutos.",
    "process.title": "Cómo trabajamos",
    "process.lead": "Sin cargos ocultos. Presupuesto cerrado por escrito antes de tocar un cable.",
    "process.1.title": "Escríbenos por WhatsApp",
    "process.1.body": "Mándanos una foto y una descripción. Respondemos el mismo día.",
    "process.2.title": "Presupuesto por escrito",
    "process.2.body": "Precio cerrado por email. Apruebas antes de empezar.",
    "process.3.title": "Arreglamos e informamos",
    "process.3.body": "Terminamos, enviamos fotos e informe escrito. No pagas nada más.",
    "reviews.title": "Lo que dicen los vecinos",
    "cta.title": "¿Listo para un electricista de verdad?",
    "cta.lead": "Presupuestos gratis, hablamos inglés, cumplimos normativa española.",
    "cta.whatsapp": "Hablar por WhatsApp",
    "footer.legal": "Orihuela Costa · Comunitat Valenciana · España"
  },
  de: {
    "skip": "Zum Inhalt springen",
    "nav.services": "Leistungen",
    "nav.areas": "Gebiete",
    "nav.process": "So arbeiten wir",
    "nav.reviews": "Bewertungen",
    "nav.contact": "Kontakt",
    "hero.eyebrow": "Zertifizierter Elektriker · Orihuela Costa · Deutsch spricht man hier",
    "hero.title": "Zweitwohnung monatelang leer? Lassen Sie sich von der Elektrik nicht überraschen.",
    "hero.lead": "Autorisierter Installateur und offizieller Aussteller des Boletín Eléctrico an der Orihuela Costa. Sicherungskasten-Austausch, 24/7-Notdienst und Smart-Home-Checks für Zweitwohnungen — auf Deutsch, von Nachbarn, die hier leben.",
    "hero.ctaWhatsapp": "Per WhatsApp schreiben",
    "hero.ctaQuote": "Kostenloses Angebot",
    "certs.boletin": "Offizieller Boletín Eléctrico",
    "certs.autonomo": "Autorisierter Installateur (Comunitat Valenciana)",
    "certs.rc": "Haftpflichtversicherung inklusive",
    "services.title": "Was wir machen",
    "services.lead": "Praktische Elektroarbeiten für Eigentümer, die nicht immer vor Ort sind. Jeder Auftrag endet mit einem schriftlichen Bericht und Fotos für Ihre Versicherung.",
    "services.1.title": "Sicherungskasten-Austausch",
    "services.1.body": "Alte Kästen aus den 80ern/90ern werden auf aktuellen Stand gebracht. Zuverlässige FI-Schalter und Papiere, die Ihr Anwalt beim Verkauf liebt.",
    "services.2.title": "Sicherheitscheck + Bericht",
    "services.2.body": "Vollständige Elektroprüfung mit Fotobericht für Versicherung, Gestoría oder künftigen Käufer. Festpreis, keine Überraschungen.",
    "services.3.title": "Überwachung für Zweitwohnungen",
    "services.3.body": "Smarte Steckdosen, Wassermelder und Alexa/Google-Home-Steuerung — Sie sehen vom Ausland aus, ob der FI-Schalter ausgelöst hat, und wir fahren hin und prüfen.",
    "services.4.title": "Wallbox-Installation",
    "services.4.body": "Typ-2-Ladestationen für Villen und Garagen, nach spanischer Norm installiert. Winterfest für Ihr Mietfahrzeug.",
    "services.5.title": "UK-Steckdosen & Erdung",
    "services.5.body": "Steckdosen mit Schalter, Wasserkocher, Erdungsprüfung für britische Geräte. Gleiche Spannung, aber wie zu Hause.",
    "services.6.title": "24/7-Notdienst",
    "services.6.body": "Poolalarm geht los? Kühlschrank tot? Wir fahren hin, prüfen und schicken Fotos mit schriftlicher Diagnose. Anruf oder WhatsApp zu jeder Stunde.",
    "areas.title": "Wo wir arbeiten",
    "areas.lead": "Wir sind in den Urbanisationen an der Orihuela Costa zu Hause. Wenn Sie in der Nähe wohnen, sind wir in 10–15 Minuten da.",
    "areas.1": "La Zenia",
    "areas.2": "Cabo Roig",
    "areas.3": "Playa Flamenca",
    "areas.4": "Punta Prima",
    "areas.5": "Villamartín",
    "areas.6": "Campoamor",
    "areas.7": "Dehesa de Campoamor",
    "areas.8": "Las Ramblas",
    "areas.support": "Häuser, Wohnungen und Zweitwohnungen an der gesamten Küste — ganzjährig oder nur im Sommer bewohnt. Angebot am selben Tag für jeden Einsatz im Umkreis von 15 Minuten.",
    "process.title": "So arbeiten wir",
    "process.lead": "Keine versteckten Kosten. Festpreis schriftlich, bevor wir ein Kabel anfassen.",
    "process.1.title": "Schreiben Sie uns per WhatsApp",
    "process.1.body": "Schicken Sie ein Foto und eine kurze Beschreibung. Wir antworten am selben Tag.",
    "process.2.title": "Schriftliches Angebot",
    "process.2.body": "Festpreis per E-Mail. Sie stimmen zu, bevor wir anfangen.",
    "process.3.title": "Wir reparieren, wir berichten",
    "process.3.body": "Wir sind fertig, schicken Fotos und einen schriftlichen Bericht. Sonst nichts zu zahlen.",
    "reviews.title": "Was Nachbarn sagen",
    "cta.title": "Bereit für einen echten Elektriker?",
    "cta.lead": "Kostenlose Angebote, wir sprechen Deutsch, spanische Vorschriften werden eingehalten.",
    "cta.whatsapp": "Per WhatsApp schreiben",
    "footer.legal": "Orihuela Costa · Comunitat Valenciana · Spanien"
  },
  fr: {
    "skip": "Aller au contenu",
    "nav.services": "Services",
    "nav.areas": "Zones",
    "nav.process": "Notre méthode",
    "nav.reviews": "Avis",
    "nav.contact": "Contact",
    "hero.eyebrow": "Électricien certifié · Orihuela Costa · français parlé",
    "hero.title": "Résidence secondaire vide pendant des mois ? Ne laissez pas l'électricité vous surprendre.",
    "hero.lead": "Installateur agréé et émetteur officiel du Boletín Eléctrico sur l'Orihuela Costa. Remplacement de tableaux, urgences 24/7 et vérifications domotiques pour résidences secondaires — en français, par des voisins qui vivent ici.",
    "hero.ctaWhatsapp": "Discuter sur WhatsApp",
    "hero.ctaQuote": "Devis gratuit",
    "certs.boletin": "Boletín Eléctrico officiel",
    "certs.autonomo": "Installateur agréé (Comunitat Valenciana)",
    "certs.rc": "Assurance responsabilité civile incluse",
    "services.title": "Ce que nous faisons",
    "services.lead": "Des travaux électriques pratiques pour des propriétaires qui ne sont pas toujours là. Chaque intervention se termine par un rapport écrit et des photos pour votre assurance.",
    "services.1.title": "Remplacement du tableau électrique",
    "services.1.body": "Tableaux des années 80/90 mis aux normes en vigueur. Différentiels fiables et documents qui plairont à l'avocat de votre acheteur.",
    "services.2.title": "Contrôle de sécurité + rapport",
    "services.2.body": "Inspection électrique complète avec rapport photo pour votre assurance, votre gestoría ou un futur acheteur. Prix fixe, sans surprise.",
    "services.3.title": "Surveillance de résidences secondaires",
    "services.3.body": "Prises connectées, détecteurs de fuite et contrôle Alexa/Google Home pour voir depuis la France si le différentiel a sauté — et nous venons vérifier sur place.",
    "services.4.title": "Installation de borne de recharge",
    "services.4.body": "Bornes Type 2 pour villas et garages, installées selon la réglementation espagnole. Prêtes pour l'hiver.",
    "services.5.title": "Prises style UK et mise à la terre",
    "services.5.body": "Prises avec interrupteur, bouilloires, vérification de la terre pour appareils britanniques. Même voltage, mais comme à la maison.",
    "services.6.title": "Urgences 24/7",
    "services.6.body": "L'alarme de la piscine se déclenche ? Le frigo ne marche plus ? Nous venons, nous vérifions et vous envoyons photos et diagnostic écrit. Appel ou WhatsApp à toute heure.",
    "areas.title": "Où nous travaillons",
    "areas.lead": "Nous couvrons les urbanisations de l'Orihuela Costa. Si vous êtes dans le coin, nous sommes à 10–15 minutes.",
    "areas.1": "La Zenia",
    "areas.2": "Cabo Roig",
    "areas.3": "Playa Flamenca",
    "areas.4": "Punta Prima",
    "areas.5": "Villamartín",
    "areas.6": "Campoamor",
    "areas.7": "Dehesa de Campoamor",
    "areas.8": "Las Ramblas",
    "areas.support": "Maisons, appartements et résidences secondaires sur toute la côte — habitées toute l'année ou seulement en été. Devis le jour même pour toute intervention à moins de 15 minutes.",
    "process.title": "Notre méthode",
    "process.lead": "Pas de frais cachés. Devis ferme par écrit avant de toucher un câble.",
    "process.1.title": "Écrivez-nous sur WhatsApp",
    "process.1.body": "Envoyez une photo et une description. Nous répondons le jour même.",
    "process.2.title": "Devis écrit",
    "process.2.body": "Prix ferme par email. Vous validez avant que nous commencions.",
    "process.3.title": "Nous réparons, nous documentons",
    "process.3.body": "Nous terminons, envoyons photos et rapport écrit. Rien d'autre à payer.",
    "reviews.title": "Ce que disent les voisins",
    "cta.title": "Prêt pour un vrai électricien ?",
    "cta.lead": "Devis gratuits, français parlé, réglementation espagnole respectée.",
    "cta.whatsapp": "Discuter sur WhatsApp",
    "footer.legal": "Orihuela Costa · Comunitat Valenciana · Espagne"
  },
  ru: {
    "skip": "Перейти к содержанию",
    "nav.services": "Услуги",
    "nav.areas": "Районы",
    "nav.process": "Как мы работаем",
    "nav.reviews": "Отзывы",
    "nav.contact": "Контакты",
    "hero.eyebrow": "Сертифицированный электрик · Orihuela Costa · говорим по-русски",
    "hero.title": "Второй дом пустует месяцами? Не допустите сюрпризов от электрики.",
    "hero.lead": "Авторизованный монтажник и официальный оформитель Boletín Eléctrico на Orihuela Costa. Замена щитов, аварийные выезды 24/7 и проверки умного дома для вторых резиденций — по-русски, от соседей, которые здесь живут.",
    "hero.ctaWhatsapp": "Написать в WhatsApp",
    "hero.ctaQuote": "Бесплатная смета",
    "certs.boletin": "Официальный Boletín Eléctrico",
    "certs.autonomo": "Авторизованный установщик (Comunitat Valenciana)",
    "certs.rc": "Страховка ответственности включена",
    "services.title": "Что мы делаем",
    "services.lead": "Практичные электромонтажные работы для владельцев, которые не всегда находятся на месте. Каждая работа заканчивается письменным отчётом и фото — их можно отправить в страховую.",
    "services.1.title": "Замена электрощита",
    "services.1.body": "Щиты 80-х/90-х приводятся в соответствие с действующими нормами. Надёжные УЗО и документы, которые оценят юристы покупателя.",
    "services.2.title": "Проверка безопасности + отчёт",
    "services.2.body": "Полная электрическая проверка с фотографическим отчётом для страховой, хестора или будущего покупателя. Фиксированная цена, без сюрпризов.",
    "services.3.title": "Наблюдение за вторыми резиденциями",
    "services.3.body": "Умные розетки, датчики протечки и управление Alexa/Google Home — видите отсюда, выбило ли УЗО, а мы приезжаем и проверяем.",
    "services.4.title": "Установка зарядной станции",
    "services.4.body": "Зарядки Type 2 для вилл и гаражей, установка по испанским нормам. Готово к зиме для вашего арендованного авто.",
    "services.5.title": "Розетки UK и заземление",
    "services.5.body": "Розетки с выключателем, чайники, проверка заземления для британской техники. То же напряжение — но по-домашнему.",
    "services.6.title": "Аварийные выезды 24/7",
    "services.6.body": "Сработала сигнализация бассейна? Сломался холодильник? Мы приезжаем, проверяем и присылаем фото с письменным диагнозом. Звонок или WhatsApp в любое время.",
    "areas.title": "Где мы работаем",
    "areas.lead": "Работаем в урбанизациях Orihuela Costa. Если вы рядом — мы в 10–15 минутах.",
    "areas.1": "La Zenia",
    "areas.2": "Cabo Roig",
    "areas.3": "Playa Flamenca",
    "areas.4": "Punta Prima",
    "areas.5": "Villamartín",
    "areas.6": "Campoamor",
    "areas.7": "Dehesa de Campoamor",
    "areas.8": "Las Ramblas",
    "areas.support": "Дома, квартиры и вторые резиденции по всему побережью — живут круглый год или только летом. Смета в тот же день для любого выезда в радиусе 15 минут.",
    "process.title": "Как мы работаем",
    "process.lead": "Без скрытых платежей. Фиксированная смета письменно, прежде чем тронуть кабель.",
    "process.1.title": "Напишите в WhatsApp",
    "process.1.body": "Пришлите фото и описание. Отвечаем в тот же день.",
    "process.2.title": "Письменная смета",
    "process.2.body": "Фиксированная цена по email. Вы подтверждаете — мы начинаем.",
    "process.3.title": "Чиним и отчитываемся",
    "process.3.body": "Заканчиваем, присылаем фото и письменный отчёт. Больше платить нечего.",
    "reviews.title": "Что говорят соседи",
    "cta.title": "Готовы к настоящему электрику?",
    "cta.lead": "Бесплатные сметы, говорим по-русски, соблюдаем испанские нормы.",
    "cta.whatsapp": "Написать в WhatsApp",
    "footer.legal": "Orihuela Costa · Comunitat Valenciana · Испания"
  }
};
const STORAGE_KEY = "lang";
const SUPPORTED = Object.keys(DICT);
/* Resolver idioma inicial: localStorage → navegador → EN */
function resolveInitialLang() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && SUPPORTED.includes(stored)) return stored;
  const nav = (navigator.language || "en").slice(0, 2).toLowerCase();
  return SUPPORTED.includes(nav) ? nav : "en";
}
/* Aplicar diccionario al DOM */
function applyLang(lang) {
  const dict = DICT[lang] || DICT.en;
  // Toggle de botones de idioma (desktop)
  document.querySelectorAll("[data-lang]").forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.setAttribute("aria-pressed", active ? "true" : "false");
    btn.classList.toggle("is-active", active);
  });
  // Select de idioma (móvil)
  document.querySelectorAll("[data-lang-select]").forEach((sel) => {
    sel.value = lang;
  });
  // Texto (textContent — sin innerHTML)
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const value = dict[key];
    if (value != null) el.textContent = value;
  });
  // Atributos: data-i18n-attr="aria-label:contact.form.name,placeholder:..."
  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    el.dataset.i18nAttr.split(",").forEach((pair) => {
      const [attr, key] = pair.split(":").map((s) => s.trim());
      if (!attr || !key) return;
      const value = dict[key];
      if (value != null) el.setAttribute(attr, value);
    });
  });
  // Sincronizar <html lang> y persistir
  document.documentElement.lang = lang;
  localStorage.setItem(STORAGE_KEY, lang);
  // Evento por si otro módulo (forms, tracking) quiere reaccionar
  document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
}
/* Inicialización */
function initI18n() {
  const lang = resolveInitialLang();
  applyLang(lang);
  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.dataset.lang));
  });
  document.querySelectorAll("[data-lang-select]").forEach((sel) => {
    sel.addEventListener("change", () => applyLang(sel.value));
  });
}
// defer garantiza DOMContentLoaded; aún así por seguridad:
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initI18n, { once: true });
} else {
  initI18n();
}
// Exponer para debugging en consola: window.i18n.apply("es")
window.i18n = { apply: applyLang, dict: DICT };
