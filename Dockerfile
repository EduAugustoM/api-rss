FROM node

WORKDIR /index

COPY package.json /index

RUN npm install

COPY . /index

EXPOSE 3000

CMD ["node", "index.js"]