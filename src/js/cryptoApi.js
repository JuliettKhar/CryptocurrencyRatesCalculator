export  class cryptoAPI {
		constructor(){
			this.apiKey = '"X-CMC_PRO_API_KEY: 410f2c4c-3931-47ba-8d55-f8b18171c05c" -H "Accept: application/json" -d "start=1&limit=5000&convert=USD" -G https://api.coinmarketcap.com/v1/ticker/'
		}
		async getCryptoCurrenciesList() {
				const url = await fetch(this.apiKey);
				const cryptoCurrencies = await url.json();
				return {
					cryptoCurrencies
				}
		}
}