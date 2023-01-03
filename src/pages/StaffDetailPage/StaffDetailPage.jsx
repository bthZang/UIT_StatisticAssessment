import { useState } from "react";
import { useParams } from "react-router-dom";
import DisplayTypeInput from "../../components/DisplayTypeInput/DisplayTypeInput";

import Header from "../../components/Header/Header";

import "./StaffDetailPage.scss";

import { SEMESTER_NAME } from "../../constants/selectName";
import BasicInfoTab from "./tabs/BasicInfoTab/BasicInfoTab";

const tabNames = [
	"Thông tin cơ bản",
	"Thống kê bình luận",
	"Thống kê điểm đánh giá",
];

export default function StaffDetailPage() {
	const { id: staffName } = useParams();

	const [displayType, setDisplayType] = useState(0);

	const [semester, setSemester] = useState(SEMESTER_NAME[0]);

	// const data = useSelector(selectStaffCriteria(semester, id));

	function getRenderedTab() {
		switch (displayType) {
			case 0:
				return <BasicInfoTab staffName={staffName} />;
			case 1:
				return null;
			case 2:
				return null;
			default:
				return null;
		}
	}

	return (
		<div className="staff-detail-page">
			<Header title={`Giảng viên - ${staffName}`} />
			<DisplayTypeInput choices={tabNames} setChoice={setDisplayType} />
			{getRenderedTab()}
			{/* {displayType === 1 ? (
				<StaffRadarChart data={staffData} />
			) : (
				<CriteriaTable data={data} />
			)} */}
		</div>
	);
}
