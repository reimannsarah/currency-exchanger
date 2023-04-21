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
      printExchangedCurrency();
    })
    .catch(error => {
      printError(error);
    });
};