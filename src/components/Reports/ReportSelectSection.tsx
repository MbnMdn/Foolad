import Button from '@mui/material/Button';
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
import dayjs, { Dayjs } from 'dayjs';
import React, { useEffect, useState } from 'react';

import api from '../../scripts/api';
import DefectSection from './DefectSection';
import DimensionSection from './DimensionSection';
import TemperatureSection from './TemperatureSection';

export default function ReportSelectSection() {
  const [selectedOption, setSelectedOption] = useState('dimension');

  const handleChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setSelectedOption(event.target.value);
  };

  const [data, setData] = useState([]);

  const [fromDate, setFromDate] = React.useState<Dayjs | null>(dayjs('2024-08-10'));
  const [fromDateString, setFromDateSting] = React.useState('2024-08-10T20:30:00.000Z');

  const [toDate, setToDate] = React.useState<Dayjs | null>(dayjs('2024-08-15'));
  const [toDateString, setToDateString] = React.useState('2024-08-15T20:30:00.000Z');

  const [loading, setLoading] = React.useState(true);

  const options = [
    {
      value: '1',
      label: '1',
    },
    {
      value: '2',
      label: '2',
    },
    {
      value: '3',
      label: '3',
    },
  ];

  const fetchData = async () => {
    try {
      const response = await api.get('/get_slabs', {
        params: {
          page: 1,
          limit: 100,
          begin_date: fromDateString,
          end_date: toDateString,
        },
      });

      const fetchedData = response.data.data.map((item: any, index: number) => ({
        slabNo: item.id,
        width: item.slab_metadata.Width,
        length: item.slab_metadata.Length,
      }));

      setData(fetchedData);
      console.log(fetchedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData().then(() => setLoading(false));
  }, []);

  return (
    <>
      <div className="flex gap-10 rounded-xl border-2 border-mainBlue p-5">
        <FormControl className="flex flex-col gap-5">
          <div className="flex flex-col gap-3 lg:flex-row lg:gap-5">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker
                  className="w-28"
                  label="from"
                  value={fromDate}
                  onChange={(newValue) => {
                    setFromDate(newValue);
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    setFromDateSting(newValue?.$d.toJSON());
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker
                  className="w-28"
                  label="to"
                  value={toDate}
                  onChange={(newValue) => {
                    setToDate(newValue);
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    setToDateString(newValue?.$d.toJSON());
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>

            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={handleChange}
              defaultValue="dimension"
            >
              <FormControlLabel value="dimension" control={<Radio />} label="Dimension" />

              <FormControlLabel
                value="temperature"
                control={<Radio />}
                label="Temperature"
              />

              <FormControlLabel value="defect" control={<Radio />} label="Defect" />
            </RadioGroup>

            <TextField
              id="outlined-select-currency"
              select
              label="Select Slab No"
              defaultValue="1"
              className="w-52"
              disabled={selectedOption === 'dimension'}
              // helperText="Please select your currency"
            >
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <Button className="w-1/4 " variant="contained" onClick={fetchData}>
            Filter
          </Button>
        </FormControl>
      </div>

      {selectedOption === 'temperature' && <TemperatureSection />}

      {selectedOption === 'dimension' && !loading && <DimensionSection response={data} />}

      {selectedOption === 'defect' && <DefectSection />}
    </>
  );
}
