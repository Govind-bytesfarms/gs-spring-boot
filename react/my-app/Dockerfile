FROM node:lts-alpine
ENV NODE_ENV=production
ENV REACT_APP_BACKEND_URL=http://localhost:8080
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
