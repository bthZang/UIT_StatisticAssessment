import { useNavigate } from "react-router-dom";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import "./CriteriaTable.scss";
import { useSelector } from "react-redux";
import {
	selectStaffAssessmentData,
	selectStaffCriteria,
} from "../../features/assessment/assessmentSlice";
import { CRITERIA_NAME } from "../../constants/criteriaName";

const criteriaData = [
	{
		id: 1,
		criteria:
			"Chuẩn đầu ra, yêu cầu và nội dung môn học được giảng viên giới thiệu trong buổi học đầu tiên và thường xuyên nhắc lại trong các buổi học tiếp theo",
		point: {
			"2017-2018": parseInt(((Math.random() + 3) / 4) * 100),
			"2018-2019": parseInt(((Math.random() + 3) / 4) * 100),
			"2019-2020": parseInt(((Math.random() + 3) / 4) * 100),
			"2020-2021": parseInt(((Math.random() + 3) / 4) * 100),
			"2021-2022": parseInt(((Math.random() + 3) / 4) * 100),
		},
	},
	{
		id: 2,
		criteria:
			"Phòng học,thí nghiệm và trang thiết bị đáp ứng yêu cầu giảng dạy và học tập.",
		point: {
			"2017-2018": parseInt(((Math.random() + 3) / 4) * 100),
			"2018-2019": parseInt(((Math.random() + 3) / 4) * 100),
			"2019-2020": parseInt(((Math.random() + 3) / 4) * 100),
			"2020-2021": parseInt(((Math.random() + 3) / 4) * 100),
			"2021-2022": parseInt(((Math.random() + 3) / 4) * 100),
		},
	},
	{
		id: 3,
		criteria:
			"Giáo trình, bài giảng và tài liệu phục vụ môn học được cung cấp đầy đủ và cập nhật trên hệ thống Moodle",
		point: {
			"2017-2018": parseInt(((Math.random() + 3) / 4) * 100),
			"2018-2019": parseInt(((Math.random() + 3) / 4) * 100),
			"2019-2020": parseInt(((Math.random() + 3) / 4) * 100),
			"2020-2021": parseInt(((Math.random() + 3) / 4) * 100),
			"2021-2022": parseInt(((Math.random() + 3) / 4) * 100),
		},
	},
	{
		id: 4,
		criteria:
			"Giảng viên hướng dẫn Anh/Chị phương pháp học tập chủ động và tạo động cơ học tập suốt đời",
		point: {
			"2017-2018": parseInt(((Math.random() + 3) / 4) * 100),
			"2018-2019": parseInt(((Math.random() + 3) / 4) * 100),
			"2019-2020": parseInt(((Math.random() + 3) / 4) * 100),
			"2020-2021": parseInt(((Math.random() + 3) / 4) * 100),
			"2021-2022": parseInt(((Math.random() + 3) / 4) * 100),
		},
	},
	{
		id: 5,
		criteria:
			"Giảng viên trình bày các vấn đề trong môn học mang tính cập nhật, chuẩn xác và có liên hệ thực tiễn",
		point: {
			"2017-2018": parseInt(((Math.random() + 3) / 4) * 100),
			"2018-2019": parseInt(((Math.random() + 3) / 4) * 100),
			"2019-2020": parseInt(((Math.random() + 3) / 4) * 100),
			"2020-2021": parseInt(((Math.random() + 3) / 4) * 100),
			"2021-2022": parseInt(((Math.random() + 3) / 4) * 100),
		},
	},
	{
		id: 6,
		criteria:
			"Phương pháp giảng dạy của giảng viên giúp Anh,Chị hiểu được và vận dụng được kiến thức",
		point: {
			"2017-2018": parseInt(((Math.random() + 3) / 4) * 100),
			"2018-2019": parseInt(((Math.random() + 3) / 4) * 100),
			"2019-2020": parseInt(((Math.random() + 3) / 4) * 100),
			"2020-2021": parseInt(((Math.random() + 3) / 4) * 100),
			"2021-2022": parseInt(((Math.random() + 3) / 4) * 100),
		},
	},
];

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
									<p>{CRITERIA_NAME[index]}</p>
								</TableCell>
								<TableCell align="right">
									<p>{row}</p>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}
