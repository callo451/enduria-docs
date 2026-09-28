# syntax=docker/dockerfile:1

FROM node:22-alpine AS builder
WORKDIR /site

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
ARG DOCS_URL=https://docs.enduria.io
ENV DOCS_URL=${DOCS_URL}
RUN npm run build

FROM nginxinc/nginx-unprivileged:alpine AS runner

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /site/build /usr/share/nginx/html

USER 101
EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1:8080/healthz || exit 1
