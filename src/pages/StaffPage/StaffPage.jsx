import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header/Header";
import SearchBox from "../../components/SearchBox/SearchBox";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "./StaffPage.scss";
import DisplayTypeInput from "../../components/DisplayTypeInput/DisplayTypeInput";
import StaffHistogramChart from "../../components/StaffHistogramChart/StaffHistogramChart";
import StaffTable from "../../components/StaffTable/StaffTable";
import { SEMESTER_NAME, ATTITUDE } from "../../constants/selectName";

export default function StaffPage() {
	const navigate = useNavigate();

	const [displayType, setDisplayType] = useState(0);

	const [semester, setSemester] = useState([SEMESTER_NAME[0]]);
	const [year, setYear] = useState([YEAR_NAME[0]]);
	const [learningType, setLearningType] = useState([LEARNING_TYPE_NAME[0]]);
	const [attitude, setAttitude] = useState([
		ATTITUDE.POSITIVE,
		ATTITUDE.NEGATIVE,
	]);

	return (
		<div className="staff-page">
			<Header title={"Thống kê cán bộ"} />
			<DisplayTypeInput setChoice={setDisplayType} />
			<YearDropDown year={year} onChange={setYear} />
			{displayType === 1 ? (
				<StaffHistogramChart semester={semester} />
			) : (
				<StaffTable semester={semester} />
			)}
		</div>
	);
}
