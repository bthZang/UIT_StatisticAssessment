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
		point: {
			"2017-2018": 65,
			"2018-2019": 70,
			"2019-2020": 80,
			"2020-2021": 85,
			"2021-2022": 90,
		},
	},
	{
		id: 2,
		criteria:
			"Phòng học,thí nghiệm và trang thiết bị đáp ứng yêu cầu giảng dạy và học tập",
		point: {
			"2017-2018": 55,
			"2018-2019": 70,
			"2019-2020": 75,
			"2020-2021": 85,
			"2021-2022": 95,
		},
	},
	{
		id: 3,
		criteria:
			"Giáo trình, bài giảng và tài liệu phục vụ môn học được cung cấp đầy đủ và cập nhật trên hệ thống Moodle",
		point: {
			"2017-2018": 60,
			"2018-2019": 75,
			"2019-2020": 80,
			"2020-2021": 55,
			"2021-2022": 95,
		},
	},
];

export default function CriteriaPage() {
	const [displayType, setDisplayType] = useState(0);

	return (
		<div className="criteria-page">
			<Header title={"Thống kê theo tiêu chí"} />
			<DisplayTypeInput setChoice={setDisplayType} />
			{displayType == 0 ? (
				<CriteriaTable data={criteriaData} />
			) : (
				<CriteriaChart data={criteriaData} />
			)}
		</div>
	);
}
