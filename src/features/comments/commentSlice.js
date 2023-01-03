import { createSlice } from "@reduxjs/toolkit";
import { LOAD_STATUS } from "../../constants/status";

import commentDataFile from "../../assets/data/comment.json";
import {
	ATTITUDE,
	LEARNING_TYPE_NAME,
	SEMESTER_NAME,
	SEMESTER_YEAR_NAME,
	YEAR_NAME,
} from "../../constants/selectName";

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
	(
		semesters = SEMESTER_YEAR_NAME,
		learningTypes = LEARNING_TYPE_NAME,
		attitudes = Array.from(Object.values(ATTITUDE))
	) =>
	(state) => {
		const comments = state.comment.data;
		if (!semesters || !learningTypes || !attitudes) return [];
		const commentsFilteredBySemester = new Map(
			Object.entries(comments).filter(([key, value]) =>
				semesters.some((semester) => key.includes(semester))
			)
		);

		const commentsFilteredByType = new Map(
			Array.from(commentsFilteredBySemester.entries()).filter(
				([key, value]) => learningTypes.some((type) => key.includes(type))
			)
		);
		const filteredComments = Array.from(
			commentsFilteredByType.entries()
		).reduce(
			(list, [key, value]) => [
				...list,
				...value.map((v) => ({ ...v, category: key })),
			],
			[]
		);

		const commentList = filteredComments.reduce((list, value) => {
			const commentArray = [
				...(value.positive
					? value.positive.map((cmt) => ({
							originID: value.stt,
							content: cmt,
							category: value.category,
							attitude: ATTITUDE.POSITIVE,
							name: value.name,
							class: value.class,
					  }))
					: []),
				...(value.negative
					? value.negative.map((cmt) => ({
							originID: value.stt,
							content: cmt,
							category: value.category,
							attitude: ATTITUDE.NEGATIVE,
							name: value.name,
							class: value.class,
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

export const selectCommentChart = (type) => (state) => {
	const data = Object.entries(state.comment.data).filter(([key]) =>
		key.includes(type)
	);
	const mapData = data.map(([key, value]) => [
		key.split(",").slice(0, 2).join(","),
		value.reduce(
			(total, comment) => (total += comment?.positive?.length || 0),
			0
		) /
			value.reduce(
				(total, comment) =>
					(total +=
						(comment?.positive?.length || 0) +
						(comment?.negative?.length || 0)),
				0
			),
	]);

	return {
		labels: mapData.map((v) => v[0]),
		data: mapData.map((v) => v[1] * 100),
	};
};

export const selectCommentOfStaff = (staffName, semesterYear) => (state) => {
	const data = selectComment(semesterYear)(state);
	const filteredData = data.filter((v) => v.name === staffName);
	console.log({ filteredData });
	return filteredData;
};

export default commentSlice.reducer;
