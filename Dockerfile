FROM ubuntu:18.04
# RUN mkdir /app
# RUN mkdir -p /app

# WORKDIR /app
# COPY ./package.json .

# split this RUN up to have package json below it and RUN npm install?
RUN apt-get update -y
    # && apt-get install curl -y \
    # && apt-get install python3 -y \
    # && apt-get install python3-pip -y \
    # && apt-get install nodejs -y \
    # && apt-get install npm -y \
    # && npm install -g nodemon
    # && npm install

# COPY ./package.json /app
# RUN npm install --quiet

# COPY . /usr/src
# COPY . /app

EXPOSE 8080

# be overwritten in the docker-compose
# CMD ["npm", "start"]
# CMD ["nodemon", "index.js"]






# CMD curl ifconfig.me/ip
# only can have one CMD and one ENTRYPOINT in DF because all the successive ones overwrite
# in order to accept a curl request we do the below
# ENTRYPOINT ["curl"]
# accept shell commands
# ENTRYPOINT bin/bash
# any command argument we run in the bash of this container will be appended to the ENTRYPOINT command
# CMD http://ifconfig.me/ip