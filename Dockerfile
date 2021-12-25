FROM node:lts-alpine
WORKDIR /usr/src/app
COPY . ./

RUN apk update
RUN apk add git

RUN yarn install

EXPOSE 3000

RUN chown -R node /usr/src/app
USER node
