import { useState } from "react";
import { useParams } from "react-router-dom";
import CriteriaRadarChart from "../../components/CriteriaRadarChart/CriteriaRadarChart";
import CriteriaTable from "../../components/CriteriaTable/CriteriaTable";
import DisplayTypeInput from "../../components/DisplayTypeInput/DisplayTypeInput";

import Header from "../../components/Header/Header";

import "./SubjectDetailPage.scss";
import SingleDropDown from "../../components/SingleDropDown/SingleDropDown";
import { SEMESTER_YEAR_NAME } from "../../constants/selectName";
import { useSelector } from "react-redux";
import { selectSubjectAssessmentData } from "../../features/assessment/assessmentSlice";

const criteriaData = Array(20)
	.fill("")
	.map((_, index) => ({
		id: index,
		criteria: `Tiêu chí ${index + 1}`,
		point: {
			"2017-2018": parseInt(((Math.random() + 3) / 4) * 100),
			"2018-2019": parseInt(((Math.random() + 3) / 4) * 100),
			"2019-2020": parseInt(((Math.random() + 3) / 4) * 100),
			"2020-2021": parseInt(((Math.random() + 3) / 4) * 100),
			"2021-2022": parseInt(((Math.random() + 3) / 4) * 100),
		},
	}));

const choices = ["Danh sách giảng viên", "Biểu đồ"];

export default function SubjectDetailPage() {
	const { subjectName } = useParams();

	const [displayType, setDisplayType] = useState(0);
	const [semesterYear, setSemesterYear] = useState(SEMESTER_YEAR_NAME[0]);

	const data = useSelector(selectSubjectAssessmentData(semesterYear));

	return (
		<div className="subject-detail-page">
			<Header title={subjectName} />
			<DisplayTypeInput choices={choices} setChoice={setDisplayType} />
			<SingleDropDown
				title="kỳ"
				selected={semesterYear}
				dataset={SEMESTER_YEAR_NAME}
				onChange={setSemesterYear}
			/>
			{displayType == 0 ? (
				<CriteriaTable data={data} />
			) : // <CriteriaRadarChart data={criteriaData} />
			null}
		</div>
	);
}
