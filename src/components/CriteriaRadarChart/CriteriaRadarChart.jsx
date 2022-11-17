import React, { useEffect, useMemo } from "react";
import {
	Chart as ChartJS,
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend,
} from "chart.js";

import { Radar } from "react-chartjs-2";

import "./CriteriaRadarChart.scss";

ChartJS.register(
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend
);

export default function CriteriaRadarChart({ data }) {
	const chartData = useMemo(
		() => ({
			labels: Array(20)
				.fill("")
				.map((_, index) => `Tiêu chí ${index + 1}`),
			datasets: [
				{
					label: "Điểm đánh giá",
					data: data.map((v) => v.point["2021-2022"]),
					backgroundColor: "rgba(255, 99, 132, 0.2)",
					borderColor: "rgba(255, 99, 132, 1)",
					borderWidth: 1,
				},
			],
			options: {
				r: {
					ticks: {
						color: "red",
					},
				},
			},
		}),
		[data]
	);

	console.log({ chartData });

	return (
		<div className="criteria-radar-chart">
			<Radar
				data={chartData}
				options={{
					scales: {
						r: {
							beginAtZero: true,
						},
					},
				}}
			/>
		</div>
	);
}
