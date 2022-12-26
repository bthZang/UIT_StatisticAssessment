import { configureStore } from "@reduxjs/toolkit";
import staffSlice from "../features/staff/staffSlice";

const store = configureStore({
	reducer: {
		staff: staffSlice,
	},
});

export default store;
