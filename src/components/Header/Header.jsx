import { useNavigate } from "react-router-dom";

import GO_BACK_ICON from "../../assets/chevron-back.svg";

import "./Header.scss";

export default function Header({ title }) {
	const navigate = useNavigate();

	return (
		<div className="header" style={{}}>
			<div className="go-back" onClick={() => navigate("/")}>
				<img src={GO_BACK_ICON} alt="" />
				<p>Về trang chủ</p>
			</div>
			<div className="title">{title}</div>
		</div>
	);
}
