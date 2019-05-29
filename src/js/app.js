import { UI } from './ui';
import { cryptoAPI } from './cryptoApi';

const ui = new UI();
const cryptoApi = new cryptoAPI();



function readCurrency() {
	const currencyValue = ui.currencySelect.value;
	const cryptoCurrencyValue = ui.cryptoCurrencySelect.value;

		if(currencyValue === '' || cryptoCurrencyValue === '') {
			ui.printMessage('Please, fill in all fields', 'deep-orange darken-4 card-panel');
			// console.log('error')
		}
		else {
			cryptoApi.queryAPI(currencyValue, cryptoCurrencyValue);
		}
	// console.log(currencyValue, cryptoCurrencyValue)
}

function getSelects(event) {
		readCurrency();
		event.preventDefault();
}

function subscribe() {
		ui.form.addEventListener('submit', getSelects);
}

export function init() {
		subscribe();
}