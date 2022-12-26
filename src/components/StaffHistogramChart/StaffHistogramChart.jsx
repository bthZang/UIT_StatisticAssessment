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
import { Bar, getDatasetAtEvent, getElementAtEvent } from "react-chartjs-2";
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

export default function StaffHistogramChart() {
	const ref = useRef();
	const navigate = useNavigate();

	function handleClick(event) {
		const eventList = getElementAtEvent(ref.current, event);
		if (eventList.length > 0) {
			const index = eventList[0].index;
			const label = chartData.labels[index];
			navigate(`/staff/detailStatistic/${label}`);
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
