
FROM ubuntu:18.04

# need WORKDIR COPY ADD CMD ???

RUN apt-get update -y \
    && apt-get install curl -y \
    # && apt-get install python3 -y \
    # && apt-get install python3-pip -y \
    && apt-get install nodejs -y \
    && apt-get install npm -y \
    && npm install -g nodemon

EXPOSE 8080