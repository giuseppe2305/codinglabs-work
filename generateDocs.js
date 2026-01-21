const data = [
  {
    title: "Introduzione a React",
    articles: [
      "Cos'è React e perché usarlo",
      "Storia ed evoluzione di React",
      "Filosofia di React",
      "React vs altre librerie e framework",
      "Quando usare React",
      "Architettura di base",
      "Virtual DOM",
      "Component-based UI",
      "Single Page Application (SPA)",
      "Ecosistema React",
    ],
  },
  {
    title: "Prerequisiti JavaScript",
    articles: [
      "ES6+ overview",
      "Arrow functions",
      "Destructuring",
      "Spread e Rest operator",
      "Template literals",
      "Modules (import/export)",
      "Promises e async/await",
      "Array methods (map, filter, reduce)",
      "Immutabilità",
      "Closures",
    ],
  },
  {
    title: "Ambiente di sviluppo",
    articles: [
      "Node.js e npm",
      "Creare un progetto con Vite",
      "Creare un progetto con Create React App",
      "Struttura del progetto",
      "Modalità di sviluppo e produzione",
      "Hot Reload",
      "Gestione variabili d'ambiente",
      "Configurazione ESLint e Prettier",
      "Git e versionamento",
    ],
  },
  {
    title: "JSX",
    articles: [
      "Cos'è JSX",
      "Sintassi JSX",
      "Espressioni in JSX",
      "Attributi e className",
      "Commenti in JSX",
      "Condizioni in JSX",
      "Liste e key",
      "Fragment",
      "JSX e sicurezza (XSS)",
    ],
  },
  {
    title: "Componenti",
    articles: [
      "Cos'è un componente",
      "Componenti funzionali",
      "Componenti di classe (legacy)",
      "Props",
      "State",
      "One-way data flow",
      "Controlled vs Uncontrolled components",
      "Component composition",
      "Presentational vs Container components",
      "Component lifecycle (legacy)",
    ],
  },
  {
    title: "Hooks",
    articles: [
      "Introduzione agli Hooks",
      "useState",
      "useEffect",
      "useContext",
      "useRef",
      "useMemo",
      "useCallback",
      "useReducer",
      "Custom Hooks",
      "Regole degli Hooks",
    ],
  },
  {
    title: "Gestione degli eventi",
    articles: [
      "Event handling in React",
      "Synthetic events",
      "Passare parametri agli eventi",
      "Binding degli eventi",
      "Event bubbling",
      "PreventDefault e StopPropagation",
    ],
  },
  {
    title: "Rendering e aggiornamenti",
    articles: [
      "Rendering iniziale",
      "Re-rendering",
      "Reconciliazione",
      "Keys e performance",
      "Conditional rendering",
      "Portals",
      "Lazy loading",
      "Suspense",
    ],
  },
  {
    title: "Routing",
    articles: [
      "Introduzione al routing",
      "React Router",
      "BrowserRouter e HashRouter",
      "Route e Link",
      "Dynamic routes",
      "Nested routes",
      "Protected routes",
      "404 e fallback",
    ],
  },
  {
    title: "Gestione dello stato",
    articles: [
      "State locale",
      "Lifting state up",
      "Prop drilling",
      "Context API",
      "Redux",
      "Redux Toolkit",
      "Zustand",
      "Recoil",
      "Jotai",
      "State server vs client",
    ],
  },
  {
    title: "Form e validazione",
    articles: [
      "Form controllati",
      "Gestione input",
      "Validazione manuale",
      "Formik",
      "React Hook Form",
      "Gestione errori",
      "Submit e reset",
    ],
  },
  {
    title: "Styling",
    articles: [
      "CSS tradizionale",
      "CSS Modules",
      "Styled-components",
      "Tailwind CSS",
      "Sass",
      "Inline styles",
      "Theming",
    ],
  },
  {
    title: "Performance",
    articles: [
      "React.memo",
      "useMemo e useCallback",
      "Code splitting",
      "Lazy loading componenti",
      "Profiler",
      "Ottimizzazione rendering",
    ],
  },
  {
    title: "Testing",
    articles: [
      "Jest",
      "React Testing Library",
      "Test unitari",
      "Test di integrazione",
      "Mocking",
      "Snapshot testing",
      "End-to-end testing",
    ],
  },
  {
    title: "Accessibilità",
    articles: [
      "ARIA",
      "Navigazione da tastiera",
      "Focus management",
      "Semantic HTML",
      "Screen reader",
      "Contrasto colori",
    ],
  },
  {
    title: "Internazionalizzazione",
    articles: ["i18n", "react-i18next", "Gestione lingue", "Formati date e numeri"],
  },
  {
    title: "Deploy e produzione",
    articles: [
      "Build di produzione",
      "Deploy su Vercel",
      "Deploy su Netlify",
      "Deploy su Firebase",
      "CI/CD",
      "Environment variables",
      "Monitoring",
    ],
  },
  {
    title: "Ecosistema e tool",
    articles: ["Vite", "Webpack", "Babel", "ESLint", "Prettier", "Storybook", "DevTools"],
  },
  {
    title: "Sicurezza",
    articles: ["XSS", "CSRF", "Sanitizzazione", "Gestione token", "Best practices"],
  },
  {
    title: "Pattern e best practice",
    articles: ["Atomic design", "Folder structure", "Separation of concerns", "Clean code", "Scalabilità"],
  },
  {
    title: "React avanzato",
    articles: [
      "Concurrent React",
      "Server Components",
      "Streaming",
      "Hydration",
      "Edge rendering",
      "React 18 features",
    ],
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
