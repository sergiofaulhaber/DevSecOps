
cd json

docker build -t json .

docker run -d --rm -p 3000:80 json

cd ..

cd Aula-Web-main

docker build -t nginx .

docker run -d --rm -p 80:80 -p 443:443  nginx

https://localhost

