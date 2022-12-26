import { useState } from "react";
import SearchBox from "../SearchBox/SearchBox";

export default function StaffTable({ data }) {
	console.log({ data });
	const [keyword, setKeyword] = useState("");

	return (
		<div className="container">
			<SearchBox
				placeholder={"Nhập mã cán bộ cần tìm..."}
				onChange={setKeyword}
			/>
			<div className="table"></div>
		</div>
	);
}
