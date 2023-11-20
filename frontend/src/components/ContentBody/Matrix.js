

// import React, { useState } from 'react';
// import { useTable, useBlockLayout, useInfiniteScroll } from 'react-table';
// // import 'react-table/react-table.css';

// const Matrix = () => {
//   const columns = [
//     { Header: '', accessor: '0' },
//     { Header: 'Impact', accessor: '1' },
//     { Header: 'Very Low', accessor: '2', Cell: ({ cell }) => cell.value },
//     { Header: 'Low', accessor: '3', Cell: ({ cell }) => cell.value },
//     { Header: 'Medium', accessor: '4', Cell: ({ cell }) => cell.value },
//     { Header: 'High', accessor: '5', Cell: ({ cell }) => cell.value },
//     { Header: 'Very High', accessor: '6', Cell: ({ cell }) => cell.value },
//   ];

//   const [data, setData] = useState([
//     ['', 'Impact', 'Very Low', 'Low', 'Medium', 'High', 'Very High'],
//     ['Probability', 'Score', 1, 2, 3, 4, 5],
//     ['Very Low', 1, 1 * 1, 1 * 2, 1 * 3, 1 * 4, 1 * 5],
//     ['Low', 2, 2 * 1, 2 * 2, 2 * 3, 2 * 4, 2 * 5],
//     ['Medium', 3, 3 * 1, 3 * 2, 3 * 3, 3 * 4, 3 * 5],
//     ['High', 4, 4 * 1, 4 * 2, 4 * 3, 4 * 4, 4 * 5],
//     ['Very High', 5, 5 * 1, 5 * 2, 5 * 3, 5 * 4, 5 * 5],
//   ]);

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     prepareRow,
//     totalColumnsWidth,
//     headerGroups: visibleHeaderGroups,
//     rows: visibleRows,
//     updateInfiniteData,
//   } = useTable(
//     {
//       columns,
//       data,
//       initialState: { pageSize: 50 }, // Set the initial page size
//     },
//     useBlockLayout,
//     useInfiniteScroll,
//     hooks => {
//       // Custom infinite scroll implementation
//       hooks.visibleColumns.push(columns => {
//         // Add a blank column for infinite scroll placeholder
//         return [
//           {
//             id: '_placeholder',
//             width: 0,
//             minWidth: 0,
//             maxWidth: 0,
//             Header: () => null,
//             Cell: () => null,
//           },
//           ...columns,
//         ];
//       });
//       hooks.useInstance.push(instance => {
//         // Load more data when reaching the end of the table
//         const scrollHandler = () => {
//           const { scrollTop, scrollHeight, clientHeight } = instance.scrollContainerRef.current;
//           if (scrollTop + clientHeight >= scrollHeight) {
//             updateInfiniteData(oldData => [...oldData, ...data.slice(oldData.length)]);
//           }
//         };
//         instance.scrollContainerRef.current.addEventListener('scroll', scrollHandler);
//         return () => {
//           instance.scrollContainerRef.current.removeEventListener('scroll', scrollHandler);
//         };
//       });
//     }
//   );

//   return (
//     <div style={{ width: totalColumnsWidth, overflow: 'auto' }} {...getTableProps()}>
//       <div {...headerGroups[0].getHeaderGroupProps()} style={{ paddingRight: '24px' }}>
//         {visibleHeaderGroups[0].headers.map(column => (
//           <div {...column.getHeaderProps()} style={{ minWidth: column.width, display: 'inline-block' }}>
//             {column.render('Header')}
//           </div>
//         ))}
//       </div>
//       <div {...getTableBodyProps()} style={{ height: '300px', overflowY: 'scroll' }}>
//         {visibleRows.map(row => {
//           prepareRow(row);
//           return (
//             <div {...row.getRowProps()} style={{ display: 'flex' }}>
//               {row.cells.map(cell => (
//                 <div {...cell.getCellProps()} style={{ minWidth: cell.column.width }}>
//                   {cell.render('Cell')}
//                 </div>
//               ))}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Matrix;



import React from 'react'

const Matrix = () => {
  const dummyData = [
    ['', 'Impact', 'Very Low', 'Low', 'Medium', 'High', 'Very High'],
    ['Probability', 'Score', 1, 2, 3, 4, 5],
    ['Very Low', 1, 1 * 1, 1 * 2, 1 * 3, 1 * 4, 1 * 5],
    ['Low', 2, 2 * 1, 2 * 2, 2 * 3, 2 * 4, 2 * 5],
    ['Medium', 3, 3 * 1, 3 * 2, 3 * 3, 3 * 4, 3 * 5],
    ['High', 4, 4 * 1, 4 * 2, 4 * 3, 4 * 4, 4 * 5],
    ['Very High', 5, 5 * 1, 5 * 2, 5 * 3, 5 * 4, 5 * 5],
  ]

  const renderDummyData = () => {
    return dummyData.map((row, rowIndex) => (
      <tr key={`row-${rowIndex}`}>
        {row.map((cell, colIndex) => (
          <td className="p-[1.45rem] w-full h-full bg-[#eff0f3] shadow-lg border-solid" key={`cell-${rowIndex}-${colIndex}`}>
            {cell}
            <br />
            {/* {rowIndex > 1 && colIndex > 0 && (
              <span>{dummyData[rowIndex][colIndex]}</span>
            )} */}
          </td>
        ))}
      </tr>
    ))
  }

  return (
    <table>
      <tbody>{renderDummyData()}</tbody>
    </table>
  )
}

export default Matrix;