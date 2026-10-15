/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_NAME: string;
  readonly PUBLIC_SITE_TAGLINE: string;
  readonly PUBLIC_SITE_URL: string;
  readonly PUBLIC_WHATSAPP: string;
  readonly PUBLIC_CONTACT_EMAIL: string;
  readonly PUBLIC_GA_MEASUREMENT_ID: string;
  readonly PUBLIC_GTM_ID: string;
  readonly PUBLIC_LOOKER_STUDIO_URL: string;
  readonly PUBLIC_REPORTES_PIN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
