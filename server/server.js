const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const vhost = require('vhost');
const { performUserSearch } = require('./user-lookup');
// app.use(express.static(path.join(__dirname, '../client/build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	console.log('here');
	res.send();
});

app.get('/search/:searchString', async (req, res) => {
	const response = await performUserSearch(req.params.searchString);
	res.send(response);
});

app.post('/api/world', (req, res) => {
	console.log(req.body);
	res.send(`I received your POST request. This is what you sent me: ${req.body.post}`);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
