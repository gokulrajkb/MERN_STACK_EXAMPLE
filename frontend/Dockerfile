# Dockerfile for Front-end (client)

# Build react client
FROM node:16.14.2

# Create App Directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./

###  Installing dependencies
RUN npm install --silent

# copy local files to app folder
COPY . .

EXPOSE 3000

CMD ["npm","start"]