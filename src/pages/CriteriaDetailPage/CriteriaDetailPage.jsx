import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";

import './CriteriaDetailPage.scss'

export default function CriteriaDetailPage() {
	const { id } = useParams();

	return <div className="criteria-detail-page">
      <Header title={`Tiêu chí ${id}`} />
   </div>;
}
