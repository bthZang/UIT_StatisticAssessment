import { useParams } from "react-router-dom";
import ClassHistogramChart from "../../components/ClassHistogramChart/ClassHistogramChart";
import DisplayTypeInput from "../../components/DisplayTypeInput/DisplayTypeInput";
import Header from "../../components/Header/Header";
import StaffHistogramChart from "../../components/StaffHistogramChart/StaffHistogramChart";

import "./CriteriaDetailPage.scss";

export default function CriteriaDetailPage() {
	const { id } = useParams();

	return (
		<div className="criteria-detail-page">
			<Header title={`Chi tiết tiêu chí`} />
			<div>
				<p>Tiêu chí: </p>
				<p>{id}</p>
			</div>
			{/* <DisplayTypeInput /> */}
			{/* <p>Thống kê điểm đánh giá theo tiêu chí này của các giảng viên</p> */}
			<StaffHistogramChart />

			{/* <p>Thống kê điểm đánh giá theo tiêu chí này của các lớp</p> */}
			<ClassHistogramChart />
		</div>
	);
}
