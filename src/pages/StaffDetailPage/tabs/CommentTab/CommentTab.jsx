import { useState } from "react";

import { SEMESTER_YEAR_NAME } from "../../../../constants/selectName";

import { useSelector } from "react-redux";
import CommentGroup from "../../../../components/CommentGroup/CommentGroup";
import DropDown from "../../../../components/DropDown/DropDown";
import { selectCommentOfStaff } from "../../../../features/comments/commentSlice";
import "./CommentTab.scss";

export default function CommentTab({ staffName }) {
	const [semesterYear, setSemesterYear] = useState([SEMESTER_YEAR_NAME[0]]);
	const comments = useSelector(selectCommentOfStaff(staffName, semesterYear));
	return (
		<div className="comment-tab">
			<DropDown
				title="kỳ"
				titleWidth={"max-content"}
				width={500}
				selected={semesterYear}
				onChange={setSemesterYear}
				dataset={SEMESTER_YEAR_NAME}
			/>
			<CommentGroup comments={comments} staffName={staffName} />
		</div>
	);
}
