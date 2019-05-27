import { cryptoAPI } from './cryptoApi';
const cryptoApi = new cryptoAPI();

export  class UI {
	constructor() {
			this.init();
	}
	init() {
		this.printCryptoCurrencies();
	}
	printCryptoCurrencies() {
		cryptoApi.getCryptoCurrenciesList()
			.then( data => {
				console.log(data, 'printCryptoCurrencie')
			})
			.catch( err => console.log(err));
	}
}