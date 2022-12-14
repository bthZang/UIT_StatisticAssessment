import { useEffect, useState } from "react";

import Header from "../../components/Header/Header";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DisplayTypeInput from "../../components/DisplayTypeInput/DisplayTypeInput";
import DropDown from "../../components/DropDown/DropDown";
import SingleDropDown from "../../components/SingleDropDown/SingleDropDown";
import SubjectHistogramChart from "../../components/SubjectHistogramChart/SubjectHistogramChart";
import SubjectTable from "../../components/SubjectTable/SubjectTable";
import { SEMESTER_YEAR_NAME } from "../../constants/selectName";
import { selectSubjectAssessmentData } from "../../features/assessment/assessmentSlice";
import "./SubjectPage.scss";

export default function SubjectPage() {
	const navigate = useNavigate();

	const [displayType, setDisplayType] = useState(0);
	const [semesterYear, setSemesterYear] = useState(SEMESTER_YEAR_NAME[0]);
	const [subject, setSubject] = useState([]);

	const data = useSelector(selectSubjectAssessmentData(semesterYear));

	useEffect(() => {
		setSubject(data.map((v) => v[0]));
	}, []);

	return (
		<div className="subject-page">
			<Header title="Thống kê theo môn" />
			<DisplayTypeInput setChoice={setDisplayType} />
			{displayType === 1 ? (
				<>
					<SingleDropDown
						title="kỳ"
						selected={semesterYear}
						dataset={SEMESTER_YEAR_NAME}
						onChange={setSemesterYear}
					/>
					<SubjectHistogramChart semester={semesterYear} />
				</>
			) : (
				<>
					<div className="dropdown">
						<SingleDropDown
							title="kỳ"
							selected={semesterYear}
							dataset={SEMESTER_YEAR_NAME}
							onChange={setSemesterYear}
						/>
						<DropDown
							titleWidth={"max-content"}
							width={500}
							selected={subject}
							title={"môn học"}
							dataset={data?.map((v) => v[0])}
							onChange={setSubject}
						/>
					</div>
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
