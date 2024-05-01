FROM node:21.6.1-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY ./main.ts ./

EXPOSE 3000

CMD ["npm", "run","dev"]