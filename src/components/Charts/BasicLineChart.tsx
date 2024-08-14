import { LineChart } from '@mui/x-charts/LineChart';
import * as React from 'react';

export default function BasicLineChart() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
          // color: '#312E81',
        },
      ]}
      width={400}
      height={200}
    />
  );
}
