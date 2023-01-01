import { YEAR_NAME } from "../../constants/selectName";
import DropDown from "../DropDown/DropDown";

export default function YearDropDown({
	year = [YEAR_NAME[0]],
	onChange = () => {},
}) {
	return (
		<DropDown
			width={400}
			selected={year}
			onChange={onChange}
			title="năm"
			dataset={YEAR_NAME}
		/>
	);
}
