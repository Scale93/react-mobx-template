FROM nginx:alpine

RUN apk add --no-cache --update bash curl

COPY ./build /usr/share/nginx/html
COPY ./default.conf /etc/nginx/conf.d

HEALTHCHECK --timeout=3s CMD curl -f http://localhost/ || exit 1
