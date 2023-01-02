import { useState } from "react";

import CriteriaChart from "../../components/CriteriaChart/CriteriaChart";

import CriteriaTable from "../../components/CriteriaTable/CriteriaTable";
import DisplayTypeInput from "../../components/DisplayTypeInput/DisplayTypeInput";
import Header from "../../components/Header/Header";
import "./CriteriaPage.scss";
import { useSelector } from "react-redux";
import { selectCriteria } from "../../features/criteria/criteriaSlice";
import {
	LEARNING_TYPE_NAME,
	SEMESTER_NAME,
	SEMESTER_YEAR_NAME,
	YEAR_NAME,
} from "../../constants/selectName";
import YearDropDown from "../../components/YearDropDown/YearDropDown";
import LearningTypeDropDown from "../../components/LearningTypeDropDown/LearningTypeDropDown";
import SemesterDropDown from "../../components/SemesterDropDown/SemesterDropDown";
import SingleDropDown from "../../components/SingleDropDown/SingleDropDown";

const criteriaData = [
	{
		id: 1,
		criteria:
			"Chuẩn đầu ra, yêu cầu và nội dung môn học được giảng viên giới thiệu trong buổi học đầu tiên và thường xuyên nhắc lại trong các buổi học tiếp theo",
		point: {
			"2017-2018": parseInt(((Math.random() + 3) / 4) * 100),
			"2018-2019": parseInt(((Math.random() + 3) / 4) * 100),
			"2019-2020": parseInt(((Math.random() + 3) / 4) * 100),
			"2020-2021": parseInt(((Math.random() + 3) / 4) * 100),
			"2021-2022": parseInt(((Math.random() + 3) / 4) * 100),
		},
	},
	{
		id: 2,
		criteria:
			"Phòng học,thí nghiệm và trang thiết bị đáp ứng yêu cầu giảng dạy và học tập.",
		point: {
			"2017-2018": parseInt(((Math.random() + 3) / 4) * 100),
			"2018-2019": parseInt(((Math.random() + 3) / 4) * 100),
			"2019-2020": parseInt(((Math.random() + 3) / 4) * 100),
			"2020-2021": parseInt(((Math.random() + 3) / 4) * 100),
			"2021-2022": parseInt(((Math.random() + 3) / 4) * 100),
		},
	},
	{
		id: 3,
		criteria:
			"Giáo trình, bài giảng và tài liệu phục vụ môn học được cung cấp đầy đủ và cập nhật trên hệ thống Moodle",
		point: {
			"2017-2018": parseInt(((Math.random() + 3) / 4) * 100),
			"2018-2019": parseInt(((Math.random() + 3) / 4) * 100),
			"2019-2020": parseInt(((Math.random() + 3) / 4) * 100),
			"2020-2021": parseInt(((Math.random() + 3) / 4) * 100),
			"2021-2022": parseInt(((Math.random() + 3) / 4) * 100),
		},
	},
	{
		id: 4,
		criteria:
			"Giảng viên hướng dẫn Anh/Chị phương pháp học tập chủ động và tạo động cơ học tập suốt đời",
		point: {
			"2017-2018": parseInt(((Math.random() + 3) / 4) * 100),
			"2018-2019": parseInt(((Math.random() + 3) / 4) * 100),
			"2019-2020": parseInt(((Math.random() + 3) / 4) * 100),
			"2020-2021": parseInt(((Math.random() + 3) / 4) * 100),
			"2021-2022": parseInt(((Math.random() + 3) / 4) * 100),
		},
	},
	{
		id: 5,
		criteria:
			"Giảng viên trình bày các vấn đề trong môn học mang tính cập nhật, chuẩn xác và có liên hệ thực tiễn",
		point: {
			"2017-2018": parseInt(((Math.random() + 3) / 4) * 100),
			"2018-2019": parseInt(((Math.random() + 3) / 4) * 100),
			"2019-2020": parseInt(((Math.random() + 3) / 4) * 100),
			"2020-2021": parseInt(((Math.random() + 3) / 4) * 100),
			"2021-2022": parseInt(((Math.random() + 3) / 4) * 100),
		},
	},
	{
		id: 6,
		criteria:
			"Phương pháp giảng dạy của giảng viên giúp Anh,Chị hiểu được và vận dụng được kiến thức",
		point: {
			"2017-2018": parseInt(((Math.random() + 3) / 4) * 100),
			"2018-2019": parseInt(((Math.random() + 3) / 4) * 100),
			"2019-2020": parseInt(((Math.random() + 3) / 4) * 100),
			"2020-2021": parseInt(((Math.random() + 3) / 4) * 100),
			"2021-2022": parseInt(((Math.random() + 3) / 4) * 100),
		},
	},
];

export default function CriteriaPage() {
	const [displayType, setDisplayType] = useState(0);

	const [semesterYear, setSemesterYear] = useState(SEMESTER_YEAR_NAME[0]);
	const [type, setType] = useState(LEARNING_TYPE_NAME[0]);

	const criteriaData = useSelector(selectCriteria(type, semesterYear));
	console.log({ criteriaData });

	return (
		<div className="criteria-page">
			<Header title={"Thống kê theo tiêu chí"} />
			<DisplayTypeInput setChoice={setDisplayType} />
			<div className="dropdown">
				<SingleDropDown
					title={"kỳ"}
					dataset={SEMESTER_YEAR_NAME}
					selected={semesterYear}
					onChange={setSemesterYear}
				/>
				<SingleDropDown
					title={"hình thức dạy"}
					dataset={LEARNING_TYPE_NAME}
					selected={type}
					onChange={setType}
				/>
			</div>
			{displayType == 0 ? (
				<CriteriaTable data={criteriaData} />
			) : (
				<CriteriaChart data={criteriaData} />
			)}
		</div>
	);
}
