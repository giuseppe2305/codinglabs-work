import { CourseInfo } from "@/types/CourseInfo";

export const coursesInfo: CourseInfo[] = [
  {
    title: "Corso completo di TailwindCSS",
    description:
      "Questo corso di Tailwind CSS è basato sull'uso moderno e corretto del framework, seguendo le best practice attuali. Imparerai a costruire interfacce rapide, coerenti e manutenibili senza CSS inutili o soluzioni improvvisate.",
    length: 2.5,
    link: "/tailwindcss",
    buyLink:
      "https://www.udemy.com/course/tailwindcss-v4-corso-completo-in-italiano-2026/?referralCode=DF81FFB9178E81E75C2C",
    price: 9.99,
    tags: ["Frontend Development", "Intermedio"],

    id: 1,
    disabled: false,
    image: "tailwindcss.png",

    content: [
      {
        title: "Introduzione e Fondamenti",
        lessons: [
          "Introduzione al corso",
          "Cos'é TailwindCSS",
          "Approccio Utility-First",
          "Confronto con CSS e altri Frameworks",
          "Quando usare TailwindCSS (e quando no)",
        ],
      },
      {
        title: "Installazione e Configurazione",
        lessons: [
          "Introduzione",
          "Installazione con CLI",
          "Installazione con Vite",
          "Installazione con Nextjs",
          "Versioni precedenti di TailwindCSS",
        ],
      },
      {
        title: "Tipografia e Colori",
        lessons: [
          "Introduzione",
          "Come utilizzare la documentazione",
          "Tipografia e font-size",
          "Altre classi per i testi",
          "Creare colori personalizzati",
          "Introduzione ai colori",
        ],
      },
      {
        title: "Dimensioni e Spazi",
        lessons: [
          "Introduzione",
          "Lavorare con width e height",
          "Proprietá size",
          "Padding",
          "Margin",
        ],
      },
      {
        title: "Flexbox e Grid",
        lessons: [
          "Introduzione",
          "Display inline e block",
          "Flexbox",
          "Allineamento nelle flexbox",
          "Grid e grid-template-cols",
          "Grid e grid-template-rows",
          "Allineamento nelle grid",
        ],
      },
      {
        title: "Backgrounds e Gradients",
        lessons: ["Introduzione", "Background e background-color", "Gradients"],
      },
      {
        title: "Borders",
        lessons: [
          "Introduzione",
          "Border",
          "Proprietá border-radius",
          "Proprietá divide",
          "Outline e offset",
          "Proprietá ring",
        ],
      },
      {
        title: "Shadows e animazioni",
        lessons: [
          "Introduzione",
          "Creare delle ombre: shadow",
          "Applicare delle ombre ai testi: text-shadow",
          "Opacity",
          "Introduzione alle animazioni: duration",
          "Animazioni di TailwindCSS",
          "Creare animazioni personalizzate",
        ],
      },
      {
        title: "Fine del corso",
        lessons: [
          "Grazie per avermi seguito",
          "Aggiornamenti futuri per il 2026",
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
    buyLink: "/",
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
    buyLink: "/",
  },
];
