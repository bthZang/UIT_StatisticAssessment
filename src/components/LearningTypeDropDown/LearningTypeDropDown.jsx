import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import { SEMESTER_NAME } from "../../constants/semesterName";

import "./LearningTypeDropDown.scss";
import { LEARNING_TYPE_NAME } from "../../constants/learningTypeName";

export default function LearningTypeDropDown({
	type = LEARNING_TYPE_NAME[0],
	onChange = () => {},
}) {
	function handleChange(e) {
		const value = e.target.value;
		onChange(value);
	}

	return (
		<div className="type-drop-down">
			<p>Chọn hình thức giảng dạy: </p>
			<Box sx={{ width: 200, backgroundColor: "white" }}>
				<FormControl fullWidth>
					<InputLabel id="year-select-label">Năm học</InputLabel>
					<Select
						labelId="year-select-label"
						value={type}
						label="Năm học"
						onChange={handleChange}
					>
						{LEARNING_TYPE_NAME.map((name) => (
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
