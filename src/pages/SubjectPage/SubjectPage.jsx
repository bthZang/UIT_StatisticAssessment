import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Header from "../../components/Header/Header";
import SearchBox from "../../components/SearchBox/SearchBox";
import YearDropDown from "../../components/YearDropDown/YearDropDown";

import "./SubjectPage.scss";
import { useNavigate } from "react-router-dom";

const data = [
	{
		name: "Lập trình trực quan",
		classes: [
			{
				classID: "IT008.N11.PMCL",
				staff: 80200,
				comments: ["fadsfsaf", "afadsfa", "afqrwewqr", "vzxcvxvz"],
				point: 3.5,
			},
			{
				classID: "IT008.N13.PMCL",
				staff: 80200,
				comments: ["fadsfsaf", "afadsfa", "afqrwewqr", "vzxcvxvz"],
				point: 3.7,
			},
		],
	},
	{
		name: "Kỹ năng nghề nghiệp",
		classes: [
			{
				classID: "SS004.N11.PMCL",
				staff: 80205,
				comments: ["fadsfsaf", "afadsfa", "afqrwewqr", "vzxcvxvz"],
				point: 3.8,
			},
			{
				classID: "SS004.N13.PMCL",
				staff: 80204,
				comments: ["fadsfsaf", "afadsfa", "afqrwewqr", "vzxcvxvz"],
				point: 3.7,
			},
		],
	},
	{
		name: "Lập trình hướng đối tượng",
		classes: [
			{
				classID: "IT003.N11.PMCL",
				staff: 80205,
				comments: ["fadsfsaf", "afadsfa", "afqrwewqr", "vzxcvxvz"],
				point: 3.8,
			},
			{
				classID: "IT003.N13.PMCL",
				staff: 80204,
				comments: ["fadsfsaf", "afadsfa", "afqrwewqr", "vzxcvxvz"],
				point: 3.5,
			},
		],
	},
];

export default function SubjectPage() {
	const navigate = useNavigate();

	return (
		<div className="subject-page">
			<Header title="Thống kê theo môn" />
			<SearchBox placeholder="Nhập mã môn học cần tìm..." />
			<YearDropDown />
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell
								sx={{ width: 200 }}
								align="center"
								component="th"
								scope="row"
							>
								<p>Tên môn học</p>
							</TableCell>
							<TableCell sx={{ width: "200px" }} align="center">
								<p>Mã lớp</p>
							</TableCell>
							<TableCell sx={{ width: "200px" }} align="center">
								<p>Mã cán bộ</p>
							</TableCell>
							<TableCell sx={{ width: "200px" }} align="center">
								<p>Điểm đánh giá</p>
							</TableCell>
							<TableCell style={{ width: "700px" }} align="center">
								<p>Nhận xét</p>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{data.map((subject) => (
							<>
								<TableRow
									rowSpan={subject.classes.reduce(
										(sum, value) => sum + value.comments.length,
										0
									)}
								>
									<TableCell
										sx={{ width: 200 }}
										align="center"
										component="th"
										scope="row"
									>
										<p
											className="link"
											onClick={() =>
												navigate(`/subject/${subject.name}`)
											}
										>
											{subject.name}
										</p>
									</TableCell>
									<TableCell colSpan={4} sx={{ padding: 0 }}>
										<Table sx={{ width: "100%" }}>
											<TableBody>
												{subject.classes.map((classInfo) => (
													<TableRow
														rowSpan={classInfo.comments.length}
														align="center"
														component="tr"
													>
														<TableCell
															sx={{ width: "200px" }}
															align="center"
														>
															<p
																className="link"
																onClick={() =>
																	navigate(
																		`/class/${classInfo.classID}`
																	)
																}
															>
																{classInfo.classID}
															</p>
														</TableCell>
														<TableCell
															sx={{ width: "200px" }}
															align="center"
														>
															<p>{classInfo.staff}</p>
														</TableCell>
														<TableCell
															sx={{ width: "200px" }}
															align="center"
														>
															<p>{classInfo.point}</p>
														</TableCell>
														<TableCell
															sx={{ padding: 0, width: "700px" }}
														>
															{classInfo.comments.map(
																(comment) => (
																	<TableRow>
																		<TableCell
																			style={{
																				width: "700px",
																			}}
																			align="center"
																		>
																			<p>{comment}</p>
																		</TableCell>
																	</TableRow>
																)
															)}
														</TableCell>
													</TableRow>
												))}
											</TableBody>
										</Table>
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
