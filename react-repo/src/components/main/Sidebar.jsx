import React from 'react'
import { NavLink } from 'react-router-dom';
import routes from '../../utils/Routes';

const Sidebar = () => {
  return (
    <div className="w-60 bg-[#149eca]/70 text-text flex flex-col p-4">
      <h2 className="text-2xl font-bold mb-6">Topics</h2>
      {routes.map((route) => (
        <NavLink
          key={route.path}
          to={route.path}
          className={({ isActive }) =>
            isActive
              ? "bg-gray-600 p-2 mb-2 rounded"
              : "hover:bg-gray-700 p-2 mb-2 rounded"
          }
        >
          {route.title}
        </NavLink>
      ))}
    </div>
  );
}

export default Sidebar