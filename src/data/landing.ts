export const landingSeo = {
  title: 'EcoPrime | Consultoría ambiental y sostenibilidad para empresas en Perú',
  description:
    'EcoPrime ayuda a empresas en Perú a cumplir normativa ambiental, medir impactos y construir estrategias de sostenibilidad con resultados medibles. Solicita una consulta.',
};

/** Credibilidad — reemplazar referencias con datos y permisos confirmados por EcoPrime antes de publicar. */
export const credibility = {
  /** 'draft' muestra placeholders y aviso; 'live' solo items con verified: true */
  publishMode: 'draft' as 'draft' | 'live',
  eyebrow: 'Credibilidad',
  title: 'Proyectos y resultados',
  description:
    'Casos reales por sector: cumplimiento, monitoreo y sostenibilidad con entregables verificables para directorio y autoridad.',
  clientStripLabel: 'Empresas que confían en EcoPrime',
  metrics: [
    {
      slug: 'proyectos',
      value: '45+',
      label: 'proyectos ambientales acompañados',
      verified: false,
    },
    {
      slug: 'sectores',
      value: '6',
      label: 'sectores industriales atendidos',
      verified: false,
    },
    {
      slug: 'plazos',
      value: '92%',
      label: 'de entregables a tiempo (último año)',
      verified: false,
    },
    {
      slug: 'cobertura',
      value: 'PE',
      label: 'cobertura nacional — proyectos en región según alcance',
      verified: true,
    },
  ],
  clients: [
    {
      slug: 'andes-industrial',
      name: 'Andes Industrial',
      sector: 'Manufactura',
      logo: '/ref-clients/ref-andes-industrial.svg',
      permissionGranted: false,
    },
    {
      slug: 'valle-verde',
      name: 'Valle Verde Agroexport',
      sector: 'Agroindustria',
      logo: '/ref-clients/ref-valle-verde.svg',
      permissionGranted: false,
    },
    {
      slug: 'pacifico-infra',
      name: 'Pacífico Infraestructura',
      sector: 'Construcción',
      logo: '/ref-clients/ref-pacifico-infra.svg',
      permissionGranted: false,
    },
    {
      slug: 'sol-energia',
      name: 'Sol Energía',
      sector: 'Energía',
      logo: '/ref-clients/ref-sol-energia.svg',
      permissionGranted: false,
    },
  ],
  caseStudies: [
    {
      slug: 'salud-castrovirreyna',
      client: 'Monitoreo ambiental en establecimientos de salud',
      imageFile: '01-salud-castrovirreyna',
      imageSlug: 'construccion',
      sector: 'Salud',
      headline: 'Salud en Castrovirreyna',
      result:
        'Mejoramiento de los servicios de salud del establecimiento de salud de Castrovirreyna.',
      service: 'Salud',
      verified: false,
    },
    {
      slug: 'agua-jorge-chavez',
      client: 'Monitoreo de calidad de agua',
      imageFile: '02-agua-jorge-chavez',
      imageSlug: 'energia',
      sector: 'Saneamiento',
      headline: 'Agua y alcantarillado',
      result:
        'Mejoramiento y ampliación de los sistemas de agua potable y alcantarillado del centro poblado menor Jorge Chávez Dartnell.',
      service: 'Saneamiento',
      verified: false,
    },
    {
      slug: 'unsaac-ciencias-administrativas',
      client: 'Monitoreo ambiental sector construcción',
      imageFile: '03-unsaac-cusco',
      imageSlug: 'retail',
      sector: 'Educación',
      headline: 'UNSAAC Cusco',
      result:
        'Mejoramiento de la capacidad prestadora de los servicios de pregrado en la Escuela Profesional de Ciencias Administrativas de la UNSAAC, distrito de Cusco, provincia de Cusco, departamento de Cusco.',
      service: 'Educación',
      verified: false,
    },
    {
      slug: 'vertimiento-santa-rosa',
      client: 'Monitoreo ambiental en mina',
      imageFile: '04-mina-santa-rosa',
      imageSlug: 'mineria',
      sector: 'Minería',
      headline: 'Mina Santa Rosa 1',
      result:
        'Autorización para el vertimiento de aguas residuales industriales para la mina Santa Rosa 1, Llocllapampa, Jauja, Junín.',
      service: 'Vertimiento industrial',
      verified: false,
    },
    {
      slug: 'formalizacion-san-pedro-de-coris',
      client: 'Mina',
      imageFile: '05-san-pedro-de-coris',
      imageSlug: 'mineria',
      sector: 'Minería',
      headline: 'San Pedro de Coris',
      result:
        'Formalización minera para extracción de minería metálica en San Pedro de Coris, Huancavelica.',
      service: 'Formalización minera',
      verified: false,
    },
    {
      slug: 'planta-minerales-no-metalicos',
      client: 'Monitoreo ambiental en estación de servicios - hidrocarburos',
      imageFile: '06-planta-minerales',
      imageSlug: 'manufactura',
      sector: 'Minería',
      headline: 'Planta de minerales',
      result: 'Planta procesadora de minerales no metálicos.',
      service: 'Procesamiento',
      verified: false,
    },
  ],
  certStripLabel: 'Estándares y respaldo profesional',
  certifications: [
    {
      slug: 'iso',
      name: 'ISO 14001',
      logo: '/ref-certs/ref-iso-14001.svg',
      verified: false,
    },
    {
      slug: 'colegio',
      name: 'Colegio profesional',
      logo: '/ref-certs/ref-colegio.svg',
      verified: false,
    },
    {
      slug: 'gremio',
      name: 'Cámara gremial',
      logo: '/ref-certs/ref-gremio.svg',
      verified: false,
    },
  ],
};

/** Servicios destacados bajo el hero (sección blanca) — copy validado con EcoPrime. */
export const heroHighlightServices = [
  {
    slug: 'asesoria-juridica',
    tag: 'Legal',
    titlePrefix: 'Asesoramiento jurídico ',
    titleHighlight: 'ambiental',
    desc: 'Te acompañamos ante fiscalizaciones y sanciones ambientales: defensa técnica y legal para proteger tu operación y reducir el impacto económico.',
    bullets: [
      'Acompañamiento en supervisiones inopinadas del OEFA',
      'Levantamiento de observaciones en procedimientos sancionadores',
      'Estrategia para reducir multas administrativas',
    ],
    imageSlug: 'legal',
    cta: 'Consultar asesoría',
    whatsappMessage:
      'Me interesa el asesoramiento jurídico ambiental de EcoPrime (OEFA, observaciones y reducción de multas).',
    icon: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8',
  },
  {
    slug: 'certificaciones',
    tag: 'Certificación',
    titlePrefix: 'Certificación ambiental ',
    titleHighlight: 'por rubros',
    desc: 'Organizamos la obtención de certificaciones ambientales según el rubro de tu proyecto de inversión, con acompañamiento técnico, monitoreos y permisos ante autoridad.',
    bullets: [] as string[],
    imageSlug: 'certificacion',
    /** Rubros visibles en la card (SVG + etiqueta). */
    rubros: [
      { slug: 'mineria', label: 'Minería' },
      { slug: 'hidrocarburos', label: 'Hidrocarburos' },
      { slug: 'industria', label: 'Industria' },
      { slug: 'infraestructura', label: 'Infraestructura' },
      { slug: 'agro', label: 'Agroindustria' },
    ],
    cta: 'Consultar certificación',
    whatsappMessage:
      'Quiero información sobre certificación ambiental por rubros con EcoPrime.',
    icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M9 12l2 2 4-4',
  },
];

export const problemSolution = {
  eyebrow: 'Para empresas que operan con responsabilidad',
  title: 'El cumplimiento ambiental ya no es opcional',
  problem:
    'Multas, observaciones de autoridad, presión de inversionistas y clientes exigen gestión ambiental seria. Sin datos ni plan claro, el riesgo operativo y reputacional crece cada año.',
  solution:
    'EcoPrime traduce la normativa en acciones concretas: diagnóstico, plan, implementación y medición. Acompañamos a tu equipo para operar con seguridad legal y ventaja competitiva.',
  solutionPanelHeading: 'De la norma a la acción',
};

export const painPoints = [
  'Multas y sanciones por incumplimiento normativo',
  'Observaciones en fiscalizaciones ambientales',
  'Presión de clientes e inversionistas por sostenibilidad',
  'Riesgo reputacional sin indicadores ni plan claro',
];

export const solutionSteps = [
  'Diagnóstico de brechas legales y operativas',
  'Plan de acción con plazos y responsables',
  'Implementación acompañada en campo',
  'Medición e informes para la gerencia',
];

export const servicesSection = {
  eyebrow: 'Líneas de servicio',
  title: 'Servicios ambientales para empresas',
  description:
    'Consultoría y gestión ambiental en Perú: permisos ambientales, gestión de residuos y monitoreo para tu operación.',
};

export const services = [
  {
    slug: 'permisos',
    tag: 'Permisos',
    titlePrefix: 'Permisos ',
    titleHighlight: 'ambientales y otros',
    desc: 'Gestionamos ante la autoridad competente los permisos y autorizaciones que tu operación necesita, de principio a fin.',
    bullets: [
      'Autorización de vertimiento de aguas residuales industriales',
      'Licencia de uso de agua superficial',
      'Autorización de reúso de aguas tratadas',
      'Certificado de inexistencia de restos arqueológicos (CIRA)',
    ],
    cta: 'Consultar permisos',
    whatsappMessage: 'Me interesa gestionar permisos ambientales con EcoPrime (vertimiento, uso de agua, reúso o CIRA).',
  },
  {
    slug: 'residuos',
    tag: 'Operación',
    titlePrefix: 'Gestión de ',
    titleHighlight: 'residuos sólidos',
    desc: 'Planes de manejo, disposición final y mejora en planta, alineados a la normativa vigente.',
    bullets: ['Planes de manejo de residuos', 'Proveedores autorizados', 'Capacitación en planta'],
    cta: 'Consultar residuos',
    whatsappMessage: 'Necesito apoyo con gestión de residuos sólidos con EcoPrime.',
  },
  {
    slug: 'monitoreo',
    tag: 'Campo',
    titlePrefix: 'Monitoreo ',
    titleHighlight: 'ambiental',
    desc: 'Medición de emisiones, efluentes, ruido y calidad ambiental con protocolos, reportes y seguimiento ante autoridad.',
    bullets: ['Emisiones y efluentes', 'Reportes de vigilancia', 'Cumplimiento normativo'],
    cta: 'Solicitar monitoreo',
    whatsappMessage: 'Quiero información sobre monitoreo ambiental con EcoPrime.',
  },
];

/** Vitrina de equipos en la landing (sin tienda / checkout). */
export const equipmentSection = {
  eyebrow: 'Equipos',
  title: 'Equipos listos para tu operación',
  description:
    'Instrumentación ambiental y equipos para minería pequeña. Cotiza por WhatsApp — te asesoramos según tu operación.',
  ctaLabel: 'Cotizar catálogo completo',
  ctaMessage: 'Hola, quiero cotizar equipos del catálogo EcoPrime.',
  filters: [
    { id: 'ambiental', label: 'Equipos ambientales' },
    { id: 'mineria', label: 'Minería pequeña' },
  ],
};

export const equipmentProducts = [
  {
    slug: 'monitor-aire',
    line: 'ambiental',
    category: 'Calidad de aire',
    name: 'Monitor de calidad de aire',
    desc: 'Medición en tiempo real de material particulado y gases para plantas e instalaciones industriales.',
    priceLabel: 'Consultar precio',
    imageSlug: 'monitor-aire',
    cta: 'Cotizar equipo',
    whatsappMessage: 'Quiero cotizar el monitor de calidad de aire de EcoPrime.',
  },
  {
    slug: 'kit-efluentes',
    line: 'ambiental',
    category: 'Efluentes',
    name: 'Kit de muestreo de efluentes',
    desc: 'Set completo para toma de muestras de aguas residuales con cadena de custodia y protocolos de campo.',
    priceLabel: 'Consultar precio',
    imageSlug: 'kit-efluentes',
    cta: 'Cotizar equipo',
    whatsappMessage: 'Quiero cotizar el kit de muestreo de efluentes de EcoPrime.',
  },
  {
    slug: 'sonometro',
    line: 'ambiental',
    category: 'Ruido',
    name: 'Sonómetro de campo',
    desc: 'Equipo para mediciones de ruido ambiental y ocupacional con reportes listos para autoridad.',
    priceLabel: 'Consultar precio',
    imageSlug: 'sonometro',
    cta: 'Cotizar equipo',
    whatsappMessage: 'Quiero cotizar el sonómetro de campo de EcoPrime.',
  },
  {
    slug: 'estacion-monitoreo',
    line: 'ambiental',
    category: 'Monitoreo',
    name: 'Estación de monitoreo portátil',
    desc: 'Estación móvil para campañas de vigilancia ambiental en obra, mina o planta.',
    priceLabel: 'Consultar precio',
    imageSlug: 'estacion-monitoreo',
    cta: 'Cotizar equipo',
    whatsappMessage: 'Quiero cotizar la estación de monitoreo portátil de EcoPrime.',
  },
  {
    slug: 'mini-dumper-minero',
    line: 'mineria',
    category: 'Minería pequeña',
    name: 'Mini dumper minero',
    desc: 'Acarreo de mineral en interior de mina y labores de pequeña escala.',
    priceLabel: 'Consultar precio',
    imageSlug: 'mini-dumper-minero',
    imageFile: '01-mini-dumper-minero',
    cta: 'Cotizar equipo',
    whatsappMessage: 'Quiero cotizar el mini dumper minero de EcoPrime.',
  },
  {
    slug: 'compresora',
    line: 'mineria',
    category: 'Minería pequeña',
    name: 'Compresora',
    desc: 'Aire comprimido para perforación y herramientas en faena de pequeña minería.',
    priceLabel: 'Consultar precio',
    imageSlug: 'compresora',
    imageFile: '02-compresora',
    cta: 'Cotizar equipo',
    whatsappMessage: 'Quiero cotizar la compresora para minería pequeña de EcoPrime.',
  },
  {
    slug: 'faja-transportadora',
    line: 'mineria',
    category: 'Minería pequeña',
    name: 'Faja transportadora',
    desc: 'Transporte de mineral en planta o labor de pequeña minería.',
    priceLabel: 'Consultar precio',
    imageSlug: 'faja-transportadora',
    imageFile: '03-faja-transportadora',
    cta: 'Cotizar equipo',
    whatsappMessage: 'Quiero cotizar la faja transportadora de EcoPrime.',
  },
  {
    slug: 'rotomartillo',
    line: 'mineria',
    category: 'Minería pequeña',
    name: 'Rotomartillo',
    desc: 'Perforación en roca para avance y preparación de labores.',
    priceLabel: 'Consultar precio',
    imageSlug: 'rotomartillo',
    imageFile: '04-rotomartillo',
    cta: 'Cotizar equipo',
    whatsappMessage: 'Quiero cotizar el rotomartillo de EcoPrime.',
  },
  {
    slug: 'tanque-pulmon',
    line: 'mineria',
    category: 'Minería pequeña',
    name: 'Tanque pulmón',
    desc: 'Acumulación de aire comprimido para estabilizar el trabajo de la compresora.',
    priceLabel: 'Consultar precio',
    imageSlug: 'tanque-pulmon',
    imageFile: '05-tanque-pulmon',
    cta: 'Cotizar equipo',
    whatsappMessage: 'Quiero cotizar el tanque pulmón de EcoPrime.',
  },
  {
    slug: 'carritos-mineros',
    line: 'mineria',
    category: 'Minería pequeña',
    name: 'Carritos mineros',
    desc: 'Acarreo de mineral en galería para operaciones de pequeña minería.',
    priceLabel: 'Consultar precio',
    imageSlug: 'carritos-mineros',
    imageFile: '06-carritos-mineros',
    cta: 'Cotizar equipo',
    whatsappMessage: 'Quiero cotizar los carritos mineros de EcoPrime.',
  },
];

export const methodology = [
  {
    step: '01',
    icon: 'diagnosis',
    title: 'Diagnóstico',
    desc: 'Evaluamos brechas legales, operativas y de datos para priorizar riesgos y oportunidades.',
  },
  {
    step: '02',
    icon: 'plan',
    title: 'Plan de acción',
    desc: 'Diseñamos la hoja de ruta con plazos, responsables, presupuesto y entregables claros.',
  },
  {
    step: '03',
    icon: 'implement',
    title: 'Implementación',
    desc: 'Ejecutamos y acompañamos a tu equipo en campo y en gestión documental.',
  },
  {
    step: '04',
    icon: 'measure',
    title: 'Medición',
    desc: 'Reportamos avances con indicadores para decisiones de negocio y cumplimiento.',
  },
] as const;

export const methodologyContact = {
  step: '05',
  icon: 'contact',
  title: 'Contacto y consultoría',
  desc: 'Agenda una primera orientación sin compromiso.',
  whatsappMessage: 'Hola, vi la metodología en el sitio y quiero agendar una consultoría ambiental.',
} as const;

export const industries = [
  {
    slug: 'mineria',
    tag: 'Minería',
    titlePrefix: 'Servicio ambiental para ',
    titleHighlight: 'minería',
    desc: 'Cumplimiento, fiscalización OEFA, cierre de brechas y gestión de pasivos en operaciones de alto impacto.',
    alt: 'Operación minera con enfoque de gestión ambiental responsable',
    priority: true,
  },
  {
    slug: 'hidrocarburos',
    tag: 'Hidrocarburos',
    titlePrefix: 'Servicio ambiental para ',
    titleHighlight: 'hidrocarburos',
    desc: 'Permisos, monitoreos, vertimientos y acompañamiento normativo en operaciones de petróleo, gas y downstream.',
    alt: 'Instalaciones de hidrocarburos con gestión ambiental industrial',
    priority: true,
  },
  {
    slug: 'construccion',
    tag: 'Construcción',
    titlePrefix: 'Servicio ambiental para ',
    titleHighlight: 'construcción',
    desc: 'Instrumentos ambientales, permisos, monitoreos y manejo de residuos en obras de edificación e infraestructura.',
    alt: 'Proyecto de infraestructura con cumplimiento ambiental',
    priority: true,
  },
];

export const faqs = [
  {
    question: '¿Qué servicios ambientales ofrece EcoPrime a empresas?',
    answer:
      'Permisos ambientales (vertimiento de aguas residuales, licencia de uso de agua, reúso de aguas tratadas y CIRA), asesoramiento jurídico ambiental, certificación ambiental por rubros, gestión de residuos sólidos y monitoreo ambiental.',
  },
  {
    question: '¿En qué sectores se especializa EcoPrime?',
    answer:
      'Nuestro enfoque prioritario es minería e hidrocarburos. También acompañamos proyectos de construcción e infraestructura según el alcance.',
  },
  {
    question: '¿Atienden empresas en todo el Perú?',
    answer:
      'Sí. Acompañamos operaciones a nivel nacional y podemos coordinar proyectos en la región según el alcance del servicio.',
  },
  {
    question: '¿Cómo empieza un proyecto con EcoPrime?',
    answer:
      'Con una consulta inicial para entender tu operación, riesgos y objetivos. Luego proponemos diagnóstico y plan de trabajo con entregables y tiempos definidos.',
  },
  {
    question: '¿Pueden ayudarnos ante observaciones o fiscalización ambiental?',
    answer:
      'Sí. Revisamos la situación, priorizamos acciones correctivas y acompañamos la documentación y seguimiento requerido.',
  },
];

export const industriesSection = {
  eyebrow: 'Sectores',
  title: 'Nuestro enfoque',
  description:
    'Nos enfocamos en operaciones mineras e hidrocarburíferas de alto impacto. Ahí concentramos experiencia, ritmo y exigencia técnica.',
};

/** Panel + bullets para sectores prioritarios (minería / hidrocarburos / construcción). */
export const featuredSectorPanels = {
  mineria: {
    index: '01',
    eyebrow: 'Servicios principales',
    panelHeading: 'Cumplimiento en operación minera',
    panelLead:
      'De la fiscalización al plan de acción: cerramos brechas con evidencia técnica y documentación lista para la autoridad.',
    highlights: [
      'Formalización minera: opinión técnica sectorial, asesoría legal y levantamiento de suspensión del REINFO',
      'Carnet de manipuladores, IGAFOM y monitoreo para operar formalizado y en regla',
      'Régimen ordinario: instrumento ambiental, plan de minado y CIRA',
      'Expediente técnico, permiso de terreno superficial y monitoreo de la operación',
    ],
    whatsappMessage:
      'Hola, necesito consultoría ambiental para operaciones mineras con EcoPrime.',
  },
  hidrocarburos: {
    index: '02',
    eyebrow: 'Servicios principales',
    panelHeading: 'Gestión ambiental en hidrocarburos',
    panelLead:
      'Permisos, monitoreos y respuesta ante observaciones — con el ritmo que exige una operación continua.',
    highlights: [
      'Permisos y autorizaciones de vertimiento y captación de aguas',
      'Monitoreos en aire, suelo, ruido, agua y componente biológico',
      'Planes de manejo y respuesta ante observaciones de autoridad',
      'Certificaciones ambientales según rubro del proyecto',
    ],
    whatsappMessage:
      'Hola, necesito consultoría ambiental para operaciones de hidrocarburos con EcoPrime.',
  },
  construccion: {
    index: '03',
    eyebrow: 'Servicios principales',
    panelHeading: 'Gestión ambiental en obra',
    panelLead:
      'Del expediente al cierre de obra: permisos, monitoreos y documentación al día ante la autoridad.',
    highlights: [
      'Instrumento ambiental y certificación para proyectos de edificación e infraestructura',
      'CIRA y permisos necesarios para el inicio de obra',
      'Monitoreo de ruido, polvo y calidad de aire durante la ejecución',
      'Manejo de residuos de construcción y seguimiento ante autoridad',
    ],
    whatsappMessage:
      'Hola, necesito consultoría ambiental para un proyecto de construcción con EcoPrime.',
  },
} as const;

export const heroSection = {
  eyebrow: 'Prioridad · Minería e hidrocarburos',
  titlePrefix: 'Elevamos tu',
  titleHighlight: 'estándar ambiental',
  description:
    'Consultoría ambiental con enfoque prioritario en minería e hidrocarburos: cumplimiento, fiscalización, monitoreos y permisos para operaciones de alto impacto en Perú.',
};

export const heroBenefits = [
  'Comprometidos con el planeta, enfocados en resultados',
  'Cumplimiento normativo con visión de negocio',
  'Sostenibilidad medible, no solo discurso',
  'Acompañamiento experto en Perú y la región',
];
