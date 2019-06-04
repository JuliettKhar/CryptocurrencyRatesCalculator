export  class cryptoAPI {
		constructor(){
			this.apiKey = 'bf40df024f194315b90e33f26d3fdf34';
		}
		async getCryptoCurrenciesList() {
				const url = await fetch(`https://openexchangerates.org/api/latest.json?app_id=${this.apiKey}&show_alternative=1`);
				const cryptoCurrencies = await url.json();
				console.log(cryptoCurrencies)
				return {
					cryptoCurrencies
				}
		}

		async queryAPI(currencyValue, cryptoCurrencyValue) {
			const url = await fetch(`https://openexchangerates.org/api/convert/19999.95/${currencyValue}/${cryptoCurrencyValue}?app_id=${this.apiKey}`);
			const convert = await url.json();
			console.log(convert);
	}
}