import React from 'react';

import { ENV } from '../../scripts/settings';
import BasicLineChart from '../Charts/BasicLineChart';
import ReportsTable from './ReportsTable';

export default function DimensionSection({ response }: { response: any }) {
  // Showing dynamic chart instead of image :

  // const widths = response.map((res: any) => res.width);
  // const lengths = response.map((res: any) => res.length);
  // const index = Array.from({ length: widths.length }, (_, index) => index + 1);
  return (
    <div className="mt-6 flex flex-col gap-5 lg:flex-row lg:gap-10">
      <ReportsTable response={response?.slabs} />

      {/* Showing dynamic chart instead of image :*/}

      {/*<div className="flex flex-col gap-5">*/}
      {/*  <div className="flex flex-col items-center">*/}
      {/*    <BasicLineChart xAxisData={index} seriesData={widths} />*/}
      {/*    <p>Width</p>*/}
      {/*  </div>*/}

      {/*  <div className="flex flex-col items-center ">*/}
      {/*    <BasicLineChart xAxisData={index} seriesData={lengths} />*/}
      {/*    <p>Length</p>*/}
      {/*  </div>*/}
      {/*</div>*/}

      <div className="flex flex-col gap-10">
        <img className="" src={ENV.apiUrl + response?.lengthChart} alt="lengthChart" />
        <img className="" src={ENV.apiUrl + response?.widthChart} alt="widthChart" />
      </div>
    </div>
  );
}
