import { useEffect, useState } from "react";

import Header from "../../components/Header/Header";
import SearchBox from "../../components/SearchBox/SearchBox";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DisplayTypeInput from "../../components/DisplayTypeInput/DisplayTypeInput";
import SingleDropDown from "../../components/SingleDropDown/SingleDropDown";
import SubjectHistogramChart from "../../components/SubjectHistogramChart/SubjectHistogramChart";
import SubjectTable from "../../components/SubjectTable/SubjectTable";
import { SEMESTER_YEAR_NAME } from "../../constants/selectName";
import { selectSubjectAssessmentData } from "../../features/assessment/assessmentSlice";
import "./SubjectPage.scss";
import DropDown from "../../components/DropDown/DropDown";

export default function SubjectPage() {
	const navigate = useNavigate();

	const [displayType, setDisplayType] = useState(0);
	const [semesterYear, setSemesterYear] = useState(SEMESTER_YEAR_NAME[0]);
	const [subject, setSubject] = useState([]);

	const data = useSelector(selectSubjectAssessmentData(semesterYear));

	useEffect(() => {
		setSubject(data.map((v) => v[0]));
	}, [data]);

	return (
		<div className="subject-page">
			<Header title="Thống kê theo môn" />
			<DisplayTypeInput setChoice={setDisplayType} />
			<SingleDropDown
				title="kỳ"
				selected={semesterYear}
				dataset={SEMESTER_YEAR_NAME}
				onChange={setSemesterYear}
			/>
			{displayType === 1 ? (
				<SubjectHistogramChart semester={semesterYear} />
			) : (
				<>
					<DropDown
						titleWidth={"max-content"}
						width={500}
						selected={subject}
						title={"môn học"}
						dataset={data?.map((v) => v[0])}
						onChange={setSubject}
					/>
					<SubjectTable
						semester={semesterYear}
						data={data}
						subject={data.map((v) => v[0])}
					/>
				</>
			)}
		</div>
	);
}
