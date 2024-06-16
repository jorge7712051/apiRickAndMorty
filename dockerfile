
FROM node:14

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install --save-dev nodemon

COPY . .

EXPOSE 4000

CMD ["npx", "nodemon", "server.js"]