import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ClassPage from "./pages/ClassPage/ClassPage";
import CommentPage from "./pages/CommentPage/CommentPage";
import CriteriaDetailPage from "./pages/CriteriaDetailPage/CriteriaDetailPage";
import CriteriaPage from "./pages/CriteriaPage/CriteriaPage";

import HomePage from "./pages/HomePage/HomePage";
import StaffDetailPage from "./pages/StaffDetailPage/StaffDetailPage";
import StaffPage from "./pages/StaffPage/StaffPage";

const router = createBrowserRouter([
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
]);

function App() {
	return (
		<div className="App">
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;
