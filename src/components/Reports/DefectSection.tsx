import React from 'react';

import EmptyHorizontal from '../../assets/EmptyHorizontal.png';

export default function DefectSection() {
  return (
    <div className="mt-6 flex flex-col gap-2">
      <p className="text-lg font-bold">Picture</p>
      <div className="flex w-7/12 flex-col gap-4">
        <img src={EmptyHorizontal} />
        <img src={EmptyHorizontal} />
      </div>
    </div>
  );
}
