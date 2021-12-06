import {useTable, useRowSelect} from "react-table";
import MOCK_DATA from '../../../data/MOCK_DATA.json';
import {GROUPED_COLUMNS} from "../column";
import {useMemo} from "react";
import './BsicTable.css'
import {Checkbox} from "./Checkbox";

export const RowSelection = () => {
    const columns = useMemo(() => GROUPED_COLUMNS, []);
    const data = useMemo(() => MOCK_DATA, []);
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow,
        // @ts-ignore
        selectedFlatRows,
    } = useTable({
        // @ts-ignore
        columns,
        data,
    }, useRowSelect, (hooks) => {
        //НЕОБХОДИМО В INDEX.TSX УБРАТЬ STRICT MODE
        hooks.visibleColumns.push((columns) => {
            return [
                {
                    id: 'selection',
                    Header: ({getToggleAllRowsSelectedProps}: any) => (
                        <Checkbox {...getToggleAllRowsSelectedProps()}/>
                    ),
                    Cell: ({row}: any) => (
                        <Checkbox {...row.getToggleRowSelectedProps()}/>
                    )
                },
                ...columns
            ]
        })
    })
    const firstPageRows = rows.slice(0, 10);

    return (
        <>
            <table {...getTableProps()}>
                <thead>
                {
                    headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()}>
                                        {column.render('Header')}
                                    </th>
                                ))
                            }
                        </tr>
                    ))
                }
                </thead>
                <tbody {...getTableBodyProps()}>
                {
                    firstPageRows.map(row => {
                        prepareRow(row);
                        return (

                            <tr {...row.getRowProps()}>
                                {

                                    row.cells.map(cell => {
                                        return <td {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </td>
                                    })
                                }
                            </tr>
                        )
                    })
                }
                </tbody>
                <tfoot>
                {
                    footerGroups.map(footerGroup => (
                        <tr {...footerGroup.getFooterGroupProps()}>
                            {
                                footerGroup.headers.map(column => (
                                    <td {...column.getFooterProps()}>
                                        {column.render('Footer')}
                                    </td>
                                ))
                            }
                        </tr>
                    ))
                }
                </tfoot>
            </table>
            {
                JSON.stringify(
                    {
                        selectedFlatRows: selectedFlatRows.map((row: any) => row.original)
                     },
                    null,
                    2
                )
            }
        </>
    )
}