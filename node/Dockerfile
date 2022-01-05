FROM node:15

WORKDIR /usr/src/app

COPY . .

RUN npm install express --save
RUN npm install mysql --save
RUN npm intsall gerador-nome --save

EXPOSE 3000

CMD ["node", "index.js"]
