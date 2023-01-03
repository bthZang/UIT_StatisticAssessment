import { useDispatch } from "react-redux";
import { RouterProvider, createHashRouter } from "react-router-dom";

import ClassDetailPage from "./pages/ClassDetailPage/ClassDetailPage";
import ClassPage from "./pages/ClassPage/ClassPage";
import CommentPage from "./pages/CommentPage/CommentPage";
import CriteriaDetailPage from "./pages/CriteriaDetailPage/CriteriaDetailPage";
import CriteriaPage from "./pages/CriteriaPage/CriteriaPage";

import HomePage from "./pages/HomePage/HomePage";
import StaffDetailPage from "./pages/StaffDetailPage/StaffDetailPage";
import StaffPage from "./pages/StaffPage/StaffPage";
import SubjectDetailPage from "./pages/SubjectDetailPage/SubjectDetailPage";
import SubjectPage from "./pages/SubjectPage/SubjectPage";

import { useEffect } from "react";
import { loadAssessmentData } from "./features/assessment/assessmentSlice";
import { loadCommentData } from "./features/comments/commentSlice";
import { loadCriteriaData } from "./features/criteria/criteriaSlice";
import StaffDetailStatisticPage from "./pages/StaffDetailStatisticPage/StaffDetailStatisticPage";

const router = createHashRouter([
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/comment",
		element: <CommentPage />,
	},
	{
		path: "/staff",
		element: <StaffPage />,
	},
	{
		path: "/staff/:id",
		element: <StaffDetailPage />,
	},
	{
		path: "/staff/detailStatistic/:semester/:point",
		element: <StaffDetailStatisticPage />,
	},
	{
		path: "/criteria",
		element: <CriteriaPage />,
	},
	{
		path: "/criteria/:id",
		element: <CriteriaDetailPage />,
	},
	{
		path: "/class",
		element: <ClassPage />,
	},
	{
		path: "/class/:id",
		element: <ClassDetailPage />,
	},
	{
		path: "/subject",
		element: <SubjectPage />,
	},
	{
		path: "/subject/:subjectName",
		element: <SubjectDetailPage />,
	},
]);

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadAssessmentData());
		dispatch(loadCommentData());
		dispatch(loadCriteriaData());
	}, []);

	return (
		<div className="App">
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;
