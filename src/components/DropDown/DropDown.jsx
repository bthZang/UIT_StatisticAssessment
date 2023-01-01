import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import { Checkbox, Chip, ListItemText, OutlinedInput } from "@mui/material";
import { useState } from "react";
import "./DropDown.scss";

export default function DropDown({
	selected,
	title,
	dataset,
	width,
	onChange = () => {},
}) {
	function handleChange(e) {
		const value = e.target.value;
		if (value[value.length - 1] === "Select all") {
			value.pop();
			onChange(dataset);
		} else if (value[value.length - 1] === "Unselect all") {
			value.pop();
			onChange([]);
		} else onChange(typeof value === "string" ? value.split(",") : value);
	}

	return (
		<div className="drop-down">
			<p style={{ width: 190 }}>Chọn {title}: </p>
			<Box sx={{ width, backgroundColor: "white" }}>
				<FormControl fullWidth>
					<InputLabel id="year-select-label">Chọn {title}</InputLabel>
					<Select
						labelId="year-select-label"
						multiple
						value={selected}
						label={`Chọn ${title}`}
						onChange={handleChange}
						input={
							<OutlinedInput
								id="select-multiple-chip"
								label={`Chọn ${title}`}
							/>
						}
						renderValue={(selected) => (
							<Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
								{selected.map((value) => (
									<Chip key={value} label={value} />
								))}
							</Box>
						)}
					>
						{dataset.map((name) => (
							<MenuItem key={name} value={name}>
								<Checkbox checked={selected.indexOf(name) > -1} />
								<ListItemText primary={name} />
							</MenuItem>
						))}
						<MenuItem
							disabled={selected.length == 0}
							key="Unselect all"
							value="Unselect all"
						>
							Unselect all
						</MenuItem>
						<MenuItem
							disabled={selected.length == dataset.length}
							key="Select all"
							value="Select all"
						>
							Select all
						</MenuItem>
					</Select>
				</FormControl>
			</Box>
		</div>
	);
}
