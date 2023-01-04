import { useState } from "react";
import { useParams } from "react-router-dom";
import CriteriaRadarChart from "../../components/CriteriaRadarChart/CriteriaRadarChart";
import CriteriaTable from "../../components/CriteriaTable/CriteriaTable";
import DisplayTypeInput from "../../components/DisplayTypeInput/DisplayTypeInput";

import Header from "../../components/Header/Header";

import "./ClassDetailPage.scss";
import {
	LEARNING_TYPE_NAME,
	SEMESTER_YEAR_NAME,
} from "../../constants/selectName";
import SingleDropDown from "../../components/SingleDropDown/SingleDropDown";
import { useSelector } from "react-redux";
import { selectClassDetailAssessment } from "../../features/assessment/assessmentSlice";
import InfoBox from "../../components/InfoBox/InfoBox";
import CriteriaChart from "../../components/CriteriaChart/CriteriaChart";
import { selectCommentOfClass } from "../../features/comments/commentSlice";

const choices = ["Thông tin cơ bản", "Nhận xét", "Biểu đồ"];

export default function ClassDetailPage() {
	const { id } = useParams();

	const [semesterYear, setSemesterYear] = useState(SEMESTER_YEAR_NAME[0]);
	const [displayType, setDisplayType] = useState(0);

	const data = useSelector(selectClassDetailAssessment(semesterYear, id));
	const comments = useSelector(selectCommentOfClass(id, [semesterYear]));

	function getRenderedTab() {
		switch (displayType) {
			case 0:
				return (
					<div className="basic-info">
						<InfoBox info={data?.info || {}} />
						<CriteriaTable data={data?.points} />
					</div>
				);
			case 1:
			case 2:
			default:
				return (
					<CriteriaChart semester={semesterYear} data={data?.points} />
				);
		}
	}

	return (
		<div className="class-detail-page">
			<Header title={`Lớp ${id}`} />
			<DisplayTypeInput choices={choices} setChoice={setDisplayType} />
			<div className="dropdown">
				<SingleDropDown
					title="học kỳ"
					selected={semesterYear}
					onChange={setSemesterYear}
					dataset={SEMESTER_YEAR_NAME}
				/>
			</div>
			{data ? <>{getRenderedTab()}</> : <h3>Không có dữ liệu</h3>}
		</div>
	);
}
