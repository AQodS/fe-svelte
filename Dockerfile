FROM node:22-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

ENV  VITE_BACKEND_URL="http://localhost:3000"

CMD ["npm", "run", "dev"]