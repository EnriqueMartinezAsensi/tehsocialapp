import { RouteObject } from "react-router-dom";
//Common
import ErrorPage from "./error-page";
//Pages
import CardList from "../pages/CardList/index";
import PostDetailed from "../pages/PostDetailed";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <CardList />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/post/:postID",
    element: <PostDetailed />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
