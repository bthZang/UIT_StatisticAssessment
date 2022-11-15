import { useState, useRef } from "react";

import Header from "../../components/Header/Header";
import SearchBox from "../../components/SearchBox/SearchBox";

import "./CommentPage.scss";

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

	return (
		<div className="comment-page">
			<Header title={"Tìm kiếm bình luận"} />
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
