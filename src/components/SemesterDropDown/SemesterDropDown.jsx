import { SEMESTER_NAME } from "../../constants/selectName";
import DropDown from "../DropDown/DropDown";

export default function SemesterDropDown({
	semester = [SEMESTER_NAME[0]],
	onChange = () => {},
}) {
	return (
		<DropDown
			width={400}
			selected={semester}
			onChange={onChange}
			title="học kỳ"
			dataset={SEMESTER_NAME}
		/>
	);
}
