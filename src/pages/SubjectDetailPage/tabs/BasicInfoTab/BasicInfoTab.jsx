import { useSelector } from "react-redux";
import {
	selectClassOfStaff,
	selectStaffInfo,
	selectSubjectDetailAssessment,
} from "../../../../features/assessment/assessmentSlice";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import InfoBox from "../../../../components/InfoBox/InfoBox";

import { useNavigate } from "react-router-dom";
import "./BasicInfoTab.scss";
import CriteriaChart from "../../../../components/CriteriaChart/CriteriaChart";
import CriteriaTable from "../../../../components/CriteriaTable/CriteriaTable";

export default function BasicInfoTab({ semesterYear, subjectName }) {
	const navigate = useNavigate();

	const data = useSelector(
		selectSubjectDetailAssessment(semesterYear, subjectName)
	);
	console.log({ data });

	return (
		<div className="subject-detail-basic-info-tab">
			<div className="basic-info">
				{/* <InfoBox info={data?.info || {}} /> */}
				<CriteriaTable data={data?.points} />
			</div>
			<div className="taught-class">
				<h2>Các giảng viên</h2>
				<h3>Sắp xếp theo điểm đánh giá</h3>
				<div className="taught-class-list">
					{data?.teachers?.map?.(({ name, point, classes }) => (
						<div className="semester">
							<Accordion>
								<AccordionSummary expandIcon={<ExpandMoreIcon />}>
									<div className="semester-name">
										<p className="">
											<span className="link" onClick={() => navigate(`/staff/${name}`)}>{name}</span> - {point}
										</p>
										<p>({classes.length})</p>
									</div>
								</AccordionSummary>
								<AccordionDetails>
									<div className="class">
										<p className="name">Tên lớp</p>
										<p className="type">Chương trình</p>
										<p className="number">Sĩ số</p>
										<p className="joined">Tham gia</p>
										<p className="avg">Điểm đánh giá</p>
									</div>
									{classes.map(
										({
											name,
											point: classPoint,
											type,
											number,
											joined,
										}) => (
											<div
												className="class link"
												onClick={() => navigate(`/class/${name}`)}
											>
												<p className="name">{name}</p>
												<p className="type">{type}</p>
												<p className="number">{number}</p>
												<p className="joined">{joined}</p>
												<p className="avg">{classPoint}</p>
											</div>
										)
									)}
									<div className="total">
										<p>
											Điểm đánh giá trung bình: <span>{point}</span>
										</p>
									</div>
								</AccordionDetails>
							</Accordion>
						</div>
					))}
				</div>
			</div>
			<div className="classes">
				<h2>Các lớp</h2>
				<h3>Sắp xếp theo điểm đánh giá</h3>
				<div className="clasess-list">
					<div className="header">
						<p className="name">Mã lớp</p>
						<p className="point">Điểm đánh giá</p>
					</div>
					{data?.classes.map(({ name, point }) => (
						<div className="class">
							<p className="name">{name}</p>
							<p className="point">{point}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
