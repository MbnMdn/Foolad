import React from 'react';
import { NavLink } from 'react-router-dom';

interface SidebarLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ to, icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `mx-3 my-1.5 flex items-center rounded-lg font-medium p-3 ${
        isActive ? 'bg-neutral-200 text-mainBlue' : 'text-neutral-200'
      }`
    }
  >
    <div className="flex items-center gap-2">
      {icon}
      <span>{label}</span>
    </div>
  </NavLink>
);

export default SidebarLink;
