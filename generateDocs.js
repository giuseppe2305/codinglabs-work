const data = [
  {
    title: "Introduzione a TypeScript",
    articles: [
      "Cos'è TypeScript e perché usarlo",
      "Differenze tra JavaScript e TypeScript",
      "Come funziona il compilatore TypeScript",
      "Vantaggi di TypeScript nel web development",
      "Installazione e configurazione di TypeScript",
      "Primi passi: scrivere il primo file .ts",
    ],
  },
  {
    title: "Tipi di Dati",
    articles: [
      "Tipi primitivi: number, string, boolean",
      "Tipi speciali: any, unknown, void, never, null, undefined",
      "Array e Tuple",
      "Enum",
      "Union e Intersection Types",
      "Literal Types",
      "Type Aliases",
      "Tipizzazione con oggetti",
    ],
  },
  {
    title: "Funzioni e Tipi di Funzione",
    articles: [
      "Dichiarazione di funzioni in TypeScript",
      "Tipizzazione dei parametri e del ritorno",
      "Parametri opzionali e default",
      "Rest parameters",
      "Funzioni anonime e arrow functions",
      "Funzioni generiche (Generics)",
      "Funzioni overloading",
    ],
  },
  {
    title: "Oggetti e Interfacce",
    articles: [
      "Creare oggetti tipizzati",
      "Interfacce: definizione e utilizzo",
      "Estendere interfacce",
      "Tipi opzionali e readonly",
      "Interfacce vs Type Aliases",
      "Indice di tipi dinamici",
      "Tipi mappati e conditional types",
    ],
  },
  {
    title: "Classi e Programmazione Orientata agli Oggetti",
    articles: [
      "Classi e istanze in TypeScript",
      "Proprietà e metodi",
      "Modificatori di accesso: public, private, protected",
      "Readonly e static",
      "Ereditarietà e extends",
      "Implementare interfacce",
      "Classi astratte",
      "Getter e Setter",
      "Metodi statici e proprietà statiche",
    ],
  },
  {
    title: "Tipi Avanzati",
    articles: [
      "Tipi generici (Generics) avanzati",
      "Conditional Types",
      "Mapped Types",
      "Infer e Type Guards",
      "Utility Types (Partial, Required, Pick, Omit, Record, etc.)",
      "Tipi ricorsivi",
      "Branded Types",
      "Discriminated Unions",
    ],
  },
  {
    title: "Tipi di Funzioni e Callbacks",
    articles: [
      "Tipizzazione dei callback",
      "Tipi di funzione come tipi",
      "Funzioni generiche",
      "Overload di funzioni",
      "Funzioni asíncrone e Promises",
    ],
  },
  {
    title: "Moduli e Namespace",
    articles: [
      "Import e Export in TypeScript",
      "Tipi di moduli: named e default",
      "Namespace e moduli interni",
      "Risoluzione dei moduli",
      "Configurazione dei path con tsconfig.json",
    ],
  },
  {
    title: "Decoratori",
    articles: [
      "Introduzione ai decoratori",
      "Decoratori di classi",
      "Decoratori di proprietà",
      "Decoratori di metodi e parametri",
      "Uso dei decoratori in progetti reali",
      "Limiti e considerazioni",
    ],
  },
  {
    title: "Gestione degli Errori",
    articles: [
      "Tipi never e gestione degli errori",
      "Try / Catch in TypeScript",
      "Throw e errori personalizzati",
      "Tipizzazione dei messaggi di errore",
    ],
  },
  {
    title: "TypeScript e JavaScript",
    articles: [
      "Interop con JavaScript",
      "Type Assertion",
      "Tipi any e unknown",
      "Controllo dei tipi a runtime",
      "Conversioni tra tipi",
    ],
  },
  {
    title: "Configurazione del Progetto",
    articles: [
      "File tsconfig.json",
      "Opzioni principali del compilatore",
      "Target e Module",
      "Strict Mode",
      "Include, Exclude e Files",
      "Source Maps",
      "Compilazione incremental e watch mode",
    ],
  },
  {
    title: "Strumenti e Ecosistema",
    articles: [
      "TypeScript con Node.js",
      "TypeScript con React",
      "TypeScript con Vue e Angular",
      "Linters e formattatori (ESLint, Prettier)",
      "Tooling e editor support",
      "Definizioni dei tipi: DefinitelyTyped e @types",
    ],
  },
  {
    title: "Pattern e Best Practices",
    articles: [
      "Tipizzazione sicura e robusta",
      "Separazione delle interfacce",
      "Evita any quando possibile",
      "Uso corretto dei generics",
      "Organizzazione dei moduli",
      "Codice manutenibile e leggibile",
    ],
  },
  {
    title: "Progetti Avanzati e Tecniche",
    articles: [
      "Progetti multi-modulo",
      "TypeScript in microfrontend",
      "Testing con TypeScript (Jest, Mocha, etc.)",
      "Integrazione con GraphQL",
      "Creazione di librerie tipizzate",
      "Metaprogrammazione avanzata",
    ],
  },
  {
    title: "Aggiornamenti e Novità",
    articles: [
      "Nuove funzionalità delle versioni recenti",
      "Differenze principali tra versioni",
      "Funzioni e tipi deprecati",
      "Guida alla migrazione tra versioni",
    ],
  },
];

import { existsSync, mkdirSync, writeFileSync } from "fs";
import { join } from "path";

const slugify = (str) =>
  str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const pad = (n) => String(n).padStart(2, "0");

const docsDir = join(process.cwd(), "docs");

if (!existsSync(docsDir)) mkdirSync(docsDir);

data.forEach((chapter, cIndex) => {
  const chapterIndex = pad(cIndex + 1);
  const chapterSlug = slugify(chapter.title);
  const chapterDir = join(docsDir, `${chapterIndex}-${chapterSlug}`);

  mkdirSync(chapterDir, { recursive: true });

  chapter.articles.forEach((article, aIndex) => {
    const articleIndex = pad(aIndex + 1);
    const articleSlug = slugify(article);
    const articleDir = join(chapterDir, `${articleIndex}-${articleSlug}`);

    mkdirSync(articleDir, { recursive: true });

    const mdxContent = `# ${article}

In arrivo
`;

    writeFileSync(join(articleDir, "page.mdx"), mdxContent, "utf8");
  });
});

console.log("Cartella docs generata con successo.");
