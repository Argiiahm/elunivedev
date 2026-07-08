import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import ProjectDetail from "../pages/ProjectDetail";
import Navbar from "../components/Navbar";

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
    element: (
      <>
        <Navbar />
        <ProjectDetail />
      </>
    ),
  },
]);

export default router;
