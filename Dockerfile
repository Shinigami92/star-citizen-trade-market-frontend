# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY . .
RUN yarn install --frozen-lockfile
ARG VUE_APP_GRAPHQL_HTTP
ENV VUE_APP_GRAPHQL_HTTP $VUE_APP_GRAPHQL_HTTP
ARG VUE_APP_GRAPHQL_WS
ENV VUE_APP_GRAPHQL_WS $VUE_APP_GRAPHQL_WS
RUN yarn build

# production stage
FROM nginx:stable-alpine as production-stage
LABEL maintainer="chrissi92@hotmail.de"
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
