FROM node:15.5.0-alpine3.10
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package.json /app/
COPY ./yarn.lock /app/
RUN yarn --silent
COPY . /app
CMD ["yarn", "start"]
