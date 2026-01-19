import { CourseInfo } from "@/types/CourseInfo";

export const coursesInfo: CourseInfo[] = [
  {
    title: "Corso completo di TailwindCSS",
    description:
      "Questo corso di Tailwind CSS è basato sull'uso moderno e corretto del framework, seguendo le best practice attuali. Imparerai a costruire interfacce rapide, coerenti e manutenibili senza CSS inutili o soluzioni improvvisate.",
    length: 6,
    link: "/tailwindcss",
    buyLink:
      "https://www.udemy.com/course/tailwindcss-v4-corso-completo-in-italiano-2026/?referralCode=DF81FFB9178E81E75C2C",
    price: 9.99,
    tags: ["Frontend Development", "Intermedio"],
    requirements: {
      needed: ["HTML5", "CSS3"],
      suggested: ["Javascript", "Node.js"],
    },

    id: 1,
    disabled: false,
    image: "tailwindcss.png",

    content: [
      {
        title: "Sezione 1: Introduzione a TailwindCSS",
        lessons: [
          "Introduzione al Corso",
          "Cos'é TailwindCSS",
          "Confronto con CSS e altri Frameworks",
          "Quando usare TailwindCSS (e quando no)",
        ],
      },
      {
        title: "Sezione 2: Fondamenti di TailwindCSS",
        lessons: [
          "IMPORTANTE! Versioni di TailwindCSS (v3 vs v4)",
          "Approccio Utility-First",
          "Come Utilizzare la Documentazione",
        ],
      },
      {
        title: "Sezione 3: Installazione e Configurazione",
        lessons: [
          "Introduzione alla Sezione",
          "Installazione con CLI",
          "Installazione con Vite",
          "Installazione con Next.js",
          "Versioni Precedenti di TailwindCSS",
        ],
      },
      {
        title: "Sezione 4: Tipografia",
        lessons: [
          "Introduzione alla Sezione",
          "Tipografia e Font Size",
          "Altre Classi per i Testi",
          "Quiz: Test sulla Tipografia",
        ],
      },
      {
        title: "Sezione 5: Colori",
        lessons: ["Introduzione ai Colori", "Creare Colori Personalizzati"],
      },
      {
        title: "Sezione 6: Dimensioni (sizing)",
        lessons: [
          "Introduzione alla Sezione",
          "Lavorare con Width ed Height",
          "Novitá di TailwindCSS v4: Classe Size",
        ],
      },
      {
        title: "Sezione 7: Spaziatura (spacing)",
        lessons: ["Margin", "Padding", "Quiz: Test su Dimensioni e Spazi"],
      },
      {
        title: "Sezione 8: Flexbox e Grid",
        lessons: [
          "Introduzione alla Sezione",
          "Ripasso di CSS: Display Inline e Display Block",
          "Flexbox",
          "Allineamento nelle Flexbox",
          "Costruire Griglie con Grid Template Cols",
          "Costruire Griglie con Grid Template Rows",
          "Allineamento nelle Grid",
        ],
      },
      {
        title: "Sezione 9: Background e Gradients",
        lessons: [
          "Introduzione alla Sezione",
          "Background e Background Color",
          "Gradients",
        ],
      },
      {
        title: "Sezione 10: Borders",
        lessons: [
          "Introduzione alla Sezione",
          "Border",
          "Classe Border Radius",
          "Classe Divide",
          "Classi Outline ed Offset",
          "Classe Ring",
        ],
      },
      {
        title: "Sezione 11: Shadows e Animazioni",
        lessons: [
          "Introduzione alla Sezione",
          "Creare delle Ombre: Classe Shadow",
          "Applicare Ombre ai Testi: Classe Text Shadow",
          "Classe Opacity",
          "Introduzione alle Animazioni: Duration",
          "Animazioni Predefinite di TailwindCSS",
          "Creare Animazioni Personalizzate",
        ],
      },
      {
        title: "Sezione 12: Responsive Design",
        lessons: [
          "Introduzione al Responsive Design",
          "Responsive Breakpoints",
          "Breakpoints in Pratica",
        ],
      },
      {
        title: "Sezione 13: Progetto Pratico (Card Moderna)",
        lessons: [
          "Introduzione al Progetto",
          "Card: Container di Layout",
          "Card: Ombre ed Animazioni",
          "Card: Image Placeholder con Gradiente",
          "Card Header: Immagine di Profilo",
          "Card Header: Nome e Sottotitolo",
          "Card Content: Descrizione",
          "Card Content: Tags",
          "Card Footer: CTA Button",
          "Fine del Progetto e Considerazioni Finali",
        ],
      },
      {
        title: "Sezione 14: Progetto Pratico (Landing Page Moderna)",
        lessons: [
          "Introduzione al progetto",
          "Setup del Progetto",
          "Struttura e Scelte di Design",
          "Navbar: Logo",
          "Navbar: Navigazione e CTA",
          "Navbar: Hamburger Menu per Mobile",
          "Hero Section: Info Tag",
          "Hero Section: Titolo con Gradient",
          "Hero Section: Sottotitolo",
          "Hero Section: CTA Buttons",
          "Statistics Section: Statistiche",
          "Features Section: Titolo e sottotitolo",
          "Features Section: Feature Items",
          "Components Section: Titolo e Sottotitolo",
          "Components Section: Selezione delle Tabs",
          "Components Section: Cards",
          "Pricing Cards Section: Titolo e Sottotitolo",
          "Pricing Cards Section: Basic Cards",
          "Pricing Cards Section: Card in Evidenza",
          "Testimonials Section: Titolo e Sottotitolo",
          "Testimonials Section: Testimonial Card",
          "Form Section: Titolo e Sottotitolo",
          "Form Section: Input di Testo",
          "Form Section: Textarea, Checkbox e Radio Buttons",
          "Form Section: CTA",
          "Table Section: Titolo, Sottotitolo e CTA",
          "Table Section: Table",
          "Footer Section: Struttura del Footer e Links",
          "Footer Section: Copyright, Email Input e Bug Fixes",
          "Fine del Progetto e Considerazioni Finali",
        ],
      },
      {
        title: "Sezione 15: Fine del Corso",
        lessons: [
          "Grazie per Aver Seguito il Corso",
          "Aggiornamenti e Progetti Futuri per il 2026",
        ],
      },
    ],
  },

  {
    title: "AI Generativa e ChatGPT nel 2026 - Impara TUTTO DA ZERO",
    description:
      "Guida pratica 2026 per imparare da zero a usare l’AI in modo efficace, produttivo e consapevole.",
    length: 2,
    link: "/generativeai",
    buyLink:
      "https://www.udemy.com/course/ai-generativa-nel-2026-impara-ad-utilizzarla-correttamente/?referralCode=4EA1AF2A4C0BC1720EA4",
    price: 9.99,
    tags: ["AI", "Principiante"],

    id: 2,
    disabled: false,
    image: "generativeai.png",

    requirements: {
      needed: [],
      suggested: [],
    },

    content: [
      {
        title: "Sezione 1: Introduzione al Corso",
        lessons: ["Introduzione alla AI", "Introduzione al Corso"],
      },
      {
        title: "Sezione 2: Introduzione alla AI",
        lessons: [
          "AI Generativa vs AI Tradizionale",
          "Come Impara la AI",
          "Cosa Sono gli LLM (Large Language Model)",
          "Cos'è ChatGPT",
          "Il Ruolo dell'Essere Umano",
          "Perché la AI Generativa è Fondamentale Oggi",
          "Informazioni sul Corso",
        ],
      },
      {
        title: "Sezione 3: Prompt Engineering",
        lessons: [
          "Introduzione al Prompt Engineering",
          "Cos'è un Prompt",
          "Esempi di Prompts",
          "L'Importanza di un Prompt Corretto",
          "Struttura di un Prompt Efficace",
          "Esempio di un Prompt Strutturato",
          "Introduzione ai Prompts Iterativi",
          "Errori Comuni",
        ],
      },
      {
        title: "Sezione 4: Usare la AI per delle Ricerche",
        lessons: [
          "Introduzione alla AI per Ricerca e Sintesi",
          "Il Problema della Ricerca Tradizionale",
          "Il Ruolo della AI nella Ricerca",
          "Ricerca con Google vs Ricerca con AI",
          "Tipologie di Ricerche che Possiamo Effettuare",
          "Come Effettuare una Ricerca in Modo Corretto",
        ],
      },
      {
        title: "Sezione 5: Usare la AI per delle Sintesi",
        lessons: [
          "Differenza tra Sintesi e Riassunto",
          "Perché la AI è Potente nella Sintesi",
          "Quando Usare la AI per la Sintesi",
          "Tipologie di Sintesi che la AI può Fare",
          "Prompts Corretti per la Sintesi",
          "5 Esercizi per Effettuare una Sintesi con AI",
        ],
      },
    ],
  },

  {
    title: "Corso HTML & CSS 2026",
    description:
      "Corso di HTML5 e CSS3 con l'obiettivo di costruire interfacce solide, responsive e manutenibili, come si fa oggi nello sviluppo frontend professionale.",
    length: 12,
    link: "/htmlcss",
    price: 40,
    tags: ["Frontend Development"],
    requirements: {
      needed: [],
      suggested: [],
    },

    id: 3,
    disabled: true,
    image: "htmlcss.png",
    content: [],
    buyLink: "/",
  },
  {
    title: "Corso JavaScript 2026",
    description:
      "Corso di JavaScript pensato per imparare JavaScript moderno, aggiornato agli standard attuali e alle best practice utilizzate nel mondo reale.",
    length: 12,
    link: "/javascript",
    price: 40,
    tags: ["Frontend Development"],
    requirements: {
      needed: [],
      suggested: [],
    },

    id: 4,
    disabled: true,
    image: "javascript.png",
    content: [],
    buyLink: "/",
  },
  {
    title: "Corso React.js 19.2 2026",
    description:
      "Corso di React.js con l’obiettivo di costruire applicazioni frontend moderne, scalabili e manutenibili, basate su componenti riutilizzabili, gestione efficace dello stato e integrazione con API, seguendo le pratiche utilizzate oggi nello sviluppo frontend professionale.",
    length: 12,
    link: "/react",
    price: 40,
    tags: ["Frontend Development"],
    requirements: {
      needed: [],
      suggested: [],
    },

    id: 5,
    disabled: true,
    image: "react.png",
    content: [],
    buyLink: "/",
  },
  {
    title: "Corso Next.js 16 2026",
    description:
      "Corso di Next.js con l’obiettivo di costruire applicazioni web moderne, performanti e SEO-friendly, sfruttando rendering ibrido, routing avanzato, data fetching e architetture scalabili, secondo le pratiche adottate oggi nello sviluppo frontend professionale.",
    length: 12,
    link: "/nextjs",
    price: 40,
    tags: ["Frontend Development"],
    requirements: {
      needed: [],
      suggested: [],
    },

    id: 6,
    disabled: true,
    image: "nextjs.png",
    content: [],
    buyLink: "/",
  },
];
