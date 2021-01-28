import React, { useState } from 'react';
import Axios from 'axios';

const Search = () => {
	const [searchText, setSearchText] = useState('');
	const [searchResults, setSearchResults] = useState([]);

	const onFormSubmit = async (e) => {
		e.preventDefault();

		/* Just search Rob if no text is inputted. */
		const response = await Axios.get(`/search/${searchText ? searchText : 'Rob'}`);
		if (response) {
			setSearchResults(response.data);
		}
	};

	return (
		<>
			<form onSubmit={(e) => onFormSubmit(e)}>
				<input
					onChange={(e) => {
						setSearchText(e.target.value);
					}}
					value={searchText}
					placeholder="Enter a verified Twitter Account"
					type="text"
					className="user-search"
				/>
				<button>Search</button>
			</form>
			<ul>
				{searchResults.map((result) => {
					return <li key={result.id}>{result.name}</li>;
				})}
			</ul>
		</>
	);
};
export default Search;
