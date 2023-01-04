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
import {
	selectSubjectAssessmentData,
	selectSubjectDetailAssessment,
} from "../../features/assessment/assessmentSlice";
import InfoBox from "../../components/InfoBox/InfoBox";
import BasicInfoTab from "./tabs/BasicInfoTab/BasicInfoTab";
import AssessmentTab from "./tabs/AssessmentTab/AssessmentTab";
import CommentTab from "./tabs/CommentTab/CommentTab";

const choices = [
	"Danh sách giảng viên",
	"Nhận xét",
	"Thống kê điểm đánh giá của từng lớp",
];

export default function SubjectDetailPage() {
	const { subjectName } = useParams();

	const [displayType, setDisplayType] = useState(0);
	const [semesterYear, setSemesterYear] = useState(SEMESTER_YEAR_NAME[0]);

	function getRenderedTab() {
		switch (displayType) {
			case 0:
				return (
					<>
						<SingleDropDown
							title="kỳ"
							selected={semesterYear}
							dataset={SEMESTER_YEAR_NAME}
							onChange={setSemesterYear}
						/>
						<BasicInfoTab
							semesterYear={semesterYear}
							subjectName={subjectName}
						/>
					</>
				);
			case 1:
				return <CommentTab name={subjectName} semester={semesterYear} />;
			case 2:
			default:
				return <AssessmentTab subjectName={subjectName} />;
		}
	}

	return (
		<div className="subject-detail-page">
			<Header title={subjectName} />
			<DisplayTypeInput choices={choices} setChoice={setDisplayType} />
			{getRenderedTab()}
		</div>
	);
}
