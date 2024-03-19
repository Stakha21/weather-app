FROM node:20.10.0

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY ./ ./

RUN yarn build
