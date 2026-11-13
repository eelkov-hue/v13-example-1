/* Egripment homepage demo. Catalog text is taken from egripment.com. */
(function () {
  const I18N = {
    es: {
      "nav.products": "Productos",
      "nav.solutions": "Soluciones",
      "nav.rental": "Alquiler",
      "nav.news": "Noticias",
      "nav.about": "Nosotros",
      "nav.contact": "Contacto",
      "nav.quote": "Pedir presupuesto",
      "top.rental": "Alquiler",
      "top.shop": "Tienda",
      "top.jobs": "Empleo",
      "search.open": "Buscar",
      "search.placeholder": "Buscar productos, p. ej. Hothead",
      "search.button": "Buscar",
      "search.clear": "Borrar búsqueda",
      "menu.allProducts": "Todos los productos",
      "menu.close": "Cerrar",
      "menu.label": "Menú",
      "hero.eyebrow": "Equipo de soporte de cámara · Desde 1976",
      "hero.title": "Soporte sólido en cada set.",
      "hero.sub": "Grúas, cabezas remotas, jibs, dollies y vías. Diseñados y fabricados en los Países Bajos para deporte, estudios y eventos en directo.",
      "hero.explore": "Ver productos",
      "hero.quote": "Pedir presupuesto",
      "hero.news": "Noticias: Egripment se une a Broadcast Solutions Group",
      "stat.1976": "Fundada en Nederhorst den Berg",
      "stat.1983": "Premio de la Academia por la grúa Tulip",
      "stat.olympics": "Presente en los Juegos Olímpicos desde 1984",
      "stat.holland": "Diseñada y fabricada en los Países Bajos",
      "stat.olympics.value": "Juegos Olímpicos",
      "stat.holland.value": "Países Bajos",
      "products.title": "Equipo de soporte de cámara",
      "products.sub": "Encuentre el sistema adecuado para su producción.",
      "classics.before": "¿Busca un modelo descatalogado?",
      "classics.link": "Visite el archivo Classics",
      "card.cranes": "Grúas",
      "card.cranes.sub": "TDT, plegable y Xtreme T10",
      "card.heads": "Cabezas remotas",
      "card.heads.sub": "MiniShot, 205, 301, 306, Hothead",
      "card.jibs": "Brazos jib",
      "card.jibs.sub": "Genie, MiniJib, JanJib",
      "card.starcam": "Torres Starcam",
      "card.starcam.sub": "De XS a XL, totalmente IP",
      "card.robotic": "Sistemas de cámara remota",
      "card.robotic.sub": "G-Track, Intelli Jib, Corner Cam",
      "card.dollies": "Dollies y vías",
      "card.dollies.sub": "Matador, Skateboard, Dinky, vías",
      "card.accessories": "Accesorios",
      "card.accessories.sub": "Columnas, abrazaderas, risers, asientos",
      "card.virtual": "Sistemas de virtual y AR",
      "card.virtual.sub": "Cabezas, grúas y tracking codificados",
      "digi.kicker": "Plataforma DigiLite",
      "digi.title": "Una plataforma IP para cabezas, torres y tracking",
      "digi.body": "La Starcam puede usarse sola o en un multicontrol. El cableado se reduce por fibra o por el tronco IP de las cámaras de broadcast. El mismo sistema DigiLite une cabezas remotas, torres y tracking.",
      "digi.b1": "Control totalmente basado en IP",
      "digi.b2": "Por fibra o tronco IP de cámara",
      "digi.b3": "El multicontrol opera varias torres Starcam",
      "digi.cta": "Descubrir DigiLite",
      "sol.title": "Soluciones por uso",
      "sol.all": "Todas las soluciones",
      "sol.sports": "Deporte",
      "sol.sports.body": "Plataformas y sistemas de tracking para estadios. Presente en los Juegos Olímpicos desde 1984.",
      "sol.studio": "Estudio y noticias",
      "sol.studio.body": "Torres Starcam IP y cabezas remotas para estudios y directos.",
      "sol.virtual": "Virtual y AR",
      "sol.virtual.body": "Cabezas, grúas y tracking codificados para platós virtuales y realidad aumentada.",
      "sol.services": "Servicios:",
      "news.title": "Últimas noticias",
      "news.all": "Todas las noticias",
      "news.bs": "Egripment se une a Broadcast Solutions Group",
      "news.ibc": "Egripment @ IBC Show 2026",
      "news.starcam": "Starcam towercams totalmente IP",
      "meet.title": "Encuéntrenos",
      "quote.title": "Cuéntenos su producción",
      "quote.sub1": "Le ayudamos a elegir el sistema. Llame al",
      "quote.sub2": "o envíe su solicitud.",
      "quote.cta": "Pedir presupuesto",
      "form.legend": "Solicitud de presupuesto",
      "form.name": "Nombre",
      "form.email": "Correo electrónico",
      "form.company": "Empresa",
      "form.plan": "Qué está preparando",
      "form.plan.placeholder": "Seleccione",
      "form.plan.crane": "Grúa o jib",
      "form.plan.head": "Cabeza remota",
      "form.plan.starcam": "Torre Starcam",
      "form.plan.dolly": "Dolly o vía",
      "form.plan.virtual": "Virtual o realidad aumentada",
      "form.plan.rental": "Alquiler",
      "form.plan.other": "Otra cosa",
      "form.message": "Mensaje",
      "form.submit": "Enviar solicitud",
      "form.note": "Se muestra solo en esta página. No se envía nada a Egripment.",
      "form.another": "Enviar otra solicitud",
      "footer.blurb": "Soporte sólido en cada set. Miembro de Broadcast Solutions.",
      "footer.products": "Productos",
      "footer.company": "Compañía",
      "footer.contact": "Contacto",
      "footer.about": "Nosotros",
      "footer.careers": "Empleo",
      "footer.team": "Equipo",
      "footer.support": "Soporte",
      "footer.events": "Eventos",
      "footer.brochures": "Folletos",
      "detail.close": "Cerrar",
      "detail.back": "Volver al inicio",
    },
  };

  const MSG = {
    en: {
      name: "Enter your name.",
      email: "Enter a valid email address.",
      plan: "Choose what you are planning.",
      message: "Tell us a little more (at least 10 characters).",
      thanks: "Thank you.",
      body: "We will contact you as soon as possible.",
      categories: "categories",
      category: "category",
      none: "No categories match",
      nohits: "No products match",
      results: "Matching products",
    },
    es: {
      name: "Escriba su nombre.",
      email: "Escriba un correo electrónico válido.",
      plan: "Elija qué está preparando.",
      message: "Cuéntenos un poco más (al menos 10 caracteres).",
      thanks: "Gracias.",
      body: "Nos pondremos en contacto lo antes posible.",
      categories: "categorías",
      category: "categoría",
      none: "Ninguna categoría coincide con",
      nohits: "Ningún producto coincide con",
      results: "Productos que coinciden",
    },
  };

  const GROUP = {
    products: { en: "Products", es: "Productos" },
    solutions: { en: "Solutions", es: "Soluciones" },
    rental: { en: "Rental", es: "Alquiler" },
    news: { en: "News", es: "Noticias" },
    about: { en: "About", es: "Nosotros" },
    top: { en: "Page", es: "Página" },
  };

  function page(entry) {
    return entry;
  }

  const PAGES = [
    page({
      id: "jibs",
      group: "products",
      menu: "Jib arms",
      image: "assets/cat-jibs.jpg",
      fit: "contain",
      items: ["Genie Jib", "Intelli Jib", "MiniJib Short Telescopic", "MiniJib Long Telescopic", "JanJib Fixed", "JanJib Systems"],
      copy: {
        en: ["Jib arms in the current range are the Genie Jib, Intelli Jib, the short and long telescopic MiniJib, and the JanJib fixed and system versions.", "JanJib is also used as an encoded arm for virtual and augmented sets."],
        es: ["Los brazos jib actuales son Genie Jib, Intelli Jib, MiniJib telescópico corto y largo, y JanJib fijo y en sistema.", "JanJib también se usa como brazo codificado para platós virtuales y de realidad aumentada."],
      },
    }),
    page({
      id: "cranes",
      group: "products",
      menu: "Cranes",
      image: "assets/slide-crane-la.jpg",
      items: ["TDT Crane", "TDT Foldable", "JanJib Remote", "Xtreme T10 - Telescopic", "Xtreme T10 - ARC Compensation", "Xtreme T12 - Telescopic", "Super Javelin MK II"],
      copy: {
        en: ["The crane range runs from the TDT all-in-one and the foldable TDT to the JanJib Remote, the carbon-fiber Xtreme T10 and T12, and the Super Javelin MK II.", "The Xtreme T10 is also available with ARC compensation and in combination with augmented reality. The live site describes it as going everywhere, and as available with ARC and AR."],
        es: ["La gama va de la TDT todo en uno y la TDT plegable a la JanJib Remote, las Xtreme T10 y T12 de fibra de carbono, y la Super Javelin MK II.", "La Xtreme T10 también está disponible con compensación ARC y en combinación con realidad aumentada."],
      },
    }),
    page({
      id: "remote-heads",
      group: "products",
      menu: "Remote heads",
      image: "assets/cat-remote-heads.png",
      fit: "contain",
      items: ["Hothead 3 DigiLite (IP)", "306 DigiLite (IP)", "301 DigiLite (IP)", "205 DigiLite (IP)", "MiniShot DigiLite (IP)", "Torq Gyro Head", "DigiLite Multi Control", "DigiLite Single Control", "Panbar Control", "301 Head", "106 Head", "Joystick for Freefly"],
      copy: {
        en: ["Egripment’s remote heads run from the HotHead 3, the largest in the line, to the 306, 301, 205 and MiniShot, plus the Torq gyro head.", "DigiLite multi, single and panbar controls operate the heads. The 306 is prepared for virtual and augmented reality sets. A joystick is also made for Freefly Mōvi gimbals."],
        es: ["Las cabezas van de la HotHead 3, la mayor de la gama, a las 306, 301, 205 y MiniShot, además de la Torq gyro.", "Los controles DigiLite multi, single y panbar operan las cabezas. La 306 está preparada para platós virtuales y de realidad aumentada."],
      },
    }),
    page({
      id: "robotic",
      group: "products",
      menu: "Remote camera systems",
      image: "assets/cat-tower-374.png",
      fit: "contain",
      items: ["Generic Track System", "Intelli Jib", "The Corner Cam"],
      copy: {
        en: ["Remote camera systems on the live site are the Generic Track System, the Intelli Jib and the Corner Cam.", "The G-Track dolly is the base for live, programmed and fully automatic moves, including virtual news studios. The live homepage uses the same tower photograph for this category and for Starcam."],
        es: ["Los sistemas de cámara remota del sitio son Generic Track System, Intelli Jib y Corner Cam.", "El dolly G-Track sirve para movimientos en directo, programados y automáticos, también en estudios de noticias virtuales."],
      },
    }),
    page({
      id: "starcam",
      group: "products",
      menu: "Starcam towercam (IP)",
      image: "assets/slide-starcam.jpg",
      fit: "contain",
      items: ["Starcam Towercam Studio", "Starcam Towercam XS", "Starcam Towercam S", "Starcam Towercam M", "Starcam Towercam XL"],
      copy: {
        en: ["The Starcam series is fully IP-based. Lengths published for IBC run from Starcam Studio (90–160 cm) and XS through S, M and the XL (225–1000 cm).", "Towers mount on the floor or hang from the ceiling, and can be driven by joystick or foot pedal. Encoded columns are available for virtual studios."],
        es: ["La serie Starcam es totalmente IP. Las alturas publicadas para IBC van de Starcam Studio (90–160 cm) y XS hasta S, M y XL (225–1000 cm).", "Se montan en el suelo o colgadas del techo, con joystick o pedal. Hay columnas codificadas para estudios virtuales."],
      },
    }),
    page({
      id: "dollies",
      group: "products",
      menu: "Dollies and tracks",
      image: "assets/cat-dollies.jpg",
      fit: "contain",
      items: ["Slider", "Skateboard Dolly", "Focus Dolly Light", "Matador Dolly", "Dinky Dolly", "Skateboard (track) wheels", "Sports Dolly", "Sports Base (low)", "Hi-Lo Platform"],
      copy: {
        en: ["Dollies run from the 407 slider, skateboard, Focus Dolly Light, Matador and Dinky to the sports dolly, low sports base and hi-lo platform.", "The Focus Dolly Light is the photograph used for this category on the live homepage."],
        es: ["Los dollies van del slider 407, skateboard, Focus Dolly Light, Matador y Dinky al sports dolly, la base sports baja y la plataforma hi-lo.", "La foto de esta categoría en la web es la Focus Dolly Light."],
      },
    }),
    page({
      id: "accessories",
      group: "products",
      menu: "Accessories",
      image: "assets/cat-accessories.jpg",
      fit: "contain",
      items: ["Tracks", "Bazooka", "Columns", "Camera clamps 100/150 mm", "Camera risers 10/20/30/40 cm", "Levellers 100/150/Mitchell", "Lowbowl 100/150 mm", "Offset arms", "Wheels for platform and crane dollies", "Skateboard (track) wheels", "Seat supports", "Gimble level mount", "Power Grip car mount"],
      copy: {
        en: ["Accessories cover tracks, bazooka extensions, columns, clamps, risers, levellers, offset arms, wheels and seat supports.", "The category photograph on the live site is the skateboard-style wheel set."],
        es: ["Los accesorios cubren vías, bazookas, columnas, abrazaderas, risers, niveladores, brazos offset, ruedas y soportes de asiento.", "La foto de la categoría en la web es el juego de ruedas tipo skateboard."],
      },
    }),
    page({
      id: "virtual",
      group: "products",
      menu: "Virtual and AR systems",
      image: "assets/cat-virtual.png",
      fit: "contain",
      items: ["205 encoded remote head", "306 encoded remote head", "G-Track encoded dolly", "Starcam encoded column", "TDT encoded crane", "Xtreme T10 encoded telescoping crane"],
      copy: {
        en: ["Encoded heads, the G-Track dolly, Starcam columns and the TDT and Xtreme T10 cranes send tracking data over Ethernet for virtual studio and graphics systems.", "The live category calls this Virtual & Augmented Reality Systems. The photograph is the 205 encoded head."],
        es: ["Cabezas codificadas, el dolly G-Track, columnas Starcam y las grúas TDT y Xtreme T10 envían datos de tracking por Ethernet para estudios virtuales.", "En la web la categoría se llama Virtual & Augmented Reality Systems. La foto es la cabeza 205 codificada."],
      },
    }),
    page({
      id: "classics",
      group: "products",
      menu: "Classics (discontinued)",
      image: "assets/cat-classics.jpg",
      fit: "contain",
      items: ["Scanner", "Scanner Elite", "SkyKing Crane", "Tulip Crane", "Piccolini", "Startrack Dolly", "TGV Dolly", "Scanner Elite Head", "Universal Dolly"],
      copy: {
        en: ["Classics are the discontinued line, kept on the live site for reference. The Tulip crane is the Academy Award winning crane, presented at the 1983 ceremony.", "The VIP/Tulip was built to stay stable on rough terrain, studio floors or track, and folds for transport. The category photograph is the Scanner Elite."],
        es: ["Classics es la línea descatalogada, que sigue en la web como archivo. La grúa Tulip es la que recibió el premio de la Academia, entregado en 1983.", "La VIP/Tulip se diseñó para terreno irregular, suelo de estudio o vía, y se pliega para el transporte. La foto es la Scanner Elite."],
      },
    }),
    page({
      id: "global-rental",
      group: "solutions",
      menu: "Your global rental partner",
      image: "assets/slide-hq.jpg",
      copy: {
        en: ["Egripment supplies systems for sale and for rental. Headquarters in Nederhorst den Berg and Egripment Deutschland, near Cologne, run an international rental division for major events.", "The rental fleet includes cranes, stabilised remote heads and specialist grip."],
        es: ["Egripment suministra sistemas en venta y en alquiler. La sede de Nederhorst den Berg y Egripment Deutschland, cerca de Colonia, operan un alquiler internacional para grandes eventos.", "La flota incluye grúas, cabezas remotas estabilizadas y grip especializado."],
      },
    }),
    page({
      id: "integration",
      group: "solutions",
      menu: "System integration",
      image: "assets/slide-digilite.png",
      fit: "contain",
      copy: {
        en: ["System integration on the live site sits beside rental, MeshLINK, OB vans and DigiLite: combining heads, towers, tracking and control on one job.", "Broadcast Solutions, which acquired Egripment in 2025, is a systems integrator. Egripment keeps its name and continues to design and build the camera support."],
        es: ["La integración de sistemas, en la web, está junto al alquiler, MeshLINK, unidades móviles y DigiLite: cabezas, torres, tracking y control en un mismo trabajo.", "Broadcast Solutions, que adquirió Egripment en 2025, es integrador de sistemas. Egripment conserva el nombre y sigue diseñando y fabricando el soporte de cámara."],
      },
    }),
    page({
      id: "meshlink",
      group: "solutions",
      menu: "MeshLINK, the new wireless",
      copy: {
        en: ["MeshLINK is listed on the live site as “MeshLINK, The new wireless”, a solution alongside DigiLite and remote broadcast.", "This homepage demo does not add a product claim beyond that menu title."],
        es: ["MeshLINK figura en la web como “MeshLINK, The new wireless”, junto a DigiLite y las soluciones de broadcast remoto.", "Esta demo no añade prestaciones que no estén en ese título de menú."],
      },
    }),
    page({
      id: "ob-vans",
      group: "solutions",
      menu: "OB vans and mobile production",
      image: "assets/slide-tdt.jpg",
      copy: {
        en: ["OB vans and mobile production are a solution group on the live site, for cranes and remote heads that travel with a truck or flight pack.", "The TDT is described on the homepage slider as an all-in-one crane system. The Xtreme T10 slider line says it is “going everywhere”."],
        es: ["Las unidades móviles son un grupo de soluciones en la web, para grúas y cabezas que viajan con un camión o un flight pack.", "La TDT se describe en el carrusel como grúa todo en uno. De la Xtreme T10 el sitio dice que “is going everywhere”."],
      },
    }),
    page({
      id: "digilite-system",
      group: "solutions",
      menu: "DigiLite plug and play",
      image: "assets/slide-digilite.png",
      fit: "contain",
      items: ["306 DigiLite", "301 DigiLite", "HotHead 3", "Multi control", "Single controller", "Panbar", "Starcam towers"],
      copy: {
        en: ["DigiLite is Egripment’s digital system, named for being simple to operate. The live page describes quick set up, easy cabling, a simple UI and remote IP control.", "The multi joystick can control 8 digital remote heads, with 8 presets, by one operator. Pairing buttons on the heads and joysticks let them find each other on the network.", "Starcam towers use the same IP approach: fiber or the IP trunk of a broadcast camera, integrated presets, and multi control of several towers."],
        es: ["DigiLite es el sistema digital de Egripment, pensado para ser sencillo de operar. La página describe un montaje rápido, poco cable, una interfaz simple y control IP remoto.", "El joystick multi puede controlar 8 cabezas digitales, con 8 presets, por un solo operador. Los botones de emparejamiento hacen que cabeza y joystick se encuentren en la red.", "Las torres Starcam usan el mismo enfoque IP: fibra o tronco IP de la cámara, presets integrados y multicontrol de varias torres."],
      },
    }),
    page({
      id: "remote-broadcast",
      group: "solutions",
      menu: "Remote broadcast solutions",
      image: "assets/slide-hothead.jpg",
      copy: {
        en: ["Remote broadcast solutions cover the DigiLite heads and controls used when the operator is not at the camera: multi control, single joystick and panbar.", "The HotHead 3 is described as the largest head in the line, for studio and portable cameras on sports, concerts and live events."],
        es: ["Las soluciones de broadcast remoto cubren las cabezas y controles DigiLite cuando el operador no está en la cámara: multicontrol, joystick single y panbar.", "La HotHead 3 se describe como la mayor cabeza de la gama, para cámaras de estudio y portátiles en deporte, conciertos y directos."],
      },
    }),
    page({
      id: "virtual-ar",
      group: "solutions",
      menu: "Virtual and augmented reality",
      image: "assets/slide-ar.jpg",
      copy: {
        en: ["With the demand for virtual studios and augmented reality, Egripment offers an encoding package for cranes, remote heads, telescopic columns and tracking dollies.", "Position data goes out over Ethernet. The tracking interface can work with virtual studio graphics, and data can be recorded with timecode for later animation."],
        es: ["Para estudios virtuales y realidad aumentada, Egripment ofrece un paquete de codificación para grúas, cabezas, columnas telescópicas y dollies de tracking.", "Los datos de posición salen por Ethernet. La interfaz puede trabajar con gráficos de estudio virtual y grabarse con código de tiempo."],
      },
    }),
    page({
      id: "eng",
      group: "solutions",
      menu: "ENG broadcast",
      items: ["Focus Dolly Light", "Skateboard Dolly", "Universal Dolly", "Tracks", "Genie Jib"],
      copy: {
        en: ["The ENG broadcast set on the live site is a short list: Focus Dolly Light, skateboard dolly, universal dolly, tracks and the Genie Jib."],
        es: ["El conjunto ENG de la web es una lista corta: Focus Dolly Light, skateboard dolly, universal dolly, vías y Genie Jib."],
      },
    }),
    page({
      id: "studio",
      group: "solutions",
      menu: "News studios and automation",
      image: "assets/slide-tdt.jpg",
      items: ["G-Track Dolly System", "Starcam Studio (XS)", "TDT (encoded) crane", "205/D digital remote head", "306/D digital remote head"],
      copy: {
        en: ["News studios and automation on the live site pair the G-Track dolly, Starcam Studio, an encoded TDT and the 205/D and 306/D heads.", "G-Track is described as a base for live shows, concerts, sport and reality TV, and for repeatable moves in a virtual news studio."],
        es: ["Estudios de noticias y automatización, en la web, unen el dolly G-Track, Starcam Studio, una TDT codificada y las cabezas 205/D y 306/D.", "G-Track se describe como base para directos, conciertos, deporte y reality, y para movimientos repetibles en un estudio de noticias virtual."],
      },
    }),
    page({
      id: "sports",
      group: "solutions",
      menu: "Sports",
      image: "assets/slide-foldable-tdt.jpg",
      items: ["Sports Dolly", "Sports Base", "Hi-Lo platform", "Scanner Crane", "G-Track Dolly System", "Scanner Elite", "TDT Crane", "205 remote head", "306 remote head"],
      copy: {
        en: ["The Sports Dolly is a stable base that rolls on grass, sand, cobblestones or gravel, then lifts off its wheels to be levelled. It is built for crews at sporting events.", "Sportsbase, introduced from the original sports dolly, has been used at major sports events including the Olympic Games. Egripment’s own company profile says the company has been present at every Olympic Games since 1984. The photograph is the foldable TDT at Paris 2024, from the live homepage slider."],
        es: ["El Sports Dolly es una base estable que rueda sobre hierba, arena, adoquín o grava y luego se levanta de las ruedas para nivelarse.", "Sportsbase se ha usado en grandes eventos deportivos, incluidos los Juegos Olímpicos. El perfil de la empresa dice que Egripment está en los Juegos desde 1984. La foto es la TDT plegable en París 2024, del carrusel de la web."],
      },
    }),
    page({
      id: "movie",
      group: "solutions",
      menu: "Movie",
      image: "assets/hero-tesla-crane.jpg",
      items: ["Xtreme T10 - Telescopic", "Xtreme T12 - Telescopic", "JanJib Fixed", "306 remote head"],
      copy: {
        en: ["The movie set on the live site is the Xtreme T10, Xtreme T12, JanJib Fixed and the 306 remote head.", "The night street photograph is the live slider frame for “Xtreme T10 is going everywhere”."],
        es: ["El conjunto de cine en la web es Xtreme T10, Xtreme T12, JanJib Fixed y la cabeza 306.", "La foto nocturna es el fotograma del carrusel de “Xtreme T10 is going everywhere”."],
      },
    }),
    page({
      id: "broadcast-events",
      group: "solutions",
      menu: "TV broadcast and events",
      image: "assets/slide-tdt.jpg",
      items: ["TDT Crane", "Xtreme T10", "Xtreme T12", "Scanner Elite", "Scanner", "G-Track", "Starcam Studio", "StarCam MKII", "306 remote head", "205 remote head"],
      copy: {
        en: ["TV broadcast and events, listed on the live site as festival and events, combines the large cranes, Starcam, G-Track and the 205 and 306 heads.", "The studio photograph is the TDT on the live homepage slider, captioned “TDT all in one crane system”."],
        es: ["Televisión y eventos, en la web bajo festival and events, reúne las grúas grandes, Starcam, G-Track y las cabezas 205 y 306.", "La foto de estudio es la TDT del carrusel, con el texto “TDT all in one crane system”."],
      },
    }),
    page({
      id: "virtual-sets",
      group: "solutions",
      menu: "Virtual sets and AR",
      image: "assets/slide-ar.jpg",
      items: ["TDT encoded crane", "Xtreme T10 encoded telescoping crane", "Starcam encoded column", "Starcam Mini encoded column", "G-Track encoded dolly", "306 encoded remote head", "205 encoded remote head"],
      copy: {
        en: ["Virtual sets and AR use the encoded TDT, Xtreme T10, Starcam columns, G-Track and the 205 and 306 heads.", "Existing Egripment cranes can be upgraded with the encoding package. The homepage calls the related slider frame “Egripment AR Showreel”."],
        es: ["Los platós virtuales y la AR usan la TDT y la Xtreme T10 codificadas, columnas Starcam, G-Track y las cabezas 205 y 306.", "Las grúas Egripment ya instaladas se pueden actualizar con el paquete de codificación. El carrusel llama a esta imagen “Egripment AR Showreel”."],
      },
    }),
    page({
      id: "rental",
      group: "rental",
      menu: "Rental overview",
      image: "assets/slide-hq.jpg",
      copy: {
        en: ["Rental is the other half of Egripment. The live sales site switches to egripment.nl for rental. Egripment Deutschland, near Cologne, operates the international rental division with cranes, stabilised remote heads and specialist grip.", "On the live sales homepage the top bar links Rental to egripment.nl, next to Sales and Shop."],
        es: ["El alquiler es la otra mitad de Egripment. La web de venta enlaza egripment.nl para el alquiler. Egripment Deutschland, cerca de Colonia, opera la división internacional con grúas, cabezas estabilizadas y grip.", "En la home de venta, la barra superior enlaza Rental con egripment.nl, junto a Sales y Shop."],
      },
    }),
    page({
      id: "rental-nl",
      group: "rental",
      menu: "Netherlands rental",
      image: "assets/slide-hq.jpg",
      copy: {
        en: ["Netherlands rental runs from Egripment in Nederhorst den Berg, Machineweg 22. The building photograph is the “Meet Egripment” frame on the live homepage slider.", "The live Rental link points at egripment.nl. This demo stays on the page."],
        es: ["El alquiler en los Países Bajos sale de Egripment en Nederhorst den Berg, Machineweg 22. La foto del edificio es el fotograma “Meet Egripment” del carrusel.", "El enlace Rental de la web apunta a egripment.nl. Esta demo se queda en la página."],
      },
    }),
    page({
      id: "rental-de",
      group: "rental",
      menu: "Germany rental",
      copy: {
        en: ["Egripment Deutschland, near Cologne, is the rental subsidiary. The September 2025 announcement says it services major events worldwide and, within the group, manages Birds Camera Solutions.", "Philip von Senden (COO) and Martin Dreesbach (CTO) lead the German subsidiary, according to that announcement."],
        es: ["Egripment Deutschland, cerca de Colonia, es la filial de alquiler. El anuncio de septiembre de 2025 dice que cubre grandes eventos en todo el mundo y que, dentro del grupo, gestiona Birds Camera Solutions.", "Philip von Senden (COO) y Martin Dreesbach (CTO) dirigen la filial alemana, según ese anuncio."],
      },
    }),
    page({
      id: "jobs",
      group: "rental",
      menu: "Jobs | Vacatures",
      image: "assets/slide-hq.jpg",
      copy: {
        en: ["The live sales site labels this Jobs | Vacatures and links to egripment.nl/jobs/. Careers also sits in the About menu.", "Egripment’s technical designers come from practical television and film work. This demo has no live vacancy feed. Use the request form and write careers in the message if you want a reply on this page only."],
        es: ["En la web el enlace se llama Jobs | Vacatures y apunta a egripment.nl/jobs/. Empleo también está en el menú About.", "Los diseñadores de Egripment vienen del trabajo práctico en televisión y cine. Esta demo no tiene una bolsa de empleo en vivo. Use el formulario y escriba empleo en el mensaje."],
      },
    }),
    page({
      id: "shop",
      group: "top",
      menu: "Shop",
      image: "assets/cat-accessories.jpg",
      fit: "contain",
      items: ["Tracks", "Clamps", "Risers", "Levellers", "Wheels", "Seat supports", "Columns", "Offset arms"],
      copy: {
        en: ["Shop on the live site opens shop.egripment.com in a new tab, separate from this sales homepage.", "The parts range overlaps the accessories catalog: tracks, clamps, risers, levellers, wheels, columns and seat supports. This demo lists that range here instead of leaving the page."],
        es: ["La tienda en la web abre shop.egripment.com en una pestaña nueva, aparte de esta home de venta.", "El catálogo de piezas coincide con los accesorios: vías, abrazaderas, risers, niveladores, ruedas, columnas y asientos. Esta demo lo muestra aquí."],
      },
    }),
    page({
      id: "news-bs",
      group: "news",
      menu: "Egripment joins Broadcast Solutions Group",
      image: "assets/news-bs.png",
      fit: "contain",
      copy: {
        en: ["Bingen am Rhein, 9 September 2025. Broadcast Solutions acquired Egripment BV and its rental subsidiary Egripment Deutschland GmbH. Both keep their names.", "For almost 50 years Egripment has designed and manufactured cranes, dollies, remote heads and tailor-made support for television, film and live events. Philippe Tresfon stays as managing director.", "The live homepage slider uses the line “Egripment joins Broadcast Solutions Group” and links to this story."],
        es: ["Bingen am Rhein, 9 de septiembre de 2025. Broadcast Solutions adquirió Egripment BV y su filial de alquiler Egripment Deutschland GmbH. Ambas conservan el nombre.", "Durante casi 50 años Egripment ha diseñado y fabricado grúas, dollies, cabezas remotas y soporte a medida para televisión, cine y directos. Philippe Tresfon sigue como director.", "El carrusel de la home usa la frase “Egripment joins Broadcast Solutions Group”."],
      },
    }),
    page({
      id: "news-ibc",
      group: "news",
      menu: "Egripment @ IBC Show 2026",
      image: "assets/news-ibc.jpg",
      fit: "contain",
      copy: {
        en: ["Visit Egripment in hall 12, booth 12.F20, from 11 to 14 September at IBC, RAI Amsterdam.", "The 2026 stand text on the live site covers broadcast automation, live entertainment and sports: DigiLite, the HotHead 3 and the Starcam towercam series."],
        es: ["Egripment está en el pabellón 12, stand 12.F20, del 11 al 14 de septiembre en IBC, RAI Ámsterdam.", "El texto del stand 2026 habla de automatización broadcast, entretenimiento en vivo y deporte: DigiLite, HotHead 3 y la serie Starcam."],
      },
    }),
    page({
      id: "news-starcam",
      group: "news",
      menu: "Fully IP-based Starcam towercams",
      image: "assets/news-starcam.png",
      fit: "contain",
      copy: {
        en: ["The Starcam towercam can work stand alone or in a multicontrol set up. Cabling drops when it runs via fiber or over the IP trunk of a modern broadcast camera.", "Published features: fully IP-based control, fiber or IP-trunk camera, integrated presets for the tower and remote heads, multi control of several towers, and floor or ceiling mount."],
        es: ["La Starcam puede trabajar sola o en multicontrol. El cableado baja si va por fibra o por el tronco IP de una cámara de broadcast moderna.", "Prestaciones publicadas: control totalmente IP, fibra o tronco IP, presets para la torre y las cabezas, multicontrol de varias torres, y montaje en suelo o techo."],
      },
    }),
    page({
      id: "news-all",
      group: "news",
      menu: "All news",
      items: [
        "Egripment @ IBC 2026",
        "Broadcast Solutions expands its capabilities by acquiring Egripment",
        "Fully ip-based Starcam towercams",
        "Egripment Joystick Control for Freefly Mōvi gimbals and remote heads",
        "Webinar with Zero Density and TrackMen",
        "Xtreme T10 “ARC” Compensation",
        "Egripment Slider",
        "CNN’s Super Bowl Special uses Egripment’s Augmented Reality System",
        "Xtreme T10",
        "Egripment Xtreme T10 Encoded",
        "Automation Made Simple: Working Together",
        "TDT - All in One - Remote Crane System",
        "306 Remote Head",
        "Elections in Turkey",
      ],
      copy: {
        en: ["These are the news titles in the live site menu. The three stories linked from this homepage have a short account of their own. The other titles are listed here without an invented summary."],
        es: ["Estos son los títulos del menú de noticias de la web. Las tres piezas enlazadas desde esta home tienen su propio resumen. El resto figura aquí sin un texto inventado."],
      },
    }),
    page({
      id: "about",
      group: "about",
      menu: "Company profile",
      image: "assets/slide-hq.jpg",
      copy: {
        en: ["Egripment Camera Support manufactures high-end camera support and remote broadcast systems for the broadcast and film industry. Founded in 1976, the company builds for sale and for rental.", "Egripment is found on TV and film productions, concerts and sport events worldwide. The product line includes cranes, remote heads, dollies and robotic tracking systems.", "“Solid support on every set.” These words characterise the realistic view which the company's staff has developed over a long period of practical experience. Technical designers supply television and film experience from practical work in the industry.", "The company profile timeline marks 1976 as the start, an Academy technical award for the Tulip, and a first Olympic Games in 1984. Manufacturing is based in the Netherlands. The photograph is the Nederhorst den Berg building from the live slider."],
        es: ["Egripment Camera Support fabrica sistemas de soporte de cámara y de broadcast remoto para broadcast y cine. Fundada en 1976, construye para venta y para alquiler.", "Está en producciones de televisión y cine, conciertos y deporte en todo el mundo. La gama incluye grúas, cabezas remotas, dollies y sistemas de tracking robótico.", "“Solid support on every set.” Esas palabras describen la mirada práctica del equipo. Los diseñadores aportan experiencia real de televisión y cine.", "El perfil marca 1976 como inicio, un premio técnico de la Academia por la Tulip y unos primeros Juegos en 1984. La fabricación está en los Países Bajos. La foto es el edificio de Nederhorst den Berg."],
      },
    }),
    page({
      id: "team",
      group: "about",
      menu: "Meet our team",
      image: "assets/slide-hq.jpg",
      copy: {
        en: ["The live About menu has “Meet our Team”. Public names in the 2025 acquisition story are Philippe Tresfon, who continues as CEO, and in Germany Philip von Senden (COO) and Martin Dreesbach (CTO).", "This demo does not invent staff portraits or a fuller roster."],
        es: ["El menú About de la web tiene “Meet our Team”. Los nombres públicos del anuncio de 2025 son Philippe Tresfon, que sigue como CEO, y en Alemania Philip von Senden (COO) y Martin Dreesbach (CTO).", "Esta demo no inventa retratos ni una plantilla más larga."],
      },
    }),
    page({
      id: "support",
      group: "about",
      menu: "Support",
      copy: {
        en: ["Support is an About page on the live site. For a product question, use the request form on this page or the published numbers: +31 (0) 294 25 3988 and egripment@egripment.nl.", "Sales mail published in the site header is sales@egripment.nl. The USA office mail on the contact page is egripment@egripment.com."],
        es: ["Soporte es una página de About en la web. Para una consulta use el formulario o los datos publicados: +31 (0) 294 25 3988 y egripment@egripment.nl.", "El correo de ventas del encabezado es sales@egripment.nl. El de la oficina de EE. UU. en la página de contacto es egripment@egripment.com."],
      },
    }),
    page({
      id: "events",
      group: "about",
      menu: "Events",
      image: "assets/news-ibc.jpg",
      fit: "contain",
      items: ["IBC 2026, Amsterdam — hall 12, booth 12.F20, 11–14 September, RAI", "Cabsat 2026, Dubai", "Inter BEE 2026, Tokyo", "ISE 2027, Barcelona"],
      copy: {
        en: ["Upcoming events on the live homepage are IBC 2026 in Amsterdam, Cabsat 2026 in Dubai, Inter BEE 2026 in Tokyo and ISE 2027 in Barcelona.", "Only IBC has a published booth and dates on the pages read for this demo: hall 12, booth 12.F20, 11–14 September, RAI Amsterdam. The other three are listed by name and city only."],
        es: ["Los próximos eventos de la home son IBC 2026 en Ámsterdam, Cabsat 2026 en Dubái, Inter BEE 2026 en Tokio e ISE 2027 en Barcelona.", "Solo IBC tiene stand y fechas en las páginas leídas para esta demo: pabellón 12, stand 12.F20, 11–14 de septiembre, RAI Ámsterdam. Los otros tres figuran con nombre y ciudad."],
      },
    }),
    page({
      id: "dealers",
      group: "about",
      menu: "Dealer network",
      copy: {
        en: ["The live homepage ends with “Our Dealernetwork”, a map fed by dealers.xml. This demo does not embed that map.", "Headquarters remain Machineweg 22, 1394 AV Nederhorst den Berg, Holland. Phone +31 (0) 294 25 3988. Email egripment@egripment.nl."],
        es: ["La home en vivo termina en “Our Dealernetwork”, un mapa alimentado por dealers.xml. Esta demo no incrusta ese mapa.", "La sede sigue en Machineweg 22, 1394 AV Nederhorst den Berg, Holanda. Teléfono +31 (0) 294 25 3988. Correo egripment@egripment.nl."],
      },
    }),
    page({
      id: "privacy",
      group: "about",
      menu: "Privacy",
      copy: {
        en: ["The live About menu links to a privacy page. This demo does not copy that legal text.", "The request form on this page stays in the browser. Nothing is stored or sent."],
        es: ["El menú About enlaza una página de privacidad. Esta demo no copia ese texto legal.", "El formulario de esta página se queda en el navegador. No se guarda ni se envía nada."],
      },
    }),
    page({
      id: "disclaimer",
      group: "about",
      menu: "Disclaimer",
      copy: {
        en: ["The live About menu links to a disclaimer. This demo does not copy that legal text.", "Product names and photographs belong to Egripment and are used here only to rebuild the homepage for comparison."],
        es: ["El menú About enlaza un aviso legal. Esta demo no copia ese texto.", "Los nombres y las fotos son de Egripment y se usan aquí solo para reconstruir la home y compararla."],
      },
    }),
    page({
      id: "brochures",
      group: "about",
      menu: "Brochures / leaflets",
      copy: {
        en: ["Brochures and leaflets are an About item on the live site. Product pages there offer a PDF download. This demo does not redistribute those files.", "The ranges themselves are listed under Products."],
        es: ["Folletos es una entrada de About en la web. Las fichas de producto ofrecen una descarga PDF. Esta demo no redistribuye esos archivos.", "Las gamas están en Productos."],
      },
    }),
  ];

  const byId = Object.create(null);
  PAGES.forEach((p) => {
    byId[p.id] = p;
  });

  let lang = "en";
  let currentId = "";
  let submittedName = "";
  let menuTimer = 0;

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  function t(key) {
    if (lang === "es" && I18N.es[key]) return I18N.es[key];
    const el = document.querySelector(`[data-i18n="${key}"]`);
    return el && el.dataset.i18nEn ? el.dataset.i18nEn : key;
  }

  function msg(key) {
    return (MSG[lang] || MSG.en)[key];
  }

  function setLang(next) {
    lang = next === "es" ? "es" : "en";
    document.documentElement.lang = lang;
    $$("[data-i18n]").forEach((el) => {
      if (!el.dataset.i18nEn) el.dataset.i18nEn = el.textContent.trim();
      const key = el.dataset.i18n;
      el.textContent = lang === "es" && I18N.es[key] ? I18N.es[key] : el.dataset.i18nEn;
    });
    $$("[data-i18n-placeholder]").forEach((el) => {
      if (!el.dataset.phEn) el.dataset.phEn = el.getAttribute("placeholder") || "";
      const key = el.dataset.i18nPlaceholder;
      el.setAttribute("placeholder", lang === "es" && I18N.es[key] ? I18N.es[key] : el.dataset.phEn);
    });
    $$(".lang-btn").forEach((btn) => {
      const on = btn.dataset.lang === lang;
      btn.classList.toggle("is-active", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });
    const openForm = !$("#quote-form-panel").hidden;
    const successOn = !$("#quote-success").hidden;
    if (openForm && successOn && submittedName) renderSuccess();
    if (openForm && !successOn && $("#quote-form").dataset.tried === "1") validateForm(false);
    applySearch(currentQuery(), "lang");
    if (currentId && byId[currentId]) showDetail(currentId, false);
  }

  function fillMenus() {
    const buckets = { products: [], solutions: [], rental: [], news: [], about: [] };
    PAGES.forEach((p) => {
      if (buckets[p.group]) buckets[p.group].push(p);
    });
    Object.keys(buckets).forEach((group) => {
      const panel = document.querySelector(`[data-panel="${group}"]`);
      if (!panel) return;
      panel.replaceChildren();
      if (group === "products") {
        const all = document.createElement("a");
        all.href = "#products";
        all.dataset.i18n = "menu.allProducts";
        all.textContent = "All products";
        all.className = "menu-all";
        panel.appendChild(all);
      }
      buckets[group].forEach((p) => {
        const block = document.createElement("div");
        block.className = "menu-block";
        const a = document.createElement("a");
        a.href = "#" + p.id;
        a.className = "menu-parent";
        a.textContent = p.menu;
        block.appendChild(a);
        if (p.items && p.items.length && group !== "news") {
          const ul = document.createElement("ul");
          p.items.slice(0, group === "products" ? 6 : 8).forEach((name) => {
            const li = document.createElement("li");
            const link = document.createElement("a");
            link.href = "#" + p.id;
            link.textContent = name;
            li.appendChild(link);
            ul.appendChild(li);
          });
          block.appendChild(ul);
        }
        panel.appendChild(block);
      });
    });

    const more = $("#more-solutions");
    more.replaceChildren();
    buckets.solutions.forEach((p) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = "#" + p.id;
      a.textContent = p.menu;
      li.appendChild(a);
      more.appendChild(li);
    });
  }

  function copyParagraphs(p) {
    const pack = (p.copy && (p.copy[lang] || p.copy.en)) || [];
    return pack;
  }

  function showDetail(id, scroll) {
    const p = byId[id];
    if (!p) return;
    currentId = id;
    const root = $("#detail");
    root.hidden = false;
    $("#detail-kicker").textContent = (GROUP[p.group] && GROUP[p.group][lang]) || p.group;
    $("#detail-title").textContent = p.menu;
    const body = $("#detail-body");
    body.replaceChildren();
    if (p.image) {
      const img = document.createElement("img");
      img.src = p.image;
      img.alt = "";
      img.className = p.fit === "contain" ? "detail-img contain" : "detail-img";
      body.appendChild(img);
    }
    copyParagraphs(p).forEach((text) => {
      const el = document.createElement("p");
      el.textContent = text;
      body.appendChild(el);
    });
    if (p.items && p.items.length) {
      const ul = document.createElement("ul");
      ul.className = "detail-items";
      p.items.forEach((name) => {
        const li = document.createElement("li");
        li.textContent = name;
        ul.appendChild(li);
      });
      body.appendChild(ul);
    }
    $$("[data-card]").forEach((card) => {
      card.classList.toggle("is-current", card.dataset.card === id);
    });
    if (scroll !== false) {
      root.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function hideDetail() {
    currentId = "";
    $("#detail").hidden = true;
    $$("[data-card]").forEach((card) => card.classList.remove("is-current"));
  }

  function openQuote(scroll) {
    const panel = $("#quote-form-panel");
    panel.hidden = false;
    if (scroll !== false) {
      panel.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if ($("#quote-success").hidden) {
      const name = $("#quote-name");
      if (name && document.activeElement && document.activeElement.tagName === "A") name.focus();
    }
  }

  function onHash() {
    const id = decodeURIComponent((location.hash || "").replace(/^#/, ""));
    if (!id || id === "top") {
      hideDetail();
      if (id === "top") window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (id === "quote") {
      hideDetail();
      openQuote(true);
      return;
    }
    if (byId[id]) {
      showDetail(id, true);
      return;
    }
    hideDetail();
  }

  function currentQuery() {
    return ($("#product-search") && $("#product-search").value) || "";
  }

  function searchRows() {
    const rows = [];
    PAGES.forEach((p) => {
      rows.push({
        label: p.menu,
        group: (GROUP[p.group] && GROUP[p.group][lang]) || p.group,
        href: "#" + p.id,
        hay: [p.menu, ...(p.items || []), ...copyParagraphs(p)].join(" ").toLowerCase(),
      });
      (p.items || []).forEach((item) => {
        rows.push({
          label: item,
          group: p.menu,
          href: "#" + p.id,
          hay: (item + " " + p.menu).toLowerCase(),
        });
      });
    });
    return rows;
  }

  function renderHits(container, hits, q) {
    container.replaceChildren();
    const title = document.createElement("p");
    title.className = "results-title";
    title.textContent = q ? `${msg("results")} (${hits.length})` : "";
    if (q) container.appendChild(title);
    if (!hits.length) {
      const empty = document.createElement("p");
      empty.className = "results-empty";
      empty.textContent = `${msg("nohits")} “${q}”.`;
      container.appendChild(empty);
      return;
    }
    const ul = document.createElement("ul");
    hits.slice(0, 8).forEach((hit) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = hit.href;
      const name = document.createElement("span");
      name.textContent = hit.label;
      const group = document.createElement("small");
      group.textContent = hit.group;
      a.append(name, group);
      li.appendChild(a);
      ul.appendChild(li);
    });
    container.appendChild(ul);
    if (hits.length > 8) {
      const more = document.createElement("p");
      more.className = "results-more";
      more.textContent = `+${hits.length - 8}`;
      container.appendChild(more);
    }
  }

  function applySearch(raw, source) {
    const value = raw == null ? "" : String(raw);
    const q = value.trim().toLowerCase();
    const pageInput = $("#product-search");
    const headerInput = $("#header-search");
    if (source !== "page" && pageInput.value !== value) pageInput.value = value;
    if (source !== "header" && headerInput.value !== value) headerInput.value = value;

    const cards = $$("[data-card]");
    let shown = 0;
    cards.forEach((card) => {
      const hay = (card.dataset.tags || "").toLowerCase();
      const match = !q || hay.includes(q);
      card.hidden = !match;
      if (match) shown += 1;
    });
    const empty = $("#filter-empty");
    empty.hidden = !(q && shown === 0);
    empty.textContent = lang === "es"
      ? "Ninguna categoría coincide. Pruebe con Hothead, TDT o Starcam."
      : "No categories match. Try Hothead, TDT or Starcam.";
    $("#search-clear").hidden = !q;
    const status = $("#filter-status");
    if (!q) {
      status.textContent = "";
    } else if (shown === 0) {
      status.textContent = `${msg("none")} “${raw.trim()}”.`;
    } else {
      const word = shown === 1 ? msg("category") : msg("categories");
      status.textContent = `${shown} ${word}`;
    }

    const hits = q ? searchRows().filter((row) => row.hay.includes(q)) : [];
    const seen = new Set();
    const unique = hits.filter((hit) => {
      const key = hit.href + "|" + hit.label;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
    const pageResults = $("#search-results");
    const headerResults = $("#header-search-results");
    if (q) {
      pageResults.hidden = false;
      renderHits(pageResults, unique, raw.trim());
      renderHits(headerResults, unique, raw.trim());
    } else {
      pageResults.hidden = true;
      pageResults.replaceChildren();
      headerResults.replaceChildren();
    }
  }

  function setError(field, text) {
    const input = $("#quote-" + field);
    const err = $("#err-" + field);
    err.textContent = text || "";
    input.setAttribute("aria-invalid", text ? "true" : "false");
    input.classList.toggle("is-invalid", Boolean(text));
  }

  function validateForm(focusBad) {
    const name = $("#quote-name").value.trim();
    const email = $("#quote-email").value.trim();
    const plan = $("#quote-plan").value;
    const message = $("#quote-message").value.trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
    setError("name", name.length >= 2 ? "" : msg("name"));
    setError("email", emailOk ? "" : msg("email"));
    setError("plan", plan ? "" : msg("plan"));
    setError("message", message.length >= 10 ? "" : msg("message"));
    const bad = ["name", "email", "plan", "message"].filter((field) => $("#err-" + field).textContent);
    if (focusBad && bad.length) $("#quote-" + bad[0]).focus();
    return bad.length === 0;
  }

  function renderSuccess() {
    const thanks = msg("thanks").replace(/\.$/, "");
    $("#quote-success-title").textContent = submittedName ? `${thanks}, ${submittedName}.` : msg("thanks");
    $("#quote-success-body").textContent = msg("body");
  }

  function closeDetails(except) {
    $$("header details[open], #primary-nav details[open]").forEach((d) => {
      if (d !== except) d.open = false;
    });
  }

  function closeSearch() {
    const pop = $("#search-popover");
    pop.hidden = true;
    $("#search-toggle").setAttribute("aria-expanded", "false");
  }

  function openSearch() {
    const pop = $("#search-popover");
    pop.hidden = false;
    $("#search-toggle").setAttribute("aria-expanded", "true");
    $("#header-search").value = $("#product-search").value;
    $("#header-search").focus();
  }

  function closeMenu() {
    const nav = $("#primary-nav");
    nav.classList.remove("is-open");
    nav.style.paddingTop = "";
    $("#menu-toggle").setAttribute("aria-expanded", "false");
    $("#backdrop").hidden = true;
    document.body.classList.remove("overflow-hidden");
  }

  function openMenu() {
    const nav = $("#primary-nav");
    nav.style.paddingTop = "";
    nav.classList.add("is-open");
    $("#menu-toggle").setAttribute("aria-expanded", "true");
    $("#backdrop").hidden = false;
    document.body.classList.add("overflow-hidden");
  }

  function bind() {
    $$(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => setLang(btn.dataset.lang));
    });

    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    $$("#primary-nav details").forEach((details) => {
      details.addEventListener("toggle", () => {
        if (details.open) closeDetails(details);
      });
      if (!canHover) return;
      details.addEventListener("mouseenter", () => {
        if (window.innerWidth < 1024) return;
        clearTimeout(menuTimer);
        details.open = true;
      });
      details.addEventListener("mouseleave", () => {
        if (window.innerWidth < 1024) return;
        menuTimer = setTimeout(() => {
          if (details.contains(document.activeElement)) return;
          details.open = false;
        }, 180);
      });
    });

    document.addEventListener("click", (event) => {
      if (!event.target.closest("#primary-nav details")) closeDetails(null);
      if (!event.target.closest("#search-wrap")) closeSearch();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      closeDetails(null);
      closeSearch();
      if ($("#primary-nav").classList.contains("is-open")) {
        closeMenu();
        $("#menu-toggle").focus();
      }
    });

    $("#primary-nav").addEventListener("click", (event) => {
      if (!event.target.closest("a")) return;
      closeDetails(null);
      closeMenu();
    });

    $("#menu-toggle").addEventListener("click", () => {
      if ($("#primary-nav").classList.contains("is-open")) closeMenu();
      else openMenu();
    });
    $("#menu-close").addEventListener("click", () => {
      closeMenu();
      $("#menu-toggle").focus();
    });
    $("#backdrop").addEventListener("click", closeMenu);

    $("#search-toggle").addEventListener("click", (event) => {
      event.stopPropagation();
      if ($("#search-popover").hidden) openSearch();
      else closeSearch();
    });
    $("#search-popover").addEventListener("click", (event) => {
      event.stopPropagation();
      if (event.target.closest("a")) closeSearch();
    });

    $("#header-search").addEventListener("input", (event) => {
      applySearch(event.target.value, "header");
    });
    $("#header-search-form").addEventListener("submit", (event) => {
      event.preventDefault();
      applySearch($("#header-search").value, "header");
      closeSearch();
      $("#products").scrollIntoView({ behavior: "smooth", block: "start" });
    });

    $("#product-search").addEventListener("input", (event) => {
      applySearch(event.target.value, "page");
    });
    $("#product-search-form").addEventListener("submit", (event) => {
      event.preventDefault();
      applySearch($("#product-search").value, "page");
      $("#category-grid").scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
    $("#search-clear").addEventListener("click", () => {
      applySearch("", "page");
      $("#product-search").focus();
    });

    $("#all-solutions").addEventListener("click", () => {
      const list = $("#more-solutions");
      const willOpen = list.hidden;
      list.hidden = !willOpen;
      $("#all-solutions").setAttribute("aria-expanded", willOpen ? "true" : "false");
    });

    $("#detail-close").addEventListener("click", () => {
      hideDetail();
      if (location.hash && byId[location.hash.slice(1)]) {
        history.pushState(null, "", location.pathname + location.search);
      }
    });

    $$('a[href="#quote"]').forEach((link) => {
      link.addEventListener("click", () => {
        if (location.hash === "#quote") openQuote(true);
      });
    });

    $("#quote-form").addEventListener("submit", (event) => {
      event.preventDefault();
      $("#quote-form").dataset.tried = "1";
      if (!validateForm(true)) return;
      submittedName = $("#quote-name").value.trim();
      $("#quote-form").hidden = true;
      $("#quote-success").hidden = false;
      renderSuccess();
      $("#quote-success-title").focus();
    });
    $("#quote-reset").addEventListener("click", () => {
      $("#quote-form").reset();
      $("#quote-form").hidden = false;
      $("#quote-success").hidden = true;
      $("#quote-form").dataset.tried = "";
      ["name", "email", "plan", "message"].forEach((field) => setError(field, ""));
      submittedName = "";
      $("#quote-name").focus();
    });

    window.addEventListener("hashchange", onHash);
    window.addEventListener("scroll", () => {
      $("#site-header").classList.toggle("is-stuck", window.scrollY > 8);
    }, { passive: true });
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024) closeMenu();
    });
  }

  fillMenus();
  setLang("en");
  bind();
  onHash();
})();
