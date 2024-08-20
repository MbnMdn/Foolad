import { ENV } from '../../scripts/settings';

export default function TemperatureSection({ response }: { response: any }) {
  console.log(response);
  return (
    <div>
      <h3 className=" text-lg font-bold">Temperature: </h3>
      <div className="grid grid-cols-1 min-[1030px]:grid-cols-2 min-[1400px]:grid-cols-3  ">
        <img
          src={ENV.apiUrl + response?.main_charts?.vertical_temp_left}
          alt={'vertical_temp_left'}
        />
        <img
          src={ENV.apiUrl + response?.main_charts?.vertical_temp_middle}
          alt={'vertical_temp_middle'}
        />
        <img
          src={ENV.apiUrl + response?.main_charts?.vertical_temp_right}
          alt={'vertical_temp_right'}
        />
      </div>

      <h3 className="text-lg font-bold">Parts Charts: </h3>
      <div className="grid grid-cols-1 min-[1030px]:grid-cols-2 min-[1400px]:grid-cols-3">
        {response?.parts_charts?.map((chart: any, index: number) => (
          <img key={index} src={ENV.apiUrl + chart.chart} alt={`parts_charts_${index}`} />
        ))}
      </div>
    </div>
  );
}
