import React, { useState, useContext } from 'react';
import Axios from 'axios';
import { SearchContext } from '../context/SearchContext';

const Search = () => {
	const [searchText, setSearchText] = useState('');
	const { setSearchResults } = useContext(SearchContext);

	const onFormSubmit = async (e) => {
		e.preventDefault();

		/* TODO (04/28/2021 22:11) this is not working */
		/* Just search Rob if no text is inputted. */
		const response = await Axios.get(`/search/${searchText ? searchText : 'Rob'}`);
		if (response) {
			console.log(response.data);
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
		</>
	);
};
export default Search;
