import Header from "../../components/Header/Header";
import SearchBox from "../../components/SearchBox/SearchBox";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "./ClassPage.scss";
import YearDropDown from "../../components/YearDropDown/YearDropDown";

const data = [
	{
		name: "IT008.N11.PMCL",
		staff: 80200,
		comments: ["fadsfsaf", "afadsfa", "afqrwewqr", "vzxcvxvz"],
		point: 3.5,
	},
	{
		name: "IT008.N13.PMCL",
		staff: 80200,
		comments: ["fadsfsaf", "afadsfa", "afqrwewqr", "vzxcvxvz"],
		point: 3.7,
	},
	{
		name: "IT007.N11.PMCL",
		staff: 80201,
		comments: ["fadsfsaf", "afadsfa", "afqrwewqr", "vzxcvxvz"],
		point: 3.8,
	},
];

export default function ClassPage() {
	return (
		<div className="class-page">
			<Header title="Thống kê theo lớp" />
			<SearchBox placeholder="Nhập lớp cần tìm" />
			<YearDropDown />
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell align="center" component="th" scope="row">
								<p>Mã môn học</p>
							</TableCell>
							<TableCell align="center">
								<p>Mã cán bộ</p>
							</TableCell>
							<TableCell align="center">
								<p>Điểm đánh giá</p>
							</TableCell>
							<TableCell style={{ width: "700px" }} align="center">
								<p>Nhận xét</p>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{data.map((classInfo) => (
							<>
								<TableRow rowSpan={classInfo.comments.length}>
									<TableCell align="center" component="th" scope="row">
										<p
											className="link"
											onClick={() =>
												navigate(`/class/${classInfo.id}`)
											}
										>
											{classInfo.name}
										</p>
									</TableCell>
									<TableCell align="center">
										<p>{classInfo.staff}</p>
									</TableCell>
									<TableCell align="center">
										<p>{classInfo.point}</p>
									</TableCell>
									<TableCell
										style={{
											padding: 0,
											width: "700px",
										}}
										align="center"
									>
										{classInfo.comments.map((comment) => (
											<TableRow>
												<TableCell
													sx={{ width: "700px" }}
													align="center"
												>
													{comment}
												</TableCell>
											</TableRow>
										))}
									</TableCell>
								</TableRow>
							</>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}
