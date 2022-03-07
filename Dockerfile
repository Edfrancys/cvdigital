FROM node:16-alpine

RUN mkdir -p /home/dev
WORKDIR /home/dev

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY ./ ./

RUN ls -la

RUN yarn build
CMD [ "yarn", "dev" ]