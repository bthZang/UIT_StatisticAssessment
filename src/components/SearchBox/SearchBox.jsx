import { useRef } from "react";

import SEARCH_ICON from "../../assets/search.svg";
import SearchButton from "../../components/SearchButton/SearchButton";

import "./SearchBox.scss";

export default function SearchBox({ placeholder, onSearch = () => {} }) {
	const inputRef = useRef();

	return (
		<div className="search-box">
			<div className="input-box">
				<img src={SEARCH_ICON} alt="" />
				<input ref={inputRef} type="text" placeholder={placeholder} />
			</div>
			<SearchButton onClick={() => onSearch(inputRef.current.value)} />
		</div>
	);
}
