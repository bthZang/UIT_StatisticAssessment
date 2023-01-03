import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import SearchBox from "../SearchBox/SearchBox";
import "./CommentGroup.scss";

export default function CommentGroup({ comments, staffName }) {
	const navigate = useNavigate();

	const [keyword, setKeyword] = useState("");
	const [index, setIndex] = useState(1);

	useInfiniteScroll(() => setIndex(index + 1));

	function handleClickComment() {
		navigate("/comment/detail/");
	}
	return (
		<>
			<SearchBox
				placeholder="Nhập từ khóa cần tìm kiếm..."
				onChange={setKeyword}
			/>
			<div className="comment-groups">
				{comments.slice(0, index * 10).map((comment, index) =>
					comment.content?.includes(keyword) ? (
						<p key={index} onClick={handleClickComment}>
							{keyword
								? comment.content
										.split(new RegExp(`(${keyword})`, "gi"))
										.map((v) =>
											v === keyword ? <span>{keyword}</span> : v
										)
								: comment.content}
						</p>
					) : (
						""
					)
				)}
			</div>
		</>
	);
}
