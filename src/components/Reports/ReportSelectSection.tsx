import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs, { Dayjs } from 'dayjs';
import React, { useEffect, useState } from 'react';

import api from '../../scripts/api';
import { endPoints } from '../../scripts/endPoints';
import DimensionSection from './DimensionSection';

export default function ReportSelectSection() {
  const [data, setData] = useState<{
    slabs: { slabNo: string; width: number; length: number; details: string }[];
    lengthChart: any;
    widthChart: any;
  }>({
    slabs: [],
    lengthChart: null,
    widthChart: null,
  });
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = useState();
  const [dataCount, setDataCount] = useState(-1);

  const [filterButton, setFilterButton] = useState('Filter');
  const [date, setDate] = React.useState<Dayjs | null>(dayjs('2024-08-10'));
  const [fromTime, setFromTime] = React.useState<Dayjs | null>(dayjs('2024-08-10T15:30'));
  const [toTime, setToTime] = React.useState<Dayjs | null>(dayjs('2024-08-10T16:30'));
  const [fromDateString, setFromDateString] = React.useState('2024-08-10T15:30:00.000Z');
  const [toDateString, setToDateString] = React.useState('2024-08-10T16:30:00.000Z');

  const updateDateTimeStrings = () => {
    if (date && fromTime) {
      const combinedFromDate = dayjs(date)
        .hour(fromTime.hour())
        .minute(fromTime.minute())
        .second(0)
        .millisecond(0);

      const fromDateString = combinedFromDate.format('YYYY-MM-DDTHH:mm:ss'); // local time format
      setFromDateString(fromDateString);
    }

    if (date && toTime) {
      const combinedToDate = dayjs(date)
        .hour(toTime.hour())
        .minute(toTime.minute())
        .second(0)
        .millisecond(0);
      const fromDateString = combinedToDate.format('YYYY-MM-DDTHH:mm:ss'); // local time format
      setToDateString(fromDateString);
    }
  };

  const fetchData = async () => {
    setFilterButton('Filter...');
    try {
      const response = await api.get(endPoints.slabs, {
        params: {
          page: 1,
          limit: 100,
          begin_date: fromDateString,
          end_date: toDateString,
        },
      });

      setDataCount(response.data.slabs.data_count);
      console.log(dataCount);
      if (dataCount !== 0) {
        const fetchedData = {
          slabs: response.data.slabs.data.map((item: any, index: number) => ({
            slabNo: item.id,
            width: item.slab_metadata.Width,
            length: item.slab_metadata.Length,
            details: 'show',
          })),
          lengthChart: response?.data?.charts?.Length_Chart,
          widthChart: response?.data?.charts?.Width_Chart,
        };

        setData(fetchedData);
      }

      setFilterButton('Filter');
    } catch (error) {
      console.error('Error fetching data:', error);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setError('- Error - ' + error);
    }
  };

  useEffect(() => {
    updateDateTimeStrings();
  }, [date, fromTime, toTime]);

  useEffect(() => {
    fetchData().then(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <>
      <div className="flex gap-10 rounded-xl border-2 border-mainBlue p-5">
        <FormControl className="flex flex-col gap-5">
          <div className="flex flex-col gap-3 lg:flex-row lg:gap-5">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="From Date"
                value={date}
                onChange={(newValue) => setDate(newValue)}
              />

              <TimePicker
                label="From Time"
                value={fromTime}
                onChange={(newValue) => {
                  setFromTime(newValue);
                }}
              />

              <TimePicker
                label="To Time"
                value={toTime}
                onChange={(newValue) => setToTime(newValue)}
              />
            </LocalizationProvider>
            <Button variant="contained" onClick={fetchData}>
              {filterButton}
            </Button>
          </div>
        </FormControl>
      </div>
      {loading ? (
        <div>Loading ... </div>
      ) : dataCount === 0 ? (
        <div className="flex  h-40  justify-center align-middle">
          <p className="self-center text-lg font-semibold ">
            There is no data for the selected range !
          </p>
        </div>
      ) : (
        <DimensionSection response={data} />
      )}
    </>
  );
}
