import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from './cur-exchange-service';

function exchangeCurrency(currency) {
  Exchange.getNewCurrency(currency)
    .then(response => {
      if (response instanceof Error) {
        const errorMessage = `This currency does not exist:
        ${response.message}`;
        throw new Error(errorMessage);
      }
      printExchangeData(response);
    })
    .catch(error => {
      console.log(error);
    });
}

// function printExchangedCurrency() {

// }

function handleFormSubmission(e) {
  e.preventDefault();
  let currency = document.getElementById("newCurrency").value;
  exchangeCurrency(currency);
}

function printExchangeData(exchange) {
  let currency = document.getElementById("newCurrency").value;
  let usd = document.getElementById("usd").value;
  let div = document.getElementById("output");
  let rateP = document.createElement("p");
  let exchangeP = document.createElement("p");
  let exchangeRate = exchange.conversion_rates.USD;
  rateP.innerText = `The exchange rate is: ${1 / exchangeRate}${currency} to 1USD`;
  exchangeP.innerText = `${usd}USD = ${usd / exchangeRate}${currency}`;
  div.append(rateP, exchangeP);
  
}

document.querySelector("form").addEventListener("submit", handleFormSubmission);