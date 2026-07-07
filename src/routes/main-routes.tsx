import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "../modules/home/home-page";
import TypeAheadPage from "../modules/type-ahead/page/type-ahead-page";
import RecursivePage from "../modules/recursive/page/recursive-page";
import VirtualizationPage from "../modules/virtualization/page/virtualization-page";
import PaginationPage from "../modules/pagination/pages/pagination-page";

const router = createBrowserRouter([
  { path: "/", Component: HomePage },
  { path: "/type-ahead", Component: TypeAheadPage },
  { path: "/virtualization", Component: VirtualizationPage },
  { path: "/recursive", Component: RecursivePage },
  { path: "/pagination", Component: PaginationPage },
]);

const MainRoutes = () => {
  return <RouterProvider router={router} />;
};

export default MainRoutes;
