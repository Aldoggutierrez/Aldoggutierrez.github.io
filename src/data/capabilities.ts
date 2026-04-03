// ── Capacidades ───────────────────────────────────────────────────────────────
// Edita o agrega tarjetas de capacidades aquí.

export interface Capability {
  icon:  string;
  name:  string;
  desc:  string;
  pills: string[];
}

export const capabilities: Capability[] = [
  {
    icon:  '// ERP & GESTIÓN',
    name:  'Sistemas ERP a medida',
    desc:  'Plataformas de gestión de operaciones, inventarios, órdenes de trabajo y facturación adaptadas al negocio.',
    pills: ['Laravel', 'Vue 3', 'PostgreSQL'],
  },
  {
    icon:  '// GDS INTEGRATIONS',
    name:  'Integraciones con GDS globales',
    desc:  'Conexión con Amadeus y Sabre para búsqueda y reserva en tiempo real de vuelos, hoteles, autos y autobús.',
    pills: ['Amadeus', 'Sabre', 'SOAP/REST'],
  },
  {
    icon:  '// REAL-TIME SYSTEMS',
    name:  'Sistemas en tiempo real',
    desc:  'Búsqueda con disponibilidad en vivo, cache inteligente de tarifas, queues y notificaciones instantáneas.',
    pills: ['Redis', 'Queues', 'Horizon'],
  },
  {
    icon:  '// MULTI-ROL AUTH',
    name:  'Roles y permisos complejos',
    desc:  'Sistemas con múltiples tipos de usuario (admin, agente, cliente, técnico) con acceso granular por módulo.',
    pills: ['Sanctum', 'Spatie', 'Policies'],
  },
  {
    icon:  '// BILLING & FINANCE',
    name:  'Módulos financieros',
    desc:  'Facturación CFDI, cuentas por cobrar/pagar, comisiones, cobranza y reportes de rentabilidad integrados.',
    pills: ['CFDI', 'Laravel', 'PostgreSQL'],
  },
  {
    icon:  '// DEVOPS',
    name:  'Deploy y operación',
    desc:  'Contenedización, reverse proxy, SSL automático, CI/CD y ambientes reproducibles para producción real.',
    pills: ['Docker', 'Traefik', 'GitHub Actions'],
  },
];
