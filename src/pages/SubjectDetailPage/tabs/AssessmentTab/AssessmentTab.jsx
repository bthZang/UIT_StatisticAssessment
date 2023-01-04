import { useState } from "react";
import SingleDropDown from "../../../../components/SingleDropDown/SingleDropDown";

import { useSelector } from "react-redux";
import SubjectClassChart from "../../../../components/SubjectClassChart/SubjectClassChart";
import { selectClassOfSubject } from "../../../../features/assessment/assessmentSlice";
import "./AssessmentTab.scss";

export default function AssessmentTab({ subjectName }) {
	const [semesterYear, setSemesterYear] = useState();

	const classes = useSelector(selectClassOfSubject(subjectName));
	console.log({ classes });

	return (
		<div className="subject-detail-chart">
			<SingleDropDown
				title="kỳ học"
				selected={semesterYear}
				onChange={setSemesterYear}
				dataset={classes.map((v) => v[0])}
			/>
			<SubjectClassChart
				semester={semesterYear}
				data={
					classes.find(([semester]) => semester === semesterYear)?.[1] ||
					[]
				}
			/>
		</div>
	);
}
