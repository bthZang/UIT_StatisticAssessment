import { useParams } from "react-router-dom";

import Header from "../../components/Header/Header";
import "./StaffDetailPage.scss";

export default function StaffDetailPage() {
	const { id } = useParams();

	return (
		<div className="staff-detail-page">
			<Header title={``} />
			<div className="introduction"></div>
			<div className="navigation"></div>
		</div>
	);
}
