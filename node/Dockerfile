FROM node:8.12.0-alpine

EXPOSE 3000

ADD . /node
WORKDIR /node

# Install PM2
RUN npm install -g pm2

RUN npm install

USER node
 
CMD pm2 start --no-daemon  processes.json