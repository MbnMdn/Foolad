import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';
import React, { useEffect, useState } from 'react';

import api from '../scripts/api';

interface State {
  open: boolean;
  vertical: 'top' | 'bottom';
  horizontal: 'left' | 'center' | 'right';
}

export default function AI() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const [state, setState] = useState<State>({
    open: false,
    vertical: 'bottom',
    horizontal: 'right',
  });
  const { vertical, horizontal, open } = state;

  const [partCount, setPartCount] = useState<number | undefined>(undefined);
  const [n1, setN1] = useState<number>(0);
  const [n2, setN2] = useState<number>(0);
  const [sigma, setSigma] = useState<number>(0);

  const [paddingTop, setPaddingTop] = useState<number>(0);
  const [paddingBottom, setPaddingBottom] = useState<number>(0);
  const [paddingRight, setPaddingRight] = useState<number>(0);
  const [paddingLeft, setPaddingLeft] = useState<number>(0);

  const [paddingTopX100, setPaddingTopX100] = useState<number>(0);
  const [paddingBottomX100, setPaddingBottomX100] = useState<number>(0);
  const [paddingRightX100, setPaddingRightX100] = useState<number>(0);
  const [paddingLeftX100, setPaddingLeftX100] = useState<number>(0);

  const [h1From, setH1From] = useState<number>(0);
  const [h1To, setH1To] = useState<number>(0);
  const [s1From, setS1From] = useState<number>(0);
  const [s1To, setS1To] = useState<number>(0);
  const [v1From, setV1From] = useState<number>(0);
  const [v1To, setV1To] = useState<number>(0);

  const [h2From, setH2From] = useState<number>(0);
  const [h2To, setH2To] = useState<number>(0);
  const [s2From, setS2From] = useState<number>(0);
  const [s2To, setS2To] = useState<number>(0);
  const [v2From, setV2From] = useState<number>(0);
  const [v2To, setV2To] = useState<number>(0);

  const [h3From, setH3From] = useState<number>(0);
  const [h3To, setH3To] = useState<number>(0);
  const [s3From, setS3From] = useState<number>(0);
  const [s3To, setS3To] = useState<number>(0);
  const [v3From, setV3From] = useState<number>(0);
  const [v3To, setV3To] = useState<number>(0);

  const [h4From, setH4From] = useState<number>(0);
  const [h4To, setH4To] = useState<number>(0);
  const [s4From, setS4From] = useState<number>(0);
  const [s4To, setS4To] = useState<number>(0);
  const [v4From, setV4From] = useState<number>(0);
  const [v4To, setV4To] = useState<number>(0);
  const fetchData = async () => {
    try {
      const response = await api.get('/settings/ai', {
        params: {},
      });

      const fetchedData = response.data;

      setData(fetchedData);
      console.log(fetchedData);

      setPartCount(fetchedData?.settings_data?.part_count);
      setN1(fetchedData?.settings_data?.N1);
      setN2(fetchedData?.settings_data?.N2);
      setSigma(fetchedData?.settings_data?.sigma);

      setPaddingTop(fetchedData?.settings_data?.paddings.top);
      setPaddingBottom(fetchedData?.settings_data?.paddings.bottom);
      setPaddingRight(fetchedData?.settings_data?.paddings.right);
      setPaddingLeft(fetchedData?.settings_data?.paddings.left);

      setPaddingTopX100(fetchedData?.settings_data?.paddings.top * 100);
      setPaddingBottomX100(fetchedData?.settings_data?.paddings.bottom * 100);
      setPaddingRightX100(fetchedData?.settings_data?.paddings.right * 100);
      setPaddingLeftX100(fetchedData?.settings_data?.paddings.left * 100);

      setH1From(fetchedData?.settings_data?.obj_thresh?.H[0]);
      setH1To(fetchedData?.settings_data?.obj_thresh?.H[1]);
      setS1From(fetchedData?.settings_data?.obj_thresh?.S[0]);
      setS1To(fetchedData?.settings_data?.obj_thresh?.S[1]);
      setV1From(fetchedData?.settings_data?.obj_thresh?.V[0]);
      setV1To(fetchedData?.settings_data?.obj_thresh?.V[1]);

      setH2From(fetchedData?.settings_data?.horizontal_temp_thresh?.H[0]);
      setH2To(fetchedData?.settings_data?.horizontal_temp_thresh?.H[1]);
      setS2From(fetchedData?.settings_data?.horizontal_temp_thresh?.S[0]);
      setS2To(fetchedData?.settings_data?.horizontal_temp_thresh?.S[1]);
      setV2From(fetchedData?.settings_data?.horizontal_temp_thresh?.V[0]);
      setV2To(fetchedData?.settings_data?.horizontal_temp_thresh?.V[1]);

      setH3From(fetchedData?.settings_data?.zero_shot_thresh?.H[0]);
      setH3To(fetchedData?.settings_data?.zero_shot_thresh?.H[1]);
      setS3From(fetchedData?.settings_data?.zero_shot_thresh?.S[0]);
      setS3To(fetchedData?.settings_data?.zero_shot_thresh?.S[1]);
      setV3From(fetchedData?.settings_data?.zero_shot_thresh?.V[0]);
      setV3To(fetchedData?.settings_data?.zero_shot_thresh?.V[1]);

      setH4From(fetchedData?.settings_data?.vertical_temp_thresh?.H[0]);
      setH4To(fetchedData?.settings_data?.vertical_temp_thresh?.H[1]);
      setS4From(fetchedData?.settings_data?.vertical_temp_thresh?.S[0]);
      setS4To(fetchedData?.settings_data?.vertical_temp_thresh?.S[1]);
      setV4From(fetchedData?.settings_data?.vertical_temp_thresh?.V[0]);
      setV4To(fetchedData?.settings_data?.vertical_temp_thresh?.V[1]);

      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async () => {
    const payload = {
      part_count: partCount,
      padding_top: paddingTop,
      padding_bottom: paddingBottom,
      padding_right: paddingRight,
      padding_left: paddingLeft,
      N1: n1,
      N2: n2,
      sigma: sigma,
      threshold1_H_From: h1From,
      threshold1_H_To: h1To,
      threshold1_S_From: s1From,
      threshold1_S_To: s1To,
      threshold1_V_From: v1From,
      threshold1_V_To: v1To,
      threshold2_H_From: h2From,
      threshold2_H_To: h2To,
      threshold2_S_From: s2From,
      threshold2_S_To: s2To,
      threshold2_V_From: v2From,
      threshold2_V_To: v2To,
      threshold3_H_From: h3From,
      threshold3_H_To: h3To,
      threshold3_S_From: s3From,
      threshold3_S_To: s3To,
      threshold3_V_From: v3From,
      threshold3_V_To: v3To,
    };

    try {
      const response = await api.post('/settings/ai', payload);
      console.log('Settings updated successfully:', response.data);
      setState({ ...state, open: true });
    } catch (error) {
      console.error('Error updating settings:', error);
    }
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setState({ ...state, open: false });
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {!loading && (
        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-1 gap-10 min-[600px]:grid-cols-2 min-[1030px]:grid-cols-3 min-[1400px]:grid-cols-4">
            <div>
              <p className="font-semibold">Number of Parts</p>
              <TextField
                type="number"
                value={partCount ?? ''}
                onChange={(e) => {
                  setPartCount(Number(e.target.value));
                }}
                size={'small'}
                className="w-52"
              />
            </div>
            <div>
              <p className="font-semibold">Edge Detection Min Pixel</p>
              <TextField
                size={'small'}
                type="number"
                value={n1}
                onChange={(e) => {
                  setN1(Number(e.target.value));
                }}
                className="w-52"
              />
            </div>
            <div>
              <p className="font-semibold">Region Detection Min Pixel</p>
              <TextField
                size={'small'}
                type="number"
                value={n2}
                onChange={(e) => {
                  setN2(Number(e.target.value));
                }}
                className="w-52"
              />
            </div>
            <div>
              <p className="font-semibold">Gaussian Kernel Size</p>
              <TextField
                size={'small'}
                type="number"
                value={sigma}
                onChange={(e) => {
                  setSigma(Number(e.target.value));
                }}
                className="w-52"
              />
            </div>

            <div>
              <p className="font-semibold">Padding Top</p>
              <TextField
                size={'small'}
                type="number"
                value={paddingTopX100}
                onChange={(e) => {
                  setPaddingTop(Number(e.target.value) / 100);
                  setPaddingTopX100(Number(e.target.value));
                }}
                className="w-52"
              />
            </div>
            <div>
              <p className="font-semibold">Padding Bottom</p>
              <TextField
                size={'small'}
                type="number"
                value={paddingBottomX100}
                onChange={(e) => {
                  setPaddingBottom(Number(e.target.value) / 100);
                  setPaddingBottomX100(Number(e.target.value));
                }}
                className="w-52"
              />
            </div>
            <div>
              <p className="font-semibold">Padding Right</p>
              <TextField
                size={'small'}
                type="number"
                value={paddingRightX100}
                onChange={(e) => {
                  setPaddingRight(Number(e.target.value) / 100);
                  setPaddingRightX100(Number(e.target.value));
                }}
                className="w-52"
              />
            </div>
            <div>
              <p className="font-semibold">Padding Left</p>
              <TextField
                size={'small'}
                type="number"
                value={paddingLeftX100}
                onChange={(e) => {
                  setPaddingLeft(Number(e.target.value) / 100);
                  setPaddingLeftX100(Number(e.target.value));
                }}
                className="w-52"
              />
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Object Threshold:</p>
              <div className="grid grid-cols-1 gap-3 min-[1000px]:grid-cols-3 min-[1000px]:gap-20">
                <div className="flex items-center gap-5">
                  <p className="font-semibold">H</p>
                  <TextField
                    InputProps={{ inputProps: { min: 0, max: 179 } }}
                    size={'small'}
                    type="number"
                    value={h1From}
                    onChange={(e) => {
                      setH1From(Number(e.target.value));
                    }}
                    className="w-52"
                  />
                  <TextField
                    InputProps={{ inputProps: { min: 1, max: 180 } }}
                    size={'small'}
                    type="number"
                    value={h1To}
                    onChange={(e) => {
                      setH1To(Number(e.target.value));
                    }}
                    className="w-52"
                  />
                </div>

                <div className="flex items-center gap-5">
                  <p className="font-semibold">S</p>
                  <TextField
                    InputProps={{ inputProps: { min: 0, max: 254 } }}
                    size={'small'}
                    type="number"
                    value={s1From}
                    onChange={(e) => {
                      setS1From(Number(e.target.value));
                    }}
                    className="w-52"
                  />
                  <TextField
                    InputProps={{ inputProps: { min: 1, max: 255 } }}
                    size={'small'}
                    type="number"
                    value={s1To}
                    onChange={(e) => {
                      setS1To(Number(e.target.value));
                    }}
                    className="w-52"
                  />
                </div>

                <div className="flex items-center gap-5">
                  <p className="font-semibold">V</p>

                  <TextField
                    size={'small'}
                    type="number"
                    value={v1From}
                    onChange={(e) => {
                      setV1From(Number(e.target.value));
                    }}
                    className="w-52"
                  />
                  <TextField
                    size={'small'}
                    type="number"
                    value={v1To}
                    onChange={(e) => {
                      setV1To(Number(e.target.value));
                    }}
                    className="w-52"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-semibold">Horizontal Temperature Threshold:</p>
              <div className="grid grid-cols-1 gap-3 min-[1000px]:grid-cols-3 min-[1000px]:gap-20">
                <div className="flex items-center gap-5">
                  <p className="font-semibold">H</p>
                  <TextField
                    InputProps={{ inputProps: { min: 0, max: 179 } }}
                    size={'small'}
                    type="number"
                    value={h2From}
                    onChange={(e) => {
                      setH2From(Number(e.target.value));
                    }}
                    className="w-52"
                  />
                  <TextField
                    InputProps={{ inputProps: { min: 1, max: 180 } }}
                    size={'small'}
                    type="number"
                    value={h2To}
                    onChange={(e) => {
                      setH2To(Number(e.target.value));
                    }}
                    className="w-52"
                  />
                </div>

                <div className="flex items-center gap-5">
                  <p className="font-semibold">S</p>
                  <TextField
                    InputProps={{ inputProps: { min: 0, max: 254 } }}
                    size={'small'}
                    type="number"
                    value={s2From}
                    onChange={(e) => {
                      setS2From(Number(e.target.value));
                    }}
                    className="w-52"
                  />
                  <TextField
                    InputProps={{ inputProps: { min: 1, max: 255 } }}
                    size={'small'}
                    type="number"
                    value={s2To}
                    onChange={(e) => {
                      setS2To(Number(e.target.value));
                    }}
                    className="w-52"
                  />
                </div>

                <div className="flex items-center gap-5">
                  <p className="font-semibold">V</p>
                  <TextField
                    size={'small'}
                    type="number"
                    value={v2From}
                    onChange={(e) => {
                      setV2From(Number(e.target.value));
                    }}
                    className="w-52"
                  />
                  <TextField
                    size={'small'}
                    type="number"
                    value={v2To}
                    onChange={(e) => {
                      setV2To(Number(e.target.value));
                    }}
                    className="w-52"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-semibold">Zero Shot Threshold:</p>
              <div className="grid grid-cols-1 gap-3 min-[1000px]:grid-cols-3 min-[1000px]:gap-20">
                <div className="flex items-center gap-5">
                  <p className="font-semibold">H</p>
                  <TextField
                    InputProps={{ inputProps: { min: 0, max: 179 } }}
                    size={'small'}
                    type="number"
                    value={h3From}
                    onChange={(e) => {
                      setH3From(Number(e.target.value));
                    }}
                    className="w-52"
                  />
                  <TextField
                    InputProps={{ inputProps: { min: 1, max: 180 } }}
                    size={'small'}
                    type="number"
                    value={h3To}
                    onChange={(e) => {
                      setH3To(Number(e.target.value));
                    }}
                    className="w-52"
                  />
                </div>

                <div className="flex items-center gap-5">
                  <p className="font-semibold">S</p>
                  <TextField
                    InputProps={{ inputProps: { min: 0, max: 254 } }}
                    size={'small'}
                    type="number"
                    value={s3From}
                    onChange={(e) => {
                      setS3From(Number(e.target.value));
                    }}
                    className="w-52"
                  />
                  <TextField
                    InputProps={{ inputProps: { min: 1, max: 255 } }}
                    size={'small'}
                    type="number"
                    value={s3To}
                    onChange={(e) => {
                      setS3To(Number(e.target.value));
                    }}
                    className="w-52"
                  />
                </div>

                <div className="flex items-center gap-5">
                  <p className="font-semibold">V</p>
                  <TextField
                    size={'small'}
                    type="number"
                    value={v3From}
                    onChange={(e) => {
                      setV3From(Number(e.target.value));
                    }}
                    className="w-52"
                  />
                  <TextField
                    size={'small'}
                    type="number"
                    value={v3To}
                    onChange={(e) => {
                      setV3To(Number(e.target.value));
                    }}
                    className="w-52"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-semibold">Vertical Temperature Threshold:</p>
              <div className="grid grid-cols-1 gap-3 min-[1000px]:grid-cols-3 min-[1000px]:gap-20">
                <div className="flex items-center gap-5">
                  <p className="font-semibold">H</p>
                  <TextField
                    InputProps={{ inputProps: { min: 0, max: 179 } }}
                    size={'small'}
                    type="number"
                    value={h4From}
                    onChange={(e) => {
                      setH4From(Number(e.target.value));
                    }}
                    className="w-52"
                  />
                  <TextField
                    InputProps={{ inputProps: { min: 1, max: 180 } }}
                    size={'small'}
                    type="number"
                    value={h4To}
                    onChange={(e) => {
                      setH4To(Number(e.target.value));
                    }}
                    className="w-52"
                  />
                </div>

                <div className="flex items-center gap-5">
                  <p className="font-semibold">S</p>
                  <TextField
                    InputProps={{ inputProps: { min: 0, max: 254 } }}
                    size={'small'}
                    type="number"
                    value={s4From}
                    onChange={(e) => {
                      setS4From(Number(e.target.value));
                    }}
                    className="w-52"
                  />
                  <TextField
                    InputProps={{ inputProps: { min: 1, max: 255 } }}
                    size={'small'}
                    type="number"
                    value={s4To}
                    onChange={(e) => {
                      setS4To(Number(e.target.value));
                    }}
                    className="w-52"
                  />
                </div>

                <div className="flex items-center gap-5">
                  <p className="font-semibold">V</p>
                  <TextField
                    size={'small'}
                    type="number"
                    value={v4From}
                    onChange={(e) => {
                      setV4From(Number(e.target.value));
                    }}
                    className="w-52"
                  />
                  <TextField
                    size={'small'}
                    type="number"
                    value={v4To}
                    onChange={(e) => {
                      setV4To(Number(e.target.value));
                    }}
                    className="w-52"
                  />
                </div>
              </div>
            </div>
          </div>

          <Button
            className="w-44 self-center"
            type={'submit'}
            variant="contained"
            onClick={handleSubmit}
          >
            Update
          </Button>
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={handleClose}
            key={vertical + horizontal}
            autoHideDuration={3000}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              variant="filled"
              sx={{ width: '100%' }}
            >
              Updated Successfully
            </Alert>
          </Snackbar>
        </div>
      )}
    </div>
  );
}
