FROM ubuntu:18.04

RUN mkdir dataM dataP

RUN apt-get update -y && \
    apt-get install nodejs -y && \
    apt-get install npm -y && \
    npm install nodemon -g

COPY package.json .
RUN npm install --quiet

COPY . .

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

CMD /wait && npm run watch

EXPOSE 8080