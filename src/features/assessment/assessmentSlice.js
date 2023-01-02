import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LOAD_STATUS } from "../../constants/status";

import staffAssessmentDataFile from "../../assets/data/ĐTB-GV-2017-2021.json";
import staffInfoDataFile from "../../assets/data/MSCB.json";

export const assessmentSlice = createSlice({
	name: "assessment",
	initialState: {
		data: [],
		staffInfos: [],
		status: LOAD_STATUS.IDLE,
	},
	reducers: {
		loadAssessmentData: (state) => {
			state.data = staffAssessmentDataFile;
			state.staffInfos = staffInfoDataFile;
		},
	},
});

export const { loadAssessmentData } = assessmentSlice.actions;

export const selectStaffAssessmentData = (semester) => (state) => {
	const data = state.assessment.data[semester];
	const dataGroupByStaff = new Map();
	data.forEach(({ TEACHER, ...other }) => {
		dataGroupByStaff.set(TEACHER, [...dataGroupByStaff.get(TEACHER), other]);
	});
	return dataGroupByStaff;
};

export const selectStaffHistogramData = (semester) => (state) => {
	const data = selectStaffAssessmentData(semester)(state);
	const pointHistogram = new Map();

	data.forEach(({ AVG }) =>
		pointHistogram.set(
			parseInt(AVG * 10) / 10,
			(pointHistogram.get(parseInt(AVG * 10) / 10) || 0) + 1
		)
	);

	return {
		labels: Array.from(pointHistogram.keys()).sort(),
		data: Array.from(pointHistogram.entries()).sort((a, b) => a[0] - b[0]),
	};
};

export const selectStaffCriteria = (semester, staffID) => (state) => {
	if (!selectStaffAssessmentData(semester)(state)) return;
	const data = selectStaffAssessmentData(semester)(state).filter(
		(row) => row.MSCB == staffID
	);

	const totalPoint = Array(19).fill(0);

	data.forEach((value) => {
		for (let i = 0; i < 19; i++) {
			totalPoint[i] += value[i + 1];
		}
	});

	return totalPoint.map((point) => (point / data.length).toFixed(2));
};

export const selectStaffInfoData = (state) => state.assessment.staffInfos;

export const selectStaffInfo = (id) => (state) =>
	state.assessment.staffInfos.find((staff) => id == staff.id);

export default assessmentSlice.reducer;
