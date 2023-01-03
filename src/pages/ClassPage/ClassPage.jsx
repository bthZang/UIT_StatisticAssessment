import Header from "../../components/Header/Header";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ClassHistogramChart from "../../components/ClassHistogramChart/ClassHistogramChart";
import DisplayTypeInput from "../../components/DisplayTypeInput/DisplayTypeInput";
import YearDropDown from "../../components/YearDropDown/YearDropDown";
import "./ClassPage.scss";

import { useSelector } from "react-redux";
import ClassTable from "../../components/ClassTable/ClassTable";
import DropDown from "../../components/DropDown/DropDown";
import SingleDropDown from "../../components/SingleDropDown/SingleDropDown";
import { SEMESTER_YEAR_NAME } from "../../constants/selectName";
import { selectSubjectAssessmentData } from "../../features/assessment/assessmentSlice";

export default function ClassPage() {
	const navigate = useNavigate();

	const [displayType, setDisplayType] = useState(0);
	const [semesterYear, setSemesterYear] = useState(SEMESTER_YEAR_NAME[0]);
	const [classes, setClasses] = useState([]);

	const data = useSelector(selectSubjectAssessmentData(semesterYear));

	useEffect(() => {
		setClasses(data.map((v) => v[0]));
	}, []);

	return (
		<div className="class-page">
			<Header title="Thống kê theo lớp" />
			<DisplayTypeInput setChoice={setDisplayType} />
			{displayType === 1 ? (
				<>
					<SingleDropDown
						title="kỳ"
						selected={semesterYear}
						dataset={SEMESTER_YEAR_NAME}
						onChange={setSemesterYear}
					/>
					<ClassHistogramChart semester={semesterYear} />
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
							selected={classes}
							title={"môn học"}
							dataset={data?.map((v) => v[0])}
							onChange={setClasses}
						/>
					</div>
					<ClassTable
						semester={semesterYear}
						data={data}
						subject={data.map((v) => v[0])}
					/>
				</>
			)}
		</div>
	);
}
