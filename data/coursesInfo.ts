import { CourseInfo } from "@/types/CourseInfo";

export const coursesInfo: CourseInfo[] = [
  {
    title: "Corso su TailwindCSS v4",
    description:
      "Questo corso di Tailwind CSS è basato sull'uso moderno e corretto del framework, seguendo le best practice attuali. Imparerai a costruire interfacce rapide, coerenti e manutenibili senza CSS inutili o soluzioni improvvisate. L'obiettivo è usare Tailwind in modo professionale, capendo quando sfruttarlo al massimo e quando evitarne gli abusi.",
    length: 2.5,
    link: "/tailwindcss",
    price: 9.99,
    tags: ["Frontend Development", "Intermedio"],

    id: 1,
    disabled: false,
    image: "tailwindcss.png",
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
  },
];
