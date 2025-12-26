import { CourseInfo } from "@/types/CourseInfo";

export const coursesInfo: CourseInfo[] = [
  {
    title: "Corso completo di TailwindCSS",
    description:
      "Questo corso di Tailwind CSS è basato sull'uso moderno e corretto del framework, seguendo le best practice attuali. Imparerai a costruire interfacce rapide, coerenti e manutenibili senza CSS inutili o soluzioni improvvisate.",
    length: 2.5,
    link: "/tailwindcss",
    price: 9.99,
    tags: ["Frontend Development", "Intermedio"],

    id: 1,
    disabled: false,
    image: "tailwindcss.png",

    content: [
      {
        title: "Introduzione e Fondamenti",
        lessons: [
          "Cos’è Tailwind CSS e perché esiste",
          "Filosofia Utility-First",
          "Tailwind vs CSS tradizionale e framework CSS",
          "Quando usare e quando evitare Tailwind",
        ],
      },
      {
        title: "Installazione e Setup del Progetto",
        lessons: [
          "Installazione di Tailwind tramite CLI",
          "Integrazione con Vite e Webpack",
          "Tailwind con Next.js",
          "Panoramica del file di configurazione",
          "Content scanning e build finale",
        ],
      },
      {
        title: "Concetti Chiave delle Utility",
        lessons: [
          "Utility di layout: container, display, position",
          "Flexbox con Tailwind",
          "Grid con Tailwind",
          "Sistema di spaziatura: margin, padding, gap",
          "Dimensioni: width, height, min e max",
        ],
      },
      {
        title: "Tipografia e Colori",
        lessons: [
          "Font family e dimensioni del testo",
          "Peso del font, line-height e letter-spacing",
          "Allineamento e decorazioni del testo",
          "Sistema dei colori in Tailwind",
          "Background, gradienti e opacità",
        ],
      },
      {
        title: "Responsive Design",
        lessons: [
          "Approccio mobile-first",
          "Breakpoint e prefissi responsive",
          "Layout responsive comuni",
          "Errori frequenti nel responsive design",
        ],
      },
      {
        title: "Stati e Interazioni",
        lessons: [
          "Stati hover, focus e active",
          "Utility group e peer",
          "Transizioni e animazioni",
          "Stati disabled e accessibilità",
        ],
      },
      {
        title: "Componenti e Composizione",
        lessons: [
          "Creare componenti riutilizzabili",
          "Uso di @apply",
          "Mentalità component-based",
          "Organizzazione e leggibilità delle classi",
        ],
      },
      {
        title: "Personalizzazione e Theming",
        lessons: [
          "Estendere il tema: colori, spacing e font",
          "Utility personalizzate e plugin",
          "Dark mode",
          "Design system con Tailwind",
        ],
      },
      {
        title: "Layout Avanzati",
        lessons: [
          "Grid complesse",
          "Card e sezioni responsive",
          "Overlapping e layering",
          "Pattern UI moderni",
        ],
      },
      {
        title: "Best Practice e Performance",
        lessons: [
          "Strategie di organizzazione delle classi",
          "Evitare il class clutter",
          "Ottimizzazione della build",
          "Errori comuni da evitare",
        ],
      },
      {
        title: "Workflow Reale e Scalabilità",
        lessons: [
          "Integrazione con design system",
          "Tailwind e librerie di componenti",
          "Manutenzione di progetti grandi",
          "Scalare Tailwind in team",
        ],
      },
    ],
  },
  {
    title: "Corso JavaScript 2026",
    description:
      "Corso di JavaScript pensato per imparare JavaScript moderno, aggiornato agli standard attuali e alle best practice utilizzate nel mondo reale.",
    length: 12,
    link: "/",
    price: 40,
    tags: ["Frontend Development"],

    id: 2,
    disabled: true,
    image: "/",
    content: [],
  },
  {
    title: "Corso HTML & CSS 2026",
    description:
      "Corso di HTML5 e CSS3 con l'obiettivo di costruire interfacce solide, responsive e manutenibili, come si fa oggi nello sviluppo frontend professionale.",
    length: 12,
    link: "/",
    price: 40,
    tags: ["Frontend Development"],

    id: 3,
    disabled: true,
    image: "/",
    content: [],
  },
];
