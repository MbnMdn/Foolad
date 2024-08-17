import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';

import api from '../../scripts/api';

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));

interface DashboardSelectSectionProps {
  dataRecordOn: boolean;
  setDataRecordOn: React.Dispatch<React.SetStateAction<boolean>>;
  pictureTypeOn: boolean;
  setPictureTypeOn: React.Dispatch<React.SetStateAction<boolean>>;
  pollingOn: boolean;
  setPollingOn: React.Dispatch<React.SetStateAction<boolean>>;
}

const DashboardSelectSection: React.FC<DashboardSelectSectionProps> = ({
  dataRecordOn,
  setDataRecordOn,
  pictureTypeOn,
  setPictureTypeOn,
  pollingOn,
  setPollingOn,
}) => {
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      const req = await api.post('/system_state/', {
        params: {},
      });

      setDataRecordOn(req?.data?.state);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // useEffect(() => {
  //   fetchData().then(() => setLoading(false));
  // }, []);

  return (
    <div className="flex flex-col gap-3 rounded-xl border-2 border-mainBlue p-5 lg:flex-row lg:gap-10">
      <div className="flex items-center gap-2">
        <p className="text-lg font-bold">Data Record</p>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography>Off</Typography>
          <AntSwitch
            checked={dataRecordOn}
            onChange={() => {
              fetchData();
            }}
            inputProps={{ 'aria-label': 'Data Record' }}
          />
          <Typography>On</Typography>
        </Stack>
      </div>

      <div className="flex items-center gap-2">
        <p className="text-lg font-bold">Picture Type</p>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography>Raw</Typography>
          <AntSwitch
            checked={pictureTypeOn}
            onChange={() => setPictureTypeOn(!pictureTypeOn)}
            inputProps={{ 'aria-label': 'Picture Type' }}
          />
          <Typography>Processed</Typography>
        </Stack>
      </div>

      <div className="flex items-center gap-2">
        <p className="text-lg font-bold">Polling</p>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography>Off</Typography>
          <AntSwitch
            checked={pollingOn}
            onChange={() => setPollingOn(!pollingOn)}
            inputProps={{ 'aria-label': 'Polling' }}
          />
          <Typography>On</Typography>
        </Stack>
        <div
          className={`h-6 w-6 rounded-full ${pollingOn ? 'bg-green-500' : 'bg-red-600'}`}
        ></div>
      </div>
    </div>
  );
};

export default DashboardSelectSection;
