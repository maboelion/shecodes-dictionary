import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
	return (
		<section className="Meaning">
			<h3>{props.meaning.partOfSpeech}</h3>
			{props.meaning.definitions.map(function (definition, index) {
				return (
					<div key={index}>
						<div>
							<div className="definition mt-4">
								~ Definition: {definition.definition}
							</div>

							<div className="mt-1">
								<em>{definition.example}</em>
							</div>
							<div>
								<Synonyms synonyms={definition.synonyms} />
							</div>
						</div>
					</div>
				);
			})}
		</section>
	);
}
