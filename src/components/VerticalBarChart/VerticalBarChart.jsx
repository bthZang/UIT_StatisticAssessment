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
			text: "Biểu đồ phổ điểm đánh giá giảng viên",
			font: {
				size: 18,
			},
		},
	},
	scales: {
		x: {
			title: {
				display: true,
				text: "Điểm đánh giá",
				font: {
					weight: 600,
				},
			},
		},
		y: {
			title: {
				display: true,
				text: "Số lượng cán bộ",
				font: {
					weight: 600,
				},
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
			label: "Điểm đánh giá giảng viên 2021 -2022 (%)",
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


export default function VerticalBarChart() {
	return (
		<div className="vertical-bar-chart">
			<Bar options={options} data={chartData} />
		</div>
	);
}
