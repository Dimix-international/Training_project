import {useTable, useGlobalFilter, useFilters} from "react-table";
import MOCK_DATA from '../../../data/MOCK_DATA.json';
import {GROUPED_COLUMNS } from "../column";
import {useMemo} from "react";
import './BsicTable.css'
import {GlobalFilter} from "./GlobalFilter";
import {ColumnFilter} from "./ColumnsFilter";



export const FilteringTable = () => {

   // const columns = useMemo(() => COLUMNS, []);
    const columns = useMemo(() => GROUPED_COLUMNS, []);
    const data = useMemo(() => MOCK_DATA, []);

    const defaultColumn = useMemo(() => {
        return {
            Filter: ColumnFilter
        }
    },[])
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow,
        state,
        // @ts-ignore
        setGlobalFilter
    } = useTable({
        // @ts-ignore
        columns,
        data,
        // @ts-ignore
        defaultColumn
    },useFilters, useGlobalFilter)

    // @ts-ignore
    const {globalFilter} = state;

    return (
        <>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            <table {...getTableProps()}>
                <thead>
                {
                    headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()}>
                                        {column.render('Header')}
                                        <div>{(column as any).canFilter ? column.render('Filter') : null}</div>
                                    </th>
                                ))
                            }
                        </tr>
                    ))
                }
                </thead>
                <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
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
        </>
    )
}