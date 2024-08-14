import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import MenuBarMobile from './SideBar/MenuBarMobile';
import Sidebar from './SideBar/SideBar';

export default function LayoutsWithNavbar() {
  // Mobile sidebar visibility state
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="scrollbar-hide mb-3 w-full flex-none overflow-y-auto md:mt-5 md:w-60">
        <MenuBarMobile setter={setShowSidebar} />
        <Sidebar show={showSidebar} setter={setShowSidebar} showSidebar={showSidebar} />
      </div>
      <div className=" m-4 flex-grow overflow-y-auto rounded-3xl bg-neutral-100 p-10">
        <div className=" my-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
