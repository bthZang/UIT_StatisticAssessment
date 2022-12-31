import { useState } from "react";

import Header from "../../components/Header/Header";
import SearchBox from "../../components/SearchBox/SearchBox";

import { useSelector } from "react-redux";
import DisplayTypeInput from "../../components/DisplayTypeInput/DisplayTypeInput";
import SemesterDropDown from "../../components/SemesterDropDown/SemesterDropDown";
import { SEMESTER_NAME } from "../../constants/semesterName";
import { selectAllComment } from "../../features/comments/commentSlice";

import "./CommentPage.scss";
import LearningTypeDropDown from "../../components/LearningTypeDropDown/LearningTypeDropDown";

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
	const [semester, setSemester] = useState(SEMESTER_NAME[0]);
	const [learningType, setLearningType] = useState();

	const comments = useSelector(selectAllComment);

	return (
		<div className="comment-page">
			<Header title={"Tìm kiếm bình luận"} />
			<DisplayTypeInput setDisplayType={setDisplayType} />
			<div className="dropdown">
				<SemesterDropDown year={semester} onChange={setSemester} />
				<LearningTypeDropDown
					type={learningType}
					onChange={setLearningType}
				/>
			</div>
			<SearchBox
				placeholder={"Nhập từ khóa cần tìm kiếm..."}
				onSearch={setKeyword}
			/>
			<div className="comment-box">
				{data.map(({ year, comments }) => (
					<div className="comment-by-year">
						<div className="year-box">
							<div></div>
							<p>Năm học {year}</p>
						</div>
						<div className="comment-groups">
							{comments.map(
								(comment) =>
									comment.includes(keyword) && (
										<p>
											{keyword
												? comment
														.split(
															new RegExp(`(${keyword})`, "g")
														)
														.map((v) =>
															v === keyword ? (
																<span>{keyword}</span>
															) : (
																v
															)
														)
												: comment}
										</p>
									)
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
