import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
	const [keyword, setKeyword] = useState("sunset");
	const [results, setResults] = useState(null);
	const [loaded, setLoaded] = useState(false);
	const [photos, setPhotos] = useState(null);

	function handleResponse(response) {
		setResults(response.data[0]);
	}

	function handlePexelsResponse(response) {
		setPhotos(response.data.photos);
	}

	function search() {
		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(apiUrl).then(handleResponse);

		const apiKey = "563492ad6f91700001000001f55dd99188bc4556ab3bd71cb7f85c19";
		let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;
		let headers = { Authorization: `Bearer ${apiKey}` };
		axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
					<br />
					<span>
						note: you can't use names like "London", "Andes", "Hercules" etc.
					</span>
				</section>
				<Results results={results} />
				<Photos photos={photos} />
			</div>
		);
	} else {
		load();
		return "Loading";
	}
}
