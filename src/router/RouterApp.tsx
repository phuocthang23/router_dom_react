import { Route, Routes } from "react-router-dom";
import { routerPage } from "./index";
import PageLayouts from "../layouts/PageLayouts";

export const RouterApp = () => {
  return (
    <Routes>
      {/* <Route element={<PageLayouts />}>
        {routerPage.map((route: any) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route> */}

      {routerPage.map((route: any) => {
        const Layout = route.layout || PageLayouts;

        return (
          <Route
            key={route.path}
            path={route.path}
            element={<Layout>{route.element}</Layout>}
          />
        );
      })}
    </Routes>
  );
};
