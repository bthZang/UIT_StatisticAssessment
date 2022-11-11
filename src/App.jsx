import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
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
