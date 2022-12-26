import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import "./YearDropDown.scss";

export default function YearDropDown({
	year = "2021-2022",
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
						<MenuItem value={"2021-2022"}>2021-2022</MenuItem>
						<MenuItem value={"2020-2021"}>2020-2021</MenuItem>
						<MenuItem value={"2019-2020"}>2019-2020</MenuItem>
						<MenuItem value={"2018-2019"}>2018-2019</MenuItem>
					</Select>
				</FormControl>
			</Box>
		</div>
	);
}
