FROM node:10.16.2-alpine
WORKDIR /app
COPY package.json /app/package.json
RUN npm install --silent
COPY . /app
