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

import "./StaffRadarChart.scss";

ChartJS.register(
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend
);

const criteriaData = [
	{
		id: 1,
		criteria:
			"Chuẩn đầu ra, yêu cầu và nội dung môn học được giảng viên giới thiệu trong buổi học đầu tiên và thường xuyên nhắc lại trong các buổi học tiếp theo",
		point: {
			"2017-2018": parseInt(((Math.random() + 3) / 4) * 100),
			"2018-2019": parseInt(((Math.random() + 3) / 4) * 100),
			"2019-2020": parseInt(((Math.random() + 3) / 4) * 100),
			"2020-2021": parseInt(((Math.random() + 3) / 4) * 100),
			"2021-2022": parseInt(((Math.random() + 3) / 4) * 100),
		},
	},
	{
		id: 2,
		criteria:
			"Phòng học,thí nghiệm và trang thiết bị đáp ứng yêu cầu giảng dạy và học tập.",
		point: {
			"2017-2018": parseInt(((Math.random() + 3) / 4) * 100),
			"2018-2019": parseInt(((Math.random() + 3) / 4) * 100),
			"2019-2020": parseInt(((Math.random() + 3) / 4) * 100),
			"2020-2021": parseInt(((Math.random() + 3) / 4) * 100),
			"2021-2022": parseInt(((Math.random() + 3) / 4) * 100),
		},
	},
	{
		id: 3,
		criteria:
			"Giáo trình, bài giảng và tài liệu phục vụ môn học được cung cấp đầy đủ và cập nhật trên hệ thống Moodle",
		point: {
			"2017-2018": parseInt(((Math.random() + 3) / 4) * 100),
			"2018-2019": parseInt(((Math.random() + 3) / 4) * 100),
			"2019-2020": parseInt(((Math.random() + 3) / 4) * 100),
			"2020-2021": parseInt(((Math.random() + 3) / 4) * 100),
			"2021-2022": parseInt(((Math.random() + 3) / 4) * 100),
		},
	},
	{
		id: 4,
		criteria:
			"Giảng viên hướng dẫn Anh/Chị phương pháp học tập chủ động và tạo động cơ học tập suốt đời",
		point: {
			"2017-2018": parseInt(((Math.random() + 3) / 4) * 100),
			"2018-2019": parseInt(((Math.random() + 3) / 4) * 100),
			"2019-2020": parseInt(((Math.random() + 3) / 4) * 100),
			"2020-2021": parseInt(((Math.random() + 3) / 4) * 100),
			"2021-2022": parseInt(((Math.random() + 3) / 4) * 100),
		},
	},
	{
		id: 5,
		criteria:
			"Giảng viên trình bày các vấn đề trong môn học mang tính cập nhật, chuẩn xác và có liên hệ thực tiễn",
		point: {
			"2017-2018": parseInt(((Math.random() + 3) / 4) * 100),
			"2018-2019": parseInt(((Math.random() + 3) / 4) * 100),
			"2019-2020": parseInt(((Math.random() + 3) / 4) * 100),
			"2020-2021": parseInt(((Math.random() + 3) / 4) * 100),
			"2021-2022": parseInt(((Math.random() + 3) / 4) * 100),
		},
	},
	{
		id: 6,
		criteria:
			"Phương pháp giảng dạy của giảng viên giúp Anh,Chị hiểu được và vận dụng được kiến thức",
		point: {
			"2017-2018": parseInt(((Math.random() + 3) / 4) * 100),
			"2018-2019": parseInt(((Math.random() + 3) / 4) * 100),
			"2019-2020": parseInt(((Math.random() + 3) / 4) * 100),
			"2020-2021": parseInt(((Math.random() + 3) / 4) * 100),
			"2021-2022": parseInt(((Math.random() + 3) / 4) * 100),
		},
	},
];

export default function StaffRadarChart({ data }) {
	const chartData = useMemo(
		() => ({
			// labels: Array(20)
			// 	.fill("")
			// 	.map((_, index) => `Tiêu chí ${index + 1}`),
			labels: criteriaData.map((v) => v.criteria),
			datasets: [
				{
					label: "Điểm đánh giá",
					data: criteriaData.map((v) => v.point["2021-2022"]),
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
		<div className="staff-radar-chart">
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
