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
import { selectStaffHistogramData } from "../../features/staff/staffSlice";

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

export default function StaffHistogramChart({ semester }) {
	const ref = useRef();
	const navigate = useNavigate();

	const { labels, data } = useSelector(selectStaffHistogramData(semester));

	const chartData = {
		labels,
		datasets: [
			{
				label: `Điểm đánh giá giảng viên ${semester} (%)`,
				data,
				backgroundColor: "#bdb2ff",
			},
		],
	};

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
