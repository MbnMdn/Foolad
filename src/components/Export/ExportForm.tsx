import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

export default function ExportForm() {
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
    <div className="flex flex-col gap-10 lg:flex-row">
      <TextField
        size={'small'}
        label="Number of Pictures"
        type="number"
        className="w-52"
      />

      <TextField size={'small'} label="Volume" type="number" className="w-52" />

      <TextField
        size={'small'}
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

      <div className="flex  gap-10 lg:flex-row">
        <Button className="w-24" variant="contained">
          Copy
        </Button>
        <Button className="w-24" variant="outlined">
          Cut
        </Button>
      </div>
    </div>
  );
}
