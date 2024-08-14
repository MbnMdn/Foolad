import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';
import Typography from '@mui/material/Typography';

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
        // backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
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

export default function DashboardSelectSection() {
  return (
    <div className="flex flex-col gap-3 rounded-xl border-2  border-mainBlue p-5 lg:flex-row lg:gap-10">
      <div className="flex  gap-2">
        <p className="text-lg font-bold">Data Record</p>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography>Off</Typography>
          <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
          <Typography>On</Typography>
        </Stack>
      </div>

      <p className="text-lg font-bold">Slab Detection</p>

      <div className="flex gap-2">
        <p className="text-lg font-bold">Picture Type</p>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography>Raw</Typography>
          <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
          <Typography>Processed</Typography>
        </Stack>
      </div>
    </div>
  );
}
