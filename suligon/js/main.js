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
      "styles.newtab": "(opens in a new tab)",
      "styles.close": "Close",
      "styles.card1.title": "Minimalism",
      "styles.card1.text": "Typographic silence: one weight, lots of white, hierarchy by scale.",
      "styles.card2.title": "Brutalism",
      "styles.card2.text": "Black, white, and one raw accent. Giant type as structure, not decoration.",
      "styles.card3.title": "Maximalism",
      "styles.card3.text": "Several saturated colors, each owning its own section. Giant type with zero air between lines.",
      "styles.card4.title": "Glassmorphism",
      "styles.card4.text": "Frosted glass over near-black: depth through blur, never through shadow.",
      "styles.alt.minimalism.1": "Minimal Collective: black hairline ellipses over a grey page, a chrome 3D logo and the headline 'Operating at the intersection of music, art and technology'",
      "styles.alt.minimalism.2": "Silencio design studio: a pale grey page with a small centred uppercase statement and tiny two-column text, almost no ornament",
      "styles.alt.minimalism.3": "Everlane home page: a woman in a green sweater on a light studio set under the headline 'Power of softness' and a thin uppercase menu",
      "styles.alt.brutalism.1": "We Make Things GmbH: giant outlined letters behind uppercase black text about a bicycle accessories company in Cologne",
      "styles.alt.brutalism.2": "Charlie type foundry: huge white custom lettering on a pure black page with three small pill-shaped menu links",
      "styles.alt.brutalism.3": "Eindhoven Design District: oversized black sans-serif headings and architecture photos on a white page",
      "styles.alt.maximalism.1": "SICK Agency: a green page with huge yellow condensed type, a blue circular stamp and repeated text bands",
      "styles.alt.maximalism.2": "Raw Materials: giant black 'RM' lettering beside a column of saturated colour blocks in orange, purple, blue and pink",
      "styles.alt.maximalism.3": "Wise: a bright lime-green page with a heavy dark headline about sending money abroad and a currency converter card",
      "styles.alt.glass.1": "Dimension: 'The AI coworker that never sleeps' over a blurred blue-grey gradient with floating app icons in frosted glass",
      "styles.alt.glass.2": "AuthKit by WorkOS: a glowing 'AuthKit' title on a near-black grid background with translucent login cards",
      "styles.alt.glass.3": "Air: 'Your agent for creative tasks' on a purple-to-peach blurred gradient with three glass-like image cards",
      "styles.cta.text": "Want to explore all our styles?",
      "styles.cta.button": "Style Gallery",
      "styles.cta.aria": "Open the Style Gallery (opens in a new tab)",
      "styles.tok.l1": "Typography",
      "styles.tok.l2": "Color",
      "styles.tok.l3": "Hero paradigm",
      "styles.tok.l4": "Layout paradigm",
      "styles.tok.l5": "Signature detail",
      "styles.palette": "Palette",
      "styles.refs": "Reference sites",
      "styles.tok.minimalism.1": "A single sans, often one weight (400) only — hierarchy by size and negative tracking, never by weight",
      "styles.tok.minimalism.2": "Near-pure monochrome: black/white plus at most one very restrained gray or accent",
      "styles.tok.minimalism.3": "Giant text (60–150px) over empty space, generous surrounding air, no background image",
      "styles.tok.minimalism.4": "12-column grid or full-bleed with no container, constant vertical rhythm, 0px radii",
      "styles.tok.minimalism.5": "1px hairlines instead of borders; negative micro-tracking at large sizes",
      "styles.tok.brutalism.1": "Condensed sans or raw display at extreme size (150–860px), used as structural scaffolding, not just a headline",
      "styles.tok.brutalism.2": "Pure black/white + a single unmuted accent (almost always red) reserved for one moment only",
      "styles.tok.brutalism.3": "Type that breaks the viewport, or a dense uncurated portfolio grid — no traditional hero image",
      "styles.tok.brutalism.4": "Exposed grid with 0px radius, with the single exception of fully pill-shaped buttons/nav",
      "styles.tok.brutalism.5": "Zero shadows, zero gradients; contrast and scale alone carry the hierarchy",
      "styles.tok.maximalism.1": "Heavy display (700–900) at extreme size (150–560px) with very tight line-height (0.70–0.85)",
      "styles.tok.maximalism.2": "4+ saturated accents, each owning its own full-bleed section — zero neutral filler grays",
      "styles.tok.maximalism.3": "A giant mascot or illustration + thick sticker-style lettering over a saturated color",
      "styles.tok.maximalism.4": "Full-bleed section blocks with a hard color cut, generous consistent radius (16–86px)",
      "styles.tok.maximalism.5": "Each color is “its own room,” never a subtle tint; no shadows — color contrast alone creates depth",
      "styles.tok.glass.1": "Neutral geometric sans (DM Sans, Geist, Aeonik), medium weight 500, lets the surface lead",
      "styles.tok.glass.2": "Near-black or nocturnal background + 10%-opacity white/blue translucent panels + one cool accent reserved for gradients",
      "styles.tok.glass.3": "A glass surface or 3D render floating over a dark gradient background",
      "styles.tok.glass.4": "Blurred cards with a subtle inset highlight border, very generous radii (16–40px) or pill-shaped buttons",
      "styles.tok.glass.5": "Elevation from glow and translucency, never box-shadow; 1px white/blue border at 10–20% opacity",

      "help.title": "Three situations, one fix",
      "help.card1.title": "No website yet",
      "help.card1.text": "Your business is real, but online you don't exist. We build the site that should already be there.",
      "help.card2.title": "Outdated website",
      "help.card2.text": "It was fine five years ago. Today it's costing you the customers who judge you in the first three seconds.",
      "help.card3.title": "Missed inquiries",
      "help.card3.text": "A customer messages at 11pm and never hears back. We build agents that answer while you sleep.",

      "contact.title": "Tell us about your business",
      "contact.sub": "We reply from suligonwebs@gmail.com, usually within a day or two.",
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

      "privacy.body": "<p><strong>Data controller:</strong> Suligon (in the process of registering as a business activity in Spain). Contact: suligonwebs@gmail.com.</p><p><strong>What we collect:</strong> via the contact form — name, email, and your message. If you use the chat widget, whatever you type into it. We don't collect anything else automatically — this site doesn't use tracking, analytics, or advertising cookies.</p><p><strong>What we use it for:</strong> only to respond to your inquiry, whether sent through the form or the chat widget.</p><p><strong>Who we share it with:</strong> the contact form uses Web3Forms (web3forms.com) to deliver your message to us by email. The chat widget uses Voiceflow (voiceflow.com) to process your messages and generate responses. Each provider processes your data solely for that purpose.</p><p><strong>How long we keep it:</strong> contact form messages, only as long as needed to respond, and at most 12 months, unless there's an active business relationship. Chat conversations are stored in your own browser — so the conversation keeps working if you reload the page — until you clear your browser data, and on Voiceflow's servers under their own retention policy.</p><p><strong>Your rights:</strong> you can request access, correction, or deletion of your data anytime by emailing suligonwebs@gmail.com.</p><p><strong>Cookies and local storage:</strong> this site does not use tracking, analytics, or advertising cookies. It does use your browser's local storage — not cookies — for two purely functional things: remembering your language choice (English/Spanish), and, if you use the chat widget, a randomly generated ID and your conversation history so the chat keeps working across page reloads. None of this is used to track you across other sites.</p>",
      "legal.body": "<p>Suligon is in the process of registering as a business activity in Spain. Full legal and tax details will be published here once that process is complete.</p><p><strong>Trading name:</strong> Suligon</p><p><strong>Contact email:</strong> suligonwebs@gmail.com</p><!-- FALTA: NIF --><!-- FALTA: domicilio fiscal -->"
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
      "styles.newtab": "(se abre en una pestaña nueva)",
      "styles.close": "Cerrar",
      "styles.card1.title": "Minimalismo",
      "styles.card1.text": "Silencio tipográfico: un solo peso, mucho blanco, jerarquía por tamaño.",
      "styles.card2.title": "Brutalism",
      "styles.card2.text": "Negro, blanco y un solo acento crudo. Tipografía gigante como estructura, no como decoración.",
      "styles.card3.title": "Maximalismo",
      "styles.card3.text": "Varios colores saturados, cada uno su propia sección. Tipografía gigante sin aire entre líneas.",
      "styles.card4.title": "Glassmorphism",
      "styles.card4.text": "Vidrio esmerilado sobre fondo casi negro: profundidad por blur, nunca por sombra.",
      "styles.alt.minimalism.1": "Minimal Collective: elipses negras de línea fina sobre página gris, un logotipo 3D cromado y el titular «Operating at the intersection of music, art and technology»",
      "styles.alt.minimalism.2": "Estudio de diseño Silencio: página gris claro con un breve texto centrado en mayúsculas y texto diminuto a dos columnas, casi sin ornamento",
      "styles.alt.minimalism.3": "Portada de Everlane: una mujer con jersey verde en un set de estudio claro bajo el titular «Power of softness» y un menú fino en mayúsculas",
      "styles.alt.brutalism.1": "We Make Things GmbH: letras gigantes en contorno tras texto negro en mayúsculas sobre una empresa de accesorios de bicicleta en Colonia",
      "styles.alt.brutalism.2": "Fundición tipográfica Charlie: rotulación blanca enorme sobre una página negra con tres enlaces de menú en forma de píldora",
      "styles.alt.brutalism.3": "Eindhoven Design District: titulares sans-serif negros sobredimensionados y fotos de arquitectura sobre fondo blanco",
      "styles.alt.maximalism.1": "SICK Agency: página verde con tipografía condensada amarilla enorme, un sello circular azul y bandas de texto repetidas",
      "styles.alt.maximalism.2": "Raw Materials: letras «RM» negras gigantes junto a una columna de bloques de color saturado en naranja, morado, azul y rosa",
      "styles.alt.maximalism.3": "Wise: página verde lima brillante con un titular oscuro y grueso sobre enviar dinero al extranjero y una tarjeta de conversión de divisas",
      "styles.alt.glass.1": "Dimension: «El compañero de IA que nunca duerme» sobre un degradado azul grisáceo desenfocado con iconos de apps flotando en cristal esmerilado",
      "styles.alt.glass.2": "AuthKit de WorkOS: título luminoso «AuthKit» sobre un fondo de cuadrícula casi negro con tarjetas de inicio de sesión translúcidas",
      "styles.alt.glass.3": "Air: «Tu agente para tareas creativas» sobre un degradado desenfocado de morado a melocotón con tres tarjetas de imagen translúcidas",
      "styles.cta.text": "¿Quieres descubrir todos los estilos?",
      "styles.cta.button": "Style Gallery",
      "styles.cta.aria": "Abrir la Style Gallery (se abre en una pestaña nueva)",
      "styles.tok.l1": "Tipografía",
      "styles.tok.l2": "Color",
      "styles.tok.l3": "Paradigma de hero",
      "styles.tok.l4": "Paradigma de layout",
      "styles.tok.l5": "Detalle de firma",
      "styles.palette": "Paleta",
      "styles.refs": "Webs de referencia",
      "styles.tok.minimalism.1": "Una sola sans, a menudo un único peso (400) — jerarquía solo por tamaño y tracking negativo, nunca por peso",
      "styles.tok.minimalism.2": "Monocromo casi puro: negro/blanco + como mucho un gris o acento muy contenido",
      "styles.tok.minimalism.3": "Texto gigante (60–150px) sobre fondo vacío, aire generoso alrededor, sin imagen de fondo",
      "styles.tok.minimalism.4": "Grid de 12 columnas o full-bleed sin contenedor, ritmo vertical constante, radios 0px",
      "styles.tok.minimalism.5": "Hairlines de 1px en vez de bordes; micro-tracking negativo en los tamaños grandes",
      "styles.tok.brutalism.1": "Sans condensada o display crudo a tamaño extremo (150–860px), usada como andamiaje visual, no solo como titular",
      "styles.tok.brutalism.2": "Blanco/negro puro + un único acento sin matizar (casi siempre rojo) reservado para un solo momento",
      "styles.tok.brutalism.3": "Tipografía que rompe el viewport, o grid de portfolio denso sin curar — sin imagen hero tradicional",
      "styles.tok.brutalism.4": "Grid expuesto sin radio (0px), con la única excepción de botones/nav en pill (rounded total)",
      "styles.tok.brutalism.5": "Cero sombras, cero degradados; el contraste y el tamaño hacen todo el trabajo de jerarquía",
      "styles.tok.maximalism.1": "Display pesado (700–900) a tamaño extremo (150–560px) con line-height muy ajustado (0.70–0.85)",
      "styles.tok.maximalism.2": "4 o más acentos saturados, cada uno dueño de su propia sección a sangre — cero grises de relleno",
      "styles.tok.maximalism.3": "Mascota o ilustración gigante + rotulación gruesa tipo sticker sobre un color saturado",
      "styles.tok.maximalism.4": "Bloques de sección a sangre con corte duro de color, radio generoso y consistente (16–86px)",
      "styles.tok.maximalism.5": "Cada color es «una habitación», nunca un matiz sutil; sin sombras — el contraste de color da la profundidad",
      "styles.tok.glass.1": "Sans geométrica neutra (DM Sans, Geist, Aeonik), peso medio 500, deja protagonismo a la superficie",
      "styles.tok.glass.2": "Fondo casi negro o nocturno + paneles translúcidos blancos/azules al 10% + un acento frío único en gradiente",
      "styles.tok.glass.3": "Superficie de cristal o render 3D flotando sobre fondo degradado oscuro",
      "styles.tok.glass.4": "Tarjetas con blur y borde interior sutil (inset highlight), radios muy generosos (16–40px) o pill en botones",
      "styles.tok.glass.5": "Elevación por glow y translucidez, nunca box-shadow; borde de 1px en blanco/azul al 10–20% de opacidad",

      "help.title": "Tres situaciones, una solución",
      "help.card1.title": "Todavía sin web",
      "help.card1.text": "Tu negocio es real, pero en internet no existes. Construimos la web que ya debería estar ahí.",
      "help.card2.title": "Web anticuada",
      "help.card2.text": "Hace cinco años estaba bien. Hoy te está costando los clientes que te juzgan en los primeros tres segundos.",
      "help.card3.title": "Consultas perdidas",
      "help.card3.text": "Un cliente escribe a las 11 de la noche y nunca recibe respuesta. Construimos asistentes que responden mientras duermes.",

      "contact.title": "Cuéntanos sobre tu negocio",
      "contact.sub": "Respondemos desde suligonwebs@gmail.com, normalmente en uno o dos días.",
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

      "privacy.body": "<p><strong>Responsable:</strong> Suligon (en proceso de alta como actividad económica en España). Contacto: suligonwebs@gmail.com.</p><p><strong>Qué recopilamos:</strong> a través del formulario de contacto — nombre, email y tu mensaje. Si usas el widget de chat, lo que escribas en él. No recopilamos nada más de forma automática — este sitio no utiliza cookies de rastreo, analítica ni publicidad.</p><p><strong>Para qué lo usamos:</strong> únicamente para responder a tu consulta, ya sea enviada por el formulario o por el chat.</p><p><strong>Con quién lo compartimos:</strong> el formulario de contacto utiliza Web3Forms (web3forms.com) para hacernos llegar tu mensaje por email. El widget de chat utiliza Voiceflow (voiceflow.com) para procesar tus mensajes y generar las respuestas. Cada proveedor procesa tus datos únicamente para ese fin.</p><p><strong>Cuánto tiempo lo conservamos:</strong> los mensajes del formulario, solo el tiempo necesario para responder, y como máximo 12 meses, salvo que exista una relación comercial activa. Las conversaciones del chat se guardan en tu propio navegador — para que la conversación siga funcionando si recargas la página — hasta que borres los datos de tu navegador, y en los servidores de Voiceflow según su propia política de retención.</p><p><strong>Tus derechos:</strong> puedes solicitar el acceso, rectificación o eliminación de tus datos en cualquier momento escribiendo a suligonwebs@gmail.com.</p><p><strong>Cookies y almacenamiento local:</strong> este sitio no utiliza cookies de rastreo, analítica ni publicidad. Sí utiliza el almacenamiento local de tu navegador — no cookies — para dos fines puramente funcionales: recordar tu idioma (español/inglés) y, si usas el widget de chat, un identificador generado aleatoriamente y el historial de la conversación, para que el chat siga funcionando aunque recargues la página. Nada de esto se usa para rastrearte en otros sitios.</p>",
      "legal.body": "<p>Suligon está en proceso de alta como actividad económica en España. Los datos legales y fiscales completos se publicarán aquí en cuanto ese proceso esté finalizado.</p><p><strong>Nombre de la actividad:</strong> Suligon</p><p><strong>Email de contacto:</strong> suligonwebs@gmail.com</p><!-- FALTA: NIF --><!-- FALTA: domicilio fiscal -->"
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
    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const key = el.getAttribute("data-i18n-alt");
      if (table[key] !== undefined) el.setAttribute("alt", table[key]);
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

  /* ============ style cards: compact tiles + one big panel over the grid ============
     The four tiles stay small and never resize. Hovering (or keyboard-focusing)
     a tile opens a big panel centered over the whole group of four, with the
     style's palette, explanation and reference sites; clicking / tapping /
     pressing Enter pins it. A pinned panel closes with its X, Esc, or a click
     outside. One panel at a time; transform + opacity only. */
  const STYLE_INFO = {
    minimalism: {
      key: "minimalism",
      palette: ["#FFFFFF", "#0E0E0E", "#8A8A8A"],
      refs: [
        ["Minimal Collective", "https://minimalcollective.digital"],
        ["Silencio", "https://silencio.es"],
        ["Everlane", "https://everlane.com"],
      ],
    },
    brutalism: {
      key: "brutalism",
      palette: ["#0B0B08", "#8C1C1C", "#D4CEB8"],
      refs: [
        ["We Make Things", "https://wemakethings.de"],
        ["Charlie", "https://charlielemaignan.com"],
        ["Eindhoven Design District", "https://www.eindhovendesigndistrict.com"],
      ],
    },
    maximalism: {
      key: "maximalism",
      palette: ["#231935", "#FF6A3D", "#FFD23F"],
      refs: [
        ["SICK AGENCY", "https://sick.agency"],
        ["Raw Materials", "https://therawmaterials.com"],
        ["Wise", "https://wise.design"],
      ],
    },
    glassmorphism: {
      key: "glass",
      palette: ["#05060A", "#3B82F6", "#4CC9F0"],
      refs: [
        ["Dimension", "https://www.dimension.dev"],
        ["AuthKit", "https://authkit.com"],
        ["Air", "https://air.inc"],
      ],
    },
  };

  function initStyleCards(){
    const section = document.getElementById("styles");
    const grid = document.querySelector("#styles .card-grid");
    const cards = Array.from(document.querySelectorAll(".style-card"));
    if (!grid || !cards.length) return;

    const GALLERY_URL = "https://styleweb.suligonserv.workers.dev/";
    const HOVER_DELAY = 120;   // ms before a hover opens the panel (no flicker crossing the grid)
    const EDGE = 12;           // min gap between the panel and the viewport edge
    const TOP_LIMIT = 96;      // stay clear of the floating header pills
    const MAX_W = 980;
    const REF_SIZES = "(min-width: 700px) 300px, 88vw";

    const ICON_CLOSE = '<svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true"><path d="M5 5l10 10M15 5L5 15" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round"/></svg>';
    const ICON_ARROW = '<svg class="style-card-pop-arrow" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>';

    const t = (key) => (dict[root.lang] || dict.en)[key] || "";
    const canHover = () => window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    let current = null;       // the single open entry, if any
    let pinned = false;       // true once it was fixed by click / tap / Enter
    let ignoreFocus = false;  // set while we move focus ourselves, so it doesn't re-open

    function buildPop(card, face){
      const name = card.dataset.style;
      const info = STYLE_INFO[name];
      const titleKey = face.querySelector("h3").dataset.i18n;          // styles.cardN.title
      const textKey = titleKey.replace(".title", ".text");
      const pop = document.createElement("div");
      pop.className = "style-card-pop";
      pop.id = `style-pop-${name}`;
      pop.setAttribute("role", "region");
      pop.setAttribute("aria-labelledby", `${pop.id}-title`);

      const tokens = [1, 2, 3, 4, 5].map((n) =>
        `<div><dt data-i18n="styles.tok.l${n}">${t(`styles.tok.l${n}`)}</dt>` +
        `<dd data-i18n="styles.tok.${info.key}.${n}">${t(`styles.tok.${info.key}.${n}`)}</dd></div>`
      ).join("");
      const palette = info.palette.map((hex) =>
        `<li><span class="style-card-pop-dot" style="--sw:${hex}"></span><code>${hex}</code></li>`
      ).join("");
      const refs = info.refs.map(([site, url], i) =>
        `<li><a class="style-card-pop-ref" href="${url}" target="_blank" rel="noopener noreferrer" tabindex="-1" aria-labelledby="${pop.id}-r${i}n ${pop.id}-r${i}t">` +
        `<span class="style-card-pop-shot"></span>` +
        `<span class="style-card-pop-refname"><span id="${pop.id}-r${i}n">${site}</span> ↗` +
        `<span class="sr-only" id="${pop.id}-r${i}t" data-i18n="styles.newtab">${t("styles.newtab")}</span></span></a></li>`
      ).join("");

      pop.innerHTML =
        `<button type="button" class="style-card-pop-close" tabindex="-1" data-i18n-aria="styles.close" aria-label="${t("styles.close")}">${ICON_CLOSE}</button>` +
        `<div class="style-card-pop-top">` +
          `<div class="style-card-pop-intro">` +
            `<span class="style-card-pop-label" data-i18n="styles.palette">${t("styles.palette")}</span>` +
            `<ul class="style-card-pop-palette">${palette}</ul>` +
            `<h3 id="${pop.id}-title" data-i18n="${titleKey}">${t(titleKey)}</h3>` +
            `<p data-i18n="${textKey}">${t(textKey)}</p>` +
            `<a class="style-card-pop-link" href="${GALLERY_URL}" target="_blank" rel="noopener noreferrer" tabindex="-1">` +
              `<span data-i18n="styles.hint">${t("styles.hint")}</span>` +
              ` <span class="sr-only" data-i18n="styles.newtab">${t("styles.newtab")}</span>${ICON_ARROW}</a>` +
          `</div>` +
          `<dl class="style-card-pop-tokens">${tokens}</dl>` +
        `</div>` +
        `<span class="style-card-pop-label" data-i18n="styles.refs">${t("styles.refs")}</span>` +
        `<ul class="style-card-pop-refs">${refs}</ul>`;

      // reference screenshots: same files as the tile thumbnails (already cached),
      // so nothing is fetched or flickers when the panel opens
      const shots = pop.querySelectorAll(".style-card-pop-shot");
      face.querySelectorAll(".style-card-images picture").forEach((pic, i) => {
        const clone = pic.cloneNode(true);
        clone.querySelectorAll("source, img").forEach((n) => n.setAttribute("sizes", REF_SIZES));
        if (shots[i]) shots[i].appendChild(clone);
      });

      card.appendChild(pop);
      face.setAttribute("aria-controls", pop.id);
      return {
        pop,
        closeBtn: pop.querySelector(".style-card-pop-close"),
        controls: Array.from(pop.querySelectorAll(".style-card-pop-close, .style-card-pop-ref, .style-card-pop-link")),
      };
    }

    // Size and position the panel (offsets are relative to its tile), centered over
    // the whole grid and kept fully inside the viewport. The transform-origin makes
    // the "closed" pose sit exactly on top of the tile, so it grows out of it.
    function place(e){
      const cr = e.card.getBoundingClientRect();
      const gr = grid.getBoundingClientRect();
      const vw = document.documentElement.clientWidth;
      const vh = window.innerHeight;

      let W = Math.min(Math.max(gr.width, 600), MAX_W);
      W = Math.min(W, vw - EDGE * 2);
      const maxH = vh - TOP_LIMIT - EDGE;

      const pop = e.pop;
      pop.classList.add("is-placing");
      pop.style.setProperty("--pop-w", `${W}px`);
      pop.style.setProperty("--pop-maxh", `${maxH}px`);
      const H = Math.min(pop.offsetHeight, maxH);

      // center of the group of four; if the grid is taller than the screen
      // (phones, one column) center in the visible area instead
      const cx = gr.left + gr.width / 2;
      const cy = gr.height <= vh * 0.9 ? gr.top + gr.height / 2 : TOP_LIMIT + maxH / 2;
      const absLeft = Math.min(Math.max(cx - W / 2, EDGE), vw - EDGE - W);
      const absTop = Math.min(Math.max(cy - H / 2, TOP_LIMIT), vh - EDGE - H);
      const x = absLeft - cr.left;
      const y = absTop - cr.top;

      const s = Math.min(cr.width / W, 0.96);
      const k = 1 - s;
      pop.style.setProperty("--pop-x", `${x.toFixed(1)}px`);
      pop.style.setProperty("--pop-y", `${y.toFixed(1)}px`);
      pop.style.setProperty("--pop-s", s.toFixed(4));
      pop.style.setProperty("--pop-ox", `${(-x / k).toFixed(1)}px`);
      pop.style.setProperty("--pop-oy", `${((cr.height / 2 - y - (s * H) / 2) / k).toFixed(1)}px`);

      void pop.offsetWidth;                 // commit the closed pose before animating open
      pop.classList.remove("is-placing");
    }

    function setControls(e, on){
      e.controls.forEach((c) => { c.tabIndex = on ? 0 : -1; });
    }

    function openEntry(e, pin){
      if (current && current !== e) closeEntry(current);
      if (current !== e){
        place(e);
        e.card.classList.add("is-open");
        e.face.setAttribute("aria-expanded", "true");
        section.classList.add("has-open");
        current = e;
        pinned = false;
      }
      if (pin && !pinned){
        pinned = true;
        e.card.classList.add("is-pinned");
        setControls(e, true);
      }
    }

    function closeEntry(e, opts){
      clearTimeout(e.timer);   // a hover-intent timer still pending would re-open it right after
      e.card.classList.remove("is-open", "is-pinned");
      e.face.setAttribute("aria-expanded", "false");
      setControls(e, false);
      if (current === e){ current = null; pinned = false; section.classList.remove("has-open"); }
      if (opts && opts.restoreFocus){
        ignoreFocus = true;
        e.face.focus({ preventScroll: true });
        ignoreFocus = false;
      }
    }

    function pinEntry(e){
      const alreadyPinned = current === e && pinned;
      openEntry(e, true);
      if (!alreadyPinned) e.closeBtn.focus({ preventScroll: true });
    }

    // decode the screenshots before the first open so nothing pops in
    function warm(e){
      if (e.warmed) return;
      e.warmed = true;
      e.pop.querySelectorAll("img").forEach((img) => { if (img.decode) img.decode().catch(() => {}); });
    }

    cards.forEach((card) => {
      const face = card.querySelector(".style-card-face");
      const built = buildPop(card, face);
      const e = { card, face, pop: built.pop, closeBtn: built.closeBtn, controls: built.controls, timer: 0, warmed: false };

      // mouse hover (hover-capable pointers only; touch has no hover state).
      // The preview panel ignores the pointer, so moving across the tiles just
      // swaps which panel is open.
      card.addEventListener("pointerenter", (ev) => {
        if (ev.pointerType !== "mouse" || !canHover()) return;
        warm(e);
        clearTimeout(e.timer);
        e.timer = setTimeout(() => openEntry(e, false), HOVER_DELAY);
      });
      card.addEventListener("pointerleave", (ev) => {
        if (ev.pointerType !== "mouse") return;
        clearTimeout(e.timer);
        if (current === e && !pinned) closeEntry(e);
      });

      // click / tap pins (listen on the whole card: a pinned panel sits on top of the tile)
      card.addEventListener("click", (ev) => {
        if (ev.target.closest(".style-card-pop-close, .style-card-pop-ref, .style-card-pop-link")) return;
        pinEntry(e);
      });

      // keyboard: focus previews, Enter / Space pins
      face.addEventListener("focus", () => {
        if (ignoreFocus || !face.matches(":focus-visible")) return;
        warm(e);
        openEntry(e, false);
      });
      face.addEventListener("keydown", (ev) => {
        if (ev.key !== "Enter" && ev.key !== " ") return;
        ev.preventDefault();
        pinEntry(e);
      });
      card.addEventListener("focusout", (ev) => {
        if (card.contains(ev.relatedTarget)) return;
        if (current === e && !pinned && !card.matches(":hover")) closeEntry(e);
      });

      e.closeBtn.addEventListener("click", () => closeEntry(e, { restoreFocus: true }));
    });

    document.addEventListener("keydown", (ev) => {
      if (ev.key !== "Escape" || !current) return;
      closeEntry(current, { restoreFocus: current.card.contains(document.activeElement) });
    });
    document.addEventListener("pointerdown", (ev) => {
      if (current && pinned && !current.card.contains(ev.target)) closeEntry(current);
    });

    // layout changed under an open panel: close it (width only — mobile URL-bar
    // show/hide fires resize too and must not dismiss a pinned panel)
    let lastWidth = window.innerWidth;
    window.addEventListener("resize", () => {
      if (window.innerWidth === lastWidth) return;
      lastWidth = window.innerWidth;
      if (current) closeEntry(current);
    }, { passive: true });
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
      const mailto = `mailto:suligonwebs@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
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
