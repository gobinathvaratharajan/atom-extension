// components
import { View } from 'components/view';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RootRoutes } from 'routes/router';

const routes = [...RootRoutes];

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) =>
          route.children ? (
            <Route key={route.path} path={route.path} element={route.element}>
              {route.children.map((child) => (
                <Route
                  key={child.path}
                  path={child.path}
                  element={<View display={child.view} title={child.title} />}
                />
              ))}
            </Route>
          ) : (
            <Route
              key={route.path}
              path={route.path}
              element={<View display={route.view} title={route.title} />}
            />
          )
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
