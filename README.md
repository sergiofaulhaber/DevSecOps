
Instruções para instalação do sistema 

git clone https://github.com/sergiofaulhaber/DevSecOps.git

# Diretório onde esta armazenado o JSON SERVER
cd json

docker build -t json .

cd ..

#Diretório armazenamento aplicação e configuração NGINX 

cd Aula-Web-main

docker build -t nginx .

cd ..

# Executar o docker-composer

docker-compose up -d 

# Para acessar o sistema

https://localhost 


