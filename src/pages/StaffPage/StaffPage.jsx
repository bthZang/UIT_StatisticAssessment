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
import SemesterDropDown from "../../components/SemesterDropDown/SemesterDropDown";
import StaffTable from "../../components/StaffTable/StaffTable";
import { SEMESTER_NAME } from "../../constants/semesterName";

export default function StaffPage() {
	const navigate = useNavigate();

	const [displayType, setDisplayType] = useState(0);

	const [semester, setSemester] = useState(SEMESTER_NAME[0]);

	return (
		<div className="staff-page">
			<Header title={"Thống kê cán bộ"} />
			<DisplayTypeInput setChoice={setDisplayType} />
			<SemesterDropDown year={semester} onChange={setSemester} />
			{displayType === 1 ? (
				<StaffHistogramChart semester={semester} />
			) : (
				<StaffTable semester={semester} />
			)}
		</div>
	);
}
