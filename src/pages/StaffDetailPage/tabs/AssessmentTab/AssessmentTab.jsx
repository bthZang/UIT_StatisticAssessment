import { useState } from "react";
import SingleDropDown from "../../../../components/SingleDropDown/SingleDropDown";
import StaffSubjectChart from "../../../../components/StaffSubjectChart/StaffSubjectChart";

import "./AssessmentTab.scss";
import { useSelector } from "react-redux";
import { selectClassOfStaff } from "../../../../features/assessment/assessmentSlice";

export default function AssessmentTab({ staffName }) {
	const [semesterYear, setSemesterYear] = useState();

	const taughtClass = useSelector(selectClassOfStaff(staffName));

	return (
		<div className="chart">
			<SingleDropDown
				title="kỳ học"
				selected={semesterYear}
				onChange={setSemesterYear}
				dataset={taughtClass.map((v) => v[0])}
			/>
			<StaffSubjectChart
				semester={semesterYear}
				data={
					taughtClass.find(
						([semester]) => semester === semesterYear
					)?.[1] || []
				}
			/>
		</div>
	);
}
