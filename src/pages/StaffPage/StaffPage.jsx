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
import {
	SEMESTER_NAME,
	ATTITUDE,
	YEAR_NAME,
	SEMESTER_YEAR_NAME,
} from "../../constants/selectName";
import SemesterDropDown from "../../components/SemesterDropDown/SemesterDropDown";
import YearDropDown from "../../components/YearDropDown/YearDropDown";
import SingleDropDown from "../../components/SingleDropDown/SingleDropDown";

export default function StaffPage() {
	const navigate = useNavigate();

	const [displayType, setDisplayType] = useState(0);

	const [semesterYear, setSemesterYear] = useState(SEMESTER_YEAR_NAME[0]);

	return (
		<div className="staff-page">
			<Header title={"Thống kê cán bộ"} />
			<DisplayTypeInput setChoice={setDisplayType} />
			<SingleDropDown
				title={"kỳ"}
				dataset={SEMESTER_YEAR_NAME}
				selected={semesterYear}
				onChange={setSemesterYear}
			/>
			{displayType === 1 ? (
				<StaffHistogramChart semester={semesterYear} />
			) : (
				<StaffTable semester={semesterYear} />
			)}
		</div>
	);
}
