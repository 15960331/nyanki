FROM node:lts-alpine
WORKDIR /usr/src/app
COPY . ./

RUN apk update
RUN apk add git
RUN git config --global user.name "nyanki"
RUN git config --global user.email "nyanki@example.com"

RUN yarn install

EXPOSE 3000

RUN chown -R node /usr/src/app
USER node
