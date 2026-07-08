import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import ProjectDetail from "../pages/ProjectDetail";

const router = createBrowserRouter([
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/project/:slug",
    element: <ProjectDetail />,
  },
]);

export default router;
