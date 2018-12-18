FROM node:8.12.0-alpine

EXPOSE 3000

ADD . /docker_test
WORKDIR /docker_test

# Install PM2
RUN npm install -g pm2

RUN npm install

USER node
 
CMD pm2 start --no-daemon  processes.json