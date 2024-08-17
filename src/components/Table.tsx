import React from 'react';

export default function Table({ columns, data }: { columns: any[]; data: any[] }) {
  return (
    <div>
      <table className=" border-tools-table-outline text-lef w-full  min-w-[400px] border-separate rounded-lg border">
        <thead>
          <tr className="bg-neutral-400 ">
            {columns.map((col, index) => (
              <th
                key={index}
                className={`p-3 text-sm md:text-base  ${
                  index === 0 ? 'rounded-tl-lg' : ''
                } ${index === columns.length - 1 ? 'rounded-tr-lg' : ''}`}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="rounded-b-lg">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? '' : 'bg-neutral-200'}>
              {columns.map((col, colIndex) => (
                <td
                  key={colIndex}
                  className={`p-3 text-sm font-medium text-zinc-800${
                    rowIndex === data.length - 1 && colIndex === 0 ? 'rounded-bl-lg' : ''
                  } ${
                    rowIndex === data.length - 1 && colIndex === columns.length - 1
                      ? 'rounded-br-lg'
                      : ''
                  }`}
                >
                  {row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
// import React from 'react';
//
// import { TableProps } from '../types/types';
//
// const Table: React.FC<TableProps> = ({ columns, data, onRowClick }) => {
//   return (
//     <table className="border-tools-table-outline text-lef w-full min-w-[400px] border-separate rounded-lg border">
//       <thead>
//         <tr className="bg-neutral-400">
//           {columns.map((column) => (
//             <th key={column.accessor} className="px-4 py-2">
//               {' '}
//               {/* Adjust padding here */}
//               {column.header}
//             </th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((row, index) => (
//           <tr
//             key={row.slabNo}
//             onClick={() => onRowClick(row)}
//             className={`cursor-pointer ${index % 2 === 0 ? 'bg-red-500' : 'bg-blue-500'}`}
//           >
//             {columns.map((column) => (
//               <td key={column.accessor}>
//                 {/* Adjust padding here */}
//                 {row[column.accessor]}
//               </td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };
//
// export default Table;
