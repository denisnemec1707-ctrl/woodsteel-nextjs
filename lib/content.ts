// Central content + constants for the WoodSteel site.

export const SITE = {
  name: "WoodSteel.sk",
  url: "https://woodsteel.sk",
  phone: "+421 904 473 111",
  phoneHref: "tel:+421904473111",
  email: "info@woodsteel.sk",
  whatsapp:
    "https://wa.me/421904473111?text=Dobr%C3%BD%20de%C5%88%2C%20m%C3%A1m%20z%C3%A1ujem%20o%20cenov%C3%BA%20pon%C3%BAku.",
  instagram: "https://www.instagram.com/woodsteelsk/",
  location: "Rovinka, okres Senec",
};

const U = "https://woodsteel.sk/wp-content/uploads";
export const IMAGES = {
  logo: `${U}/2023/09/woodsteel-weblogo.png`,
  zimneZahrady: `${U}/2025/07/zimne_zahrady.jpg`,
  pergoly: `${U}/2025/07/pergoly.jpg`,
  zasklenie: `${U}/2024/11/zasklenie-teras.jpg`,
  pristresok: `${U}/2025/09/pristresok-na-auto3.jpg`,
  pristresok2: `${U}/2025/09/pristresok-na-auto.jpg`,
  hlinikZZ: `${U}/2024/10/hlinikova-zimna-zahrada.jpg`,
  hlinikZZ2: `${U}/2025/01/hlinikova-zimna-zahrada2.jpg`,
  drevoZZ: `${U}/2024/11/drevena-zimna-zahrada5.jpg`,
  drevoZZ2: `${U}/2024/11/drevena-zimna-zahrada3.jpg`,
  hlinikPergola: `${U}/2024/11/hlinikova-pergola4.jpg`,
  hlinikPergola2: `${U}/2024/11/hlinikova-pergola3.jpg`,
  drevoPergola: `${U}/2024/10/drevena-pergola.jpg`,
  drevoPergola2: `${U}/2024/11/pergola-drevena3.jpg`,
  blogZZ: `${U}/2024/11/zimna-zahrada-blog.jpg`,
  posSystem: `${U}/2024/10/posuvny-ramovy-system.jpg`,
};

export const NAV = [
  { label: "Pergoly", href: "/pergoly/" },
  { label: "Zimné záhrady", href: "/zimne-zahrady/" },
  { label: "Zasklenie terás", href: "/zasklenie-teras/" },
  { label: "Realizácie", href: "/realizacie/" },
  { label: "Články", href: "/clanky/" },
  { label: "O nás", href: "/o-nas/" },
  { label: "Kontakt", href: "/kontakt/" },
];

export const PRODUCTS = [
  {
    href: "/zimne-zahrady/",
    title: "Zimné záhrady",
    tag: "Hliník · Drevo",
    text: "Teplo a svetlo po celý rok. Ideálny priestor na oddych aj rodinné stretnutia.",
    image: IMAGES.zimneZahrady,
  },
  {
    href: "/pergoly/",
    title: "Pergoly",
    tag: "Hliník · Drevo",
    text: "Príjemný tieň a útulný kútik na relax vonku. Krásny doplnok každej záhrady.",
    image: IMAGES.pergoly,
  },
  {
    href: "/zasklenie-teras/",
    title: "Zasklenie terás",
    tag: "Rámové · Bezrámové",
    text: "Ochrana pred vetrom a dažďom. Moderné posuvné systémy s dlhou životnosťou.",
    image: IMAGES.zasklenie,
  },
  {
    href: "/pergoly/pristresky-na-auto/",
    title: "Prístrešky na auto",
    tag: "Hliník · Drevo",
    text: "Spoľahlivá ochrana vozidla, ktorá ladí s architektúrou vášho domu.",
    image: IMAGES.pristresok,
  },
];

export type Article = {
  slug: string;
  title: string; // full "X - WoodSteel.sk"
  h1: string;
  excerpt: string;
  image: string;
};

export const ARTICLES: Article[] = [
  { slug: "ako-si-vybrat-zimnu-zahradu", title: "Ako si vybrať zimnú záhradu? - WoodSteel.sk", h1: "Ako si vybrať zimnú záhradu?", excerpt: "Sezónna alebo celoročná? Prehľad hlavných rozdielov, ktorý vám pomôže pri rozhodovaní.", image: IMAGES.blogZZ },
  { slug: "zimna-zahrada-alebo-pergola-co-je-vhodnejsie", title: "Zimná záhrada alebo pergola – čo je vhodnejšie? - WoodSteel.sk", h1: "Zimná záhrada alebo pergola – čo je vhodnejšie?", excerpt: "Porovnanie dvoch najobľúbenejších záhradných stavieb podľa využitia, ceny a komfortu.", image: IMAGES.hlinikZZ },
  { slug: "premena-terasy-na-zimnu-zahradu", title: "Premena terasy na zimnú záhradu - WoodSteel.sk", h1: "Premena terasy na zimnú záhradu", excerpt: "Ako z bežnej terasy vznikne plnohodnotný priestor využiteľný počas celého roka.", image: IMAGES.drevoZZ },
  { slug: "zimna-zahrada-ako-investicia", title: "Zimná záhrada ako investícia - WoodSteel.sk", h1: "Zimná záhrada ako investícia", excerpt: "Prečo zimná záhrada zvyšuje hodnotu nehnuteľnosti a komfort bývania.", image: IMAGES.hlinikZZ2 },
  { slug: "ako-vyuzit-zimnu-zahradu", title: "Ako využiť zimnú záhradu - WoodSteel.sk", h1: "Ako využiť zimnú záhradu", excerpt: "Obývačka, pracovňa, jedáleň či wellness — inšpirácie na využitie zimnej záhrady.", image: IMAGES.zimneZahrady },
  { slug: "zasklenie-terasy-a-jej-vyhody", title: "Zasklenie terasy a jej výhody - WoodSteel.sk", h1: "Zasklenie terasy a jej výhody", excerpt: "Ochrana pred počasím, predĺženie sezóny a moderný vzhľad — výhody zasklenia.", image: IMAGES.zasklenie },
  { slug: "poistenie-zimnej-zahrady", title: "Poistenie zimnej záhrady - WoodSteel.sk", h1: "Poistenie zimnej záhrady", excerpt: "Na čo myslieť pri poistení zimnej záhrady ako súčasti nehnuteľnosti.", image: IMAGES.drevoZZ2 },
  { slug: "ako-vyuzit-pergolu-naplno-pocas-celeho-roka", title: "Ako využiť pergolu naplno počas celého roka - WoodSteel.sk", h1: "Ako využiť pergolu naplno počas celého roka", excerpt: "Tienenie, zasklenie, LED osvetlenie a kúrenie — pergola použiteľná po celý rok.", image: IMAGES.hlinikPergola },
  { slug: "ako-zladit-pergolu-alebo-zimnu-zahradu", title: "Ako zladiť pergolu alebo zimnú záhradu s domom - WoodSteel.sk", h1: "Ako zladiť pergolu alebo zimnú záhradu s domom", excerpt: "Materiály, farby a línie, ktoré dokonale prepoja stavbu s architektúrou domu.", image: IMAGES.drevoPergola },
  { slug: "udrzba-hlinikovej-pergoly", title: "Údržba hliníkovej pergoly - WoodSteel.sk", h1: "Údržba hliníkovej pergoly", excerpt: "Jednoduchá údržba, vďaka ktorej vám hliníková pergola vydrží desaťročia.", image: IMAGES.hlinikPergola2 },
  { slug: "home-office-pod-pergolou-praca-na-cerstvom-vzduchu-bez-kompromisov", title: "Home office pod pergolou - WoodSteel.sk", h1: "Home office pod pergolou: práca na čerstvom vzduchu bez kompromisov", excerpt: "Ako si vytvoriť príjemnú a produktívnu vonkajšiu pracovňu pod pergolou.", image: IMAGES.hlinikPergola },
  { slug: "ako-spravne-kotvit-pergolu-do-fasady-domu", title: "Ako správne kotviť pergolu do fasády domu - WoodSteel.sk", h1: "Ako správne kotviť pergolu do fasády domu", excerpt: "Na čo dbať pri kotvení pergoly, aby bola pevná, bezpečná a bez tepelných mostov.", image: IMAGES.drevoPergola2 },
];

export type PageContent = {
  metaTitle: string;
  metaDesc: string;
  eyebrow: string;
  h1: string;
  lead: string;
  image: string;
  intro: string[];
  bullets?: { title: string; text: string }[];
  gallery?: string[];
  cta?: boolean;
};

const QUOTE_CTA = true;

export const PAGES: Record<string, PageContent> = {
  "/pergoly/": {
    metaTitle: "Pergoly - WoodSteel.sk",
    metaDesc: "Hliníkové a drevené pergoly na mieru. Tienenie, zasklenie aj LED osvetlenie — od návrhu po montáž na celom Slovensku.",
    eyebrow: "Pergoly",
    h1: "Pergoly na mieru z hliníka aj dreva",
    lead: "Príjemný tieň, útulný priestor na relax a krásny doplnok každej záhrady.",
    image: IMAGES.pergoly,
    intro: [
      "Pergola predĺži sezónu na vašej terase a vytvorí príjemné miesto na oddych chránené pred slnkom aj dažďom. Vyrobíme ju presne podľa vášho priestoru a predstáv — v hliníkovom alebo drevenom prevedení.",
      "K pergole vieme doplniť bočné zasklenie, tieniace rolety, žalúzie či LED osvetlenie, aby ste ju využili naplno počas celého roka.",
    ],
    bullets: [
      { title: "Hliníkové pergoly", text: "Odolné, bezúdržbové, s tenkými profilmi a moderným dizajnom na desaťročia." },
      { title: "Drevené pergoly", text: "Prirodzená atmosféra a nadčasový vzhľad, ktorý dotvára záhradu." },
      { title: "Prístrešky na auto", text: "Spoľahlivá ochrana vozidla zladená s architektúrou domu." },
    ],
    gallery: [IMAGES.hlinikPergola, IMAGES.drevoPergola, IMAGES.hlinikPergola2, IMAGES.drevoPergola2],
    cta: QUOTE_CTA,
  },
  "/pergoly/hlinikove-pergoly/": {
    metaTitle: "Hliníkové pergoly - WoodSteel.sk",
    metaDesc: "Moderné hliníkové pergoly na mieru — odolné voči počasiu, bezúdržbové, s čistými líniami a dlhou životnosťou.",
    eyebrow: "Pergoly · Hliník",
    h1: "Hliníkové pergoly",
    lead: "Moderný dizajn a odolnosť bez nutnosti údržby.",
    image: IMAGES.hlinikPergola,
    intro: [
      "Hliníková pergola od WoodSteel.sk je elegantné a funkčné riešenie pre váš vonkajší priestor. Hliník je známy svojou odolnosťou voči poveternostným podmienkam, takže pergola vydrží dlhodobo bez údržby.",
      "Tenké profily a čisté línie dodajú vašej terase moderný vzhľad. Pergolu vyrobíme na mieru a doplníme o tienenie, zasklenie či osvetlenie podľa vašich potrieb.",
    ],
    gallery: [IMAGES.hlinikPergola, IMAGES.hlinikPergola2, IMAGES.posSystem],
    cta: QUOTE_CTA,
  },
  "/pergoly/drevene-pergoly/": {
    metaTitle: "Drevené pergoly - WoodSteel.sk",
    metaDesc: "Drevené pergoly na mieru s prirodzenou atmosférou a nadčasovým vzhľadom. Kvalitné materiály a precízne spracovanie.",
    eyebrow: "Pergoly · Drevo",
    h1: "Drevené pergoly",
    lead: "Prirodzená atmosféra a teplý, nadčasový vzhľad.",
    image: IMAGES.drevoPergola,
    intro: [
      "Drevená pergola dodá vašej záhrade útulnosť a prirodzený charakter. Je ideálna pre tých, ktorí majú radi teplý vzhľad dreva a prepojenie s prírodou.",
      "Používame kvalitné, odborníkmi preverené materiály, aby pergola spĺňala najvyššie nároky na kvalitu, estetiku aj životnosť.",
    ],
    gallery: [IMAGES.drevoPergola, IMAGES.drevoPergola2],
    cta: QUOTE_CTA,
  },
  "/pergoly/pristresky-na-auto/": {
    metaTitle: "Prístrešky na auto - WoodSteel.sk",
    metaDesc: "Prístrešky na auto na mieru z hliníka aj dreva. Spoľahlivá ochrana vozidla, ktorá ladí s vaším domom.",
    eyebrow: "Pergoly · Prístrešky",
    h1: "Prístrešky na auto",
    lead: "Spoľahlivá ochrana vozidla v elegantnom prevedení.",
    image: IMAGES.pristresok,
    intro: [
      "Prístrešok na auto ochráni vaše vozidlo pred slnkom, dažďom aj snehom. Navrhneme ho tak, aby dokonale ladil s architektúrou vášho domu a okolia.",
      "Vyberte si z hliníkového alebo dreveného prevedenia — obe ponúkajú dlhú životnosť a precízne spracovanie.",
    ],
    gallery: [IMAGES.pristresok, IMAGES.pristresok2],
    cta: QUOTE_CTA,
  },
  "/zimne-zahrady/": {
    metaTitle: "Zimné záhrady - WoodSteel.sk",
    metaDesc: "Zimné záhrady na mieru z hliníka aj dreva. Teplo a svetlo po celý rok — od návrhu po montáž na celom Slovensku.",
    eyebrow: "Zimné záhrady",
    h1: "Zimné záhrady na mieru",
    lead: "Predĺžte si sezónu na terase a získajte priestor využiteľný po celý rok.",
    image: IMAGES.zimneZahrady,
    intro: [
      "Zimná záhrada elegantne a funkčne prepojí interiér s exteriérom, rozšíri obytný priestor a umožní vám využívať terasu aj v nepriaznivom počasí — bez narušenia estetiky domu.",
      "Vyrobíme ju na mieru v hliníkovom alebo drevenom prevedení, ako sezónnu alebo plne izolovanú celoročnú zimnú záhradu.",
    ],
    bullets: [
      { title: "Hliníkové zimné záhrady", text: "Odolnosť voči počasiu, moderný vzhľad a minimálna údržba." },
      { title: "Drevené zimné záhrady", text: "Teplá, prirodzená atmosféra a nadčasový charakter." },
      { title: "Posuvné systémy", text: "Kvalitné rámové aj bezrámové zasklenia s dlhou životnosťou." },
    ],
    gallery: [IMAGES.hlinikZZ, IMAGES.drevoZZ, IMAGES.hlinikZZ2, IMAGES.drevoZZ2],
    cta: QUOTE_CTA,
  },
  "/zimne-zahrady/hlinikove-zimne-zahrady/": {
    metaTitle: "Hliníkové zimné záhrady - WoodSteel.sk",
    metaDesc: "Hliníkové zimné záhrady na mieru — elegantné, odolné a takmer bezúdržbové riešenie pre váš vonkajší priestor.",
    eyebrow: "Zimné záhrady · Hliník",
    h1: "Hliníkové zimné záhrady",
    lead: "Elegantné a funkčné riešenie s dlhou životnosťou.",
    image: IMAGES.hlinikZZ,
    intro: [
      "Hliníková zimná záhrada od WoodSteel.sk poskytne elegantné a funkčné riešenie pre váš vonkajší priestor s vysokou kvalitou spracovania a odolnosťou voči poveternostným podmienkam.",
      "Hliník nevyžaduje takmer žiadnu údržbu, takže zimná záhrada vydrží dlhodobo. Naši špecialisti vám radi pomôžu s výberom a vypracujú cenovú ponuku na mieru.",
    ],
    gallery: [IMAGES.hlinikZZ, IMAGES.hlinikZZ2, IMAGES.posSystem],
    cta: QUOTE_CTA,
  },
  "/zimne-zahrady/drevene-zimne-zahrady/": {
    metaTitle: "Drevené zimné záhrady - WoodSteel.sk",
    metaDesc: "Drevené zimné záhrady na mieru s prirodzenou atmosférou a nadčasovým vzhľadom. Kvalitné materiály a precízne spracovanie.",
    eyebrow: "Zimné záhrady · Drevo",
    h1: "Drevené zimné záhrady",
    lead: "Prirodzená atmosféra a teplý, nadčasový vzhľad.",
    image: IMAGES.drevoZZ,
    intro: [
      "Drevená zimná záhrada vytvorí útulný priestor s prirodzeným charakterom dreva. Je skvelou voľbou pre milovníkov teplých materiálov a prepojenia s prírodou.",
      "Vyrobíme ju na mieru z preverených materiálov, s dôrazom na detail a dlhú životnosť.",
    ],
    gallery: [IMAGES.drevoZZ, IMAGES.drevoZZ2],
    cta: QUOTE_CTA,
  },
  "/zasklenie-teras/": {
    metaTitle: "Zasklenie terás - WoodSteel.sk",
    metaDesc: "Zasklenie terás na mieru — rámové aj bezrámové posuvné systémy. Ochrana pred vetrom a dažďom s dlhou životnosťou.",
    eyebrow: "Zasklenie terás",
    h1: "Zasklenie terás",
    lead: "Ochrana pred vetrom a dažďom a predĺženie sezóny na vašej terase.",
    image: IMAGES.zasklenie,
    intro: [
      "Zasklenie terasy od WoodSteel.sk poskytne elegantné a funkčné riešenie pre váš vonkajší priestor, ochráni vás pred vetrom, dažďom aj prachom a predĺži využiteľnosť terasy.",
      "Ponúkame moderné rámové aj bezrámové posuvné systémy s vysokou kvalitou spracovania a dlhou životnosťou — všetko na mieru.",
    ],
    gallery: [IMAGES.zasklenie, IMAGES.posSystem],
    cta: QUOTE_CTA,
  },
  "/realizacie/": {
    metaTitle: "Realizácie - WoodSteel.sk",
    metaDesc: "Výber z dokončených realizácií WoodSteel — zimné záhrady, pergoly, zasklenia a prístrešky z dreva aj hliníka.",
    eyebrow: "Realizácie",
    h1: "Naše realizácie",
    lead: "Výber z dokončených projektov z dreva aj hliníka.",
    image: IMAGES.hlinikZZ,
    intro: [
      "Pozrite si výber z našich realizácií. Každá stavba je navrhnutá a vyrobená na mieru presne podľa priestoru a predstáv zákazníka.",
    ],
    gallery: [IMAGES.hlinikZZ, IMAGES.hlinikPergola, IMAGES.drevoZZ, IMAGES.drevoPergola, IMAGES.pristresok, IMAGES.hlinikZZ2, IMAGES.hlinikPergola2, IMAGES.drevoZZ2, IMAGES.drevoPergola2, IMAGES.pristresok2],
    cta: QUOTE_CTA,
  },
  "/realizacie/realizacie-hlinikove-pergoly/": {
    metaTitle: "Realizácie – hliníkové pergoly - WoodSteel.sk",
    metaDesc: "Galéria realizácií hliníkových pergol na mieru od WoodSteel.sk.",
    eyebrow: "Realizácie",
    h1: "Realizácie – hliníkové pergoly",
    lead: "Dokončené hliníkové pergoly z našej dielne.",
    image: IMAGES.hlinikPergola,
    intro: ["Výber realizácií hliníkových pergol na mieru."],
    gallery: [IMAGES.hlinikPergola, IMAGES.hlinikPergola2],
    cta: QUOTE_CTA,
  },
  "/realizacie/realizacie-drevene-pergoly/": {
    metaTitle: "Realizácie – drevené pergoly - WoodSteel.sk",
    metaDesc: "Galéria realizácií drevených pergol na mieru od WoodSteel.sk.",
    eyebrow: "Realizácie",
    h1: "Realizácie – drevené pergoly",
    lead: "Dokončené drevené pergoly z našej dielne.",
    image: IMAGES.drevoPergola,
    intro: ["Výber realizácií drevených pergol na mieru."],
    gallery: [IMAGES.drevoPergola, IMAGES.drevoPergola2],
    cta: QUOTE_CTA,
  },
  "/realizacie/realizacie-hlinikove-zimne-zahrady/": {
    metaTitle: "Realizácie – hliníkové zimné záhrady - WoodSteel.sk",
    metaDesc: "Galéria realizácií hliníkových zimných záhrad na mieru od WoodSteel.sk.",
    eyebrow: "Realizácie",
    h1: "Realizácie – hliníkové zimné záhrady",
    lead: "Dokončené hliníkové zimné záhrady z našej dielne.",
    image: IMAGES.hlinikZZ,
    intro: ["Výber realizácií hliníkových zimných záhrad na mieru."],
    gallery: [IMAGES.hlinikZZ, IMAGES.hlinikZZ2],
    cta: QUOTE_CTA,
  },
  "/realizacie/realizacie-drevene-zimne-zahrady/": {
    metaTitle: "Realizácie – drevené zimné záhrady - WoodSteel.sk",
    metaDesc: "Galéria realizácií drevených zimných záhrad na mieru od WoodSteel.sk.",
    eyebrow: "Realizácie",
    h1: "Realizácie – drevené zimné záhrady",
    lead: "Dokončené drevené zimné záhrady z našej dielne.",
    image: IMAGES.drevoZZ,
    intro: ["Výber realizácií drevených zimných záhrad na mieru."],
    gallery: [IMAGES.drevoZZ, IMAGES.drevoZZ2],
    cta: QUOTE_CTA,
  },
  "/realizacie/realizacie-pristresky-na-auto/": {
    metaTitle: "Realizácie – prístrešky na auto - WoodSteel.sk",
    metaDesc: "Galéria realizácií prístreškov na auto na mieru od WoodSteel.sk.",
    eyebrow: "Realizácie",
    h1: "Realizácie – prístrešky na auto",
    lead: "Dokončené prístrešky na auto z našej dielne.",
    image: IMAGES.pristresok,
    intro: ["Výber realizácií prístreškov na auto na mieru."],
    gallery: [IMAGES.pristresok, IMAGES.pristresok2],
    cta: QUOTE_CTA,
  },
  "/o-nas/": {
    metaTitle: "O nás - WoodSteel.sk",
    metaDesc: "WoodSteel je slovenská firma zameraná na realizácie exteriérových stavieb z dreva a hliníka — od návrhu po montáž.",
    eyebrow: "Kto sme",
    h1: "Slovenská firma s vášňou pre detail",
    lead: "Realizácie stavebných častí exteriéru z dreva a hliníka.",
    image: IMAGES.hlinikZZ,
    intro: [
      "Sme slovenská spoločnosť zameraná na realizácie stavebných častí exteriéru z dreva a hliníka. Klientovi poskytujeme komplexné služby od návrhu projektu až po realizáciu stavby.",
      "So zákazníkmi vždy jednáme profesionálne, s úctou a rešpektom. Naším cieľom je poskytnúť aj tomu najnáročnejšiemu zákazníkovi záhradnú stavbu na mieru. Materiály, ktoré ponúkame, sú odborníkmi preverené, aby poskytli maximálnu kvalitu a spokojnosť.",
    ],
    bullets: [
      { title: "Branislav Kmec — zakladateľ", text: "„Moja vízia je napredovať, držať krok s trendmi a zároveň si zachovať ľudský, proklientský prístup.“" },
      { title: "Denis Nemec — zakladateľ", text: "„Mojou prioritou je, aby sme zákazníkom doručovali čo najvyššiu hodnotu prístupom, kvalitou a precíznosťou.“" },
    ],
    cta: QUOTE_CTA,
  },
  "/kontakt/": {
    metaTitle: "Kontakt - WoodSteel.sk",
    metaDesc: "Kontaktujte WoodSteel — telefón +421 904 473 111, e-mail info@woodsteel.sk. Pôsobíme na celom Slovensku, showroom v Rovinke.",
    eyebrow: "Kontakt",
    h1: "Povedzte nám o svojom projekte",
    lead: "Napíšte nám alebo zavolajte — radi vám poradíme a vypracujeme cenovú ponuku na mieru.",
    image: IMAGES.zimneZahrady,
    intro: [
      "Telefón: +421 904 473 111",
      "E-mail: info@woodsteel.sk",
      "Pôsobnosť: celé Slovensko · Showroom: Rovinka, okres Senec",
    ],
    cta: false,
  },
  "/showroom/": {
    metaTitle: "Showroom - WoodSteel.sk",
    metaDesc: "Navštívte showroom WoodSteel v Rovinke pri Bratislave a pozrite si naše riešenia naživo.",
    eyebrow: "Showroom",
    h1: "Navštívte náš showroom",
    lead: "Pozrite si naše zimné záhrady, pergoly a zasklenia naživo.",
    image: IMAGES.hlinikZZ2,
    intro: [
      "Náš showroom nájdete v obci Rovinka v okrese Senec, len kúsok od Bratislavy. Radi vám naživo ukážeme materiály, profily aj možnosti zasklenia.",
      "Termín návštevy si dohodnite vopred telefonicky na +421 904 473 111.",
    ],
    cta: QUOTE_CTA,
  },
  "/akcna-cenova-ponuka/": {
    metaTitle: "Akčná cenová ponuka - WoodSteel.sk",
    metaDesc: "Vyžiadajte si nezáväznú akčnú cenovú ponuku na zimnú záhradu, pergolu, zasklenie terasy alebo prístrešok na auto.",
    eyebrow: "Cenová ponuka",
    h1: "Akčná cenová ponuka",
    lead: "Získajte nezáväznú cenovú ponuku na mieru — ozveme sa vám spravidla do 24 hodín.",
    image: IMAGES.pergoly,
    intro: [
      "Vyplňte krátky formulár alebo nám zavolajte a my vám pripravíme cenovú ponuku presne pre váš priestor a predstavu — úplne nezáväzne.",
    ],
    cta: false,
  },
  "/na-stiahnutie/": {
    metaTitle: "Na stiahnutie - WoodSteel.sk",
    metaDesc: "Katalóg a materiály na stiahnutie od WoodSteel.sk.",
    eyebrow: "Na stiahnutie",
    h1: "Na stiahnutie",
    lead: "Katalóg a dokumenty na stiahnutie.",
    image: IMAGES.zasklenie,
    intro: [
      "Pripravujeme pre vás katalóg 2026 s prehľadom produktov, materiálov a inšpirácií. Ozvite sa nám a radi vám ho pošleme na e-mail.",
    ],
    cta: QUOTE_CTA,
  },
  "/ochrana-osobnych-udajov/": {
    metaTitle: "Ochrana osobných údajov - WoodSteel.sk",
    metaDesc: "Zásady ochrany osobných údajov a používania súborov cookie na webe WoodSteel.sk.",
    eyebrow: "GDPR",
    h1: "Ochrana osobných údajov",
    lead: "Ako spracúvame vaše osobné údaje a používame súbory cookie.",
    image: IMAGES.drevoZZ,
    intro: [
      "Vaše súkromie berieme vážne. Osobné údaje (meno, telefón, e-mail), ktoré nám poskytnete prostredníctvom kontaktného formulára, spracúvame výhradne za účelom vybavenia vašej požiadavky a vypracovania cenovej ponuky.",
      "Údaje neposkytujeme tretím stranám na marketingové účely. Web používa súbory cookie na meranie návštevnosti a zlepšovanie obsahu — analytické a marketingové cookie sa aktivujú až po vašom súhlase cez cookie lištu.",
      "Súhlas s cookie môžete kedykoľvek zmeniť alebo odvolať. V prípade otázok ohľadom spracovania osobných údajov nás kontaktujte na info@woodsteel.sk.",
    ],
    cta: false,
  },
};
