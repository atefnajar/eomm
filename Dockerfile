# Étape 1 : Utiliser l'image officielle de Node.js pour construire l'application
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod
# Étape 2 : Utiliser une image légère Nginx pour servir l'application construite
FROM nginx:latest as build
COPY  --from=build /app/dist/ecomm-application/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
