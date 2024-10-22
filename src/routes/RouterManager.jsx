import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useMemo } from 'react';
import { PrivateRoutesPath, RoutesPath } from './routespath';
import { PrivateRoute } from './PrivateRoutes';
export const RouterManager = () => {
  const privateRoutes = useMemo(
    () =>
      Object.keys(PrivateRoutesPath).map((path) => {
        const RouteComponent = PrivateRoutesPath[path];
        return (
          <Route
            key={path}
            path={path}
            element={<PrivateRoute />}>
            <Route
              path={path}
              element={<RouteComponent />}
            />
          </Route>
        );
      }),
    []
  );
  const publicRoutes = useMemo(
    () =>
      Object.keys(RoutesPath).map((path) => {
        const RouteComponent = RoutesPath[path];
        return (
          <Route
            key={path}
            path={path}
            element={<RouteComponent />}
          />
        );
      }),
    []
  );
  const routes = privateRoutes.concat(publicRoutes);

  return (
    <BrowserRouter>
      <Routes>{routes}</Routes>
    </BrowserRouter>
  );
};
