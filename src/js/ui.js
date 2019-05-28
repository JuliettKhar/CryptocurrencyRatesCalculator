import { cryptoAPI } from './cryptoApi';
const cryptoApi = new cryptoAPI();

export  class UI {
	constructor() {
		this.form = document.querySelector('#form');
		this.currencySelect = document.querySelector('#currency');
		this.cryptoCurrencySelect = document.querySelector('#cryptocurrency');
		this.init();

	}
	init() {
		this.printCryptoCurrencies();
		// console.log(this.printCryptoCurrencies(),'init')
	}
	printCryptoCurrencies() {
		cryptoApi.getCryptoCurrenciesList()
			.then( data => {
					 const cryptoCurrencies = data.cryptoCurrencies.rates;
					 const select = document.querySelector('#cryptocurrency');
					 			for (let key in cryptoCurrencies) {
					 				const option = document.createElement('option');
					 				option.value = key;
					 				option.appendChild(document.createTextNode(key));
					 				select.appendChild(option);
					 				// console.log(key, cryptoCurrencies[key])
					 				}
				// console.log(cryptoCurrencies, 'printCryptoCurrencie')
			})
			.catch( err => console.log(err));
	}
}