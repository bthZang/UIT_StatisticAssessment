import "./InfoBox.scss";

export default function InfoBox({ info }) {
	return (
		<div className="info-box-container">
			{Array.from(Object.entries(info)).map(([title, content]) => (
				<div className="info-text">
					<p className="title">{title}</p>
					<p className="content">{content}</p>
				</div>
			))}
		</div>
	);
}
