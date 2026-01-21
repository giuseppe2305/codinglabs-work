const data = [
  {
    title: "Introduzione a TailwindCSS",
    articles: [
      "Cos'è TailwindCSS",
      "Perché usare TailwindCSS",
      "Utility-first: concetto e filosofia",
      "Confronto con CSS tradizionale e framework (Bootstrap, Bulma)",
      "Quando usare e quando evitare TailwindCSS",
      "Storia e roadmap del progetto",
    ],
  },
  {
    title: "Installazione e Setup",
    articles: [
      "Requisiti di sistema",
      "Installazione con npm",
      "Installazione con CDN",
      "Configurazione con PostCSS",
      "Setup con Vite",
      "Setup con Webpack",
      "Setup con Next.js",
      "Setup con React",
      "Setup con Vue",
      "Setup con Laravel",
      "Setup con Svelte",
      "File di configurazione tailwind.config.js",
    ],
  },
  {
    title: "Struttura del Progetto",
    articles: [
      "File base di Tailwind",
      "Direttive @tailwind",
      "Ordine dei layer",
      "Integrazione con CSS personalizzato",
      "Best practice di organizzazione",
    ],
  },
  {
    title: "Sistema di Utility Classes",
    articles: [
      "Colori",
      "Background",
      "Tipografia",
      "Spacing",
      "Sizing",
      "Flexbox",
      "Grid",
      "Positioning",
      "Display",
      "Overflow",
      "Z-index",
      "Opacity",
      "Borders",
      "Border radius",
      "Box shadow",
      "Object fit e position",
      "Aspect ratio",
      "Tables",
      "Lists",
      "Interactivity",
    ],
  },
  {
    title: "Layout e Responsive Design",
    articles: [
      "Breakpoints",
      "Mobile-first",
      "Container",
      "Columns",
      "Flex utilities",
      "Grid utilities",
      "Gap e allineamenti",
      "Order e wrap",
      "Responsive variants",
    ],
  },
  {
    title: "Pseudo-classi e Stati",
    articles: [
      "Hover",
      "Focus",
      "Active",
      "Disabled",
      "Group",
      "Peer",
      "First, last, odd, even",
      "Focus-visible",
      "Checked",
      "Visited",
    ],
  },
  {
    title: "Dark Mode",
    articles: ["Configurazione dark mode", "Class-based", "Media-based", "Gestione con JavaScript", "Persistenza tema"],
  },
  {
    title: "Customizzazione",
    articles: [
      "Theme",
      "Estendere colori",
      "Font personalizzati",
      "Spaziature custom",
      "Breakpoints personalizzati",
      "Plugin system",
      "Preset",
      "Variabili CSS",
      "JIT mode",
    ],
  },
  {
    title: "Componenti con Tailwind",
    articles: [
      "Bottoni",
      "Card",
      "Navbar",
      "Sidebar",
      "Form",
      "Modal",
      "Dropdown",
      "Tooltip",
      "Alert",
      "Badge",
      "Accordion",
      "Tabs",
    ],
  },
  {
    title: "Accessibilità (a11y)",
    articles: ["Contrasto colori", "Focus states", "ARIA", "Keyboard navigation", "Screen reader support"],
  },
  {
    title: "Ottimizzazione e Performance",
    articles: ["PurgeCSS", "Tree-shaking", "Minificazione", "Caching", "Build production", "Riduzione bundle size"],
  },
  {
    title: "Animazioni e Transizioni",
    articles: [
      "Transition utilities",
      "Duration e easing",
      "Transform",
      "Keyframes",
      "Animate plugin",
      "Hover animations",
    ],
  },
  {
    title: "Integrazione con JavaScript e Framework",
    articles: [
      "React + Tailwind",
      "Next.js + Tailwind",
      "Vue + Tailwind",
      "Angular + Tailwind",
      "Svelte + Tailwind",
      "Alpine.js",
      "Headless UI",
    ],
  },
  {
    title: "Integrazione con React",
    articles: [
      "Setup con React",
      "Componenti stilizzati",
      "Conditional classes",
      "Class merging",
      "clsx e tailwind-merge",
      "Theming in React",
      "Dark mode in React",
      "Server Side Rendering",
      "Next.js e Tailwind",
    ],
  },
  {
    title: "Plugin Ufficiali",
    articles: ["Forms", "Typography", "Aspect Ratio", "Line Clamp", "Container Queries"],
  },
  {
    title: "Testing e Debug",
    articles: ["Debug layout", "DevTools", "Classi di debug", "Errori comuni", "Best practice"],
  },
  {
    title: "Ecosistema",
    articles: ["Tailwind UI", "Headless UI", "Heroicons", "Community plugins", "Template"],
  },
  {
    title: "Best Practice Avanzate",
    articles: ["Refactoring classi", "Design system", "Scalabilità", "Manutenibilità", "Naming conventions"],
  },
  {
    title: "Sicurezza e Compliance",
    articles: ["Content Security Policy", "Sanificazione classi dinamiche", "Protezione build"],
  },
  {
    title: "Aggiornamenti e Versioning",
    articles: ["Versioni principali", "Breaking changes", "Migrazione tra versioni", "Changelog"],
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
