import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React from 'react';

import CroppedPictureSection from '../Export/CroppedPictureSection';
import RawPictureSection from '../Export/RawPictureSection';

export default function SlabDetectionSection() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-10">
        <TextField
          size={'small'}
          label="Minimum Intensity"
          type="number"
          className="w-52"
        />

        <Button className="w-24" variant="contained">
          Test
        </Button>
      </div>

      <RawPictureSection />
      <CroppedPictureSection />
    </div>
  );
}
