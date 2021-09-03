import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
	const [keyword, setKeyword] = useState(null);

	function handleResponse(response) {
		console.log(response.data[0]);
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
		</div>
	);
}
