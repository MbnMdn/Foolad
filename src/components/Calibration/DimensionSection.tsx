import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { useEffect, useState } from 'react';

import api from '../../scripts/api';
import { endPoints } from '../../scripts/endPoints';
import { ENV } from '../../scripts/settings';

export default function DimensionSection() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const [actualWidth, setActualWidth] = useState(0);
  const [actualLength, setActualLength] = useState(0);
  const fetchData = async () => {
    try {
      const response = await api.get(endPoints.latest_slab, {
        params: {},
      });

      setData(response?.data);
      setActualLength(response?.data?.data?.slab_metadata?.Length_mm);
      setActualWidth(response?.data?.data?.slab_metadata?.Width_mm);
    } catch (error) {
      console.error('Error fetching data:', error);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setError('- Error - ' + error);
    }
  };

  useEffect(() => {
    fetchData().then(() => setLoading(false));
  }, []);

  const handleSubmit = async () => {
    const payload = {
      width_px: data?.data?.slab_metadata?.Width,
      width_mm: actualWidth,
      length_px: data?.data?.slab_metadata?.Length,
      length_mm: actualLength,
      slab_id: data?.data?.id,
    };
    try {
      const req = await api.post(endPoints.settings_calibration, payload);
      console.log(req);
    } catch (error) {
      console.error('Error fetching data:', error);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setError('- Error - ' + error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading</div>;

  if (error) return <div>{error}</div>;

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-5">
        <p>
          Pixel Length: <span>{data?.data?.slab_metadata?.Length} mm</span>
        </p>

        <p>
          Pixel Width: <span>{data?.data?.slab_metadata?.Width} mm</span>
        </p>

        <TextField
          size={'small'}
          label="Actual Length"
          type="number"
          className="w-52"
          value={actualLength}
          onChange={(e) => setActualLength(Number(e.target.value))}
        />

        <TextField
          size={'small'}
          label="Actual Width"
          type="number"
          className="w-52"
          value={actualWidth}
          onChange={(e) => setActualWidth(Number(e.target.value))}
        />
      </div>

      <img className="" src={ENV.apiUrl + data?.cropped} alt="Latest Slab Cropped Img" />

      <div className="flex">
        <Button onClick={handleSubmit} className="self-center" variant="contained">
          Submit
        </Button>
      </div>
    </div>
  );
}
