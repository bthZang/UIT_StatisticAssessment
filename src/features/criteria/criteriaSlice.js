import { createSlice } from "@reduxjs/toolkit";
import { LOAD_STATUS } from "../../constants/status";

import criteriaDataFile from "../../assets/data/criteria.json";

export const criteriaSlice = createSlice({
	name: "criteria",
	initialState: {
		data: [],
		status: LOAD_STATUS.IDLE,
	},
	reducers: {
		loadCriteriaData: (state) => {
			state.data = criteriaDataFile;
		},
	},
});

export const { loadCriteriaData } = criteriaSlice.actions;

export const selectCriteria = (type, semesterYear) => (state) => {
	return state.criteria.data[type]?.map((v) => ({
		id: v.id,
		criteria: v.criteria,
		point: v[semesterYear],
	}));
};

export default criteriaSlice.reducer;
