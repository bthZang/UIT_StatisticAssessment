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
		dataGroupByStaff.set(TEACHER, [
			...(dataGroupByStaff.get(TEACHER) || []),
			other,
		]);
	});
	return Array.from(dataGroupByStaff.entries());
};

export const selectSubjectAssessmentData = (semester) => (state) => {
	const data = state.assessment.data[semester];
	const dataGroupBySubject = new Map();
	data.forEach(({ SUBJECT, ...other }) => {
		dataGroupBySubject.set(SUBJECT, [
			...(dataGroupBySubject.get(SUBJECT) || []),
			other,
		]);
	});
	return Array.from(dataGroupBySubject.entries());
};

export const selectClassAssessmentData = (semester) => (state) => {
	const data = state.assessment.data[semester];
	const dataGroupByClass = new Map();
	data.forEach(({ CLASS, ...other }) => {
		dataGroupByClass.set(CLASS, [
			...(dataGroupByClass.get(CLASS) || []),
			other,
		]);
	});
	return Array.from(dataGroupByClass.entries());
};

export const selectStaffHistogramData = (semester) => (state) => {
	const data = selectStaffAssessmentData(semester)(state).reduce(
		(list, [staffName, other]) => {
			list.set(
				staffName,
				other.reduce((avg, doc) => avg + doc.AVG, 0) / other.length
			);

			return new Map(list);
		},
		new Map()
	);
	const pointHistogram = new Map();

	Array.from(data.values()).forEach((AVG) =>
		pointHistogram.set(
			parseInt(AVG * 10) / 10,
			(pointHistogram.get(parseInt(AVG * 10) / 10) || 0) + 1
		)
	);
	console.log({ pointHistogram });

	return {
		labels: Array.from(pointHistogram.keys()).sort(),
		data: Array.from(pointHistogram.entries())
			.sort((a, b) => a[0] - b[0])
			.map((v) => v[1]),
	};
};

export const selectSubjectHistogramData = (semester) => (state) => {
	const data = selectSubjectAssessmentData(semester)(state).reduce(
		(list, [subjectName, other]) => {
			list.set(
				subjectName,
				other.reduce((avg, doc) => avg + doc.AVG, 0) / other.length
			);

			return new Map(list);
		},
		new Map()
	);
	const pointHistogram = new Map();

	Array.from(data.values()).forEach((AVG) =>
		pointHistogram.set(
			parseInt(AVG * 10) / 10,
			(pointHistogram.get(parseInt(AVG * 10) / 10) || 0) + 1
		)
	);

	return {
		labels: Array.from(pointHistogram.keys()).sort(),
		data: Array.from(pointHistogram.entries())
			.sort((a, b) => a[0] - b[0])
			.map((v) => v[1]),
	};
};

export const selectClassHistogramData = (semester) => (state) => {
	const data = selectClassAssessmentData(semester)(state).reduce(
		(list, [className, other]) => {
			list.set(
				className,
				other.reduce((avg, doc) => avg + doc.AVG, 0) / other.length
			);

			return new Map(list);
		},
		new Map()
	);
	const pointHistogram = new Map();

	Array.from(data.values()).forEach((AVG) =>
		pointHistogram.set(
			parseInt(AVG * 10) / 10,
			(pointHistogram.get(parseInt(AVG * 10) / 10) || 0) + 1
		)
	);

	return {
		labels: Array.from(pointHistogram.keys()).sort(),
		data: Array.from(pointHistogram.entries())
			.sort((a, b) => a[0] - b[0])
			.map((v) => v[1]),
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

export const selectStaffInfo = (staffName) => (state) => {
	const data = state.assessment.staffInfos.find(
		(staff) => staffName == staff.fullname
	);

	return {
		"Họ và tên": data?.fullname || "Không có dữ liệu",
		Email: data?.email || "Không có dữ liệu",
		"Số điện thoại": data?.phone ? `0${data?.phone}` : "Không có dữ liệu",
		"Giới tính": data?.gender || "Không có dữ liệu",
		"Khoa/Bộ môn": data?.faculty || "Không có dữ liệu",
		"Ngày sinh": data?.birthdate || "Không có dữ liệu",
		"Học vị": data?.learning || "Không có dữ liệu",
		"Chức danh": data?.learningPosition || "Không có dữ liệu",
		"Chức vụ": data?.position || "Không có dữ liệu",
		Ngạch: data?.ngach || "Không có dữ liệu",
	};
};

export const selectClassOfStaff = (staffName) => (state) => {
	const assessment = state.assessment.data;
	const classes = new Map();
	Object.entries(assessment).forEach(([semester, classObject]) => {
		classObject?.forEach(({ TEACHER, ...other }) => {
			if (TEACHER === staffName)
				classes.set(semester, [...(classes.get(semester) || []), other]);
		});
	});
	const classArray = Array.from(classes.entries());
	return classArray;
};

// Bug !!!
// So luong trong selectStaffHistogramData khac voi so luong tra ve
export const selectStaffByPoint = (semester, point) => (state) => {
	const data = selectStaffAssessmentData(semester)(state).reduce(
		(list, [staffName, other]) => {
			list.set(
				staffName,
				(
					other.reduce((avg, doc) => avg + doc.AVG, 0) / other.length
				).toFixed(1)
			);

			return new Map(list);
		},
		new Map()
	);
	const staffs = Array.from(data.entries()).filter(
		([staffName, thisPoint]) => parseInt(thisPoint * 10) / 10 == point
	);
	// console.log({ staffs });

	const staffNames = staffs.map((v) => v[0]);
	const assessmentData = selectStaffAssessmentData(semester)(state).filter(
		([staffName]) => staffNames.includes(staffName)
	);
	// console.log({ assessmentData });
	return assessmentData;
};

export const selectStaffRanking = (semester) => (state) => {
	const data = selectStaffAssessmentData(semester)(state);
	const staffAveragePoints = data.map?.(([staffName, classes]) => [
		staffName,
		classes.reduce((total, { AVG }) => total + AVG, 0) /
			(classes.length || 1),
	]);
	const rankingData = staffAveragePoints.sort((a, b) => b[1] - a[1]);
	return rankingData
};

export default assessmentSlice.reducer;
