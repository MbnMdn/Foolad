import React from 'react';

import PictureSection from '../components/Dashboard/PictureSection';
import DashboardSelectSection from '../components/Dashboard/DashboardSelectSection';
import TemperatureSection from '../components/Dashboard/TemperatureSection';

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-5">
      <DashboardSelectSection />
      <PictureSection />
      <TemperatureSection />
    </div>
  );
}
