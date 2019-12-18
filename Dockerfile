FROM nginx:mainline

## expose ports
EXPOSE 8080
### copy over the artifacts in dist folder to default nginx public folder
#COPY  ./nginx/default.conf /etc/nginx/conf.d/default.conf
# support running as arbitrary user which belogs to the root group
#RUN chmod g+rwx /var/cache/nginx /var/run /var/log/nginx




# Estagio 1 - Será responsavel em construir nossa aplicação
FROM node:10.16.2 as node
WORKDIR /app
COPY package.json /app/
#RUN chmod g+rwx /var/cache/nginx /var/run /var/log/nginx
RUN npm i npm@latest -g
RUN npm install
COPY ./ /app/
ARG env=prod
RUN npm run build

# Estagio 2 - Será responsavel por expor a aplicação

FROM nginx:1.13
COPY --from=node /app/dist/ponto-inteligente /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
