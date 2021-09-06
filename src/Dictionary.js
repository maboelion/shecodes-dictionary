import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
	const [keyword, setKeyword] = useState(null);
	const [results, setResults] = useState(null);

	function handleResponse(response) {
		setResults(response.data[0]);
	}

	function searchKeyword(event) {
		event.preventDefault();

		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(apiUrl).then(handleResponse);
	}

	function updateKeyword(event) {
		setKeyword(event.target.value);
	}

	return (
		<div className="Dictionary">
			<form onSubmit={searchKeyword}>
				<input type="search" autoFocus={true} onChange={updateKeyword} />
			</form>
			<Results results={results} />
		</div>
	);
}
