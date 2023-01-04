import { useSelector } from "react-redux";
import { selectStaffRanking } from "../../features/assessment/assessmentSlice";

import "./StaffRanking.scss";
import { useNavigate } from "react-router-dom";

export default function StaffRanking({ semester }) {
	const navigate = useNavigate();
	const data = useSelector(selectStaffRanking(semester));

	return (
		<div className="staff-ranking-container">
			<h2>
				Bảng xếp hạng giảng viên theo điểm đánh giá trung bình {semester}
			</h2>
			<div className="ranking-table">
				{data.map(([staffName, point], index) => (
					<div
						key={staffName}
						className="staff"
						onClick={() => navigate(`/staff/${staffName}`)}
					>
						<p className="index">{index + 1}</p>
						<p className="name">{staffName}</p>
						<p className="point">{point.toFixed(2)}</p>
					</div>
				))}
			</div>
		</div>
	);
}
