// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
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
      printError(error);
    });
}

// function printExchangedCurrency() {

// }

function handleFormSubmission(e) {
  e.preventDefault();
  let amount = document.getElementById("amount").value;
  let currency1 = document.getElementById("currency1").value;
  let currency2 = document.getElementById("currency2").value;
  let div = document.getElementById("output");
  if (currency1 === "placeholder" && currency2 === "placeholder" && amount === "") {
    div.innerText = "Please input and amount and select currencies you'd like to convert";
  } else if (amount === "") {
    div.innerText - "Please enter an amount";
  } else if (currency1 === "placeholder" || currency2 === "placeholder") {
    div.innerText = "Please select a currency";
  } else {
    exchangeCurrency(currency1);
  }
}

function printExchangeData(exchange) {
  let div = document.getElementById("output");
  let currency1 = document.getElementById("currency1").value;
  let currency2 = document.getElementById("currency2").value;
  let amount = document.getElementById("amount").value;
  let rateP = document.createElement("p");
  let exchangeP = document.createElement("p");
  let exchangeRate = exchange.conversion_rates[currency2];
  rateP.innerText = `The exchange rate is: 1${currency1} to ${exchangeRate}${currency2}`;
  exchangeP.innerText = `${amount}${currency1} = ${amount / exchangeRate}${currency2}`;
  div.append(rateP, exchangeP);
}

function printError(error) {
  document.getElementById("error").innerText = error;
}

document.querySelector("form").addEventListener("submit", handleFormSubmission);