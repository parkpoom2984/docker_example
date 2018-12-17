FROM node:8.12.0-alpine

EXPOSE 3000

ADD . /docker_test
WORKDIR /docker_test

RUN npm install
RUN npm install --only=dev
 
USER node
 
CMD [ "npm", "start" ]