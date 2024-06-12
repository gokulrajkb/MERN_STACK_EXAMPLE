# This is simple a frontend with node js

## Command to bring up backend outside docker

npm install
npm start

## Command to bring up backend inside docker

docker build -f Dockerfile -t todo-app-frontend .
docker run -d -p 3000:3000 -t todo-app-frontend