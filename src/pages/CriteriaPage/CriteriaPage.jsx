import { useState } from "react";

import CriteriaChart from "../../components/CriteriaChart/CriteriaChart";

import { useSelector } from "react-redux";
import CriteriaTable from "../../components/CriteriaTable/CriteriaTable";
import DisplayTypeInput from "../../components/DisplayTypeInput/DisplayTypeInput";
import Header from "../../components/Header/Header";
import SingleDropDown from "../../components/SingleDropDown/SingleDropDown";
import {
	LEARNING_TYPE_NAME,
	SEMESTER_YEAR_NAME,
} from "../../constants/selectName";
import { selectCriteria } from "../../features/criteria/criteriaSlice";
import "./CriteriaPage.scss";

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
				<CriteriaChart semester={semesterYear} data={criteriaData} />
			)}
		</div>
	);
}
