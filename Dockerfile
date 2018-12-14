FROM node:8.12.0-alpine
 
EXPOSE 3000
 
WORKDIR /docker_test
COPY ./docker_test /docker_test
RUN npm install
 
USER node
 
CMD [ "npm", "start" ]