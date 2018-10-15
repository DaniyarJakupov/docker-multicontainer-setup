# 1. Builder stage
# Use node image 
FROM node:alpine as builder

# Create a dir for the app
WORKDIR /app

# Copy package.json to /app folder inside docker image
COPY package.json .

# Install dependencies
RUN npm install

# Copy everything to /app folder inside docker image
COPY . .

RUN npm run build

# 2. Run stage
FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html