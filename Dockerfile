FROM httpd

COPY ./dist/angular/* /usr/local/apache2/htdocs/

EXPOSE 80

CMD apachectl -D FOREGROUND
