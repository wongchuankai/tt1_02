FROM node:alpine3.13 as builder

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . .
RUN npm run start