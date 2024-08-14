import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import React, { useState } from 'react';

import DefectSection from './DefectSection';
import DimensionSection from './DimensionSection';
import TemperatureSection from './TemperatureSection';

export default function ReportSelectSection() {
  const [selectedOption, setSelectedOption] = useState('temperature');

  const handleChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setSelectedOption(event.target.value);
  };

  const options = [
    {
      value: 'drive1',
      label: 'Drive 1',
    },
    {
      value: 'drive2',
      label: 'Drive 2',
    },
    {
      value: 'drive3',
      label: 'Drive 3',
    },
  ];
  return (
    <>
      <div className="flex gap-10 rounded-xl border-2 border-mainBlue p-5">
        <FormControl>
          <div className="flex flex-col gap-3 lg:flex-row lg:gap-10">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker label="Basic date picker" />
              </DemoContainer>
            </LocalizationProvider>

            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={handleChange}
              defaultValue="temperature"
            >
              <FormControlLabel
                value="temperature"
                control={<Radio />}
                label="Temperature"
              />
              <FormControlLabel value="dimension" control={<Radio />} label="Dimension" />

              <FormControlLabel value="defect" control={<Radio />} label="Defect" />
            </RadioGroup>

            <TextField
              id="outlined-select-currency"
              select
              label="Select"
              defaultValue="EUR"
              className="w-52"
              // helperText="Please select your currency"
            >
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </FormControl>
      </div>

      {selectedOption === 'temperature' && <TemperatureSection />}

      {selectedOption === 'dimension' && <DimensionSection />}

      {selectedOption === 'defect' && <DefectSection />}
    </>
  );
}
