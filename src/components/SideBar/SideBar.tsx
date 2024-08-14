import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../assets/Logo';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default function Sidebar({ show, setter, showSidebar }) {
  const className =
    'w-[250px] bg-mainBlue transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40';
  const appendClass = show ? ' ml-0' : ' ml-[-250px] md:ml-0';

  const navLinks = [
    {
      key: '1',
      label: (
        <NavLink
          to="/"
          className={({ isActive }) =>
            `mx-3 my-1.5 flex items-center  rounded-lg p-3 ${
              isActive ? ' bg-neutral-200 text-mainBlue' : ''
            }`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center gap-1">
              {/*<HomeFilledIcon*/}
              {/*  isActive={isActive}*/}
              {/*  activeColor={tailwindColors.tertiary}*/}
              {/*  notActiveColor={tailwindColors.mainGreen}*/}
              {/*/>*/}
              <span>Dashboard</span>
            </div>
          )}
        </NavLink>
      ),
    },

    {
      key: '2',
      label: (
        <NavLink
          to="/pages"
          className={({ isActive }) =>
            `mx-3 my-1.5 flex items-center  rounded-lg p-3 ${
              isActive ? ' bg-neutral-200 text-mainBlue' : ''
            }`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center gap-1">
              {/*<HomeFilledIcon*/}
              {/*  isActive={isActive}*/}
              {/*  activeColor={tailwindColors.tertiary}*/}
              {/*  notActiveColor={tailwindColors.mainGreen}*/}
              {/*/>*/}
              <span>Pages</span>
            </div>
          )}
        </NavLink>
      ),
    },

    {
      key: '3',
      label: (
        <NavLink
          to="/reports"
          className={({ isActive }) =>
            `mx-3 my-1.5 flex items-center  rounded-lg p-3 ${
              isActive ? ' bg-neutral-200 text-mainBlue' : ''
            }`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center gap-1">
              {/*<HomeFilledIcon*/}
              {/*  isActive={isActive}*/}
              {/*  activeColor={tailwindColors.tertiary}*/}
              {/*  notActiveColor={tailwindColors.mainGreen}*/}
              {/*/>*/}
              <span>Reports</span>
            </div>
          )}
        </NavLink>
      ),
    },

    {
      key: '4',
      label: (
        <NavLink
          to="/ai"
          className={({ isActive }) =>
            `mx-3 my-1.5 flex items-center  rounded-lg p-3 ${
              isActive ? ' bg-neutral-200 text-mainBlue' : ''
            }`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center gap-1">
              {/*<HomeFilledIcon*/}
              {/*  isActive={isActive}*/}
              {/*  activeColor={tailwindColors.tertiary}*/}
              {/*  notActiveColor={tailwindColors.mainGreen}*/}
              {/*/>*/}
              <span>AI</span>
            </div>
          )}
        </NavLink>
      ),
    },

    {
      key: '5',
      label: (
        <NavLink
          to="/calibration"
          className={({ isActive }) =>
            `mx-3 my-1.5 flex items-center  rounded-lg p-3 ${
              isActive ? ' bg-neutral-200 text-mainBlue' : ''
            }`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center gap-1">
              {/*<HomeFilledIcon*/}
              {/*  isActive={isActive}*/}
              {/*  activeColor={tailwindColors.tertiary}*/}
              {/*  notActiveColor={tailwindColors.mainGreen}*/}
              {/*/>*/}
              <span>Calibration</span>
            </div>
          )}
        </NavLink>
      ),
    },

    {
      key: '6',
      label: (
        <NavLink
          to="/export"
          className={({ isActive }) =>
            `mx-3 my-1.5 flex items-center  rounded-lg p-3 ${
              isActive ? ' bg-neutral-200 text-mainBlue' : ''
            }`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center gap-1">
              {/*<HomeFilledIcon*/}
              {/*  isActive={isActive}*/}
              {/*  activeColor={tailwindColors.tertiary}*/}
              {/*  notActiveColor={tailwindColors.mainGreen}*/}
              {/*/>*/}
              <span>Export</span>
            </div>
          )}
        </NavLink>
      ),
    },

    {
      key: '7',
      label: (
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `mx-3 my-1.5 flex items-center  rounded-lg p-3 ${
              isActive ? ' bg-neutral-200 text-mainBlue' : ''
            }`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center gap-1">
              {/*<HomeFilledIcon*/}
              {/*  isActive={isActive}*/}
              {/*  activeColor={tailwindColors.tertiary}*/}
              {/*  notActiveColor={tailwindColors.mainGreen}*/}
              {/*/>*/}
              <span>Settings</span>
            </div>
          )}
        </NavLink>
      ),
    },
  ];

  const ModalOverlay = () => (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      className="fixed bottom-0 left-0 right-0 top-0 z-30 flex bg-black/50 md:hidden"
      onClick={() => {
        setter((oldVal: boolean) => !oldVal);
      }}
    />
  );

  return (
    <>
      <div className={`${className}${appendClass}`}>
        <div className="my-3 ml-5 flex flex-col">
          <Logo />
        </div>
        <div className="flex flex-col">
          {navLinks.map((item) => (
            <div key={item.key} className="text-neutral-200">
              {item.label}
            </div>
          ))}
        </div>
      </div>
      {show ? <ModalOverlay /> : null}
    </>
  );
}
