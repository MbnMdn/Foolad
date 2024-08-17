import { LineChart } from '@mui/x-charts/LineChart';
import * as React from 'react';

import { BasicLineChartProps } from '../../types/types';

// export default function BasicLineChart({ response }: { response: any }) {
const BasicLineChart: React.FC<BasicLineChartProps> = ({ xAxisData, seriesData }) => {
  // console.log(response);
  // const widths = response.map((res: any) => res.width);
  // console.log(widths);

  return (
    <LineChart
      // xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      xAxis={[{ data: xAxisData }]}
      series={[
        {
          data: seriesData,
          // color: '#312E81',
        },
      ]}
      width={600}
      height={300}
    />
  );
};
export default BasicLineChart;

// import { LineChart } from '@mui/x-charts/LineChart';
// import React from 'react';
//
// import { BasicLineChartProps } from '../../types/types';
//
// const BasicLineChart: React.FC<BasicLineChartProps> = ({ xAxisData, seriesData }) => {
//   return (
//     <LineChart
//       xAxis={[{ data: xAxisData }]}
//       series={[
//         {
//           data: seriesData,
//         },
//       ]}
//       width={400}
//       height={200}
//     />
//   );
// };
//
// export default BasicLineChart;
