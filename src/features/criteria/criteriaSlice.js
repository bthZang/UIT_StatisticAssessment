import { createSlice } from "@reduxjs/toolkit";
import { LOAD_STATUS } from "../../constants/status";

import criteriaDataFile from "../../assets/data/criteria.json";
import { LEARNING_TYPE_NAME } from "../../constants/selectName";

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

export const selectCriteriaLine = (id) => (state) => {
	const foundData = state.criteria.data[LEARNING_TYPE_NAME[0]].find(
		({ id: index }) => index - 1 == id
	);
	const { id: criteriaID, criteria, ...data } = foundData;
	console.log({ data });

	return {
		labels: Array.from(Object.entries(data)).map((v) => v[0]),
		data: Array.from(Object.entries(data)).map((v) => parseFloat(v[1])),
	};
};

export default criteriaSlice.reducer;
