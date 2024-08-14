import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

export default function ExportSelectSection() {
  return (
    <div className="flex gap-10  rounded-xl border-2 border-mainBlue p-5">
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          defaultValue="slabDetection"
        >
          <FormControlLabel
            value="slabDetection"
            control={<Radio />}
            label="Slab Detection"
          />
          <FormControlLabel value="temperature" control={<Radio />} label="Temperature" />
          <FormControlLabel value="dimension" control={<Radio />} label="Dimension" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
