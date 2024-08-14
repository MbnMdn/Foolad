import React from 'react';

import EmptyHorizontal from '../../assets/EmptyHorizontal.png';
import BasicLineChart from '../Charts/BasicLineChart';

export default function TemperatureSection() {
  return (
    <div className=" mt-6 flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <p className="text-lg font-bold">Heat Map</p>
        <div className="flex w-7/12 flex-col gap-4">
          <img src={EmptyHorizontal} />
        </div>
      </div>

      <div>
        <h3 className=" text-lg font-bold">Horizontal</h3>
        <div className="grid grid-cols-1 min-[1030px]:grid-cols-2 min-[1400px]:grid-cols-3  ">
          <BasicLineChart />
          <BasicLineChart />
          <BasicLineChart />
        </div>
      </div>

      <div>
        <h3 className=" text-lg font-bold">Vertical</h3>
        <div className="grid grid-cols-1 min-[1030px]:grid-cols-2 min-[1400px]:grid-cols-3  ">
          <BasicLineChart />
          <BasicLineChart />
          <BasicLineChart />
        </div>
      </div>
    </div>
  );
}
