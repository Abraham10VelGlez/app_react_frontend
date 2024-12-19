FROM node:23-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 5173

CMD ["yarn", "dev"]



#COMANDO PARA EJECUTAR DOCKER.COMPOSE.YML
#docker-compose up --build