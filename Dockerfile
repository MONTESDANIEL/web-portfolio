# Usa la imagen base de Nginx
FROM nginx:alpine

# Copia los archivos construidos en la carpeta dist a la ubicación predeterminada de Nginx
COPY dist /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
