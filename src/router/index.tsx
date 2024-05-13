import { RouteObject } from "react-router-dom";
import HomePage from "./../page/Home";
import NotFoundPage from "../page/NotFoundPage";
import ProfilesPage from "../page/ProfilesPage";
import ProfilePage from "../page/ProfilePage";
import NoHeader from "../page/NoHeader";
import NoFooter from "../page/NoFooter";
import Layout2 from "../layouts/Layout2";

export const routerPage = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/profiles",
    element: <ProfilesPage />,
    children: [
      {
        path: "/:profileId",
        element: <ProfilePage />,
      },
    ],
    layout: Layout2,
  },
  {
    path: "/no-header",
    element: <NoHeader />,
  },
  {
    path: "/no-footer",
    element: <NoFooter />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
