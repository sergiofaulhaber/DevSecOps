FROM node:latest
MAINTAINER Christian Lück <christian@lueck.tv>

RUN npm install -g json-server

WORKDIR /data
#VOLUME /data
COPY . .
EXPOSE 80
ADD run.sh /run.sh
ENTRYPOINT ["bash", "/run.sh"]
CMD []

# Use a imagem oficial do Nginx como base
FROM nginx

# Atualize o sistema e instale as ferramentas necessárias
RUN apt-get update && apt-get install -y openssl

# Crie um diretório para armazenar o certificado SSL
RUN mkdir -p /etc/nginx/ssl

# Gere um certificado SSL autogerado
RUN openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout /etc/nginx/ssl/nginx-selfsigned.key \
    -out /etc/nginx/ssl/nginx-selfsigned.crt \
    -subj "/C=US/ST=State/L=City/O=Organization/CN=example.com"

# Copie a configuração padrão do Nginx e substitua pelo arquivo de configuração personalizado
COPY nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html
COPY . .
# Exponha a porta 80 (HTTP) e a porta 443 (HTTPS)
EXPOSE 80
EXPOSE 443

# Inicie o Nginx em segundo plano
CMD ["nginx", "-g", "daemon off;"]
