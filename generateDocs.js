const data = [
  {
    title: "Introduzione a JavaScript",
    articles: [
      "Cos'è JavaScript",
      "Storia ed evoluzione del linguaggio",
      "JavaScript nel web moderno",
      "ECMAScript e standardizzazione",
      "Differenze tra JavaScript e altri linguaggi",
      "Ambienti di esecuzione (Browser, Node.js, Deno, Bun)",
      "Use case principali",
      "Limitazioni e punti di forza",
    ],
  },
  {
    title: "Setup e ambiente di sviluppo",
    articles: [
      "Installazione di Node.js",
      "Editor di codice (VS Code, WebStorm, ecc.)",
      "Configurazione dell'ambiente",
      "Gestione dei pacchetti (npm, yarn, pnpm)",
      "Struttura di un progetto JavaScript",
      "Script e comandi",
      "Debugging di base",
      "Console del browser",
    ],
  },
  {
    title: "Fondamenti del linguaggio",
    articles: [
      "Sintassi di base",
      "Commenti",
      "Case sensitivity",
      "Parole riservate",
      "Tipizzazione dinamica",
      "Valori primitivi",
      "Oggetti",
      "Mutabilità e immutabilità",
    ],
  },
  {
    title: "Variabili e costanti",
    articles: [
      "var, let e const",
      "Scope delle variabili",
      "Hoisting",
      "Shadowing",
      "Best practice",
      "Naming convention",
    ],
  },
  {
    title: "Tipi di dato",
    articles: [
      "Number",
      "BigInt",
      "String",
      "Boolean",
      "Undefined",
      "Null",
      "Symbol",
      "Object",
      "typeof",
      "Conversioni di tipo",
      "Truthiness e Falsiness",
    ],
  },
  {
    title: "Operatori",
    articles: [
      "Operatori aritmetici",
      "Operatori di assegnazione",
      "Operatori di confronto",
      "Operatori logici",
      "Operatori bitwise",
      "Operatori ternari",
      "Operatori di coalescenza e optional chaining",
      "Operatori di spread e rest",
      "Precedenza degli operatori",
    ],
  },
  {
    title: "Strutture di controllo",
    articles: ["if, else", "switch", "for", "while", "do while", "break e continue", "try, catch, finally", "throw"],
  },
  {
    title: "Funzioni",
    articles: [
      "Dichiarazione di funzioni",
      "Function expression",
      "Arrow function",
      "Parametri e valori di default",
      "Rest parameters",
      "Return",
      "Scope e closure",
      "IIFE",
      "Callback",
      "Funzioni pure",
    ],
  },
  {
    title: "Oggetti",
    articles: [
      "Creazione di oggetti",
      "Proprietà e metodi",
      "this",
      "Destructuring",
      "Computed properties",
      "Getter e setter",
      "Object methods",
      "Clonazione di oggetti",
    ],
  },
  {
    title: "Array",
    articles: [
      "Creazione di array",
      "Accesso agli elementi",
      "Metodi principali",
      "map, filter, reduce",
      "forEach, find, some, every",
      "Destructuring",
      "Spread operator",
      "Array multidimensionali",
    ],
  },
  {
    title: "Stringhe",
    articles: ["Template literals", "Concatenazione", "Metodi principali", "Escape characters", "Regex con stringhe"],
  },
  {
    title: "Date e Math",
    articles: ["Oggetto Date", "Formattazione date", "Timestamp", "Oggetto Math", "Numeri casuali"],
  },
  {
    title: "Programmazione asincrona",
    articles: [
      "Event loop",
      "Callback",
      "Promise",
      "async/await",
      "Gestione degli errori asincroni",
      "Fetch API",
      "AbortController",
    ],
  },
  {
    title: "Moduli",
    articles: ["Import e export", "Default export", "Named export", "Dynamic import", "CommonJS vs ES Modules"],
  },
  {
    title: "DOM e Browser API",
    articles: [
      "Cos'è il DOM",
      "Selezione degli elementi",
      "Manipolazione del DOM",
      "Eventi",
      "Event bubbling e capturing",
      "LocalStorage e SessionStorage",
      "Cookie",
      "Navigator API",
      "Geolocation",
      "Canvas",
      "Web Storage",
      "Web Workers",
    ],
  },
  {
    title: "Classi e OOP",
    articles: [
      "Costruttori",
      "Prototipi",
      "extends",
      "super",
      "Metodi statici",
      "Incapsulamento",
      "Polimorfismo",
      "Ereditarietà",
    ],
  },
  {
    title: "Gestione degli errori",
    articles: ["Error object", "try/catch", "Error custom", "Stack trace"],
  },
  {
    title: "Performance e ottimizzazione",
    articles: ["Debounce e throttle", "Memory leak", "Profiling", "Lazy loading", "Web performance API"],
  },
  {
    title: "Testing",
    articles: ["Unit testing", "Integration testing", "Jest", "Mocha", "Test coverage"],
  },
  {
    title: "Sicurezza",
    articles: ["XSS", "CSRF", "CORS", "Content Security Policy", "Sanitizzazione input"],
  },
  {
    title: "Tooling ed ecosistema",
    articles: [
      "Bundler (Webpack, Vite, Rollup)",
      "Transpiler (Babel)",
      "Linting (ESLint)",
      "Formatter (Prettier)",
      "Task runner",
      "CI/CD",
    ],
  },
  {
    title: "Framework e librerie",
    articles: ["React", "Vue", "Angular", "Svelte", "Next.js", "Nuxt", "Express", "Fastify"],
  },
  {
    title: "Node.js",
    articles: [
      "Event-driven architecture",
      "File system",
      "HTTP module",
      "Streams",
      "Process",
      "Environment variables",
    ],
  },
  {
    title: "Best practice e pattern",
    articles: ["Clean code", "Design pattern", "Modularizzazione", "Immutabilità", "Functional programming"],
  },
];
const fs = require("fs");
const path = require("path");

const slugify = (str) =>
  str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const pad = (n) => String(n).padStart(2, "0");

const docsDir = path.join(process.cwd(), "docs");

if (!fs.existsSync(docsDir)) fs.mkdirSync(docsDir);

data.forEach((chapter, cIndex) => {
  const chapterIndex = pad(cIndex + 1);
  const chapterSlug = slugify(chapter.title);
  const chapterDir = path.join(docsDir, `${chapterIndex}-${chapterSlug}`);

  fs.mkdirSync(chapterDir, { recursive: true });

  chapter.articles.forEach((article, aIndex) => {
    const articleIndex = pad(aIndex + 1);
    const articleSlug = slugify(article);
    const articleDir = path.join(chapterDir, `${articleIndex}-${articleSlug}`);

    fs.mkdirSync(articleDir, { recursive: true });

    const mdxContent = `# ${article}

In arrivo
`;

    fs.writeFileSync(path.join(articleDir, "page.mdx"), mdxContent, "utf8");
  });
});

console.log("Cartella docs generata con successo.");
