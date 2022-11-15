import "./SearchButton.scss";

export default function SearchButton({ onClick }) {
	return (
		<button onClick={onClick} className="search-button">
			Tìm kiếm
		</button>
	);
}
