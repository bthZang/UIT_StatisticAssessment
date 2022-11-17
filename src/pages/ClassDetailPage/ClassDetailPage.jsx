import { useState } from "react";
import { useParams } from "react-router-dom";
import CriteriaTable from "../../components/CriteriaTable/CriteriaTable";
import DisplayTypeInput from "../../components/DisplayTypeInput/DisplayTypeInput";

import Header from "../../components/Header/Header";
import StaffRadarChart from "../../components/StaffRadarChart/StaffRadarChart";

import "./ClassDetailPage.scss";

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

export default function ClassDetailPage() {
	const { id } = useParams();

	const [displayType, setDisplayType] = useState(0);

	return (
		<div className="class-detail-page">
			<Header title={`Lớp ${id}`} />
			<DisplayTypeInput setChoice={setDisplayType} />
			{displayType === 1 ? (
				<StaffRadarChart data={staffData} />
			) : (
				<CriteriaTable data={staffData} />
			)}
		</div>
	);
}
