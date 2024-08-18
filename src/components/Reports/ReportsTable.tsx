import React from 'react';
import { useNavigate } from 'react-router-dom';

import Table from '../Table';

export default function ReportsTable({ response }: { response: any }) {
  const navigate = useNavigate();

  const handleRowClick = (slabNo: string) => {
    navigate(`/reports/${slabNo}`);
  };

  const columns = [
    { header: 'Slab No', accessor: 'slabNo' },
    { header: 'Width', accessor: 'width' },
    { header: 'Length', accessor: 'length' },
    {
      header: 'Details',
      accessor: 'details',
      render: (row: any) => (
        <button
          className="text-blue-500 underline"
          onClick={() => handleRowClick(row.slabNo)}
        >
          {row.details}
        </button>
      ),
    },
  ];

  return <Table columns={columns} data={response} />;
}
