import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./utils/Routes";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
