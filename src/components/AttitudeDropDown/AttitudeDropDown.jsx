import { ATTITUDE } from "../../constants/selectName";
import DropDown from "../DropDown/DropDown";

export default function AttitudeDropDown({
	attitude = [ATTITUDE.POSITIVE, ATTITUDE.NEGATIVE],
	onChange = () => {},
}) {
	return (
		<DropDown
			width={400}
			selected={attitude}
			onChange={onChange}
			title="thái độ đánh giá"
			dataset={Object.values(ATTITUDE)}
		/>
	);
}
