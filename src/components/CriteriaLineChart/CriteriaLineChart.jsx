import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { selectCommentChart } from "../../features/comments/commentSlice";
import { selectCriteriaLine } from "../../features/criteria/criteriaSlice";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "top",
			labels: {
				font: {
					size: 15,
				},
			},
		},
		title: {
			display: true,
			text: "Biểu đồ tỉ lệ hài lòng qua các học kỳ",
			font: {
				size: 16,
			},
		},
	},
	scales: {
		y: {
			beginAtZero: false,
			// max: 100,
			// min: 0,
			ticks: {
				font: {
					size: 14,
				},
			},
			title: {
				display: true,
				text: "Tỉ lệ hài lòng",
				font: {
               size: 15,
					weight: 600,
				},
			},
		},
		x: {
			ticks: {
				font: {
					size: 15,
				},
			},
			title: {
				display: true,
				text: "Các học kỳ",
				font: {
               size: 15,
					weight: 600,
				},
			},
		},
	},
};

export default function CriteriaLineChart({ id }) {
	const { labels, data } = useSelector(selectCriteriaLine(id));

	const chartData = {
		labels,
		datasets: [
			{
				fill: true,
				label: "Tỉ lệ hài lòng (%)",
				data,
				borderWidth: 2,
				borderColor: "rgb(53, 162, 235)",
				backgroundColor: "rgba(53, 162, 235, 0.5)",
			},
		],
	};

	return <Line options={options} data={chartData} />;
}
