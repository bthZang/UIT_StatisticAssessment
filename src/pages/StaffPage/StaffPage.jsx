import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header/Header";

import DisplayTypeInput from "../../components/DisplayTypeInput/DisplayTypeInput";
import DropDown from "../../components/DropDown/DropDown";
import SingleDropDown from "../../components/SingleDropDown/SingleDropDown";
import StaffHistogramChart from "../../components/StaffHistogramChart/StaffHistogramChart";
import StaffTable from "../../components/StaffTable/StaffTable";
import { SEMESTER_YEAR_NAME } from "../../constants/selectName";
import { selectStaffAssessmentData } from "../../features/assessment/assessmentSlice";
import "./StaffPage.scss";
import StaffRanking from "../../components/StaffRanking/StaffRanking";

const choices = [
	"Thống kê giảng viên",
	"Biểu đồ điểm đánh giá",
	"Xếp hạng giảng viên theo điểm đánh giá",
];

export default function StaffPage() {
	const navigate = useNavigate();

	const [displayType, setDisplayType] = useState(0);
	const [semesterYear, setSemesterYear] = useState(SEMESTER_YEAR_NAME[0]);

	const data = useSelector(selectStaffAssessmentData(semesterYear));

	const [staff, setStaff] = useState(data.map((v) => v[0]));

	function getRenderedTab() {
		switch (displayType) {
			case 0:
				return (
					<>
						<div className="dropdown">
							<SingleDropDown
								title={"kỳ"}
								dataset={SEMESTER_YEAR_NAME}
								selected={semesterYear}
								onChange={setSemesterYear}
							/>
							<DropDown
								titleWidth={"max-content"}
								width={500}
								selected={staff}
								title={"giảng viên"}
								dataset={data?.map((v) => v[0])}
								onChange={setStaff}
							/>
						</div>
						<StaffTable
							semester={semesterYear}
							data={data}
							staff={staff}
						/>
					</>
				);
			case 1:
				return (
					<>
						<SingleDropDown
							title={"kỳ"}
							dataset={SEMESTER_YEAR_NAME}
							selected={semesterYear}
							onChange={setSemesterYear}
						/>
						<StaffHistogramChart semester={semesterYear} />
					</>
				);
			case 2:
				return (
					<>
						<SingleDropDown
							title={"kỳ"}
							dataset={SEMESTER_YEAR_NAME}
							selected={semesterYear}
							onChange={setSemesterYear}
						/>
						<StaffRanking semester={semesterYear} />
					</>
				);
			default:
		}
	}

	return (
		<div className="staff-page">
			<Header title={"Thống kê cán bộ"} />
			<DisplayTypeInput choices={choices} setChoice={setDisplayType} />
			{getRenderedTab()}
		</div>
	);
}
