import React from 'react';

import { ENV } from '../../scripts/settings';

interface PictureSectionProps {
  dataRecordOn: boolean;
  pictureTypeOn: boolean;
  pollingOn: boolean;
  response: any;
}

const PictureSection: React.FC<PictureSectionProps> = ({
  dataRecordOn,
  pictureTypeOn,
  pollingOn,
  response,
}) => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className=" text-lg font-bold">Picture</h3>
      <div className="self-center">
        <img
          className="rotate-90"
          src={
            pictureTypeOn
              ? ENV.apiUrl + response?.zero_shot
              : ENV.apiUrl + response?.raw_image
          }
          alt={'raw_image'}
        />
      </div>
      <div className="flex gap-5">
        <h3>Dimensions:</h3>
        <p>
          Length: <span>{response?.data?.slab_metadata?.Length} mm</span>
        </p>

        <p>
          Width: <span>{response?.data?.slab_metadata?.Width} mm</span>
        </p>
      </div>
    </div>
  );
};

export default PictureSection;
