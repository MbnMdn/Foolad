import React from 'react';

import { ENV } from '../../scripts/settings';

export default function TemperatureSection({ data }: { data: any }) {
  console.log(data);
  return (
    <div className=" mt-6 flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <p className="text-lg font-bold">Heat Map</p>
        <div className="flex flex-col gap-4">
          <img src={ENV.apiUrl + data?.heat_map} alt="heat_map" />
        </div>
      </div>

      <div>
        <h3 className=" text-lg font-bold">Horizontal</h3>
        <div className="grid grid-cols-1 min-[1030px]:grid-cols-2 min-[1400px]:grid-cols-3  ">
          <img src={ENV.apiUrl + data?.parts_charts[0].chart} alt="Temp Chart 1" />
          <img src={ENV.apiUrl + data?.parts_charts[1].chart} alt="Temp Chart 2" />
          <img src={ENV.apiUrl + data?.parts_charts[2].chart} alt="Temp Chart 3" />
          <img src={ENV.apiUrl + data?.parts_charts[3].chart} alt="Temp Chart 4" />
        </div>
      </div>

      <div>
        <h3 className=" text-lg font-bold">Vertical</h3>
        <div className="grid grid-cols-1 min-[1030px]:grid-cols-2 min-[1400px]:grid-cols-3  ">
          <img
            src={ENV.apiUrl + data?.main_charts?.vertical_temp_left}
            alt="Vertical Temp Left"
          />
          <img
            src={ENV.apiUrl + data?.main_charts?.vertical_temp_middle}
            alt="Vertical Temp Middle"
          />
          <img
            src={ENV.apiUrl + data?.main_charts?.vertical_temp_right}
            alt="Vertical Temp Right"
          />
        </div>
      </div>
    </div>
  );
}
