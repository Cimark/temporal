# EcoPrime — sitio web (Fase 0)

Landing Astro + GA4 + página de reportes. Este repositorio es solo el sitio (extraído de `cimark-pro/sites/ecoprime`).

## Desarrollo local

```bash
npm install
npm run dev
```

Abre http://localhost:4322

Variables opcionales:

```bash
cp env.example .env
```

## Build

```bash
npm run build
```

## Deploy Railway

1. Proyecto Railway **ecoprime** (cliente, separado del stack Cimark)
2. Conectar este repo. Root Directory: raíz del repo
3. Railway detecta `railway.json` (Dockerfile en la raíz)
4. **Networking → Generate Domain** → usa el `*.up.railway.app` (sin dominio custom por ahora)
5. Variables de build: ver `env.example` (WhatsApp, email, GA4 cuando exista)

### Dominio temporal Railway

1. Genera el dominio en **Networking** antes del primer deploy (o justo después).
2. Opcional: variable `PUBLIC_SITE_URL` = `https://tu-servicio.up.railway.app` (canonical + sitemap).
3. Si no la defines, el Dockerfile usa `RAILWAY_PUBLIC_DOMAIN` automáticamente en build.
4. Cuando tengas `www.ecoprime.pe`, cambias `PUBLIC_SITE_URL` y redeploy.

## Páginas

| Ruta | Uso |
|------|-----|
| `/` | Landing |
| `/privacidad` | Legal GA4 |
| `/cookies` | Legal GA4 |
| `/gracias` | Conversión (evento GA4) |
| `/reportes` | Looker Studio embed (noindex) |

## Roadmap

- **Fase 0** (actual): landing + medición
- **Fase 1**: Looker/GA4 en prod + dominio
- **Fase 2**: sitio multi-página + SEO hub/spoke
- **Fase 3**: CRM + leads + admin
