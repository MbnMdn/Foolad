import BasicLineChart from '../Charts/BasicLineChart';

export default function TemperatureSection({ response }: { response: any }) {
  return (
    <div>
      <h3 className=" text-lg font-bold">Temperature</h3>
      <div className="grid grid-cols-1 min-[1030px]:grid-cols-2 min-[1400px]:grid-cols-3  ">
        {/*<BasicLineChart />*/}
        {/*<BasicLineChart />*/}
        {/*<BasicLineChart />*/}
      </div>
    </div>
  );
}
