import { useState } from "react";
import { useParams } from "react-router-dom";
import CriteriaRadarChart from "../../components/CriteriaRadarChart/CriteriaRadarChart";
import CriteriaTable from "../../components/CriteriaTable/CriteriaTable";
import DisplayTypeInput from "../../components/DisplayTypeInput/DisplayTypeInput";

import Header from "../../components/Header/Header";

import "./SubjectDetailPage.scss";

const criteriaData = Array(20)
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

export default function SubjectDetailPage() {
	const [displayType, setDisplayType] = useState(0);
	const { subjectName } = useParams();

	return (
		<div className="subject-detail-page">
			<Header title={subjectName} />
			<DisplayTypeInput setChoice={setDisplayType} />
			{displayType == 0 ? (
				<CriteriaTable data={criteriaData} />
			) : (
				<CriteriaRadarChart data={criteriaData} />
			)}
		</div>
	);
}
