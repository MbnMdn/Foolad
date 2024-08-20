import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import api from '../../scripts/api';
import { endPoints } from '../../scripts/endPoints';
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

  const fetchData = async () => {
    try {
      const response = await api.get(endPoints.slabs + '/' + slabNo, {
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

        <div className="flex flex-col gap-3"></div>
        {selectedOption === 'temperature' && <TemperatureSection data={data} />}

        {selectedOption === 'defect' && <DefectSection data={data} />}
      </div>
    );
  }
}
