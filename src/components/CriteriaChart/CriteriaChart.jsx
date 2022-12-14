// import rd3 from "react-d3-library";

import "./CriteriaChart.scss";

import React, { useRef } from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar, getElementAtEvent } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";

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
			text: "Biểu đồ điểm đánh giá",
		},
	},
	scales: {
		y: {
			beginAtZero: false,
		},
	},
};

export default function CriteriaChart({ data, semester }) {
	const ref = useRef();
	const navigate = useNavigate();

	const chartData = {
		labels: data.map((v, index) => `Tiêu chí ${index + 1}`),
		datasets: [
			{
				label: `Tỉ lệ hài lòng ${semester} (%)`,
				data: data.map((v) => v.point),
				backgroundColor: "#bdb2ff",
			},
		],
	};

	function handleClick(event) {
		const eventList = getElementAtEvent(ref.current, event);
		if (eventList.length > 0) {
			const index = eventList[0].index;
			const label = chartData.labels[index];
			navigate(`/criteria/${index}`);
		}
	}

	return (
		<div className="criteria-chart">
			<Bar
				ref={ref}
				options={options}
				data={chartData}
				onClick={handleClick}
			/>
		</div>
	);
}
