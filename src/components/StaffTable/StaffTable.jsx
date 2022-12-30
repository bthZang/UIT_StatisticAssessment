import { useState } from "react";
import { useSelector } from "react-redux";
import { selectStaffAssessmentData } from "../../features/staff/staffSlice";
import SearchBox from "../SearchBox/SearchBox";

import { useNavigate } from "react-router-dom";
import "./StaffTable.scss";

export default function StaffTable({ semester }) {
	const navigate = useNavigate();
	const [keyword, setKeyword] = useState("");

	const data = useSelector(selectStaffAssessmentData(semester));

	return (
		<div className="container">
			<SearchBox
				placeholder={"Nhập mã cán bộ cần tìm..."}
				onChange={setKeyword}
			/>
			<div className="table">
				<div className="row header">
					<p className="stt">STT</p>
					<p className="teacher">Tên</p>
					<p className="mscb">MSCB</p>
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
				<div className="table-body">
					{data?.map?.(
						({
							STT,
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
							<div key={STT} className={`row ${STT % 2 ? "even" : ""}`}>
								<p className="stt">{STT}</p>
								<p
									className="teacher link"
									onClick={() => navigate(`/staff/${MSCB}`)}
								>
									{TEACHER}
								</p>
								<p
									className="mscb link"
									onClick={() => navigate(`/staff/${MSCB}`)}
								>
									{MSCB}
								</p>
								<p className="major">{MAJOR}</p>
								<p className="type">{TYPE}</p>
								<p
									className="subject link"
									onClick={() => navigate(`/subject/${SUBJECT}`)}
								>
									{SUBJECT}
								</p>
								<p
									className="class link"
									onClick={() => navigate(`/class/${CLASS}`)}
								>
									{CLASS}
								</p>
								{Array(19)
									.fill("")
									.map((_, index) => (
										<p className="point">{otherPoint[index + 1]}</p>
									))}
								<p className="average">{AVG}</p>
							</div>
						)
					)}
				</div>
			</div>
		</div>
	);
}
