import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import React, { useState } from 'react';

import DimensionSection from './DimensionSection';
import SlabDetectionSection from './SlabDetectionSection';
import TemperatureSection from './TemperatureSection';

export default function CalibrationSelectSection() {
  const [selectedOption, setSelectedOption] = useState('slabDetection');

  const handleChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div className="flex gap-10 rounded-xl border-2 border-mainBlue p-5">
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={handleChange}
            defaultValue="slabDetection"
          >
            <FormControlLabel
              value="slabDetection"
              control={<Radio />}
              label="Slab Detection"
            />
            <FormControlLabel
              value="temperature"
              control={<Radio />}
              label="Temperature"
            />
            <FormControlLabel value="dimension" control={<Radio />} label="Dimension" />
          </RadioGroup>
        </FormControl>
      </div>

      {selectedOption === 'slabDetection' && <SlabDetectionSection />}

      {selectedOption === 'temperature' && <TemperatureSection />}

      {selectedOption === 'dimension' && <DimensionSection />}
    </>
  );
}
