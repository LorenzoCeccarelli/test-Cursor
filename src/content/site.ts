export const site = {
  name: "Track Academy",
  slogan: "La performance nasce dal metodo.",
  email: "track.academy.sport@gmail.com",
  pec: "trackacademy@pec.it",
  phoneFrancesco: "+39 388 822 6967",
  phoneFrancescoHref: "tel:+393888226967",
  waFrancesco: "https://wa.me/393888226967",
  phoneManola: "+39 338 321 1958",
  phoneManolaHref: "tel:+393383211958",
  waManola: "https://wa.me/393383211958",
  legalName: "",
  legalAddress: "",
  vatOrCf: "",
  previewNoIndex: true,
  universityRunning: {
    durationMonths: 12,
    priceLabel: "",
    priceNote:
      "La quota è in definizione. L’ultima indicazione promozionale e la proposta iniziale non vengono pubblicate insieme perché non coincidono. Contattaci per le condizioni aggiornate prima di qualsiasi adesione.",
  },
} as const;

export const nav = {
  primary: [
    { href: "/", label: "Home" },
    { href: "/track-academy/", label: "Track Academy" },
    {
      href: "/allenati-con-noi/",
      label: "Allenati con noi",
      children: [
        { href: "/allenati-con-noi/scuola-di-atletica/", label: "Scuola di atletica" },
        { href: "/allenati-con-noi/settore-agonistico/", label: "Settore agonistico" },
        { href: "/allenati-con-noi/running-e-atletica/", label: "Running e atletica" },
        { href: "/allenati-con-noi/coaching-online/", label: "Coaching online" },
        { href: "/allenati-con-noi/concorsi-militari/", label: "Concorsi militari" },
        { href: "/allenati-con-noi/university-running/", label: "University Running" },
        {
          href: "/allenati-con-noi/valutazione-e-preparazione-atletica/",
          label: "Valutazione e preparazione atletica",
        },
      ],
    },
    { href: "/tecnici/", label: "Tecnici" },
    {
      href: "/academy/",
      label: "Academy",
      children: [
        { href: "/academy/curiosita/", label: "Curiosità" },
        { href: "/academy/letteratura-scientifica/", label: "Letteratura scientifica" },
        { href: "/academy/view/", label: "View – Foto e video" },
        { href: "/academy/news-e-calendario/", label: "News e calendario" },
      ],
    },
    { href: "/contatti/", label: "Contatti" },
  ],
  cta: { href: "/inizia-il-tuo-percorso/", label: "Inizia il tuo percorso" },
} as const;

export const services = [
  {
    href: "/allenati-con-noi/scuola-di-atletica/",
    title: "Scuola di atletica",
    kicker: "Bambini e ragazzi",
    text: "Avviamento all’atletica attraverso gioco, capacità motorie e gesti tecnici, nel rispetto dell’età e del livello di ciascuno.",
  },
  {
    href: "/allenati-con-noi/settore-agonistico/",
    title: "Settore agonistico",
    kicker: "Competizione",
    text: "Preparazione orientata alle gare, con attenzione a mezzofondo, fondo e discipline di endurance.",
  },
  {
    href: "/allenati-con-noi/running-e-atletica/",
    title: "Running e atletica",
    kicker: "Iniziare e migliorare",
    text: "Percorsi per chi vuole iniziare a correre, acquisire continuità o alzare il proprio livello, anche senza obiettivi agonistici.",
  },
  {
    href: "/allenati-con-noi/coaching-online/",
    title: "Coaching online",
    kicker: "A distanza",
    text: "Allenamento a distanza per la corsa, in particolare mezzofondo, fondo ed endurance, con programma individualizzato.",
  },
  {
    href: "/allenati-con-noi/concorsi-militari/",
    title: "Concorsi militari",
    kicker: "Prove fisiche",
    text: "Preparazione alle prove di efficienza fisica dei concorsi militari e delle Forze dell’Ordine, senza promesse di superamento.",
  },
  {
    href: "/allenati-con-noi/university-running/",
    title: "University Running",
    kicker: "Studenti universitari",
    text: "Progetto per studenti che si avvicinano al running o già corrono, con programma individualizzato e la forza del gruppo.",
  },
  {
    href: "/allenati-con-noi/valutazione-e-preparazione-atletica/",
    title: "Valutazione e preparazione atletica",
    kicker: "Metodo",
    text: "Valutazione delle capacità motorie e della prestazione, lavoro sulla forza e programmazione in funzione degli obiettivi.",
  },
] as const;

export const methodSteps = [
  { title: "Colloquio iniziale", text: "Conosciamo esperienza, disponibilità, contesto e motivazioni." },
  { title: "Definizione degli obiettivi", text: "Chiarire dove si vuole arrivare, in tempi realistici e verificabili." },
  { title: "Valutazione del livello di partenza", text: "Osservare il punto di partenza per orientare il lavoro, non per etichettare." },
  { title: "Programmazione individualizzata", text: "Il programma tiene conto di caratteristiche, impegni e obiettivi della persona." },
  { title: "Allenamento", text: "Lavoro sul campo o a distanza, con carichi, ritmi e recuperi adeguati." },
  { title: "Monitoraggio dei progressi", text: "Raccogliere feedback e dati utili per capire cosa sta funzionando." },
  { title: "Aggiornamento del programma", text: "Adattare la preparazione quando cambiano risposta, calendario o obiettivi." },
] as const;

export const values = [
  { title: "Individualizzazione", text: "Ogni percorso parte dalla persona, non da un modello unico." },
  { title: "Continuità", text: "La prestazione si costruisce nel tempo, con costanza e aggiornamenti." },
  { title: "Inclusione", text: "Spazio per chi inizia, per chi si allena per piacere e per chi compete." },
  { title: "Collaborazione", text: "Atleti, famiglie e tecnici lavorano con ruoli chiari e rispetto reciproco." },
  { title: "Crescita sportiva", text: "Il risultato è una conseguenza del metodo, non una promessa." },
  { title: "Rigore tecnico", text: "Programmazione, evidenze e osservazione sul campo guidano le scelte." },
] as const;

export const coaches = [
  {
    slug: "francesco-lorenzo",
    name: "Francesco Lorenzo",
    title: "Allenatore nazionale FIDAL | Mezzofondo, fondo e preparazione atletica",
    phone: site.phoneFrancesco,
    phoneHref: site.phoneFrancescoHref,
    wa: site.waFrancesco,
    email: site.email,
    bio: "Laureato magistrale in Scienze dello Sport presso l’Università degli Studi di Torino con 110/110 e lode, Francesco Lorenzo integra programmazione dell’allenamento, esperienza sul campo e analisi della letteratura scientifica. Si occupa di mezzofondo, fondo, sviluppo della forza e preparazione atletica individualizzata, accompagnando atleti di differenti livelli e candidati alle prove fisiche dei concorsi militari.",
    highlights: [
      "Laurea magistrale LM-68 in Scienze dello Sport",
      "Laurea triennale in Scienze Motorie e Sportive",
      "Qualifica di allenatore nazionale FIDAL",
      "Esperienza come tecnico, preparatore e responsabile di settore presso il CUS Torino",
      "Lavoro con gruppi universitari, giovanili, agonistici e Master",
      "Preparazione per concorsi militari",
      "Programmazione della forza",
      "Valutazione e monitoraggio della prestazione",
      "Analisi dei dati e revisione della letteratura scientifica",
      "Tutorato del corso di Atletica presso l’Università degli Studi di Torino",
      "Docente di Atletica nel corso di Scienze Motorie presso la sede didattica della Casa Circondariale di Torino",
    ],
  },
  {
    slug: "manola-ponzetta",
    name: "Manola Ponzetta",
    title: "Tecnico FIDAL | Referente attività Lecce",
    phone: site.phoneManola,
    phoneHref: site.phoneManolaHref,
    wa: site.waManola,
    email: site.email,
    bio: "Con formazione ISEF e qualifica di tecnico FIDAL, Manola Ponzetta porta in Track Academy un’esperienza quindicennale riportata nei materiali di presentazione della società. Il suo lavoro è orientato alla conduzione delle attività di atletica e alla preparazione degli allievi secondo obiettivi e caratteristiche individuali.",
    highlights: [
      "Formazione ISEF (denominazione precisa del titolo da verificare sul documento originale prima della pubblicazione definitiva)",
      "Tecnico FIDAL",
      "Referente delle attività a Lecce",
      "Esperienza quindicennale riportata nei materiali di presentazione della società",
    ],
  },
] as const;

export const activities = [
  "Scuola di atletica",
  "Settore agonistico",
  "Running e atletica",
  "Coaching online",
  "Concorsi militari",
  "University Running",
  "Valutazione e preparazione atletica",
  "Altro / da definire",
] as const;

export const locations = [
  "Lecce",
  "Melissano",
  "Torino",
  "Online",
  "Da definire",
] as const;

export const faqs = [
  {
    q: "Posso iniziare senza esperienza?",
    a: "Sì. Track Academy si rivolge anche a chi inizia. Il percorso parte da un colloquio e dalla valutazione del livello di partenza, per costruire un lavoro adeguato all’esperienza e agli obiettivi.",
  },
  {
    q: "Posso partecipare senza obiettivi agonistici?",
    a: "Sì. Running e atletica, University Running e altri percorsi accolgono chi vuole iniziare, acquisire continuità o migliorare, anche senza gare. Il settore agonistico è dedicato a chi vuole prepararsi a competere.",
  },
  {
    q: "Come vengono personalizzati gli allenamenti?",
    a: "Dopo il colloquio e la definizione degli obiettivi, il programma tiene conto di esperienza, caratteristiche, impegni e disponibilità. Anche in un allenamento di gruppo distanze, ritmi, recuperi e carichi vengono individualizzati.",
  },
  {
    q: "Come funziona il gruppo agonistico?",
    a: "È uno spazio di crescita e confronto: si condividono allenamenti, impegno e appuntamenti agonistici, ciascuno con un programma adeguato a livello, specialità e obiettivi. Allenarsi insieme non significa svolgere tutti lo stesso lavoro.",
  },
  {
    q: "A chi è rivolta la Scuola di atletica?",
    a: "A bambini e ragazzi, per imparare a correre, saltare e lanciare con attività coinvolgenti e progressive. Fasce d’età, sedi, orari e quote vengono comunicati quando confermati.",
  },
  {
    q: "Come funziona il coaching online?",
    a: "Si raccolgono le informazioni iniziali, si definiscono gli obiettivi e si costruisce un programma individualizzato, con feedback, monitoraggio e aggiornamenti. Frequenza, strumenti e tempi di risposta vengono indicati in base al servizio effettivamente offerto.",
  },
  {
    q: "Che cosa comprende University Running?",
    a: "Programmi individualizzati, organizzazione del percorso sette giorni su sette, possibilità di allenarsi insieme, tesseramento FIDAL e maglia tecnica inclusa, per una durata di dodici mesi. La disponibilità settimanale non implica allenamento quotidiano obbligatorio né assistenza 24 ore su 24. La quota è in definizione: chiedi le condizioni aggiornate.",
  },
  {
    q: "Come si svolge la preparazione ai concorsi?",
    a: "Si parte da una valutazione iniziale e da una programmazione personalizzata, con allenamento delle capacità richieste, cura dell’esecuzione tecnica, simulazioni e monitoraggio. Prove e parametri dipendono dal bando: non vengono presentati come universali e non si garantisce il superamento.",
  },
  {
    q: "Quali documenti servono per iscriversi?",
    a: "I documenti richiesti dipendono dall’attività e dal tesseramento. Non chiediamo certificati medici o informazioni sanitarie nel modulo informazioni. L’elenco aggiornato viene comunicato in fase di adesione.",
  },
  {
    q: "Come funzionano tesseramento e quote?",
    a: "Richiesta di informazioni, domanda di adesione, iscrizione a un’attività e tesseramento federale sono passaggi distinti. Il tesseramento non risulta completato automaticamente dopo un pagamento. Quote e condizioni economiche vengono pubblicate quando definite.",
  },
  {
    q: "Dove si svolgono gli allenamenti?",
    a: "Le attività si organizzano tra Lecce, Melissano, Torino e, per il coaching, a distanza. Pubblichiamo indirizzi, impianti e orari soltanto quando la sede e l’attività sono confermate. La sede legale, quando indicata, non è un punto di ritrovo per gli allenamenti.",
  },
  {
    q: "Come posso parlare con un tecnico?",
    a: "Puoi scrivere a track.academy.sport@gmail.com, chiamare o usare WhatsApp. Francesco Lorenzo: +39 388 822 6967. Manola Ponzetta: +39 338 321 1958. Per comunicazioni formali: trackacademy@pec.it.",
  },
] as const;

export const literatureFilters = [
  "Corsa",
  "Forza",
  "Biomeccanica",
  "Recupero",
  "Valutazione",
  "Allenamento giovanile",
] as const;
