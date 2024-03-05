import { RouteObject } from "react-router-dom";
//Common
import ErrorPage from "./error-page";
//Pages
import PostGrid from "../pages/PostGrid/index";
import PostDetailed from "../pages/PostDetailed";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <PostGrid />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/post/:postID",
    element: <PostDetailed />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
