import { configureStore } from "@reduxjs/toolkit";
import assessmentSlice from "../features/assessment/assessmentSlice";
import commentSlice from "../features/comments/commentSlice";

const store = configureStore({
	reducer: {
		assessment: assessmentSlice,
		comment: commentSlice,
	},
});

export default store;
