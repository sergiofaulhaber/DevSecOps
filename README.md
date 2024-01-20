# DevSecOps

cd json

docker build -t <nome-imagem-json> .

docker run -d -p 3000:80  <nome-imagem-json>


cd ..

cd Aula-Web-Main

docker build -t <nome-imagem-nginx> .

docker run -d - p 80:80 <nome-imagem-nginx>


Pra ver a home page  http://localhost

