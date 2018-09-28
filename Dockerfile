FROM ubuntu:18.04

RUN mkdir dataM dataP

RUN apt-get update -y && \
    apt-get install nodejs -y && \
    apt-get install npm -y && \
    npm install nodemon -g

WORKDIR /usr/src/app

COPY package.json .
RUN npm install --quiet

COPY . .


# EXPOSE 8080