FROM node:20.12.0-alpine

# create app directory
WORKDIR '/usr/app'

# Install app directory
COPY package.json .
RUN pnpm install

# Bundle app source
COPY . .

#Export port
EXPOSE 8080

# Start
CMD ["npm", "start"]