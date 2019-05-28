import { UI } from './ui';
import { cryptoAPI } from './cryptoApi';

const ui = new UI();
const cryptoApi = new cryptoAPI();



function readCurrency() {
	const currencyValue = ui.currencySelect.value;
	const cryptoCurrencyValue = ui.cryptoCurrencySelect.value;

		if(currencyValue === '' || cryptoCurrencyValue === '') {
			console.log('error')
		}
		else {
			console.log('success')
		}
	console.log(currencyValue, cryptoCurrencyValue)
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