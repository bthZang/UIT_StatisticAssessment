import { useState } from "react";
import { useParams } from "react-router-dom";
import CriteriaTable from "../../components/CriteriaTable/CriteriaTable";
import DisplayTypeInput from "../../components/DisplayTypeInput/DisplayTypeInput";

import Header from "../../components/Header/Header";
import StaffRadarChart from "../../components/StaffRadarChart/StaffRadarChart";

import "./StaffDetailPage.scss";
import YearDropDown from "../../components/YearDropDown/YearDropDown";
import { SEMESTER_NAME } from "../../constants/selectName";
import {
	selectStaffCriteria,
	selectStaffInfo,
} from "../../features/assessment/assessmentSlice";
import { useSelector } from "react-redux";

const staffData = Array(20)
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

export default function StaffDetailPage() {
	const { id } = useParams();

	const [displayType, setDisplayType] = useState(0);

	const [semester, setSemester] = useState(SEMESTER_NAME[0]);

	const data = useSelector(selectStaffCriteria(semester, id));
	const profile = useSelector(selectStaffInfo(id));
	console.log({ profile });

	return (
		<div className="staff-detail-page">
			<Header title={`Mã cán bộ ${id}`} />
			<DisplayTypeInput setChoice={setDisplayType} />
			<YearDropDown semester={semester} onChange={setSemester} />
			{displayType === 1 ? (
				<StaffRadarChart data={staffData} />
			) : (
				<CriteriaTable data={data} />
			)}
		</div>
	);
}
