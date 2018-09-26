# FROM nginx:latest

FROM ubuntu:18.04
# everything that comes with nginx and then build on top
# WORKDIR /usr/share/nginx/html

RUN apt-get update -y \
    && apt-get install curl -y \
    # && apt-get install python3 -y \
    # && apt-get install python3-pip -y \
    && apt-get install nodejs -y \
    && apt-get install npm -y \
    && npm install -g nodemon

# COPY . .
#copy everything to everything
EXPOSE 8080

# CMD curl ifconfig.me/ip
# only can have one CMD and one ENTRYPOINT in DF because all the successive ones overwrite
# in order to accept a curl request we do the below
# ENTRYPOINT ["curl"]
# accept shell commands
# ENTRYPOINT bin/bash
# any command argument we run in the bash of this container will be appended to the ENTRYPOINT command
# CMD http://ifconfig.me/ip