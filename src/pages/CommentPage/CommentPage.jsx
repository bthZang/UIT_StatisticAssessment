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
	YEAR_NAME,
} from "../../constants/selectName";
import { selectComment } from "../../features/comments/commentSlice";

import AttitudeDropDown from "../../components/AttitudeDropDown/AttitudeDropDown";
import LearningTypeDropDown from "../../components/LearningTypeDropDown/LearningTypeDropDown";
import SemesterDropDown from "../../components/SemesterDropDown/SemesterDropDown";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import "./CommentPage.scss";
import { useNavigate } from "react-router-dom";
import CommentAttitudeChart from "../../components/CommentAttitudeChart/CommentAttitudeChart";
import SingleDropDown from "../../components/SingleDropDown/SingleDropDown";

export default function CommentPage() {
	const navigate = useNavigate();

	const [keyword, setKeyword] = useState("");
	const [index, setIndex] = useState(0);
	const [displayType, setDisplayType] = useState(0);
	const [semester, setSemester] = useState([SEMESTER_NAME[0]]);
	const [year, setYear] = useState([YEAR_NAME[0]]);
	const [learningType, setLearningType] = useState([LEARNING_TYPE_NAME[0]]);
	const [attitude, setAttitude] = useState([
		ATTITUDE.POSITIVE,
		ATTITUDE.NEGATIVE,
	]);

	const comments = useSelector(
		selectComment(semester, year, learningType, attitude)
	);

	useInfiniteScroll(() => setIndex(index + 1));

	function handleClickComment() {
		navigate("/comment/detail/");
	}

	return (
		<div className="comment-page">
			<Header title={"Tìm kiếm bình luận"} />
			<DisplayTypeInput setChoice={setDisplayType} />
			{displayType === 0 ? (
				<>
					{" "}
					<div className="dropdown">
						<YearDropDown year={year} onChange={setYear} />
					</div>
					<div className="dropdown">
						<SemesterDropDown
							semester={semester}
							onChange={setSemester}
						/>
						<AttitudeDropDown
							attitude={attitude}
							onChange={setAttitude}
						/>
					</div>
					<SearchBox
						placeholder={"Nhập từ khóa cần tìm kiếm..."}
						onSearch={setKeyword}
					/>
					<div className="comment-box">
						<div className="comment-by-year">
							<div className="comment-groups">
								{comments.slice(0, index * 10).map((comment, index) =>
									comment.content?.includes(keyword) ? (
										<p key={index} onClick={handleClickComment}>
											{keyword
												? comment.content
														.split(
															new RegExp(`(${keyword})`, "gi")
														)
														.map((v) =>
															v === keyword ? (
																<span>{keyword}</span>
															) : (
																v
															)
														)
												: comment.content}
										</p>
									) : (
										""
									)
								)}
							</div>
						</div>
					</div>
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
