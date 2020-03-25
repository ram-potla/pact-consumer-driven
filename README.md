# pact - testing

## api test setup

``` bash
# install dependencies
$ npm i or yarn

# start api server
$ npm start

# run tests
# .
$ npm t
```

Environment Variables
Environment variables that control the operation of the app are defined in the .env file in the application root. These variables and their usage are shown in the following table. It's important to keep in mind that when these settings in the .env file are changed npm run build must be run before they will take effect.

Environment variables maintained in the .env file are made available to the application code via process.env.<variable-name>.

Environment Variable	Description	Example Setting
HOST
PORT
