import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import "./YearDropDown.scss";
import { SEMESTER_NAME } from "../../constants/semesterName";

export default function SemesterDropDown({
	year = SEMESTER_NAME[0],
	onChange = () => {},
}) {
	function handleChange(e) {
		const value = e.target.value;
		onChange(value);
	}

	return (
		<div className="year-drop-down">
			<p>Chọn năm học: </p>
			<Box sx={{ width: 200, backgroundColor: "white" }}>
				<FormControl fullWidth>
					<InputLabel id="year-select-label">Năm học</InputLabel>
					<Select
						labelId="year-select-label"
						value={year}
						label="Năm học"
						onChange={handleChange}
					>
						{SEMESTER_NAME.map((name) => (
							<MenuItem key={name} value={name}>
								{name}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Box>
		</div>
	);
}
