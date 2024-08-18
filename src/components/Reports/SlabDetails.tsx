import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import dayjs, { Dayjs } from 'dayjs';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import api from '../../scripts/api';
import DefectSection from './DefectSection';
import TemperatureSection from './TemperatureSection';

export default function SlabDetails() {
  const navigate = useNavigate();
  const { slabNo } = useParams<{ slabNo: string }>();
  const [data, setData] = useState([]);
  const [loading, setLoading] = React.useState(true);

  const [selectedOption, setSelectedOption] = useState('temperature');

  const handleChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setSelectedOption(event.target.value);
  };

  const [fromDate, setFromDate] = React.useState<Dayjs | null>(dayjs('2024-08-10'));
  const [fromDateString, setFromDateSting] = React.useState('2024-08-10T20:30:00.000Z');

  const [toDate, setToDate] = React.useState<Dayjs | null>(dayjs('2024-08-15'));
  const [toDateString, setToDateString] = React.useState('2024-08-15T20:30:00.000Z');

  const fetchData = async () => {
    try {
      const response = await api.get(`/slab/${slabNo}/`, {
        params: {
          slab_id: slabNo,
        },
      });

      const fetchedData = response?.data;
      setData(fetchedData);
      // console.log(fetchedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData().then(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (!loading) {
    return (
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-5">
          <ArrowBackIosIcon
            className="cursor-pointer"
            onClick={() => navigate(-1)}
            color="primary"
          />
          <h1 className="text-2xl font-bold">Slab Details</h1>
        </div>

        <div className="flex gap-10 rounded-xl border-2 border-mainBlue p-5">
          <FormControl className="flex flex-col gap-5">
            <div className="flex flex-col gap-3 lg:flex-row lg:gap-5">
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

                <FormControlLabel value="defect" control={<Radio />} label="Defect" />
              </RadioGroup>
            </div>
          </FormControl>
        </div>

        <div className="flex flex-col gap-3">
          {/*<div>*/}
          {/*  <div className="grid grid-cols-3">*/}
          {/*    <div>*/}
          {/*      <span className="text-lg font-medium">Slab No: </span>{' '}*/}
          {/*      <span>{slabNo}</span>*/}
          {/*    </div>*/}
          {/*    <div>*/}
          {/*      <span className="text-lg font-medium">Length: </span>{' '}*/}
          {/*      <span>{data?.data?.slab_metadata?.Length}</span>*/}
          {/*    </div>*/}
          {/*    <div>*/}
          {/*      <span className="text-lg font-medium">Width: </span>{' '}*/}
          {/*      <span>{data?.data?.slab_metadata?.Width}</span>*/}
          {/*    </div>*/}
          {/*  </div>*/}

          {/*  <div className="flex flex-col items-center">*/}
          {/*    <div>*/}
          {/*      <p className="text-lg font-medium">Heat Map:</p>*/}
          {/*      <img*/}
          {/*        className="max-w-96 max-h-60 rotate-90 object-contain"*/}
          {/*        src={ENV.apiUrl + data?.heat_map}*/}
          {/*        alt="heat_map"*/}
          {/*      />*/}
          {/*    </div>*/}
          {/*    <div>*/}
          {/*      <p className="text-lg font-medium">Raw Image:</p>*/}
          {/*      <img*/}
          {/*        className="max-w-60 max-h-60 rotate-90 object-contain"*/}
          {/*        src={ENV.apiUrl + data?.raw_image}*/}
          {/*        alt="raw_image"*/}
          {/*      />*/}
          {/*    </div>*/}
          {/*    <div>*/}
          {/*      <p className="text-lg font-medium">Zero Shot:</p>*/}
          {/*      <img*/}
          {/*        className="max-w-60  rotate-90 object-contain"*/}
          {/*        src={ENV.apiUrl + data?.zero_shot}*/}
          {/*        alt="zero_shot"*/}
          {/*      />*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
        {selectedOption === 'temperature' && <TemperatureSection data={data} />}

        {selectedOption === 'defect' && <DefectSection data={data} />}
      </div>
    );
  }
}
