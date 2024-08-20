import { LineChart } from '@mui/x-charts/LineChart';
import * as React from 'react';


export interface BasicLineChartProps {
  xAxisData: number[];
  seriesData: number[];
}

const BasicLineChart: React.FC<BasicLineChartProps> = ({ xAxisData, seriesData }) => {
  // const widths = response.map((res: any) => res.width);

  return (
    <LineChart
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
