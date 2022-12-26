import { useState, useEffect } from "react";

import "./DisplayTypeInput.scss";

export default function DisplayTypeInput({
	choices = ["Dạng bảng", "Dạng biểu đồ"],
	setChoice = () => {},
}) {
	const [selected, setSelected] = useState(choices[0] || "");

	useEffect(() => {
		setChoice(choices.indexOf(selected));
	}, [selected]);

	return (
		<div className="display-type-input">
			<div className="choices">
				{choices.map((choice, index) => (
					<div
						key={choice}
						className={`choice ${selected === choice && "selected"}`}
						onClick={() => setSelected(choice)}
					>
						<p>{choice}</p>
						<div />
					</div>
				))}
			</div>
			<div className="line" />
		</div>
	);
}
