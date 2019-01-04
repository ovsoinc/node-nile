const axios = require('axios');

module.exports = class Nile {
	constructor(instance, url = "https://nile.chat") {
		this.instance = instance;
		this.url = url;
	}

	async pushChunk(stream, content) {
		await axios.get(`${this.url}/streams/${this.instance}/${stream}/push`, {
			params: {
				content
			}
		});
	}
};
