import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CommentPage from "./pages/CommentPage/CommentPage";
import CriteriaPage from "./pages/CriteriaPage/CriteriaPage";

import HomePage from "./pages/HomePage/HomePage";
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
		path: "/criteria",
		element: <CriteriaPage />,
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
