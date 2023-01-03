import { useState } from "react";
import { useParams } from "react-router-dom";
import DisplayTypeInput from "../../components/DisplayTypeInput/DisplayTypeInput";

import Header from "../../components/Header/Header";

import "./StaffDetailPage.scss";

import BasicInfoTab from "./tabs/BasicInfoTab/BasicInfoTab";
import CommentTab from "./tabs/CommentTab/CommentTab";
import AssessmentTab from "./tabs/AssessmentTab/AssessmentTab";

const tabNames = [
	"Thông tin cơ bản",
	"Thống kê bình luận",
	"Thống kê điểm đánh giá",
];

export default function StaffDetailPage() {
	const { id: staffName } = useParams();

	const [displayType, setDisplayType] = useState(0);

	function getRenderedTab() {
		switch (displayType) {
			case 0:
				return <BasicInfoTab staffName={staffName} />;
			case 1:
				return <CommentTab staffName={staffName} />;
			case 2:
				return <AssessmentTab staffName={staffName} />;
			default:
				return <AssessmentTab staffName={staffName} />;
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
