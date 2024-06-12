# This is simple a backend with node js

## Start mongodb locally
docker run -d --rm --name mongo_db -v "${SCRIPT_DIR}/DB:/data/db" -p "27017:27017" mongo:7.0

## Command to bring up backend outsode docker

npm install
npm start

## Command to bring up backend inside docker

docker build -f Dockerfile -t todo-app-backend .
docker run -d -p 4000:4000 -t todo-app-backend
