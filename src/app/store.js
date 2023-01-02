import { configureStore } from "@reduxjs/toolkit";
import assessmentSlice from "../features/assessment/assessmentSlice";
import commentSlice from "../features/comments/commentSlice";
import criteriaSlice from "../features/criteria/criteriaSlice";

const store = configureStore({
	reducer: {
		assessment: assessmentSlice,
		comment: commentSlice,
		criteria: criteriaSlice,
	},
});

export default store;
