// import React from 'react';
//
// import Table from '../Table';
//
// export default function ReportsTable() {
//   const columns = [
//     { header: 'Slab No', accessor: 'slabNo' },
//     { header: 'Width', accessor: 'width' },
//     { header: 'Length', accessor: 'length' },
//   ];
//
//   const data = [
//     {
//       slabNo: '1',
//       width: '45',
//       length: '8733',
//     },
//     {
//       slabNo: '2',
//       width: '45',
//       length: '8733',
//     },
//     {
//       slabNo: '3',
//       width: '45',
//       length: '8733',
//     },
//     {
//       slabNo: '4',
//       width: '45',
//       length: '8733',
//     },
//     {
//       slabNo: '5',
//       width: '45',
//       length: '8733',
//     },
//     {
//       slabNo: '6',
//       width: '45',
//       length: '8733',
//     },
//     {
//       slabNo: '7',
//       width: '45',
//       length: '8733',
//     },
//     {
//       slabNo: '8',
//       width: '45',
//       length: '8733',
//     },
//     {
//       slabNo: '9',
//       width: '45',
//       length: '8733',
//     },
//     {
//       slabNo: '10',
//       width: '45',
//       length: '8733',
//     },
//   ];
//
//   return <Table columns={columns} data={data} />;
// }
//
// import React from 'react';
//
// import { TableProps } from '../../types/types';
// import Table from '../Table';
//
// const ReportsTable: React.FC<TableProps> = ({ columns, data, onRowClick }) => {
//   return <Table columns={columns} data={data} onRowClick={onRowClick} />;
// };
//
// export default ReportsTable;

import React, { useEffect, useState } from 'react';

import api from '../../scripts/api';
import Table from '../Table';

export default function ReportsTable({ response }: { response: any }) {
  const columns = [
    { header: 'Slab No', accessor: 'slabNo' },
    { header: 'Width', accessor: 'width' },
    { header: 'Length', accessor: 'length' },
  ];

  return <Table columns={columns} data={response} />;
}
