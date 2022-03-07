FROM node:16-alpine as base

RUN mkdir -p /home/dev
WORKDIR /home/dev

COPY ./package.json ./
COPY ./yarn.lock ./
RUN npm install -g yarn
RUN yarn install
#RUN npm install

COPY ./ ./

#RUN BUILD APP
FROM base as build

RUN mkdir -p /home/build
WORKDIR /home/build

COPY --from=base /home/dev ./
RUN npm install -g yarn
RUN yarn build

#DEPLOY APLICATION
FROM node:16-alpine as deploy

RUN mkdir -p /home/app
WORKDIR /home/app

COPY --from=build /home/build/package*.json ./
COPY --from=build /home/build/.next ./.next

RUN npm install -g yarn
RUN yarn add next
CMD [ "yarn", "start" ]