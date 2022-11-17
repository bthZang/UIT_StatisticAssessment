import { useState } from "react";

import { useNavigate } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "./CriteriaTable.scss";
import YearDropDown from "../YearDropDown/YearDropDown";

export default function CriteriaTable({ data }) {
	const navigate = useNavigate();

	const [year, setYear] = useState("2021-2022");

	const handleChange = (event) => {
		setYear(event.target.value);
	};

	return (
		<div className="criteria-table">
			<YearDropDown year={year} handleChange={handleChange} />
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>
								<p>Tiêu chí</p>
							</TableCell>
							<TableCell align="right">
								<p>Mức độ hài lòng</p>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{data.map((row, index) => (
							<TableRow
								key={row.id}
								onClick={() => navigate(`/criteria/${row.criteria}`)}
								sx={{
									"&:last-child td, &:last-child th": { border: 0 },
								}}
							>
								<TableCell component="th" scope="row">
									<p>{row.criteria}</p>
								</TableCell>
								<TableCell align="right">
									<p>{row.point[year]}%</p>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}
