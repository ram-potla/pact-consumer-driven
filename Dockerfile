FROM node
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
COPY package-lock.json /usr/src/app/
RUN npm install
COPY . /usr/src/app
COPY ./wait-for.sh /usr/src/app
RUN chmod +x ./wait-for.sh
RUN apt-get -q update && apt-get -qy install netcat
EXPOSE 5000
CMD ["npm", "start"]
