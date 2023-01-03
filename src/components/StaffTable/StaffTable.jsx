import { useState } from "react";
import { useSelector } from "react-redux";
import { selectStaffAssessmentData } from "../../features/assessment/assessmentSlice";
import SearchBox from "../SearchBox/SearchBox";

import { useNavigate } from "react-router-dom";
import "./StaffTable.scss";

export default function StaffTable({ semester, data, staff }) {
	const navigate = useNavigate();
	const [keyword, setKeyword] = useState("");

	return (
		<div className="container">
			<SearchBox
				placeholder={"Nhập mã giảng viên hoặc tên giảng viên cần tìm..."}
				onChange={setKeyword}
			/>
			<div className="table">
				<div className="row header">
					<p className="teacher">Tên giảng viên</p>
					<p className="mscb">MSCB</p>
					<div className="other-field">
						<p className="major">Khoa/Bộ môn</p>
						<p className="type">Chương trình</p>
						<p className="subject">Môn</p>
						<p className="class">Lớp</p>
						{Array(19)
							.fill("")
							.map((_, index) => (
								<p key={index} className="point link">
									Tiêu chí {index + 1}
								</p>
							))}
						<p className="average">Điểm trung bình</p>
					</div>
				</div>
				<div className="table-body">
					{data
						?.filter(([staffName]) => staff.some((v) => v === staffName))
						?.filter(([staffName]) =>
							staffName.toLowerCase().includes(keyword.toLowerCase())
						)
						?.map?.(([staffName, classes]) => (
							<div key={`${staffName} ${semester}`} className="row">
								<p
									className="teacher link"
									onClick={() => navigate(`/staff/${staffName}`)}
								>
									{staffName}
								</p>
								<p
									className="mscb link"
									onClick={() => navigate(`/staff/${classes[0].MSCB}`)}
								>
									{classes[0].MSCB}
								</p>
								<div className="sub-row">
									{classes.map(
										({
											MAJOR,
											TYPE,
											SUBJECT,
											CLASS,
											NUMBER,
											JOIN,
											AVG,
											...otherPoint
										}) => (
											<div
												key={`${CLASS} ${semester}`}
												className={``}
											>
												<p className="major">{MAJOR}</p>
												<p className="type">{TYPE}</p>
												<p
													className="subject link"
													onClick={() =>
														navigate(`/subject/${SUBJECT}`)
													}
												>
													{SUBJECT}
												</p>
												<p
													className="class link"
													onClick={() =>
														navigate(`/class/${CLASS}`)
													}
												>
													{CLASS}
												</p>
												{Array(19)
													.fill("")
													.map((_, index) => (
														<p className="point">
															{otherPoint[index + 1]}
														</p>
													))}
												<p className="average">{AVG}</p>
											</div>
										)
									)}
								</div>
							</div>
						))}
				</div>
			</div>
		</div>
	);
}
