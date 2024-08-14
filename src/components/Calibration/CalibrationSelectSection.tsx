import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';

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

      {selectedOption === 'slabDetection' && (
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
      )}

      {selectedOption === 'temperature' && (
        <div className="flex flex-col gap-10 md:flex-row">
          <TextField
            size={'small'}
            label="Edge Distance"
            type="number"
            className="w-52"
          />
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
      )}

      {selectedOption === 'dimension' && (
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
      )}
    </>
  );
}
