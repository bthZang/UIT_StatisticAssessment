import { useState } from "react";
import CriteriaChart from "../../components/CriteriaChart/CriteriaChart";

import CriteriaTable from "../../components/CriteriaTable/CriteriaTable";
import DisplayTypeInput from "../../components/DisplayTypeInput/DisplayTypeInput";
import Header from "../../components/Header/Header";
import "./CriteriaPage.scss";

const criteriaData = [
	{
		id: 1,
		criteria:
			"Chuẩn đầu ra, yêu cầu và nội dung môn học được giảng viên giới thiệu trong buổi học đầu tiên và thường xuyên nhắc lại trong các buổi học tiếp theo",
		point: 85,
	},
	{
		id: 2,
		criteria:
			"Chuẩn đầu ra, yêu cầu và nội dung môn học được giảng viên giới thiệu trong buổi học đầu tiên và thường xuyên nhắc lại trong các buổi học tiếp theo",
		point: 55,
	},
	{
		id: 3,
		criteria:
			"Chuẩn đầu ra, yêu cầu và nội dung môn học được giảng viên giới thiệu trong buổi học đầu tiên và thường xuyên nhắc lại trong các buổi học tiếp theo",
		point: 65,
	},
	{
		id: 4,
		criteria:
			"Chuẩn đầu ra, yêu cầu và nội dung môn học được giảng viên giới thiệu trong buổi học đầu tiên và thường xuyên nhắc lại trong các buổi học tiếp theo",
		point: 80,
	},
	{
		id: 5,
		criteria:
			"Chuẩn đầu ra, yêu cầu và nội dung môn học được giảng viên giới thiệu trong buổi học đầu tiên và thường xuyên nhắc lại trong các buổi học tiếp theo",
		point: 70,
	},
	{
		id: 6,
		criteria:
			"Chuẩn đầu ra, yêu cầu và nội dung môn học được giảng viên giới thiệu trong buổi học đầu tiên và thường xuyên nhắc lại trong các buổi học tiếp theo",
		point: 30,
	},
];

export default function CriteriaPage() {
	const [displayType, setDisplayType] = useState(0);

	return (
		<div className="criteria-page">
			<Header title={"Khảo sát theo tiêu chí"} />
			<DisplayTypeInput setChoice={setDisplayType} />
			{displayType == 0 ? (
				<CriteriaTable data={criteriaData} />
			) : (
				<CriteriaChart data={criteriaData} />
			)}
		</div>
	);
}
