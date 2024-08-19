import React from 'react';
import Logo from '../../assets/Logo';
import SidebarLink from './SidebarLink';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SettingsIcon from '@mui/icons-material/Settings';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import TuneIcon from '@mui/icons-material/Tune';
import ModalOverlay from "./ModalOverlay";
interface SidebarProps {
  show: boolean;
  setter: React.Dispatch<React.SetStateAction<boolean>>;
  showSidebar: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ show, setter }) => {
  const className =
    'w-[250px] bg-mainBlue transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40';
  const appendClass = show ? ' ml-0' : ' ml-[-250px] md:ml-0';

  const links = [
    { to: '/', icon: <SpaceDashboardIcon />, label: 'Dashboard' },
    { to: '/reports', icon: <AssessmentIcon />, label: 'Reports' },
    { to: '/ai', icon: <AutoAwesomeIcon />, label: 'AI' },
    { to: '/calibration', icon: <TuneIcon />, label: 'Calibration' },
    { to: '/export', icon: <SimCardDownloadIcon />, label: 'Export' },
    { to: '/settings', icon: <SettingsIcon />, label: 'Settings' },
  ];

  return (
    <>
      <div className={`${className}${appendClass}`}>
        <div className="my-3 ml-5 flex flex-col">
          <Logo />
        </div>
        <div className="flex flex-col">
          {links.map((link, index) => (
            <SidebarLink key={index} to={link.to} icon={link.icon} label={link.label} />
          ))}
        </div>
      </div>
      {show && <ModalOverlay setter={setter} />}
    </>
  );
};

export default Sidebar;
