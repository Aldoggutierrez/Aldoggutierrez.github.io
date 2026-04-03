// ── Stack técnico ─────────────────────────────────────────────────────────────
// Edita las columnas del stack tecnológico aquí.
// highlight: true → aparece resaltado en color accent

export interface StackItem {
  label:     string;
  highlight: boolean;
}

export interface StackColumn {
  heading: string;
  items:   StackItem[];
}

export const stack: StackColumn[] = [
  {
    heading: 'Frontend',
    items: [
      { label: 'Vue 3 / Inertia', highlight: true },
      { label: 'TypeScript',      highlight: true },
      { label: 'Pinia',           highlight: false },
      { label: 'Vite',            highlight: false },
      { label: 'Tailwind CSS',    highlight: false },
    ],
  },
  {
    heading: 'Backend',
    items: [
      { label: 'Laravel 11',    highlight: true },
      { label: 'PHP 8.3',       highlight: true },
      { label: 'PostgreSQL',    highlight: false },
      { label: 'Redis / Horizon', highlight: false },
      { label: 'REST / SOAP APIs', highlight: false },
    ],
  },
  {
    heading: 'DevOps',
    items: [
      { label: 'Docker / Compose', highlight: true },
      { label: 'Traefik',          highlight: true },
      { label: 'GitHub Actions',   highlight: false },
      { label: 'Linux / Bash',     highlight: false },
      { label: "Let's Encrypt",    highlight: false },
    ],
  },
  {
    heading: 'Especialidades',
    items: [
      { label: 'GDS: Amadeus · Sabre', highlight: true },
      { label: 'Facturación CFDI',     highlight: true },
      { label: 'Multi-tenant',         highlight: false },
      { label: 'Queue workers',        highlight: false },
      { label: 'CI/CD pipelines',      highlight: false },
    ],
  },
];
