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
				label: "Tỉ lệ hài lòng 2018 -2019 (%)",
				data: data.map((v) => v.point["2018-2019"]),
				backgroundColor: "#bdb2ff",
			},
			{
				label: "Tỉ lệ hài lòng 2019-2020 (%)",
				data: data.map((v) => v.point["2019-2020"]),
				backgroundColor: "#a0c4ff",
			},
			{
				label: "Tỉ lệ hài lòng 2020-2021 (%)",
				data: data.map((v) => v.point["2020-2021"]),
				backgroundColor: "#ffd6a5",
			},
			{
				label: "Tỉ lệ hài lòng 2021-2022 (%)",
				data: data.map((v) => v.point["2021-2022"]),
				backgroundColor: "#ffadad",
			},
		],
	};

	return (
		<div className="criteria-chart">
			<Bar options={options} data={chartData} />
		</div>
	);
}
