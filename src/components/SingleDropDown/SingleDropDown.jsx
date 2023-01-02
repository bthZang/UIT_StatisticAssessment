import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import "./SingleDropDown.scss";

export default function SingleDropDown({
	selected,
	title,
	dataset,
	titleWidth = "max-content",
	width = 200,
	onChange = () => {},
}) {
	function handleChange(e) {
		const value = e.target.value;
		onChange(value);
	}

	return (
		<div className="single-drop-down">
			<p style={{ width: titleWidth }}>Chọn {title}: </p>
			<Box sx={{ width, backgroundColor: "white" }}>
				<FormControl fullWidth>
					<InputLabel id="year-select-label">Chọn {title}</InputLabel>
					<Select
						labelId="year-select-label"
						value={selected}
						label={`Chọn ${title}`}
						onChange={handleChange}
					>
						{dataset.map((name) => (
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
