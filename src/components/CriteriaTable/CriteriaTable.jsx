import { useState } from "react";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { useNavigate } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "./CriteriaTable.scss";

export default function CriteriaTable({ data }) {
	const navigate = useNavigate();

	const [year, setYear] = useState("2021-2022");

	const handleChange = (event) => {
		setYear(event.target.value);
	};

	return (
		<div className="criteria-table">
			<div className="year-select">
				<p>Chọn năm học: </p>
				<Box sx={{ width: 200, backgroundColor: "white" }}>
					<FormControl fullWidth>
						<InputLabel id="year-select-label">Năm học</InputLabel>
						<Select
							labelId="year-select-label"
							// id="demo-simple-select"
							value={year}
							label="Năm học"
							onChange={handleChange}
						>
							<MenuItem value={"2021-2022"}>2021-2022</MenuItem>
							<MenuItem value={"2020-2021"}>2020-2021</MenuItem>
							<MenuItem value={"2019-2020"}>2019-2020</MenuItem>
							<MenuItem value={"2018-2019"}>2018-2019</MenuItem>
						</Select>
					</FormControl>
				</Box>
			</div>
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
								onClick={() => navigate(`/criteria/${index}`)}
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
