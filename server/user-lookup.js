const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const Twitter = require('twitter');

const client = new Twitter({
	consumer_key: process.env.CONSUMER_KEY,
	consumer_secret: process.env.CONSUMER_SECRET,
	access_token_key: process.env.ACCESS_TOKEN_KEY,
	access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

async function performUserSearch(searchString) {
	try {
		const response = await client.get(`https://api.twitter.com/1.1/users/search.json`, {
			q: `${searchString}`,
			count: 20,
			page: 1,
			include_entities: false,
		});

		return response;
	} catch (e) {
		throw new Error(`Error performing user search for ${searchString}. ${e}`);
	}
}

module.exports = {
	performUserSearch,
};
