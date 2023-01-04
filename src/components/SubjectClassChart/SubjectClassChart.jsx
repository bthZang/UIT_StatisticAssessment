import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	Title,
	Tooltip,
} from "chart.js";
import React, { useRef } from "react";
import { Bar, getElementAtEvent } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectStaffHistogramData } from "../../features/assessment/assessmentSlice";

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
			text: "Biểu đồ điểm đánh giá giảng viên theo từng lớp đã dạy",
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
				text: "Điểm đánh giá",
				font: {
					weight: 600,
				},
			},
			beginAtZero: false,
		},
	},
};

export default function SubjectClassChart({ data = [], semester }) {
	const ref = useRef();
	const navigate = useNavigate();

	const chartData = {
		labels: data.map((v) => v.CLASS),
		datasets: [
			{
				label: `Điểm đánh giá giảng viên ${semester} (%)`,
				data: data.map((v) => v.AVG),
				backgroundColor: "#bdb2ff",
			},
		],
	};

	function handleClick(event) {
		const eventList = getElementAtEvent(ref.current, event);
		if (eventList.length > 0) {
			const index = eventList[0].index;
			const label = chartData.labels[index];
			navigate(`/class/${label}`);
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
