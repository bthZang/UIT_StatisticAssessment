import { createSlice } from "@reduxjs/toolkit";
import { LOAD_STATUS } from "../../constants/status";

import commentDataFile from "../../assets/data/comment.json";

export const commentSlice = createSlice({
	name: "comment",
	initialState: {
		data: [],
		status: LOAD_STATUS.IDLE,
	},
	reducers: {
		loadCommentData: (state) => {
			state.data = commentDataFile;
		},
	},
});

export const { loadCommentData } = commentSlice.actions;

export const selectAllComment = (state) => state.comment.data;

export default commentSlice.reducer;
