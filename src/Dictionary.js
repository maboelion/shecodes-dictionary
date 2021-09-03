import React, { useState } from "react";

export default function Dictionary() {
	const [keyword, setKeyword] = useState(null);

	function searchKeyword(event) {
		event.preventDefault();
		alert(`Searching for ${keyword}`);
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
