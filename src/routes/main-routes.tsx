import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "../modules/home/home-page";
import TypeAheadPage from "../modules/type-ahead/page/type-ahead-page";
import RecursivePage from "../modules/recursive/page/recursive-page";

const router = createBrowserRouter([
  { path: "/", Component: HomePage },
  { path: "/type-ahead", Component: TypeAheadPage },
  { path: "/recursive", Component: RecursivePage },
]);

const MainRoutes = () => {
  return <RouterProvider router={router} />;
};

export default MainRoutes;
