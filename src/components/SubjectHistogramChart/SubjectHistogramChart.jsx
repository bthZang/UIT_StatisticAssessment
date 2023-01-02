import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import {
	selectStaffAssessmentData,
	selectSubjectHistogramData,
} from "../../features/assessment/assessmentSlice";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "top",
		},
		title: {
			display: true,
			text: "Biểu đồ phân bố điểm đánh giá môn học",
		},
	},
	scales: {
		y: {
			title: {
				display: true,
				text: "Số lượng môn học",
			},
		},
	},
};

const chartData = {
	labels: Array(40)
		.fill("")
		.map((v, index) => index / 10),
	datasets: [
		{
			label: "Điểm đánh giá môn học 2021 -2022 (%)",
			data: Array(40)
				.fill("")
				.map((_, index) =>
					parseInt(
						Math.random() * 5 +
							Math.pow(40 - Math.abs(30 - index), 2) / 60
					)
				),
			backgroundColor: "#bdb2ff",
		},
	],
};

export default function SubjectHistogramChart({ semester }) {
	const { labels, data } = useSelector(selectSubjectHistogramData(semester));

	const chartData = {
		labels,
		datasets: [
			{
				label: `Điểm đánh giá môn học 2021-2022 (%)`,
				data,
				backgroundColor: "#bdb2ff",
			},
		],
	};

	return (
		<div className="criteria-chart">
			<Bar options={options} data={chartData} />
		</div>
	);
}
