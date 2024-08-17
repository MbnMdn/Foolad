import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import React, { useEffect, useState } from 'react';

import api from '../scripts/api';

export default function AI() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = React.useState(true);

  const [partCount, setPartCount] = useState<number | undefined>(undefined);
  const [n1, setN1] = useState<number>(0);
  const [n2, setN2] = useState<number>(0);
  const [sigma, setSigma] = useState<number>(0);
  const [paddingTop, setPaddingTop] = useState<number>(0);
  const [paddingBottom, setPaddingBottom] = useState<number>(0);
  const [paddingRight, setPaddingRight] = useState<number>(0);
  const [paddingLeft, setPaddingLeft] = useState<number>(0);

  const [h1, setH1] = useState<number[]>([20, 100]);
  const [s1, setS1] = useState<number[]>([20, 100]);
  const [v1, setV1] = useState<number[]>([20, 100]);

  const [h2, setH2] = useState<number[]>([20, 100]);
  const [s2, setS2] = useState<number[]>([20, 100]);
  const [v2, setV2] = useState<number[]>([20, 100]);

  const [h3, setH3] = useState<number[]>([20, 100]);
  const [s3, setS3] = useState<number[]>([20, 100]);
  const [v3, setV3] = useState<number[]>([20, 100]);

  const handleChangeH1 = (event: Event, newValue: number | number[]) => {
    setH1(newValue as number[]);
  };
  const handleChangeS1 = (event: Event, newValue: number | number[]) => {
    setS1(newValue as number[]);
  };
  const handleChangeV1 = (event: Event, newValue: number | number[]) => {
    setV1(newValue as number[]);
  };

  const handleChangeH2 = (event: Event, newValue: number | number[]) => {
    setH2(newValue as number[]);
  };
  const handleChangeS2 = (event: Event, newValue: number | number[]) => {
    setS2(newValue as number[]);
  };
  const handleChangeV2 = (event: Event, newValue: number | number[]) => {
    setV2(newValue as number[]);
  };

  const handleChangeH3 = (event: Event, newValue: number | number[]) => {
    setH3(newValue as number[]);
  };
  const handleChangeS3 = (event: Event, newValue: number | number[]) => {
    setS3(newValue as number[]);
  };
  const handleChangeV3 = (event: Event, newValue: number | number[]) => {
    setV3(newValue as number[]);
  };

  const fetchData = async () => {
    try {
      const response = await api.get('/settings', {
        params: {},
      });

      const fetchedData = response?.data;
      setData(fetchedData);
      console.log(fetchedData);
      setPartCount(fetchedData?.part_count);
      setN1(fetchedData?.N1);
      setN2(fetchedData?.N2);
      setSigma(fetchedData?.sigma);
      setPaddingTop(fetchedData?.paddings.top);
      setPaddingBottom(fetchedData?.paddings.bottom);
      setPaddingRight(fetchedData?.paddings.right);
      setPaddingLeft(fetchedData?.paddings.left);

      setH1(fetchedData?.threshold1.H);
      setS1(fetchedData?.threshold1.S);
      setV1(fetchedData?.threshold1.V);

      setH2(fetchedData?.threshold2.H);
      setS2(fetchedData?.threshold2.S);
      setV2(fetchedData?.threshold2.V);

      setH3(fetchedData?.threshold3.H);
      setS3(fetchedData?.threshold3.S);
      setV3(fetchedData?.threshold3.V);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData().then(() => setLoading(false));
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
      threshold1_H_From: h1[0],
      threshold1_H_To: h1[1],
      threshold1_S_From: s1[0],
      threshold1_S_To: s1[1],
      threshold1_V_From: v1[0],
      threshold1_V_To: v1[1],
      threshold2_H_From: h2[0],
      threshold2_H_To: h2[1],
      threshold2_S_From: s2[0],
      threshold2_S_To: s2[1],
      threshold2_V_From: v2[0],
      threshold2_V_To: v2[1],
      threshold3_H_From: h3[0],
      threshold3_H_To: h3[1],
      threshold3_S_From: s3[0],
      threshold3_S_To: s3[1],
      threshold3_V_From: v3[0],
      threshold3_V_To: v3[1],
    };

    try {
      const response = await api.post('/settings', payload);
      console.log('Settings updated successfully:', response.data);
    } catch (error) {
      console.error('Error updating settings:', error);
    }
  };

  return (
    <div>
      {!loading && (
        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-1 gap-10 min-[600px]:grid-cols-2 min-[1030px]:grid-cols-3 min-[1400px]:grid-cols-4">
            <div>
              <p className="font-semibold">Part Count</p>
              <TextField
                type="number"
                // value={partCount}
                value={partCount ?? ''}
                onChange={(e) => {
                  setPartCount(Number(e.target.value));
                }}
                size={'small'}
                className="w-52"
              />
            </div>
            <div>
              <p className="font-semibold">N1</p>
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
              <p className="font-semibold">N2</p>
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
              <p className="font-semibold">Sigma</p>
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
                value={paddingTop}
                onChange={(e) => {
                  setPaddingTop(Number(e.target.value));
                }}
                className="w-52"
              />
            </div>
            <div>
              <p className="font-semibold">Padding Bottom</p>
              <TextField
                size={'small'}
                type="number"
                value={paddingBottom}
                onChange={(e) => {
                  setPaddingBottom(Number(e.target.value));
                }}
                className="w-52"
              />
            </div>
            <div>
              <p className="font-semibold">Padding Right</p>
              <TextField
                size={'small'}
                type="number"
                value={paddingRight}
                onChange={(e) => {
                  setPaddingRight(Number(e.target.value));
                }}
                className="w-52"
              />
            </div>
            <div>
              <p className="font-semibold">Padding Left</p>
              <TextField
                size={'small'}
                type="number"
                value={paddingLeft}
                onChange={(e) => {
                  setPaddingLeft(Number(e.target.value));
                }}
                className="w-52"
              />
            </div>
            {/*<div>*/}
            {/*  <p className="font-semibold">Threshold</p>*/}
            {/*  <TextField size={'small'} type="number" className="w-52" />*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*  <p className="font-semibold">Part Count</p>*/}
            {/*  <TextField size={'small'} type="number" className="w-52" />*/}
            {/*</div>*/}
          </div>

          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Threshold 1:</p>
              <div className="grid grid-cols-1 gap-3 min-[1000px]:grid-cols-3 min-[1000px]:gap-20">
                <div className="flex gap-5">
                  <p className="font-semibold">H</p>
                  <Slider
                    max={255}
                    min={0}
                    getAriaLabel={() => 'Temperature range'}
                    value={h1}
                    onChange={handleChangeH1}
                    valueLabelDisplay="auto"
                  />
                </div>

                <div className="flex gap-5">
                  <p className="font-semibold">S</p>
                  <Slider
                    max={255}
                    min={0}
                    getAriaLabel={() => 'Temperature range'}
                    value={s1}
                    onChange={handleChangeS1}
                    valueLabelDisplay="auto"
                  />
                </div>

                <div className="flex gap-5">
                  <p className="font-semibold">V</p>
                  <Slider
                    max={255}
                    min={0}
                    getAriaLabel={() => 'Temperature range'}
                    value={v1}
                    onChange={handleChangeV1}
                    valueLabelDisplay="auto"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-semibold">Threshold 2:</p>
              <div className="grid grid-cols-1 gap-3 min-[1000px]:grid-cols-3 min-[1000px]:gap-20">
                <div className="flex gap-5">
                  <p className="font-semibold">H</p>
                  <Slider
                    max={255}
                    min={0}
                    getAriaLabel={() => 'Temperature range'}
                    value={h2}
                    onChange={handleChangeH2}
                    valueLabelDisplay="auto"
                  />
                </div>

                <div className="flex gap-5">
                  <p className="font-semibold">S</p>
                  <Slider
                    max={255}
                    min={0}
                    getAriaLabel={() => 'Temperature range'}
                    value={s2}
                    onChange={handleChangeS2}
                    valueLabelDisplay="auto"
                  />
                </div>

                <div className="flex gap-5">
                  <p className="font-semibold">V</p>
                  <Slider
                    max={255}
                    min={0}
                    getAriaLabel={() => 'Temperature range'}
                    value={v2}
                    onChange={handleChangeV2}
                    valueLabelDisplay="auto"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-semibold">Threshold 3:</p>
              <div className="grid grid-cols-1 gap-3 min-[1000px]:grid-cols-3 min-[1000px]:gap-20">
                <div className="flex gap-5">
                  <p className="font-semibold">H</p>
                  <Slider
                    max={255}
                    min={0}
                    getAriaLabel={() => 'Temperature range'}
                    value={h3}
                    onChange={handleChangeH3}
                    valueLabelDisplay="auto"
                  />
                </div>

                <div className="flex gap-5">
                  <p className="font-semibold">S</p>
                  <Slider
                    max={255}
                    min={0}
                    getAriaLabel={() => 'Temperature range'}
                    value={s3}
                    onChange={handleChangeS3}
                    valueLabelDisplay="auto"
                  />
                </div>

                <div className="flex gap-5">
                  <p className="font-semibold">V</p>
                  <Slider
                    max={255}
                    min={0}
                    getAriaLabel={() => 'Temperature range'}
                    value={v3}
                    onChange={handleChangeV3}
                    valueLabelDisplay="auto"
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
        </div>
      )}
    </div>
  );
}
