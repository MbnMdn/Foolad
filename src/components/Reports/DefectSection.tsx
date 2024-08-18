import React from 'react';

import EmptyHorizontal from '../../assets/EmptyHorizontal.png';
import { ENV } from "../../scripts/settings";

export default function DefectSection({data}: {data: any}) {
  return (
    <div className="mt-6 flex flex-col gap-2">
      <p className="text-lg font-bold">Picture</p>
      <div className="flex flex-col gap-4 items-center">
        <p>Cropped: </p>
        <img className="rotate-90 w-5" src={ENV.apiUrl + data?.cropped} alt="Temp Chart 3" />
        <p>Zero Shot: </p>
        <img className="rotate-90 w-5" src={ENV.apiUrl + data?.zero_shot} alt="Temp Chart 3" />
      </div>
    </div>
  );
}
