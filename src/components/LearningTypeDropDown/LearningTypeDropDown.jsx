import { LEARNING_TYPE_NAME } from "../../constants/selectName";
import DropDown from "../DropDown/DropDown";

export default function LearningTypeDropDown({
	type = [LEARNING_TYPE_NAME[0]],
	onChange = () => {},
}) {
	return (
		<DropDown
			width={400}
			selected={type}
			onChange={onChange}
			title="hình thức dạy"
			dataset={LEARNING_TYPE_NAME}
		/>
	);
}
