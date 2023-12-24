# Utiliser l'image officielle de Node.js pour la production
FROM node:18 AS production

WORKDIR /app

COPY package*.json ./
RUN npm install

# Copier le code source dans le conteneur
COPY . .

# Construire l'application Angular en mode production
RUN npm run build --prod

# Utiliser l'image officielle Nginx pour  le serveur Web en mode production
FROM nginx:alpine AS nginx

# Copier les fichiers d'application Angular construits dans le répertoire d'Nginx
COPY --from=production /app/dist/ecomm-application/ /usr/share/nginx/html



# Port d'exposition d'Nginx
EXPOSE 80

# Commande par défaut pour le mode production
CMD ["nginx", "-g", "daemon off;"]

