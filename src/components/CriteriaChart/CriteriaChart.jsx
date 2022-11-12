// import rd3 from "react-d3-library";

import "./CriteriaChart.scss";

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
			text: "Biểu đồ điểm đánh giá theo tiêu chí",
		},
	},
};

export default function CriteriaChart({ data }) {
	const chartData = {
		labels: Array(data.length)
			.fill("")
			.map((_, index) => `Tiêu chí ${index + 1}`),
		datasets: [
			{
				label: "Tỉ lệ hài lòng (%)",
				data: data.map((v) => v.point),
				backgroundColor: "rgba(255, 99, 132, 0.5)",
			},
		],
	};

	return (
		<div className="criteria-chart">
			<Bar options={options} data={chartData} />
		</div>
	);
}
