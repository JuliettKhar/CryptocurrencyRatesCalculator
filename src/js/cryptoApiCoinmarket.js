export  class cryptoAPI {
		constructor(){
			this.apiKey = '410f2c4c-3931-47ba-8d55-f8b18171c05c';
		}
		async getCryptoCurrenciesList() {
				const url = await fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${this.apiKey}`, {
					mode: 'no-cors',
				});
				const cryptoCurrencies = await url.json();
				console.log(cryptoCurrencies);
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