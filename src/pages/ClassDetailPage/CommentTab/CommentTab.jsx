import { useSelector } from "react-redux";
import "./CommentTab.scss";
import { selectCommentOfClass } from "../../../features/comments/commentSlice";
import CommentGroup from "../../../components/CommentGroup/CommentGroup";
import AttitudeDropDown from "../../../components/AttitudeDropDown/AttitudeDropDown";
import { useState } from "react";
import { ATTITUDE } from "../../../constants/selectName";

export default function CommentTab({ name, semester }) {
	const [attitude, setAttitude] = useState([
		ATTITUDE.POSITIVE,
		ATTITUDE.NEGATIVE,
	]);

	const comments = useSelector(
		selectCommentOfClass(name, [semester], attitude)
	);

	return (
		<div className="class-detail-comment-tab-container">
			<AttitudeDropDown attitude={attitude} onChange={setAttitude} />
			<CommentGroup comments={comments} />
		</div>
	);
}
