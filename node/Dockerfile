FROM node:8.12.0-alpine

EXPOSE 3000

ADD . /node
WORKDIR /node

RUN npm install

USER node
 
CMD npm start