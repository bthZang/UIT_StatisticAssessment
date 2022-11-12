import LOGO from "../../assets/logo.svg";

import { useNavigate } from "react-router-dom";

import "./HomePage.scss";

export default function HomePage() {
	const navigate = useNavigate();

	return (
		<div className="home">
			<div className="home__hero-image">
				<img src={LOGO} alt="" />
			</div>
			<div className="home__navigation-button">
				<button type="button" onClick={() => navigate("comment")}>
					Tìm kiếm bình luận
				</button>
				<button type="button" onClick={() => navigate("staff")}>
					Thống kê cán bộ
				</button>
				<button type="button" onClick={() => navigate("criteria")}>
					Thống kê theo tiêu chí
				</button>
				<button type="button" onClick={() => navigate()}>
					Thống kê theo môn học
				</button>
				<button type="button" onClick={() => navigate()}>
					Thống kê theo lớp
				</button>
			</div>
		</div>
	);
}
