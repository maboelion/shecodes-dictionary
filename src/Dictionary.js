import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
	const [keyword, setKeyword] = useState("sunset");
	const [results, setResults] = useState(null);
	const [loaded, setLoaded] = useState(false);

	function handleResponse(response) {
		setResults(response.data[0]);
	}

	function search() {
		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(apiUrl).then(handleResponse);
	}

	function handleSubmit(event) {
		event.preventDefault();
		search();
	}

	function updateKeyword(event) {
		setKeyword(event.target.value);
	}

	function load() {
		setLoaded(true);
		search();
	}

	if (loaded) {
		return (
			<div className="Dictionary">
				<section className="search">
					<div className="question">What word do you want to look up?</div>
					<form onSubmit={handleSubmit}>
						<input
							type="search"
							autoFocus={true}
							onChange={updateKeyword}
							defaultValue={keyword}
						/>
					</form>
					<span>e.g. alpaca, sunrise, dream, ...</span>
				</section>
				<Results results={results} />
			</div>
		);
	} else {
		load();
		return "Loading";
	}
}
