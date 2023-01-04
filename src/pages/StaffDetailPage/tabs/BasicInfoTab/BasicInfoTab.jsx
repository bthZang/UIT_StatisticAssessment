import { useSelector } from "react-redux";
import {
	selectClassOfStaff,
	selectStaffInfo,
} from "../../../../features/assessment/assessmentSlice";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import InfoBox from "../../../../components/InfoBox/InfoBox";

import { useNavigate } from "react-router-dom";
import "./BasicInfoTab.scss";

export default function BasicInfoTab({ staffName }) {
	const navigate = useNavigate();

	const profile = useSelector(selectStaffInfo(staffName));
	const taughtClass = useSelector(selectClassOfStaff(staffName));

	return (
		<div className="basic-info-tab">
			<div className="basic-info">
				<h2>Thông tin cơ bản</h2>
				<InfoBox info={profile} />
			</div>
			<div className="taught-class">
				<h2>Các lớp đã dạy</h2>
				<div className="taught-class-list">
					{taughtClass?.map(([semester, info]) => (
						<div className="semester">
							<Accordion>
								<AccordionSummary expandIcon={<ExpandMoreIcon />}>
									<p className="semester-name">{semester}</p>
								</AccordionSummary>
								<AccordionDetails>
									<div className="class">
										<p className="name">Tên lớp</p>
										<p className="subject">Tên môn học</p>
										<p className="type">Chương trình</p>
										<p className="avg">Điểm đánh giá</p>
									</div>
									{info.map(({ CLASS, SUBJECT, TYPE, AVG }) => (
										<div
											className="class link"
											onClick={() =>
												navigate(`/class/${CLASS}-${semester}`)
											}
										>
											<p className="name">{CLASS}</p>
											<p className="subject">{SUBJECT}</p>
											<p className="type">{TYPE}</p>
											<p className="avg">{AVG}</p>
										</div>
									))}
									<div className="total">
										<p>
											Điểm đánh giá trung bình:{" "}
											<span>
												{(
													info.reduce(
														(total, { AVG }) => total + AVG,
														0
													) / info.length
												).toFixed(2)}
											</span>
										</p>
									</div>
								</AccordionDetails>
							</Accordion>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
