import { useRef } from "react";

import SEARCH_ICON from "../../assets/search.svg";
import SearchButton from "../../components/SearchButton/SearchButton";

import "./SearchBox.scss";

export default function SearchBox({ placeholder, onChange = () => {} }) {
	const inputRef = useRef();

	return (
		<div className="search-box">
			<div className="input-box">
				<img src={SEARCH_ICON} alt="" />
				<input ref={inputRef} type="text" placeholder={placeholder} />
			</div>
			{inputRef?.current?.value ? (
				<button
					onClick={() => {
						inputRef.current.value = "";
						onChange("");
					}}
					className="remove-button"
				>
					Bỏ tìm kiếm
				</button>
			) : null}
			<SearchButton onClick={() => onChange(inputRef.current.value)} />
		</div>
	);
}
