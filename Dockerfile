FROM arm64v8/node:latest

WORKDIR /usr/src/app

COPY rollup.config.js ./
COPY package*.json ./

RUN npm install

COPY ./src ./src
COPY ./public ./public
COPY ./.env ./.env

RUN npm run-script build

EXPOSE 3000

ENV HOST=0.0.0.0
ENV APIHOST=${APIHOST}

CMD [ "npm", "start" ]