import { createSlice } from "@reduxjs/toolkit";
import { LOAD_STATUS } from "../../constants/status";

import commentDataFile from "../../assets/data/comment.json";
import { ATTITUDE } from "../../constants/selectName";

export const commentSlice = createSlice({
	name: "comment",
	initialState: {
		data: {},
		status: LOAD_STATUS.IDLE,
	},
	reducers: {
		loadCommentData: (state) => {
			state.data = Object.entries(commentDataFile).reduce(
				(data, current) => {
					const [key, value] = current;
					const commentArray = [];

					let currentIndex = -1;
					value.forEach((comment) => {
						if (comment.name) {
							let newComment = { ...comment };
							newComment.positive = newComment.positive
								? [newComment.positive]
								: [];
							newComment.negative = newComment.negative
								? [newComment.negative]
								: [];
							commentArray.push(newComment);
							currentIndex += 1;
						} else {
							if (comment.positive)
								commentArray[currentIndex].positive.push(
									comment.positive
								);
							if (comment.negative)
								commentArray[currentIndex].negative.push(
									comment.negative
								);
						}
					});

					data[key] = commentArray;
					return { ...data };
				},
				{}
			);
		},
	},
});

export const { loadCommentData } = commentSlice.actions;

export const selectComment =
	(semesters, years, learningTypes, attitudes) => (state) => {
		const comments = state.comment.data;
		if (!semesters || !years || !learningTypes || !attitudes) return [];
		const commentsFilteredBySemester = new Map(
			Object.entries(comments).filter(([key, value]) =>
				semesters.some((semester) => key.includes(semester))
			)
		);
		// console.log({ commentsFilteredBySemester });
		const commentsFilteredByYear = new Map(
			Array.from(commentsFilteredBySemester.entries()).filter(
				([key, value]) => years.some((year) => key.includes(year))
			)
		);
		// console.log({ commentsFilteredByYear });
		const commentsFilteredByType = new Map(
			Array.from(commentsFilteredByYear.entries()).filter(([key, value]) =>
				learningTypes.some((type) => key.includes(type))
			)
		);
		// console.log({ commentsFilteredByType });
		const filteredComments = Array.from(
			commentsFilteredByType.entries()
		).reduce(
			(list, [key, value]) => [
				...list,
				...value.map((v) => ({ ...v, category: key })),
			],
			[]
		);
		// console.log({ filteredComments });

		const commentList = filteredComments.reduce((list, value) => {
			const commentArray = [
				...(value.positive
					? value.positive.map((cmt) => ({
							originID: value.stt,
							content: cmt,
							category: value.category,
							attitude: ATTITUDE.POSITIVE,
					  }))
					: []),
				...(value.negative
					? value.negative.map((cmt) => ({
							originID: value.stt,
							content: cmt,
							category: value.category,
							attitude: ATTITUDE.NEGATIVE,
					  }))
					: []),
			];

			if (commentArray.length === 0) return [...list];
			return [...list, ...commentArray];
		}, []);

		return commentList.filter((comment) =>
			attitudes.some((attitude) => attitude === comment.attitude)
		);
	};

export default commentSlice.reducer;
