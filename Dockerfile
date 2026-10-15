# Build desde la raíz de este repo (el sitio EcoPrime).
#   docker build -t ecoprime .
FROM node:22-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci \
  && npm install --no-save @rollup/rollup-linux-x64-musl

COPY . .

ARG PUBLIC_SITE_URL=
ARG RAILWAY_PUBLIC_DOMAIN=
ARG PUBLIC_SITE_NAME=EcoPrime
ARG PUBLIC_SITE_TAGLINE="Soluciones sostenibles para empresas"
ARG PUBLIC_WHATSAPP=51999999999
ARG PUBLIC_CONTACT_EMAIL=hola@ecoprime.pe
ARG PUBLIC_GA_MEASUREMENT_ID=
ARG PUBLIC_GTM_ID=
ARG PUBLIC_LOOKER_STUDIO_URL=
ARG PUBLIC_REPORTES_PIN=

ENV PUBLIC_SITE_NAME=$PUBLIC_SITE_NAME
ENV PUBLIC_SITE_TAGLINE=$PUBLIC_SITE_TAGLINE
ENV PUBLIC_WHATSAPP=$PUBLIC_WHATSAPP
ENV PUBLIC_CONTACT_EMAIL=$PUBLIC_CONTACT_EMAIL
ENV PUBLIC_GA_MEASUREMENT_ID=$PUBLIC_GA_MEASUREMENT_ID
ENV PUBLIC_GTM_ID=$PUBLIC_GTM_ID
ENV PUBLIC_LOOKER_STUDIO_URL=$PUBLIC_LOOKER_STUDIO_URL
ENV PUBLIC_REPORTES_PIN=$PUBLIC_REPORTES_PIN

# Canonical/sitemap: PUBLIC_SITE_URL explícita, o dominio Railway, o fallback prod.
RUN SITE_URL="${PUBLIC_SITE_URL:-${RAILWAY_PUBLIC_DOMAIN:+https://${RAILWAY_PUBLIC_DOMAIN}}}" && \
    if [ -z "$SITE_URL" ]; then SITE_URL="https://www.ecoprime.pe"; fi && \
    export PUBLIC_SITE_URL="$SITE_URL" && \
    npm run build

FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN npm install -g serve@14

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["sh", "-c", "serve dist -l tcp://0.0.0.0:${PORT:-3000}"]
