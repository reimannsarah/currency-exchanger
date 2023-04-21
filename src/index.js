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
      printExchangeRate(response);
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

function printExchangeRate(exchange) {
  document.getElementById("output").innerText = `The exchange rate is: ${exchange.conversion_rates.USD}`;
}

document.querySelector("form").addEventListener("submit", handleFormSubmission);