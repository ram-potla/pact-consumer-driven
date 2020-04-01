# pact - testing

## api test setup

# create .env file in the root of the project.Refer to sample env file before creating it.

```bash
# install dependencies
$ npm i or yarn

# Before running the tests pull mongo docker image and run locally
# docker compose has some issues until this resolved, use the following commands to run mongodb instance in local computer.
  $ docker pull mongo
# Build mongo container
  $ docker run -d -p 27017-27017:27017-27017 --name ddmongodb mongo
 Note: make sure same container is not running already in your compuer.
  Some helpful commands:
   1. docker ps -a
   2. docker rm <containername> to remove existing conainter
   3. docker exec -it mongodb  bash  (then type mongo to excute commands in mongo contianer.)
# To run consumer driven test ( After running mongo docker using above commands)
$ npm run test:consumer

# To validate pact file agianst provider
$ npm run test:pact
```

Environment Variables
Environment variables that control the operation of the app are defined in the .env file in the application root.

Environment variables maintained in the .env file are made available to the application code via process.env.<variable-name>.

Environment Variable Description Example Setting
HOST
PORT
