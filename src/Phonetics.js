import React from "react";

export default function Phonetics(props) {
	return (
		<div className="Phonetics">
			<div className="word">{props.phonetic.text}</div>
			<audio controls src={props.phonetic.audio}>
				Your browser does not support the
				<code>audio</code> element.
			</audio>
		</div>
	);
}
