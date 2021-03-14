web: vendor/bin/heroku-php-apache2 public/
worker: php artisan queue:restart && php artisan queue:work --tries=3
web: vendor/bin/heroku-php-nginx -C nginx_app.conf public/
