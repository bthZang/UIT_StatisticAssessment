import { useNavigate } from "react-router-dom";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import "./CriteriaTable.scss";

export default function CriteriaTable({ data }) {
	const navigate = useNavigate();

	return (
		<div className="criteria-table">
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>
								<p>Tiêu chí</p>
							</TableCell>
							<TableCell align="right">
								<p>Điểm đánh giá trung bình</p>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{data?.map?.((row, index) => (
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
									<p>{row.point || "Không có dữ liệu"}</p>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}
