import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LOAD_STATUS } from "../../constants/status";

import staffAssessmentDataFile from "../../assets/data/ĐTB-GV-2017-2021.json";
import staffInfoDataFile from "../../assets/data/MSCB.json";

export const staffSlice = createSlice({
	name: "staff",
	initialState: {
		data: [],
		staffInfos: [],
		status: LOAD_STATUS.IDLE,
	},
	reducers: {
		loadData: (state) => {
			state.data = staffAssessmentDataFile;
			state.staffInfos = staffInfoDataFile;
		},
	},
});

export const { loadData } = staffSlice.actions;

export const selectStaffAssessmentData = (state) => state.staff.data;
export const selectStaffInfoData = (state) => state.staff.staffInfos;

export default staffSlice.reducer;
