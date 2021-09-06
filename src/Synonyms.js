import React from "react";

export default function Synonyms(props) {
	if (props.synonyms.length === 0) {
		return null;
	} else
		return (
			<div className="Synonyms pt-4">
				<ul>
					{props.synonyms.map(function (synonym, index) {
						return <li key={index}>{synonym}</li>;
					})}
				</ul>
			</div>
		);
}
