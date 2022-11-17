import { createHashRouter, RouterProvider } from "react-router-dom";
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
	return (
		<div className="App">
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;
