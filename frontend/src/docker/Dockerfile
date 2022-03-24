# Ubuntu Linux as the base image
FROM node:alpine3.11

RUN mkdir -p /app

RUN npm install -g typescript

WORKDIR /app

COPY . /app


# RUN tsc -p .
RUN npm run build

EXPOSE 80
# EXPOSE 3000


# Copy the files from the host file system and ADD them to the desired directory inside the container image

ENTRYPOINT ["npm", "start"]
## node src/index.js

## docker build -f [path_to_docker_file] -t name:tag [project_path]
##  docker tag dronut:frontend gcr.io/project_name/dronut:tag
## docker 