import { useNavigate } from "react-router-dom";
import "./InfoBox.scss";

export default function InfoBox({ info, width = "100%" }) {
	const { link = {} } = info;

	const navigate = useNavigate();

	function handleClick(url) {
		if (url) navigate(url);
	}

	return (
		<div className="info-box-container" style={{ width }}>
			{Array.from(Object.entries(info)).map(([title, content]) => (
				<>
					{title !== "link" ? (
						<div className="info-text">
							<p className="title">{title}</p>
							<p
								className={`content ${link[title] ? "link" : ""}`}
								onClick={() => handleClick(link[title])}
							>
								{content}
							</p>
						</div>
					) : null}
				</>
			))}
		</div>
	);
}
