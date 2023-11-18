FROM node:16.13-alpine

RUN apk add --no-cache openssl g++ make py3-pip git

WORKDIR /usr/src/app
COPY . .

RUN git config --system url.https://github.com/.insteadOf ssh://git@github.com/
RUN yarn
RUN yarn run build

CMD ["yarn", "start:prod"]
