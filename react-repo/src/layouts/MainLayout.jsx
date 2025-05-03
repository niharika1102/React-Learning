import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/main/Sidebar';
import Navbar from '../components/main/Navbar';
import routes from '../utils/Routes';

const MainLayout = () =>  {
  const location = useLocation();
  const currentRoute = routes.find(route => route.path === location.pathname);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar title={currentRoute ? currentRoute.title : 'React Tasks'} />
        <main className="p-4 overflow-auto flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
