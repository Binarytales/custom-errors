FROM ghcr.io/static-web-server/static-web-server:2-alpine

ENV SERVER_HEALTH=true

COPY ./views/dist ./public
