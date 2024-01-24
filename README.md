
cd json

docker build -t json .

docker run -d --rm -p 3000:80

cd ..

cd Aula-Web-main

docker build -t nginx .

docker run -d --rm -p 443:443  nginx

https://localhost

