import React from 'react';

import Table from '../Table';

export default function SettingsTable() {
  const columns = [
    { header: 'Parameter', accessor: 'parameter' },
    { header: 'Value', accessor: 'value' },
  ];

  const data = [
    {
      parameter: 'IP',
      value: '192.168.1.6',
    },
    {
      parameter: 'Name',
      value: 'Camera 1',
    },
    {
      parameter: 'Exposure',
      value: '31',
    },
    {
      parameter: 'Gain Auto',
      value: 'off',
    },
    {
      parameter: 'Gain',
      value: '31',
    },
    {
      parameter: 'White Balance',
      value: '31',
    },
    {
      parameter: 'Gain R',
      value: '31',
    },
    {
      parameter: 'Gain G',
      value: '31',
    },
    {
      parameter: 'Gain B',
      value: '31',
    },
    {
      parameter: 'FPS',
      value: '31',
    },
    {
      parameter: 'ROI',
      value: '31',
    },
    {
      parameter: 'Offset',
      value: '31',
    },
    {
      parameter: 'End Point',
      value: '31',
    },
  ];

  return <Table columns={columns} data={data} />;
}
