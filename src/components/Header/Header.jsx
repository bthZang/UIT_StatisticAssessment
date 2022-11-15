import { useNavigate } from "react-router-dom";

import GO_BACK_ICON from "../../assets/chevron-back.svg";

import "./Header.scss";

export default function Header({ title }) {
	const navigate = useNavigate();

	return (
		<div className="header" style={{  }}>
			<div className="go-back" onClick={() => navigate(-1)}>
				<img src={GO_BACK_ICON} alt="" />
				<p>Quay lại</p>
			</div>
			<div className="title">{title}</div>
		</div>
	);
}
