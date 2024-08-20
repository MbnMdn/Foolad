import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import React, { ChangeEvent, useEffect, useState } from 'react';

import api from '../../scripts/api';
import { endPoints } from '../../scripts/endPoints';
import Table from '../Table';

interface TableDataItem {
  parameter: string;
  value: string | number;
  originalKey: string;
}

interface Payload {
  ip: string;
  name: string;
  exposure: number;
  gain_auto: boolean;
  gain: number;
  gain_R: number;
  gain_G: number;
  gain_B: number;
  FPS: number;
  width: number;
  height: number;
  end_point: number;
}

export default function SettingsTable() {
  const [data, setData] = useState<TableDataItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const [editedData, setEditedData] = useState<Record<string, string | number | boolean>>(
    {},
  );

  const fetchData = async () => {
    try {
      const response = await api.get(endPoints.settings_camera, { params: {} });
      const fetchedData = response?.data?.settings_data;

      const transformedData: TableDataItem[] = Object.keys(fetchedData).map((key) => ({
        parameter: key.replace(/_/g, ' '), // For display
        originalKey: key, // Store original key
        value:
          typeof fetchedData[key] === 'boolean'
            ? fetchedData[key]
              ? 'on'
              : 'off'
            : fetchedData[key],
      }));

      setData(transformedData);
      setEditedData(fetchedData);
    } catch (error) {
      console.error('Error fetching data:', error);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setError('- Error - ' + error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (key: string, value: string | number | boolean) => {
    setEditedData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async () => {
    const payload: Payload = {
      ip: editedData['IP'] as string,
      name: editedData['name'] as string,
      exposure: Number(editedData['exposure']),
      gain_auto: editedData['gain_auto'] === true,
      gain: Number(editedData['gain']),
      gain_R: Number(editedData['gain_R']),
      gain_G: Number(editedData['gain_G']),
      gain_B: Number(editedData['gain_B']),
      FPS: Number(editedData['FPS']),
      width: Number(editedData['width']),
      height: Number(editedData['height']),
      end_point: Number(editedData['end_point']),
    };

    try {
      const response = await api.post(endPoints.settings_camera, payload);
      console.log('Settings updated successfully:', response.data);

      fetchData();
    } catch (error) {
      console.error('Error updating settings:', error);
    }
  };

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  const columns = [
    { header: 'Parameter', accessor: 'parameter' },
    {
      header: 'Value',
      accessor: 'value',
      render: (row: TableDataItem) => {
        const isReadonly = row.originalKey === 'IP' || row.originalKey === 'name';

        if (row.originalKey === 'gain_auto') {
          return (
            <select
              value={editedData['gain_auto'] ? 'on' : 'off'}
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                handleChange('gain_auto', e.target.value === 'on')
              }
            >
              <option value="on">On</option>
              <option value="off">Off</option>
            </select>
          );
        }

        return (
          // <input
          //   type="text"
          //   value={
          //     typeof editedData[row.originalKey] === 'boolean'
          //       ? editedData[row.originalKey]
          //         ? 'on'
          //         : 'off'
          //       : editedData[row.originalKey]?.toString() ?? row.value
          //   }
          //   readOnly={isReadonly}
          //   onChange={(e: ChangeEvent<HTMLInputElement>) => {
          //     if (!isReadonly) {
          //       handleChange(row.originalKey, e.target.value);
          //     }
          //   }}
          // />
          <TextField
            size={'small'}
            type="text"
            disabled={isReadonly}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              if (!isReadonly) {
                handleChange(row.originalKey, e.target.value);
              }
            }}
            value={
              typeof editedData[row.originalKey] === 'boolean'
                ? editedData[row.originalKey]
                  ? 'on'
                  : 'off'
                : editedData[row.originalKey]?.toString() ?? row.value
            }
          />
        );
      },
    },
  ];

  return (
    <div className="flex flex-col gap-3">
      <Table columns={columns} data={data} />
      <Button
        className="self-center"
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </div>
  );
}
