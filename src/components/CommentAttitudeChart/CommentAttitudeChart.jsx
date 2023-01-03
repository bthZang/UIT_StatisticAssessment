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
			text: "Biểu đồ tỉ lệ đánh giá tích cực qua các kỳ",
			font: {
				size: 16,
			},
		},
	},
	scales: {
		y: {
			beginAtZero: true,
			max: 100,
			min: 0,
			ticks: {
				font: {
					size: 14,
				},
			},
		},
		x: {
			ticks: {
				font: {
					size: 15,
				},
			},
		},
	},
};

export default function CommentAttitudeChart({ type }) {
	const { labels, data } = useSelector(selectCommentChart(type));

	const chartData = {
		labels,
		datasets: [
			{
				fill: true,
				label: "Tỉ lệ bình luận tích cực (%)",
				data,
				borderWidth: 2,
				borderColor: "rgb(53, 162, 235)",
				backgroundColor: "rgba(53, 162, 235, 0.5)",
			},
		],
	};

	return <Line options={options} data={chartData} />;
}
