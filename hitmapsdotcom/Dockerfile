# Nuxt build
FROM node:18-alpine3.19 as build
RUN apk update && apk upgrade

WORKDIR /app
COPY package* ./
RUN npm ci
COPY . ./
RUN npm run build

# Copy nuxt build to here
FROM node:18-alpine3.19
RUN apk update && apk upgrade && apk add dumb-init && adduser -D nuxtuser
USER nuxtuser
WORKDIR /app
COPY --chown=nuxtuser:nuxtuser --from=build /app/.output ./
EXPOSE 3000

# Set nuxt env
ENV HOST=0.0.0.0
ENV PORT=3000
#ENV NODE_ENV=production

CMD ["dumb-init","node","/app/server/index.mjs"]