import BasicLineChart from '../Charts/BasicLineChart';
import ReportsTable from './ReportsTable';

export default function DimensionSection() {
  return (
    <div className="mt-6 flex flex-col gap-5 lg:gap-24 lg:flex-row">
      <ReportsTable />
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-center">
          <BasicLineChart />
          <p>Width</p>
        </div>

        <div className="flex flex-col items-center ">
          <BasicLineChart />
          <p>Height</p>
        </div>
      </div>
    </div>
  );
}
