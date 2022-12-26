import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header/Header";
import SearchBox from "../../components/SearchBox/SearchBox";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "./StaffPage.scss";
import DisplayTypeInput from "../../components/DisplayTypeInput/DisplayTypeInput";
import StaffHistogramChart from "../../components/StaffHistogramChart/StaffHistogramChart";
import SemesterDropDown from "../../components/YearDropDown/YearDropDown";
import StaffTable from "../../components/StaffTable/StaffTable";
import { SEMESTER_NAME } from "../../constants/semesterName";

export default function StaffPage() {
	const navigate = useNavigate();

	const [displayType, setDisplayType] = useState(0);

	const [semester, setSemester] = useState(SEMESTER_NAME[0]);

	return (
		<div className="staff-page">
			<Header title={"Thống kê cán bộ"} />
			<DisplayTypeInput setChoice={setDisplayType} />
			<SemesterDropDown year={semester} onChange={setSemester} />
			{displayType === 1 ? (
				<StaffHistogramChart semester={semester} />
			) : (
				<>
					<StaffTable semester={semester} />
					{/* <TableContainer component={Paper}>
						<Table sx={{ minWidth: 650 }} aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell align="center" component="th" scope="row">
										<p>Mã cán bộ</p>
									</TableCell>
									<TableCell align="center">
										<p>Điểm đánh giá</p>
									</TableCell>
									<TableCell align="center">
										<p>Lớp đã dạy</p>
									</TableCell>
									<TableCell style={{ width: "700px" }} align="center">
										<p>Nhận xét</p>
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{data.map((staff, index) => (
									<>
										<TableRow
											rowSpan={staff.taughtClass.reduce(
												(sum, value) => sum + value.comments.length,
												0
											)}
										>
											<TableCell
												align="center"
												component="th"
												scope="row"
											>
												<p
													className="link"
													onClick={() =>
														navigate(`/staff/${staff.id}`)
													}
												>
													{staff.id}
												</p>
											</TableCell>
											<TableCell align="center">
												<p>{staff.point}</p>
											</TableCell>
											<TableCell colSpan={4} sx={{ padding: 0 }}>
												<Table sx={{ width: "100%" }}>
													<TableBody>
														{staff.taughtClass.map(
															(taughtClass) => (
																<TableRow
																	rowSpan={
																		taughtClass.comments
																			.length
																	}
																	align="center"
																	component="tr"
																	colSpan={2}
																>
																	<TableCell
																		colSpan={1}
																		align="center"
																	>
																		<p
																			className="link"
																			onClick={() =>
																				navigate(
																					`/class/${taughtClass.name}`
																				)
																			}
																		>
																			{taughtClass.name}
																		</p>
																	</TableCell>
																	<TableCell
																		sx={{
																			padding: 0,
																			width: "700px",
																		}}
																	>
																		{taughtClass.comments.map(
																			(comment) => (
																				<TableRow>
																					<TableCell
																						style={{
																							width: "700px",
																						}}
																						align="center"
																					>
																						<p>
																							{comment}
																						</p>
																					</TableCell>
																				</TableRow>
																			)
																		)}
																	</TableCell>
																</TableRow>
															)
														)}
													</TableBody>
												</Table>
											</TableCell>
										</TableRow>
									</>
								))}
							</TableBody>
						</Table>
					</TableContainer> */}
				</>
			)}
		</div>
	);
}
