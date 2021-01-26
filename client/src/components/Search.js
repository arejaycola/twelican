import React, { useState } from 'react';
import Axios from 'axios';

const Search = () => {
	const [text, setText] = useState('');

	const onFormSubmit = async (e) => {
		e.preventDefault();

		const response = await Axios.get('/api/hello');
		console.log(response.data);
	};

	return (
		<form onSubmit={(e) => onFormSubmit(e)}>
			<input
				onChange={(e) => {
					setText(e.target.value);
				}}
				value={text}
				placeholder="Enter a verified Twitter Account"
				type="text"
				className="user-search"
			/>
			<button>Search</button>
		</form>
	);
};
export default Search;
