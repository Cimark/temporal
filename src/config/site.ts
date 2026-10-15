export const siteConfig = {
  name: import.meta.env.PUBLIC_SITE_NAME || 'EcoPrime',
  tagline:
    import.meta.env.PUBLIC_SITE_TAGLINE ||
    'Soluciones ambientales que generan futuro.',
  siteUrl: import.meta.env.PUBLIC_SITE_URL || 'https://www.ecoprime.pe',
  whatsapp: import.meta.env.PUBLIC_WHATSAPP || '51988356603',
  email: import.meta.env.PUBLIC_CONTACT_EMAIL || 'info@ecoprime.pe',
  /** Cotizaciones de servicios / proyectos */
  emailServices: import.meta.env.PUBLIC_PROJECTS_EMAIL || 'info@ecoprime.pe',
  /** Cotizaciones de equipos / productos */
  emailProducts: import.meta.env.PUBLIC_PRODUCTS_EMAIL || 'info@ecoprime.pe',
  legalName: import.meta.env.PUBLIC_LEGAL_NAME || 'EcoPrime S.A.C.',
  ruc: import.meta.env.PUBLIC_COMPANY_RUC || '20616126921',
  address:
    import.meta.env.PUBLIC_COMPANY_ADDRESS ||
    'Av. Javier Prado Este 4200, Santiago de Surco, Lima, Perú',
  gaMeasurementId: import.meta.env.PUBLIC_GA_MEASUREMENT_ID || '',
  gtmId: import.meta.env.PUBLIC_GTM_ID || '',
  lookerStudioUrl: import.meta.env.PUBLIC_LOOKER_STUDIO_URL || '',
  reportesPin: import.meta.env.PUBLIC_REPORTES_PIN || '',
} as const;

export function formatPeruPhone(e164: string) {
  const digits = e164.replace(/\D/g, '');

  if (digits.startsWith('51') && digits.length >= 11) {
    const local = digits.slice(2);
    return `+51 ${local.slice(0, 3)} ${local.slice(3, 6)} ${local.slice(6)}`;
  }

  return `+${digits}`;
}

export function phoneTelUrl(e164: string) {
  return `tel:+${e164.replace(/\D/g, '')}`;
}

export function whatsappUrl(message?: string) {
  const text = encodeURIComponent(
    message || 'Hola, quiero más información sobre soluciones ambientales de EcoPrime.',
  );
  return `https://wa.me/${siteConfig.whatsapp}?text=${text}`;
}
