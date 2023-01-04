import { useState } from "react";
import SearchBox from "../SearchBox/SearchBox";

import { useNavigate } from "react-router-dom";
import "./SubjectTable.scss";

export default function SubjectTable({ semester, data, subject }) {
	const navigate = useNavigate();
	const [keyword, setKeyword] = useState("");

	return (
		<div className="subject-container">
			<SearchBox
				placeholder={"Nhập môn học/mã môn học cần tìm..."}
				onChange={setKeyword}
			/>
			<div className="table">
				<div className="row header">
					<p className="subject">Môn học</p>
					<p className="major">Khoa/Bộ môn</p>
					<div className="other-field">
						<p className="teacher">Tên giảng viên</p>
						<p className="mscb">MSCB</p>
						<p className="type">Chương trình</p>
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
						?.filter(([staffName]) =>
							subject.some((v) => v === staffName)
						)
						?.map?.(([subjectName, classes]) => (
							<div key={`${subjectName} ${semester}`} className="row">
								<p
									className="subject link"
									onClick={() => navigate(`/subject/${subjectName}`)}
								>
									{subjectName}
								</p>
								<p className="major">{classes[0].MAJOR}</p>
								<div className="sub-row">
									{classes.map(
										({
											TEACHER,
											MSCB,
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
												key={`${CLASS} ${TEACHER} ${semester}`}
												className={``}
											>
												<p
													className="teacher link"
													onClick={() =>
														navigate(`/staff/${TEACHER}`)
													}
												>
													{TEACHER}
												</p>
												<p className="mscb">{MSCB}</p>
												<p className="type">{TYPE}</p>
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
