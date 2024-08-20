import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React from 'react';

import CroppedPictureSection from '../Export/CroppedPictureSection';
import RawPictureSection from '../Export/RawPictureSection';

export default function TemperatureSection() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-10 md:flex-row">
        <TextField size={'small'} label="Edge Distance" type="number" className="w-52" />
        <TextField
          size={'small'}
          label="Max Temperature"
          type="number"
          className="w-52"
        />

        <Button className="w-52" variant="contained">
          Data Acquisition
        </Button>
      </div>

      <RawPictureSection />
      <CroppedPictureSection />
    </div>
  );
}
