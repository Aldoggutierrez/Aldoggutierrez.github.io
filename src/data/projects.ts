// ── Proyectos / Casos de estudio ──────────────────────────────────────────────
// Agrega, edita o elimina proyectos de este array.

export interface Tag {
  label: string;
  color: 'default' | 'blue' | 'amber';
}

export interface Column {
  label: string;
  items: string[];
}

export interface ImpactItem {
  value: string;
  label: string;
}

export interface Project {
  number: string;
  tags: Tag[];
  name: string;
  pitch: string;
  stack: string[];
  columns: [Column, Column, Column];
  impact: ImpactItem[];
}

export const projects: Project[] = [
  {
    number: '01',
    tags: [
      { label: 'Confidencial · NDA', color: 'amber' },
      { label: 'Automotriz',         color: 'default' },
      { label: 'ERP a medida',       color: 'blue' },
    ],
    name:  'Sistema de gestión para taller automotriz',
    pitch: 'Plataforma tipo ERP diseñada para talleres de enderezado y pintura — digitalizando por completo los procesos desde la recepción del vehículo hasta la entrega final, incluyendo administración financiera.',
    stack: ['Laravel', 'Vue 3', 'Inertia', 'PostgreSQL', 'Docker'],
    columns: [
      {
        label: 'MÓDULOS DEL SISTEMA',
        items: [
          'Recepción y diagnóstico de vehículos',
          'Órdenes de trabajo con seguimiento',
          'Control de inventario y refacciones',
          'Asignación de técnicos y tiempos',
          'Historial por vehículo y cliente',
        ],
      },
      {
        label: 'ADMINISTRACIÓN FINANCIERA',
        items: [
          'Facturación y comprobantes',
          'Cuentas por cobrar',
          'Reportes de productividad',
          'Roles: admin, recepción, técnico',
          'Dashboard con métricas del taller',
        ],
      },
      {
        label: 'DECISIONES TÉCNICAS',
        items: [
          'Arquitectura monolítica modular',
          'SPA con Vue 3 + Inertia.js',
          'Generación de PDFs de órdenes',
          'Notificaciones en tiempo real',
          'Deploy en servidor propio con Docker',
        ],
      },
    ],
    impact: [
      { value: '0 papel',    label: 'PROCESOS 100% DIGITALIZADOS' },
      { value: '5 roles',    label: 'CON PERMISOS GRANULARES' },
      { value: '1 sistema',  label: 'REEMPLAZÓ 3 HERRAMIENTAS DISTINTAS' },
    ],
  },
  {
    number: '02',
    tags: [
      { label: 'Confidencial · NDA', color: 'amber' },
      { label: 'Travel Tech',        color: 'default' },
      { label: 'Amadeus GDS',        color: 'blue' },
      { label: 'Sabre GDS',          color: 'blue' },
    ],
    name:  'Plataforma de gestión de viajes empresariales',
    pitch: 'Sistema end-to-end para agencia de viajes corporativa: portal de reservas en tiempo real conectado a GDS globales (Amadeus, Sabre) y back-office administrativo completo con facturación, comisiones y cobranza.',
    stack: ['Laravel', 'Vue 3', 'Amadeus API', 'Sabre API', 'PostgreSQL', 'Redis', 'Docker'],
    columns: [
      {
        label: 'PORTAL DE RESERVAS',
        items: [
          'Búsqueda en tiempo real vía GDS',
          'Vuelos, hoteles, autos y autobús',
          'Reserva por cliente o por agente',
          'Confirmaciones y vouchers automáticos',
          'Historial de viajes por viajero',
        ],
      },
      {
        label: 'BACK-OFFICE ADMINISTRATIVO',
        items: [
          'Facturación y emisión de CFDI',
          'Verificación de reservas en GDS',
          'Cuentas por cobrar y por pagar',
          'Cobranza de comisiones hoteleras',
          'Reportes de operación y rentabilidad',
        ],
      },
      {
        label: 'DECISIONES TÉCNICAS',
        items: [
          'Integración APIs SOAP/REST de GDS',
          'Cache Redis para tarifas frecuentes',
          'Jobs async para confirmaciones',
          'Multi-rol: admin, agente, viajero',
          'Deploy multi-servicio con Docker',
        ],
      },
    ],
    impact: [
      { value: '2 GDS',        label: 'AMADEUS + SABRE INTEGRADOS' },
      { value: '4 tipos',      label: 'VUELO · HOTEL · AUTO · AUTOBÚS' },
      { value: '1 plataforma', label: 'RESERVAS + ADMINISTRACIÓN UNIFICADAS' },
    ],
  },
];
