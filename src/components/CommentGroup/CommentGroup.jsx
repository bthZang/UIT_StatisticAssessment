import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ATTITUDE } from "../../constants/selectName";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import SearchBox from "../SearchBox/SearchBox";

import { Modal } from "@mui/material";
import "./CommentGroup.scss";
import InfoBox from "../InfoBox/InfoBox";

export default function CommentGroup({ comments, staffName }) {
	const navigate = useNavigate();

	const commentInfo = useRef(null);

	const [keyword, setKeyword] = useState("");
	const [index, setIndex] = useState(1);
	const [open, setOpen] = useState(false);

	useInfiniteScroll(() => setIndex(index + 1));

	const handleClose = () => setOpen(false);

	function handleClickComment(comment) {
		setOpen(true);
		commentInfo.current = {
			Lớp: comment.class,
			"Tên giảng viên dạy": comment.name,
			"Năm học": comment.category,
			link: {
				Lớp: `/class/${comment.class}`,
				"Tên giảng viên dạy": `/staff/${comment.name}`,
			},
		};
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
						<p
							key={index}
							className={
								comment.attitude == ATTITUDE.POSITIVE
									? "positive"
									: "negative"
							}
							onClick={() => handleClickComment(comment)}
						>
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
			{commentInfo?.current ? (
				<Modal open={open} onClose={handleClose}>
					<div className="comment-modal">
						{/* <p className="class">{commentInfo.current.class}</p>
						<p className="staff">{commentInfo.current.name}</p>
						<p className="time">{commentInfo.current.category}</p> */}
						<InfoBox info={commentInfo.current} />
					</div>
				</Modal>
			) : null}
		</>
	);
}
