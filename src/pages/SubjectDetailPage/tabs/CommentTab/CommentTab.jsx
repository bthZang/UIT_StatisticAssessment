import { useState } from "react";

import { ATTITUDE, SEMESTER_YEAR_NAME } from "../../../../constants/selectName";

import { useSelector } from "react-redux";
import CommentGroup from "../../../../components/CommentGroup/CommentGroup";
import DropDown from "../../../../components/DropDown/DropDown";
import {
	selectCommentOfStaff,
	selectCommentOfSubject,
} from "../../../../features/comments/commentSlice";
import "./CommentTab.scss";
import AttitudeDropDown from "../../../../components/AttitudeDropDown/AttitudeDropDown";

export default function CommentTab({ staffName }) {
	const [semesterYear, setSemesterYear] = useState([SEMESTER_YEAR_NAME[0]]);
	const [attitude, setAttitude] = useState([
		ATTITUDE.POSITIVE,
		ATTITUDE.NEGATIVE,
	]);
	const comments = useSelector(
		selectCommentOfSubject(staffName, semesterYear, attitude)
	);

	return (
		<div className="subject-detail-comment-tab">
			<div className="dropdown">
				<DropDown
					title="kỳ"
					titleWidth={"max-content"}
					width={500}
					selected={semesterYear}
					onChange={setSemesterYear}
					dataset={SEMESTER_YEAR_NAME}
				/>
				<AttitudeDropDown attitude={attitude} onChange={setAttitude} />
			</div>
			<CommentGroup comments={comments} staffName={staffName} />
		</div>
	);
}
