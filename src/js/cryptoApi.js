export  class cryptoAPI {
		constructor(){
			this.apiKey = 'bf40df024f194315b90e33f26d3fdf34';
		}
		async getCryptoCurrenciesList() {
				const url = await fetch(`https://openexchangerates.org/api/latest.json?app_id=${this.apiKey}`);
				const cryptoCurrencies = await url.json();
				return {
					cryptoCurrencies
				}
		}
}