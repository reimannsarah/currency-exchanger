# Currency Exchanger

#### An application where a user can exchange currencies using rates between 160 different currencies.

#### By Sarah Reimann

## Technologies Used

* HTML
* JavaScript
* Node.js
* Webpack
* ExchangeRate-API
* Babel
* ESLint

## Description
This application takes three user inputs: one for the amount they'd like to convert, and two for the currency they'd like to convert from and to, respectively. Once they submit the form, the application will show what the exchange rate is between the first and second inputted currencies, and it will show them the converted amount (that they inputted).

## Setup/Installation Requirements

* Install all packages with $ npm install.
* Navigate to ExchangeRate-API 
* Create a free account to access an API key.
* Save the key in a .env file
* run npm install dotenv and add the plugin to webpack.config.js
* Build project using webpack with $ npm run build
* Start a development server with $ npm run start
* Lint JS files in the src folder with $ npm run lint
* Run tests with Jest using $ npm run test

## Known Bugs

* If you try to convert to or from North Korean Won, the API will throw an error because it is not supported in their database. I left it in to demonstrate the required error handling. 

## License

Copyright (c) Sarah Reimann
