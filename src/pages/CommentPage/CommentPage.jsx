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

import "./CommentPage.scss";
import LearningTypeDropDown from "../../components/LearningTypeDropDown/LearningTypeDropDown";
import AttitudeDropDown from "../../components/AttitudeDropDown/AttitudeDropDown";
import SemesterDropDown from "../../components/SemesterDropDown/SemesterDropDown";

const data = [
	{
		year: "2021-2022",
		comments: [
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies mi quis hendrerit dolor. Feugiat pretium nibh ipsum consequat nisl vel pretium. In vitae turpis massa sed elementum tempus egestas sed sed. Fermentum dui faucibus in ornare quam viverra orci sagittis eu.",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies mi quis hendrerit dolor.",
		],
	},
	{
		year: "2020-2021",
		comments: [
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies mi quis hendrerit dolor. Feugiat pretium nibh ipsum consequat nisl vel pretium. In vitae turpis massa sed elementum tempus egestas sed sed. Fermentum dui faucibus in ornare quam viverra orci sagittis eu.",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies mi quis hendrerit dolor.",
		],
	},
];

export default function CommentPage() {
	const [keyword, setKeyword] = useState("");
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
	console.log({ comments });

	return (
		<div className="comment-page">
			<Header title={"Tìm kiếm bình luận"} />
			<DisplayTypeInput setDisplayType={setDisplayType} />
			<div className="dropdown">
				<YearDropDown year={year} onChange={setYear} />
				<LearningTypeDropDown
					type={learningType}
					onChange={setLearningType}
				/>
			</div>
			<div className="dropdown">
				<SemesterDropDown semester={semester} onChange={setSemester} />
				<AttitudeDropDown attitue={attitude} onChange={setAttitude} />
			</div>
			<SearchBox
				placeholder={"Nhập từ khóa cần tìm kiếm..."}
				onSearch={setKeyword}
			/>
			<div className="comment-box">
				<div className="comment-by-year">
					<div className="comment-groups">
						{comments.map((comment) =>
							comment.content?.includes(keyword) ? (
								<p>
									{keyword
										? comment.content
												.split(new RegExp(`(${keyword})`, "g"))
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
		</div>
	);
}
