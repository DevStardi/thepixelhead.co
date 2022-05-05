FROM nginx

COPY ./web/public /var/www/html
COPY nginx.conf /etc/nginx/nginx.conf
RUN nginx -t