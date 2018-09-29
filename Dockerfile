FROM ubuntu:18.04

RUN mkdir dataM dataP

# RUN docker network create -d bridge docker_net
# --network="docker_net" in docker compose in each service?

RUN apt-get update -y && \
    apt-get install nodejs -y && \
    apt-get install npm -y && \
    npm install nodemon -g

# WORKDIR /usr/src/app

COPY package.json .
RUN npm install --quiet

COPY . .

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

CMD /wait && npm start

EXPOSE 8080