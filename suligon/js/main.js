(() => {
  "use strict";

  /* ============ i18n ============ */
  const dict = {
    en: {
      "skip": "Skip to content",
      "nav.work": "What we do",
      "nav.process": "How we work",
      "nav.styles": "Styles",
      "nav.help": "Who we help",
      "nav.contact": "Contact",
      "nav.cta": "Start a project",

      "hero.eyebrow": "Web design &amp; AI agents",
      "hero.title": "Websites and AI agents built for your business — not assembled from a template.",
      "hero.sub": "We design a real direction for your brand, build a working preview before anything goes live, and keep supporting it after launch.",
      "hero.ctaPrimary": "Start a project",
      "hero.ctaSecondary": "See how we work",
      "ticker.phrase": "We help businesses reach their potential",

      "narrative.line0": "Most “custom” websites aren't.",
      "narrative.line1": "They're a template with your logo pasted on top, and a chatbot nobody asked for bolted onto the corner.",
      "narrative.line2": "We design the thing your business actually needs — a site that loads fast and reads clearly, and an AI agent only when it genuinely helps.",
      "narrative.line3": "That's what “custom” should have meant all along.",

      "work.title": "Three things, done properly",
      "work.sub": "We keep our focus narrow so all three are built to last, not shipped fast and forgotten.",
      "work.card1.title": "Custom websites",
      "work.card1.text": "No themes, no page builders. Every site is designed around how your business actually works and what your customers need to see first.",
      "work.card2.title": "AI agents",
      "work.card2.text": "Assistants that answer questions, qualify leads, and respond outside business hours. A conversational chat widget is built when a project actually calls for one — not by default.",
      "work.card3.title": "Ongoing support",
      "work.card3.text": "A launch is a starting point. We keep tuning content, fixing issues, and adjusting the agent as your business changes.",

      "process.title": "The same four steps, every time",
      "process.sub": "No surprises — you see the direction and the preview before anything is public.",
      "process.s1.title": "Understand",
      "process.s1.text": "We learn your business — customers, competitors, what's already working and what's quietly costing you leads.",
      "process.s2.title": "Direction",
      "process.s2.text": "We propose one real design direction, justified by your business — never picked from a template library.",
      "process.s3.title": "Preview",
      "process.s3.text": "You see and use a real, working preview of the site or agent before we publish anything.",
      "process.s4.title": "Launch &amp; support",
      "process.s4.text": "We publish, then stay on to support the site and agent as your business grows and changes.",

      "styles.title": "We don't have one house style",
      "styles.sub": "A direction is chosen for the business, not the other way around. Here are four we work in.",
      "styles.hint": "Explore this style",
      "styles.modal.refs": "Real references",
      "styles.card1.title": "Editorial warmth",
      "styles.card1.text": "Warm cream, ink and one confident accent. For brands that want to feel considered — this page, for example.",
      "styles.card2.title": "Industrial brutalist",
      "styles.card2.text": "Near-black, one accent, exposed structure. For brands that trade on precision and grit.",
      "styles.card3.title": "Vibrant collage",
      "styles.card3.text": "Layered color, tilted type, controlled overlap. For brands that want energy on the page.",
      "styles.card4.title": "Minimal glass",
      "styles.card4.text": "Dark, technical, precise glass panels. For software and product-led brands.",

      "help.title": "Three situations, one fix",
      "help.card1.title": "No website yet",
      "help.card1.text": "Your business is real, but online you don't exist. We build the site that should already be there.",
      "help.card2.title": "Outdated website",
      "help.card2.text": "It was fine five years ago. Today it's costing you the customers who judge you in the first three seconds.",
      "help.card3.title": "Missed inquiries",
      "help.card3.text": "A customer messages at 11pm and never hears back. We build agents that answer while you sleep.",

      "contact.title": "Tell us about your business",
      "contact.sub": "We reply from suligonserv@gmail.com, usually within a day or two.",
      "contact.form.name": "Name",
      "contact.form.email": "Email",
      "contact.form.message": "Message",
      "contact.form.messageHint": "Minimum 10 characters.",
      "contact.form.requiredNote": "All fields are required.",
      "contact.form.submit": "Send message",
      "contact.directLabel": "Prefer email?",
      "contact.note.opening": "Opening your email app…",
      "contact.note.sending": "Sending…",
      "contact.note.sent": "Message sent — we'll reply soon.",

      "footer.tagline": "Custom websites and AI agents for local businesses in the US and Spain.",
      "footer.privacyHeading": "Privacy",
      "footer.privacyText": "No cookies, no tracking. Information sent through the contact form is used only to reply to you.",
      "footer.legalHeading": "Legal Notice",
      "footer.legalText": "Suligon is in the process of registering as a business in Spain. Full legal and tax details will be published here once that's complete.",
      "footer.rights": "© 2026 Suligon.",

      "privacy.body": "<p><strong>Data controller:</strong> Suligon (in the process of registering as a business activity in Spain). Contact: suligonserv@gmail.com.</p><p><strong>What we collect:</strong> via the contact form — name, email, and your message. If you use the chat widget, whatever you type into it. We don't collect anything else automatically — this site doesn't use tracking, analytics, or advertising cookies.</p><p><strong>What we use it for:</strong> only to respond to your inquiry, whether sent through the form or the chat widget.</p><p><strong>Who we share it with:</strong> the contact form uses Web3Forms (web3forms.com) to deliver your message to us by email. The chat widget uses Voiceflow (voiceflow.com) to process your messages and generate responses. Each provider processes your data solely for that purpose.</p><p><strong>How long we keep it:</strong> contact form messages, only as long as needed to respond, and at most 12 months, unless there's an active business relationship. Chat conversations are stored in your own browser — so the conversation keeps working if you reload the page — until you clear your browser data, and on Voiceflow's servers under their own retention policy.</p><p><strong>Your rights:</strong> you can request access, correction, or deletion of your data anytime by emailing suligonserv@gmail.com.</p><p><strong>Cookies and local storage:</strong> this site does not use tracking, analytics, or advertising cookies. It does use your browser's local storage — not cookies — for two purely functional things: remembering your language choice (English/Spanish), and, if you use the chat widget, a randomly generated ID and your conversation history so the chat keeps working across page reloads. None of this is used to track you across other sites.</p>",
      "legal.body": "<p>Suligon is in the process of registering as a business activity in Spain. Full legal and tax details will be published here once that process is complete.</p><p><strong>Trading name:</strong> Suligon</p><p><strong>Contact email:</strong> suligonserv@gmail.com</p><!-- FALTA: NIF --><!-- FALTA: domicilio fiscal -->"
    },
    es: {
      "skip": "Ir al contenido",
      "nav.work": "Qué hacemos",
      "nav.process": "Cómo trabajamos",
      "nav.styles": "Estilos",
      "nav.help": "A quién ayudamos",
      "nav.contact": "Contacto",
      "nav.cta": "Empecemos",

      "hero.eyebrow": "Webs y asistentes de IA",
      "hero.title": "Webs y asistentes de IA hechos para tu negocio — no montados a partir de una plantilla.",
      "hero.sub": "Diseñamos una dirección real para tu marca, construimos una vista previa funcional antes de publicar nada, y seguimos dando soporte después del lanzamiento.",
      "hero.ctaPrimary": "Empecemos",
      "hero.ctaSecondary": "Cómo trabajamos",
      "ticker.phrase": "Ayudamos a los negocios a alcanzar su potencial",

      "narrative.line0": "La mayoría de las webs “a medida” no lo son.",
      "narrative.line1": "Son una plantilla con tu logo pegado encima, y un chatbot que nadie pidió metido en una esquina.",
      "narrative.line2": "Nosotros diseñamos lo que tu negocio necesita de verdad — una web que carga rápido y se entiende a la primera, y un asistente de IA solo cuando de verdad ayuda.",
      "narrative.line3": "Eso es lo que “a medida” debería haber significado siempre.",

      "work.title": "Tres cosas, bien hechas",
      "work.sub": "Mantenemos el foco estrecho para que las tres duren, en lugar de lanzarlas rápido y olvidarlas.",
      "work.card1.title": "Webs a medida",
      "work.card1.text": "Sin plantillas ni constructores de páginas. Cada web se diseña según cómo funciona realmente tu negocio y qué necesitan ver primero tus clientes.",
      "work.card2.title": "Asistentes de IA",
      "work.card2.text": "Asistentes que responden preguntas, cualifican clientes potenciales y contestan fuera de horario. Un chat conversacional se construye cuando un proyecto realmente lo necesita — no por defecto.",
      "work.card3.title": "Mantenimiento continuo",
      "work.card3.text": "El lanzamiento es solo el punto de partida. Seguimos ajustando contenido, resolviendo problemas y adaptando el asistente a medida que tu negocio cambia.",

      "process.title": "Los mismos cuatro pasos, siempre",
      "process.sub": "Sin sorpresas — ves la dirección y la vista previa antes de que nada sea público.",
      "process.s1.title": "Entender",
      "process.s1.text": "Aprendemos sobre tu negocio: clientes, competencia, qué funciona ya y qué te está costando clientes en silencio.",
      "process.s2.title": "Dirección",
      "process.s2.text": "Proponemos una dirección de diseño real, justificada por tu negocio — nunca elegida de un catálogo de plantillas.",
      "process.s3.title": "Vista previa",
      "process.s3.text": "Ves y usas una vista previa real y funcional de la web o el asistente antes de que publiquemos nada.",
      "process.s4.title": "Publicación y soporte",
      "process.s4.text": "Publicamos, y seguimos dando soporte a la web y al asistente a medida que tu negocio crece y cambia.",

      "styles.title": "No tenemos un estilo único",
      "styles.sub": "La dirección se elige para el negocio, no al revés. Estos son cuatro estilos con los que trabajamos.",
      "styles.hint": "Explorar este estilo",
      "styles.modal.refs": "Referencias reales",
      "styles.card1.title": "Calidez editorial",
      "styles.card1.text": "Crema cálido, tinta y un único acento con carácter. Para marcas que quieren sentirse cuidadas — esta misma página, por ejemplo.",
      "styles.card2.title": "Industrial brutalista",
      "styles.card2.text": "Casi negro, un único acento, estructura expuesta. Para marcas que se apoyan en precisión y carácter.",
      "styles.card3.title": "Collage vibrante",
      "styles.card3.text": "Color en capas, tipografía inclinada, solape controlado. Para marcas que quieren energía en pantalla.",
      "styles.card4.title": "Minimalista de cristal",
      "styles.card4.text": "Oscuro, técnico, con paneles de cristal precisos. Para marcas de software y producto.",

      "help.title": "Tres situaciones, una solución",
      "help.card1.title": "Todavía sin web",
      "help.card1.text": "Tu negocio es real, pero en internet no existes. Construimos la web que ya debería estar ahí.",
      "help.card2.title": "Web anticuada",
      "help.card2.text": "Hace cinco años estaba bien. Hoy te está costando los clientes que te juzgan en los primeros tres segundos.",
      "help.card3.title": "Consultas perdidas",
      "help.card3.text": "Un cliente escribe a las 11 de la noche y nunca recibe respuesta. Construimos asistentes que responden mientras duermes.",

      "contact.title": "Cuéntanos sobre tu negocio",
      "contact.sub": "Respondemos desde suligonserv@gmail.com, normalmente en uno o dos días.",
      "contact.form.name": "Nombre",
      "contact.form.email": "Email",
      "contact.form.message": "Mensaje",
      "contact.form.messageHint": "Mínimo 10 caracteres.",
      "contact.form.requiredNote": "Todos los campos son obligatorios.",
      "contact.form.submit": "Enviar mensaje",
      "contact.directLabel": "¿Prefieres el email?",
      "contact.note.opening": "Abriendo tu app de correo…",
      "contact.note.sending": "Enviando…",
      "contact.note.sent": "Mensaje enviado — te responderemos pronto.",

      "footer.tagline": "Webs a medida y asistentes de IA para negocios locales en EEUU y España.",
      "footer.privacyHeading": "Privacidad",
      "footer.privacyText": "Sin cookies ni rastreo. Los datos enviados por el formulario de contacto solo se usan para responderte.",
      "footer.legalHeading": "Aviso Legal",
      "footer.legalText": "Suligon está en proceso de darse de alta como negocio en España. Los datos legales y fiscales completos se publicarán aquí en cuanto esté finalizado.",
      "footer.rights": "© 2026 Suligon.",

      "privacy.body": "<p><strong>Responsable:</strong> Suligon (en proceso de alta como actividad económica en España). Contacto: suligonserv@gmail.com.</p><p><strong>Qué recopilamos:</strong> a través del formulario de contacto — nombre, email y tu mensaje. Si usas el widget de chat, lo que escribas en él. No recopilamos nada más de forma automática — este sitio no utiliza cookies de rastreo, analítica ni publicidad.</p><p><strong>Para qué lo usamos:</strong> únicamente para responder a tu consulta, ya sea enviada por el formulario o por el chat.</p><p><strong>Con quién lo compartimos:</strong> el formulario de contacto utiliza Web3Forms (web3forms.com) para hacernos llegar tu mensaje por email. El widget de chat utiliza Voiceflow (voiceflow.com) para procesar tus mensajes y generar las respuestas. Cada proveedor procesa tus datos únicamente para ese fin.</p><p><strong>Cuánto tiempo lo conservamos:</strong> los mensajes del formulario, solo el tiempo necesario para responder, y como máximo 12 meses, salvo que exista una relación comercial activa. Las conversaciones del chat se guardan en tu propio navegador — para que la conversación siga funcionando si recargas la página — hasta que borres los datos de tu navegador, y en los servidores de Voiceflow según su propia política de retención.</p><p><strong>Tus derechos:</strong> puedes solicitar el acceso, rectificación o eliminación de tus datos en cualquier momento escribiendo a suligonserv@gmail.com.</p><p><strong>Cookies y almacenamiento local:</strong> este sitio no utiliza cookies de rastreo, analítica ni publicidad. Sí utiliza el almacenamiento local de tu navegador — no cookies — para dos fines puramente funcionales: recordar tu idioma (español/inglés) y, si usas el widget de chat, un identificador generado aleatoriamente y el historial de la conversación, para que el chat siga funcionando aunque recargues la página. Nada de esto se usa para rastrearte en otros sitios.</p>",
      "legal.body": "<p>Suligon está en proceso de alta como actividad económica en España. Los datos legales y fiscales completos se publicarán aquí en cuanto ese proceso esté finalizado.</p><p><strong>Nombre de la actividad:</strong> Suligon</p><p><strong>Email de contacto:</strong> suligonserv@gmail.com</p><!-- FALTA: NIF --><!-- FALTA: domicilio fiscal -->"
    }
  };

  const STORAGE_KEY = "suligon-lang";
  const root = document.documentElement;
  let tickerSync = null; // set by initTicker(); re-run on every language switch

  /* ---------- block-wipe heading: wrap each word so it can slide-reveal ---------- */
  function wrapBlockRevealWords(el){
    const words = el.textContent.trim().split(/\s+/);
    el.innerHTML = words
      .map((w, i) => `<span class="block-reveal-word" style="--wi:${i}"><span>${w}</span></span>`)
      .join(" ");
  }

  function applyLang(lang){
    const table = dict[lang] || dict.en;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (table[key] !== undefined) el.innerHTML = table[key];
    });
    document.querySelectorAll(".block-reveal[data-i18n]").forEach(wrapBlockRevealWords);
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (table[key] !== undefined) el.setAttribute("aria-label", table[key]);
    });
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.lang === lang);
    });
    root.lang = lang;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* private mode */ }
    if (tickerSync) tickerSync();
  }

  function initLang(){
    let saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* private mode */ }
    const lang = saved && dict[saved] ? saved : "en";
    applyLang(lang);
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => applyLang(btn.dataset.lang));
    });
  }

  /* ============ mobile menu ============ */
  function initMobileMenu(){
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.getElementById("mobile-menu");
    if (!toggle || !menu) return;

    function close(){
      toggle.setAttribute("aria-expanded", "false");
      menu.hidden = true;
      document.body.style.overflow = "";
    }
    function open(){
      toggle.setAttribute("aria-expanded", "true");
      menu.hidden = false;
      document.body.style.overflow = "hidden";
    }

    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      isOpen ? close() : open();
    });
    menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  }

  /* ============ header scroll state ============ */
  function initHeaderScroll(){
    const header = document.querySelector(".site-header");
    if (!header) return;
    let ticking = false;
    function update(){
      header.classList.toggle("is-scrolled", window.scrollY > 12);
      ticking = false;
    }
    window.addEventListener("scroll", () => {
      if (!ticking){
        requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });
    update();
  }

  /* ============ scroll reveal ============ */
  function initReveal(){
    const targets = document.querySelectorAll(".reveal");
    root.classList.add("js-ready");

    if (!("IntersectionObserver" in window)){
      targets.forEach((el) => el.classList.add("in-view"));
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting){
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16, rootMargin: "0px 0px -8% 0px" });

    // Elements already on screen at load reveal immediately (synchronously,
    // before first paint) instead of flashing hidden while waiting on the
    // observer's async callback.
    targets.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;
      if (alreadyVisible) el.classList.add("in-view");
      else io.observe(el);
    });
  }

  /* ============ logo: cut the flat white background out to true alpha ============ */
  function cutoutLogo(img){
    const canvas = document.createElement("canvas");
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    let data;
    try {
      data = ctx.getImageData(0, 0, canvas.width, canvas.height);
    } catch (e) {
      return; // e.g. running from file:// without a server — leave the flat image as-is
    }
    const px = data.data;
    const WHITE_FULL = 244;   // at/above this, fully transparent
    const WHITE_EDGE = 190;   // below this, fully opaque — between is feathered
    for (let i = 0; i < px.length; i += 4){
      const whiteness = Math.min(px[i], px[i + 1], px[i + 2]);
      if (whiteness >= WHITE_FULL){
        px[i + 3] = 0;
      } else if (whiteness > WHITE_EDGE){
        const fade = (whiteness - WHITE_EDGE) / (WHITE_FULL - WHITE_EDGE);
        px[i + 3] = Math.round(px[i + 3] * (1 - fade));
      }
    }
    ctx.putImageData(data, 0, 0);
    img.src = canvas.toDataURL("image/png");
  }
  function initLogoCutout(){
    document.querySelectorAll("img[data-logo-cutout]").forEach((img) => {
      if (img.complete && img.naturalWidth) cutoutLogo(img);
      else img.addEventListener("load", () => cutoutLogo(img), { once: true });
    });
  }

  /* ============ style cards: click to swap swatches for real references ============ */
  const STYLE_DATA = {
    editorial: {
      swatches: ["#F7F6F2", "#15171A", "#E0562F"],
      poster: { cls: "p-editorial", html: '<div class="pm-h">Built for you, not a template.<span class="pm-dot"></span></div><span class="pm-cta">Start a project</span>' },
      examples: [
        { src: "assets/references/editorial-kinfolk.jpg", url: "https://kinfolk.com", en: "Kinfolk — kinfolk.com", es: "Kinfolk — kinfolk.com" },
        { src: "assets/references/editorial-redantler.jpg", url: "https://redantler.com", en: "Red Antler — redantler.com", es: "Red Antler — redantler.com" },
        { src: "assets/references/editorial-monocle.jpg", url: "https://monocle.com", en: "Monocle — monocle.com", es: "Monocle — monocle.com" },
      ],
      en: {
        name: "Editorial warmth", tagline: "Warm cream, ink and one confident accent — the direction this very site uses.",
        tokens: {
          "Typography": "Geometric sans for display and body, a tracked mono for labels — clarity over decoration.",
          "Color": "Warm cream base, near-black ink, a single terracotta-orange accent.",
          "Hero paradigm": "A pinned visual with narrative text that brightens line by line as you scroll.",
          "Layout paradigm": "Bordered cards on a cream ground, alternating light, dark and accent for rhythm.",
          "Signature detail": "The logo cut straight from the brand's own mark — never a stock template palette."
        }
      },
      es: {
        name: "Calidez editorial", tagline: "Crema cálido, tinta y un acento con carácter — la dirección que usa esta misma web.",
        tokens: {
          "Tipografía": "Sans geométrica para titulares y cuerpo, mono tracked para etiquetas — claridad antes que decoración.",
          "Color": "Base crema cálida, tinta casi negra, un único acento naranja terracota.",
          "Paradigma de hero": "Un visual fijo con texto narrativo que se ilumina línea a línea al hacer scroll.",
          "Paradigma de layout": "Tarjetas con borde sobre fondo crema, alternando claro, oscuro y acento para dar ritmo.",
          "Detalle de firma": "El logo recortado de la propia marca — nunca una paleta de plantilla genérica."
        }
      }
    },
    brutal: {
      swatches: ["#0B0B08", "#8C1C1C", "#D4CEB8"],
      poster: { cls: "p-brutal", html: '<div class="pm-h">We don’t blend in.</div><span class="pm-cta">Book now</span>' },
      examples: [
        { src: "assets/references/brutal-mschf.jpg", url: "https://mschf.com", en: "MSCHF — mschf.com", es: "MSCHF — mschf.com" },
        { src: "assets/references/brutal-gumroad.jpg", url: "https://gumroad.com", en: "Gumroad — gumroad.com", es: "Gumroad — gumroad.com" },
        { src: "assets/references/brutal-supahero.jpg", url: "https://supahero.io", en: "Supahero — supahero.io", es: "Supahero — supahero.io" },
      ],
      en: {
        name: "Industrial brutalist", tagline: "Near-black, one hard accent, structure left exposed on purpose.",
        tokens: {
          "Typography": "System sans, weight 900, uppercase, tight tracking — Courier New for data and labels.",
          "Color": "Warm void black, a single blood-carmine accent, parchment cream text.",
          "Hero paradigm": "Full-viewport background, a dark gradient overlay, copy pinned bottom-left.",
          "Layout paradigm": "Exposed grid with 1px rules — no border-radius anywhere on the page.",
          "Signature detail": "A fixed dot-grid texture underneath everything, like a technical blueprint."
        }
      },
      es: {
        name: "Industrial brutalista", tagline: "Casi negro, un acento duro, estructura expuesta a propósito.",
        tokens: {
          "Tipografía": "Sans de sistema, peso 900, mayúsculas, tracking cerrado — Courier New para datos y etiquetas.",
          "Color": "Negro void cálido, un único acento carmesí, texto crema parchment.",
          "Paradigma de hero": "Fondo a pantalla completa, degradado oscuro superpuesto, texto anclado abajo-izquierda.",
          "Paradigma de layout": "Grid expuesto con líneas de 1px — sin border-radius en ninguna parte.",
          "Detalle de firma": "Una textura de puntos fija bajo todo, como un plano técnico."
        }
      }
    },
    collage: {
      swatches: ["#231935", "#ff6a3d", "#ffd23f"],
      poster: { cls: "p-collage", html: '<div class="pm-h">Loud on purpose.</div><span class="pm-cta">Say hi</span>' },
      examples: [
        { src: "assets/references/memphis-mailchimp.jpg", url: "https://mailchimp.com", en: "Mailchimp — mailchimp.com", es: "Mailchimp — mailchimp.com" },
        { src: "assets/references/memphis-slack.jpg", url: "https://slack.com", en: "Slack — slack.com", es: "Slack — slack.com" },
        { src: "assets/references/memphis-airbnb.jpg", url: "https://airbnb.com", en: "Airbnb — airbnb.com", es: "Airbnb — airbnb.com" },
      ],
      en: {
        name: "Vibrant collage", tagline: "Layered color, tilted type, controlled overlap.",
        tokens: {
          "Typography": "Bebas Neue display, Work Sans body, JetBrains Mono tracked labels.",
          "Color": "Deep violet void with orange and yellow — no neutral filler.",
          "Hero paradigm": "A rotated headline with solid and outlined circles overlapping the type.",
          "Layout paradigm": "Cards tilted at alternating angles via a per-card rotation variable.",
          "Signature detail": "A literal circle-seal stamped over the wordmark, like a hand-stamped badge."
        }
      },
      es: {
        name: "Collage vibrante", tagline: "Color en capas, tipografía inclinada, solape controlado.",
        tokens: {
          "Tipografía": "Bebas Neue en titulares, Work Sans en cuerpo, JetBrains Mono tracked en etiquetas.",
          "Color": "Violeta void profundo con naranja y amarillo — sin relleno neutro.",
          "Paradigma de hero": "Titular rotado con círculos sólidos y con borde superpuestos al texto.",
          "Paradigma de layout": "Tarjetas inclinadas en ángulos alternos vía una variable de rotación por tarjeta.",
          "Detalle de firma": "Un sello circular literal estampado sobre el logotipo, como un timbre a mano."
        }
      }
    },
    glass: {
      swatches: ["#05060A", "#3B82F6", "#4CC9F0"],
      poster: { cls: "p-glass", html: '<div class="pm-h">Precision, without the noise.</div><span class="pm-cta">Get a quote</span>' },
      examples: [
        { src: "assets/references/glass-apple.jpg", url: "https://apple.com", en: "Apple — apple.com", es: "Apple — apple.com" },
        { src: "assets/references/glass-robinhood.jpg", url: "https://robinhood.com", en: "Robinhood — robinhood.com", es: "Robinhood — robinhood.com" },
        { src: "assets/references/glass-abstract.jpg", url: null, en: "Glass composition — visual reference", es: "Composición glass — referencia visual" },
      ],
      en: {
        name: "Minimal glass", tagline: "Dark, technical, precise — frosted glass over a blueprint grid.",
        tokens: {
          "Typography": "System-ui, weight 700 display, tracked mono labels.",
          "Color": "Near-black void, a blue-to-cyan gradient accent.",
          "Hero paradigm": "A technical grid backdrop with double-bezel glass panels floating above it.",
          "Layout paradigm": "Frosted glass cards — concentric outer-shell and inner-core radii.",
          "Signature detail": "The same top-left light bloom repeated on every glass panel, site-wide."
        }
      },
      es: {
        name: "Minimalista de cristal", tagline: "Oscuro, técnico, preciso — cristal esmerilado sobre una retícula de plano.",
        tokens: {
          "Tipografía": "System-ui, peso 700 en titulares, etiquetas mono tracked.",
          "Color": "Void casi negro, acento en degradado azul a cian.",
          "Paradigma de hero": "Retícula técnica de fondo con paneles de cristal de doble bisel flotando sobre ella.",
          "Paradigma de layout": "Tarjetas de cristal esmerilado — radios concéntricos de marco exterior e interior.",
          "Detalle de firma": "El mismo resplandor de luz superior-izquierda repetido en cada panel de cristal, en toda la web."
        }
      }
    }
  };

  function initStyleCards(){
    const modal = document.getElementById("style-modal");
    const cards = document.querySelectorAll(".style-card");
    if (!modal || !cards.length) return;

    const closeBtn = document.getElementById("style-modal-close");
    const elSwatches = document.getElementById("style-modal-swatches");
    const elTitle = document.getElementById("style-modal-title");
    const elTagline = document.getElementById("style-modal-tagline");
    const elPoster = document.getElementById("style-modal-poster");
    const elTokens = document.getElementById("style-modal-tokens");
    const elExamples = document.getElementById("style-modal-examples");

    function openStyle(key){
      const data = STYLE_DATA[key];
      if (!data) return;
      const lang = root.lang === "es" ? "es" : "en";
      const copy = data[lang];

      elSwatches.innerHTML = data.swatches.map((c) => `<span class="swatch-dot" style="--sw:${c}"></span>`).join("");
      elTitle.textContent = copy.name;
      elTagline.textContent = copy.tagline;
      elPoster.className = "style-modal-poster " + data.poster.cls;
      elPoster.innerHTML = data.poster.html;
      elTokens.innerHTML = Object.entries(copy.tokens)
        .map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`)
        .join("");
      elExamples.innerHTML = data.examples
        .map((ex) => {
          const label = ex[lang];
          const inner = `<img src="${ex.src}" alt="${label}" loading="lazy"><span>${label}</span>`;
          return ex.url
            ? `<a href="${ex.url}" target="_blank" rel="noopener noreferrer">${inner}</a>`
            : `<div>${inner}</div>`;
        })
        .join("");

      modal.showModal();
    }

    cards.forEach((card) => {
      card.addEventListener("click", () => openStyle(card.dataset.style));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " "){
          e.preventDefault();
          openStyle(card.dataset.style);
        }
      });
    });

    if (closeBtn) closeBtn.addEventListener("click", () => modal.close());
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.close();
    });
  }

  /* ============ legal modals: Privacy / Legal Notice, opened from the footer ============ */
  function initLegalModals(){
    [
      { link: "privacy-link", modal: "privacy-modal", close: "privacy-modal-close" },
      { link: "legal-link", modal: "legal-modal", close: "legal-modal-close" },
    ].forEach(({ link, modal, close }) => {
      const linkEl = document.getElementById(link);
      const modalEl = document.getElementById(modal);
      const closeEl = document.getElementById(close);
      if (!linkEl || !modalEl) return;
      linkEl.addEventListener("click", () => modalEl.showModal());
      if (closeEl) closeEl.addEventListener("click", () => modalEl.close());
      modalEl.addEventListener("click", (e) => {
        if (e.target === modalEl) modalEl.close();
      });
    });
  }

  /* ============ ticker: idle crawl, speeds up while the page scrolls ============ */
  function initTicker(){
    const tracks = Array.from(document.querySelectorAll(".ticker-track"));
    if (!tracks.length) return;

    const REPEATS_PER_SET = 10;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const rebuildFns = [];

    tracks.forEach((track) => {
      function buildTrack(){
        const lang = root.lang === "es" ? "es" : "en";
        const phrase = dict[lang]["ticker.phrase"];
        const item = `<span class="ticker-item">${phrase}<span class="ticker-dot">&#9679;</span></span>`;
        track.innerHTML = item.repeat(REPEATS_PER_SET) + item.repeat(REPEATS_PER_SET);
      }

      let halfWidth = 0;
      function measure(){
        halfWidth = track.scrollWidth / 2;
      }

      buildTrack();
      measure();
      rebuildFns.push(() => { buildTrack(); measure(); });

      if (reduceMotion) return; // static crawl text, no motion

      window.addEventListener("resize", measure);

      let visible = true;
      const io = new IntersectionObserver(
        (entries) => entries.forEach((e) => { visible = e.isIntersecting; }),
        { threshold: 0 }
      );
      io.observe(track);

      let offset = 0;
      let lastY = window.scrollY;
      const BASE_SPEED = 0.55;   // px/frame at rest
      const SCROLL_MULT = 0.9;   // extra px/frame per px scrolled since last frame
      const MAX_EXTRA = 16;      // cap so a huge jump-scroll doesn't blur it unreadable

      function tick(){
        requestAnimationFrame(tick);
        if (!visible) { lastY = window.scrollY; return; }

        const y = window.scrollY;
        const extra = Math.min(Math.abs(y - lastY) * SCROLL_MULT, MAX_EXTRA);
        lastY = y;

        offset -= (BASE_SPEED + extra);
        if (halfWidth > 0 && Math.abs(offset) >= halfWidth) offset += halfWidth;
        track.style.transform = `translateX(${offset}px)`;
      }
      requestAnimationFrame(tick);
    });

    tickerSync = () => rebuildFns.forEach((fn) => fn());
  }

  /* ============ narrative section: lines brighten as you scroll ============ */
  function initNarrativeReveal(){
    const track = document.getElementById("narrative-track");
    const lines = Array.from(document.querySelectorAll(".narrative-line"));
    const progressBar = document.getElementById("narrative-progress-bar");
    const counterNum = document.getElementById("narrative-counter-num");
    if (!track || !lines.length) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion){
      lines.forEach((l) => l.classList.add("is-lit"));
      if (progressBar) progressBar.style.width = "100%";
      if (counterNum) counterNum.textContent = String(lines.length).padStart(2, "0");
      return;
    }

    let lastIdx = -1;
    let ticking = false;

    function update(){
      const rect = track.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const progress = total <= 0 ? 1 : Math.min(1, Math.max(0, -rect.top / total));

      if (progressBar) progressBar.style.width = (progress * 100).toFixed(2) + "%";

      const idx = Math.min(lines.length - 1, Math.floor(progress * lines.length));
      lines.forEach((l, i) => l.classList.toggle("is-lit", i <= idx));
      if (idx !== lastIdx){
        lastIdx = idx;
        if (counterNum) counterNum.textContent = String(idx + 1).padStart(2, "0");
      }
      ticking = false;
    }

    window.addEventListener("scroll", () => {
      if (!ticking){
        requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });
    window.addEventListener("resize", update);
    update();
  }

  /* ============ contact form -> mailto fallback ============ */
  function initContactForm(){
    const form = document.getElementById("contact-form");
    const note = document.getElementById("cf-note");
    if (!form) return;

    // Keep the message shown consistent with what we tell people up front
    // (see the hint under the textarea), whichever path the browser takes
    // to flag it — its own native "too short" wording would say something
    // slightly different otherwise.
    form.message.addEventListener("invalid", () => {
      const lang = root.lang === "es" ? "es" : "en";
      if (form.message.value.trim().length < 10){
        form.message.setCustomValidity(dict[lang]["contact.form.messageHint"]);
      } else {
        form.message.setCustomValidity("");
      }
    });
    form.message.addEventListener("input", () => form.message.setCustomValidity(""));

    function openMailto(name, email, message, lang){
      const subject = lang === "es" ? `Nuevo proyecto — ${name}` : `New project — ${name}`;
      const bodyLines = lang === "es"
        ? [`Nombre: ${name}`, `Email: ${email}`, "", message]
        : [`Name: ${name}`, `Email: ${email}`, "", message];
      const mailto = `mailto:suligonserv@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
      if (note) note.textContent = dict[lang]["contact.note.opening"];
      window.location.href = mailto;
    }

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const lang = root.lang === "es" ? "es" : "en";

      // Required name, a validly-formatted email — native constraints
      // handle these reliably. The message's 10-character minimum is
      // checked by hand too: the browser's built-in `minlength` only ever
      // fires once the field carries its "dirty" flag, which some browsers
      // (and any value set other than real, in-field typing) never set —
      // so relying on it alone would silently let short messages through.
      if (!form.checkValidity()){
        form.reportValidity();
        return;
      }
      if (form.message.value.trim().length < 10){
        const note10 = lang === "es" ? "Escribe al menos 10 caracteres." : "Please enter at least 10 characters.";
        form.message.setCustomValidity(note10);
        form.reportValidity();
        form.message.setCustomValidity("");
        return;
      }

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      // honeypot: bots fill every field, including this hidden one — accept
      // silently and move on instead of telling them what tripped it.
      if (form.botcheck && form.botcheck.value){
        if (note) note.textContent = dict[lang]["contact.note.sent"];
        form.reset();
        return;
      }

      const accessKey = form.access_key ? form.access_key.value.trim() : "";
      const keyIsConfigured = accessKey && accessKey !== "YOUR_WEB3FORMS_ACCESS_KEY";

      if (!keyIsConfigured){
        // No Web3Forms key set up yet — fall back to the visitor's own
        // email client so the message still gets sent somewhere.
        openMailto(name, email, message, lang);
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;
      if (note) note.textContent = dict[lang]["contact.note.sending"];

      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { Accept: "application/json" },
          body: new FormData(form),
        });
        const result = await res.json();
        if (result.success){
          if (note) note.textContent = dict[lang]["contact.note.sent"];
          form.reset();
        } else {
          openMailto(name, email, message, lang);
        }
      } catch (err) {
        openMailto(name, email, message, lang);
      } finally {
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initLang();
    initMobileMenu();
    initHeaderScroll();
    initLogoCutout();
    initReveal();
    initStyleCards();
    initLegalModals();
    initTicker();
    initNarrativeReveal();
    initContactForm();
  });
})();
