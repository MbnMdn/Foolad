import { Alert, Button, Snackbar, SnackbarCloseReason, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';

import api from '../scripts/api';

interface SnackbarState {
  open: boolean;
  vertical: 'top' | 'bottom';
  horizontal: 'left' | 'center' | 'right';
}

interface Padding {
  top: number;
  bottom: number;
  right: number;
  left: number;
}

interface Threshold {
  H: [number, number];
  S: [number, number];
  V: [number, number];
}

interface AISettingsData {
  part_count: number;
  N1: number;
  N2: number;
  sigma: number;
  paddings: Padding;
  obj_thresh: Threshold;
  horizontal_temp_thresh: Threshold;
  zero_shot_thresh: Threshold;
  vertical_temp_thresh: Threshold;
}

const initialSnackbarState: SnackbarState = {
  open: false,
  vertical: 'bottom',
  horizontal: 'right',
};

export default function AI() {
  const [data, setData] = useState<AISettingsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [snackbarState, setSnackbarState] = useState(initialSnackbarState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/settings/ai');
        const fetchedData: AISettingsData = response.data.settings_data;
        setData(fetchedData);
        console.log(fetchedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleInputChange = (
    field: keyof AISettingsData,
    value: number | Padding | Threshold,
  ) => {
    setData((prevData) => (prevData ? { ...prevData, [field]: value } : prevData));
  };

  const handleThresholdChange = (
    field: keyof AISettingsData,
    subField: keyof Threshold,
    index: number,
    value: number,
  ) => {
    setData((prevData) =>
      prevData
        ? {
            ...prevData,
            [field]: {
              // @ts-ignore
              ...prevData[field],
              // @ts-ignore
              [subField]: prevData[field][subField].map((val, i) =>
                i === index ? value : val,
              ) as [number, number],
            },
          }
        : prevData,
    );
  };

  const handleSubmit = async () => {
    if (!data) return;
    const payload = {
      part_count: data?.part_count,
      padding_top: data?.paddings.top,
      padding_bottom: data?.paddings.bottom,
      padding_right: data?.paddings.right,
      padding_left: data?.paddings.left,
      N1: data?.N1,
      N2: data?.N2,
      sigma: data?.sigma,
      threshold_obj_H_From: data?.obj_thresh.H[0],
      threshold_obj_H_To: data?.obj_thresh.H[1],
      threshold_obj_S_From: data?.obj_thresh.S[0],
      threshold_obj_S_To: data?.obj_thresh.S[1],
      threshold_obj_V_From: data?.obj_thresh.V[0],
      threshold_obj_V_To: data?.obj_thresh.V[1],

      threshold_vertical_temp_H_From: data?.vertical_temp_thresh.H[0],
      threshold_vertical_temp_H_To: data?.vertical_temp_thresh.H[1],
      threshold_vertical_temp_S_From: data?.vertical_temp_thresh.S[0],
      threshold_vertical_temp_S_To: data?.vertical_temp_thresh.S[1],
      threshold_vertical_temp_V_From: data?.vertical_temp_thresh.V[0],
      threshold_vertical_temp_V_To: data?.vertical_temp_thresh.V[1],

      threshold_horizontal_temp_H_From: data?.horizontal_temp_thresh.H[0],
      threshold_horizontal_temp_H_To: data?.horizontal_temp_thresh.H[1],
      threshold_horizontal_temp_S_From: data?.horizontal_temp_thresh.S[0],
      threshold_horizontal_temp_S_To: data?.horizontal_temp_thresh.S[1],
      threshold_horizontal_temp_V_From: data?.horizontal_temp_thresh.V[0],
      threshold_horizontal_temp_V_To: data?.horizontal_temp_thresh.V[1],

      threshold_zero_shot_H_From: data?.zero_shot_thresh.H[0],
      threshold_zero_shot_H_To: data?.zero_shot_thresh.H[1],
      threshold_zero_shot_S_From: data?.zero_shot_thresh.S[0],
      threshold_zero_shot_S_To: data?.zero_shot_thresh.S[1],
      threshold_zero_shot_V_From: data?.zero_shot_thresh.V[0],
      threshold_zero_shot_V_To: data?.zero_shot_thresh.V[1],
    };

    try {
      const response = await api.post('/settings/ai', payload);
      console.log('post');
      console.log('Settings updated successfully:', response.data);
      setSnackbarState({ ...snackbarState, open: true });
    } catch (error) {
      console.error('Error updating settings:', error);
    }
  };

  const handleCloseSnackbar = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') return;
    setSnackbarState({ ...snackbarState, open: false });
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-cols-1 gap-10 min-[600px]:grid-cols-2 min-[1030px]:grid-cols-3 min-[1400px]:grid-cols-4">
        <SettingInput
          label="Number of Parts"
          value={data?.part_count}
          onChange={(value) => handleInputChange('part_count', value)}
        />
        <SettingInput
          label="Edge Detection Min Pixel"
          value={data?.N1}
          onChange={(value) => handleInputChange('N1', value)}
        />
        <SettingInput
          label="Region Detection Min Pixel"
          value={data?.N2}
          onChange={(value) => handleInputChange('N2', value)}
        />
        <SettingInput
          label="Gaussian Kernel Size"
          value={data?.sigma}
          onChange={(value) => handleInputChange('sigma', value)}
        />
        <PaddingInput
          label="Padding"
          padding={data?.paddings}
          onChange={(value) => handleInputChange('paddings', value)}
        />
      </div>

      <div className="flex flex-col gap-10">
        <ThresholdInput
          label="Object Threshold"
          threshold={data?.obj_thresh}
          onChange={(subField, index, value) =>
            handleThresholdChange('obj_thresh', subField, index, value)
          }
        />
        <ThresholdInput
          label="Horizontal Temperature Threshold"
          threshold={data?.horizontal_temp_thresh}
          onChange={(subField, index, value) =>
            handleThresholdChange('horizontal_temp_thresh', subField, index, value)
          }
        />
        <ThresholdInput
          label="Zero Shot Threshold"
          threshold={data?.zero_shot_thresh}
          onChange={(subField, index, value) =>
            handleThresholdChange('zero_shot_thresh', subField, index, value)
          }
        />
        <ThresholdInput
          label="Vertical Temperature Threshold"
          threshold={data?.vertical_temp_thresh}
          onChange={(subField, index, value) =>
            handleThresholdChange('vertical_temp_thresh', subField, index, value)
          }
        />
      </div>

      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>

      <Snackbar
        anchorOrigin={{
          vertical: snackbarState.vertical,
          horizontal: snackbarState.horizontal,
        }}
        open={snackbarState.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          Settings updated successfully!
        </Alert>
      </Snackbar>
    </div>
  );
}

interface SettingInputProps {
  label: string;
  value?: number;
  onChange: (value: number) => void;
}

const SettingInput: React.FC<SettingInputProps> = ({ label, value, onChange }) => (
  <div>
    <p className="font-semibold">{label}</p>
    <TextField
      type="number"
      value={value ?? ''}
      onChange={(e) => onChange(Number(e.target.value))}
      size="small"
      className="w-52"
    />
  </div>
);

interface PaddingInputProps {
  label: string;
  padding?: Padding;
  onChange: (value: Padding) => void;
}

const PaddingInput: React.FC<PaddingInputProps> = ({ label, padding, onChange }) => {
  const handlePaddingChange = (side: keyof Padding, value: number) => {
    onChange({ ...padding, [side]: value / 100 } as Padding);
  };

  return (
    <>
      {/*<p className="font-semibold">{label}</p>*/}
      {['top', 'bottom', 'right', 'left'].map((side) => (
        <div key={side}>
          <p className="font-semibold">
            Padding {side.charAt(0).toUpperCase() + side.slice(1)}
          </p>
          <TextField
            size="small"
            type="number"
            value={padding ? padding[side as keyof Padding] * 100 : ''}
            onChange={(e) =>
              handlePaddingChange(side as keyof Padding, Number(e.target.value))
            }
            className="w-52"
          />
        </div>
      ))}
    </>
  );
};

interface ThresholdInputProps {
  label: string;
  threshold?: Threshold;
  onChange: (subField: keyof Threshold, index: number, value: number) => void;
}

const ThresholdInput: React.FC<ThresholdInputProps> = ({
  label,
  threshold,
  onChange,
}) => (
  <div className="flex flex-col gap-4">
    <p className="font-semibold">{label}:</p>
    <div className="flex gap-20">
      {['H', 'S', 'V'].map((subField) => (
        <div className="flex items-center gap-2" key={subField}>
          <p className="font-semibold">{subField}</p>
          {[0, 1].map((index) => (
            <TextField
              key={index}
              size="small"
              type="number"
              label={index ? 'To' : 'From'}
              value={threshold ? threshold[subField as keyof Threshold][index] : ''}
              onChange={(e) =>
                onChange(subField as keyof Threshold, index, Number(e.target.value))
              }
            />
          ))}
        </div>
      ))}
    </div>
  </div>
);
