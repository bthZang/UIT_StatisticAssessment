import LOGO from "../../assets/logo.svg";

import "./HomePage.scss";

export default function HomePage() {
	return (
		<div className="home">
			<div className="home__hero-image">
				<img src={LOGO} alt="" />
			</div>
			<div className="home__navigation-button">
				<button type="button">Tìm kiếm bình luận</button>
				<button type="button">Thống kê cán bộ</button>
				<button type="button">Thống kê theo tiêu chí</button>
				<button type="button">Thống kê theo môn học</button>
				<button type="button">Thống kê theo lớp</button>
			</div>
		</div>
	);
}
