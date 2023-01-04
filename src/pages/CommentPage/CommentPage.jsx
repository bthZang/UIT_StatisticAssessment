import { useState } from "react";

import Header from "../../components/Header/Header";
import SearchBox from "../../components/SearchBox/SearchBox";

import { useSelector } from "react-redux";
import DisplayTypeInput from "../../components/DisplayTypeInput/DisplayTypeInput";
import YearDropDown from "../../components/YearDropDown/YearDropDown";
import {
	ATTITUDE,
	LEARNING_TYPE_NAME,
	SEMESTER_NAME,
	SEMESTER_YEAR_NAME,
	YEAR_NAME,
} from "../../constants/selectName";
import { selectComment } from "../../features/comments/commentSlice";

import { useNavigate } from "react-router-dom";
import AttitudeDropDown from "../../components/AttitudeDropDown/AttitudeDropDown";
import CommentAttitudeChart from "../../components/CommentAttitudeChart/CommentAttitudeChart";
import SemesterDropDown from "../../components/SemesterDropDown/SemesterDropDown";
import SingleDropDown from "../../components/SingleDropDown/SingleDropDown";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import "./CommentPage.scss";
import DropDown from "../../components/DropDown/DropDown";
import CommentGroup from "../../components/CommentGroup/CommentGroup";

const choices = ["Tìm kiếm nhận xét", "Thống kê nhận xét"];

export default function CommentPage() {
	const [index, setIndex] = useState(0);
	const [displayType, setDisplayType] = useState(0);
	const [semester, setSemester] = useState([SEMESTER_YEAR_NAME[0]]);
	const [learningType, setLearningType] = useState([LEARNING_TYPE_NAME[0]]);
	const [attitude, setAttitude] = useState([
		ATTITUDE.POSITIVE,
		ATTITUDE.NEGATIVE,
	]);

	const comments = useSelector(
		selectComment(semester, learningType, attitude)
	);

	useInfiniteScroll(() => setIndex(index + 1));

	return (
		<div className="comment-page">
			<Header title={"Tìm kiếm bình luận"} />
			<DisplayTypeInput choices={choices} setChoice={setDisplayType} />
			{displayType === 0 ? (
				<>
					<div className="dropdown"></div>
					<div className="dropdown">
						<DropDown
							title="kỳ"
							titleWidth={"max-content"}
							width={500}
							selected={semester}
							onChange={setSemester}
							dataset={SEMESTER_YEAR_NAME}
						/>
						<AttitudeDropDown
							attitude={attitude}
							onChange={setAttitude}
						/>
					</div>
					<CommentGroup comments={comments} />
				</>
			) : (
				<>
					<SingleDropDown
						title={"hình thức dạy học"}
						selected={learningType}
						onChange={setLearningType}
						dataset={LEARNING_TYPE_NAME}
					/>
					<CommentAttitudeChart type={learningType} />
				</>
			)}
		</div>
	);
}
