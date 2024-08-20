// import React, { useEffect } from "react";
//
// import { ENV } from '../../../scripts/settings';
//
// interface PictureSectionProps {
//   dataRecordOn: boolean;
//   pictureTypeOn: boolean;
//   pollingOn: boolean;
//   response: any;
// }
//
// const PictureSection: React.FC<PictureSectionProps> = ({
//   dataRecordOn,
//   pictureTypeOn,
//   pollingOn,
//   response,
// }) => {
//   console.log(pictureTypeOn
//     ? ENV.apiUrl + response?.zero_shot
//     : ENV.apiUrl + response?.raw_image);
//
//   return (
//     <div className="flex flex-col gap-3">
//       <h3 className=" text-lg font-bold">Picture</h3>
//       <div className="self-center">
//         <img
//           src={
//             pictureTypeOn
//               ? ENV.apiUrl + response?.zero_shot
//               : ENV.apiUrl + response?.raw_image
//           }
//           alt={'raw_image'}
//         />
//       </div>
//       <div className="flex gap-5">
//         <h3>Dimensions:</h3>
//         <p>
//           Length: <span>{response?.data?.slab_metadata?.Length} mm</span>
//         </p>
//
//         <p>
//           Width: <span>{response?.data?.slab_metadata?.Width} mm</span>
//         </p>
//       </div>
//     </div>
//   );
// };
//
// export default PictureSection;

import React, { useEffect, useState } from 'react';

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
  const [imageSrc, setImageSrc] = useState<string>('');

  useEffect(() => {
    const newImageSrc = pictureTypeOn
      ? ENV.apiUrl + response?.zero_shot
      : ENV.apiUrl + response?.raw_image;
    setImageSrc(newImageSrc);
  }, [pictureTypeOn, response]);

  return (
    <div className="flex flex-col gap-3">
      <h3 className=" text-lg font-bold">Picture</h3>
      <div className="self-center">
        <img src={imageSrc} alt="raw_image" />
      </div>
      <div className="flex gap-5">
        <h3>Dimensions:</h3>
        <p>
          Length: <span>{response?.data?.slab_metadata?.Length_mm} mm</span>
        </p>

        <p>
          Width: <span>{response?.data?.slab_metadata?.Width_mm} mm</span>
        </p>
      </div>
    </div>
  );
};

export default PictureSection;
