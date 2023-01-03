import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./StaffDetailStatisticPage.scss";
import { useSelector } from "react-redux";
import {
	selectStaffByPoint,
	selectStaffHistogramData,
} from "../../features/assessment/assessmentSlice";
import StaffTable from "../../components/StaffTable/StaffTable";

export default function StaffDetailStatisticPage() {
	const { semester, point } = useParams();

	// const data = useSelector(selectStaffHistogramData(semester));
	// const staffs =
	// 	data?.data?.[data?.labels?.indexOf(parseFloat(point)) || 0] || [];
	// console.log({ staffs });
	const data = useSelector(selectStaffByPoint(semester, point));

	return (
		<div className="staff-detail-statistic-page">
			<Header title={``} />
			<h2>
				Danh sách các giảng viên có điểm trung bình {point} trong học kỳ {semester}:
			</h2>
			<StaffTable semester={semester} data={data} />
		</div>
	);
}
