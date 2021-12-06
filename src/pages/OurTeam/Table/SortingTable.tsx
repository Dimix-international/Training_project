import {useTable, useSortBy} from "react-table";
import MOCK_DATA from '../../../data/MOCK_DATA.json';
import {COLUMNS, GROUPED_COLUMNS} from "../column";
import {useMemo} from "react";
import './BsicTable.css'

export type UseSortByColumnProps<D extends object> = {
    canSort: boolean
    toggleSortBy: (descending: boolean, multi: boolean) => void
    getSortByToggleProps: (props?: object) => object
    clearSorting: () => void
    isSorted: boolean
    sortedIndex: number
    isSortedDesc: boolean | undefined
}

export const SortingTable = () => {

    // const columns = useMemo(() => COLUMNS, []);
    const columns = useMemo(() => GROUPED_COLUMNS, []);
    const data = useMemo(() => MOCK_DATA, []);
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow,
    } = useTable({
            // @ts-ignore
            columns,
            data,
        }, useSortBy
    )


    return (
        <table {...getTableProps()}>
            <thead>
            {
                headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps((column as any).getSortByToggleProps())}>
                                    {column.render('Header')}
                                    <span>
                    {(column as any).isSorted
                        ? (column as any).isSortedDesc
                            ? ' 🔽'
                            : ' 🔼'
                        : ''}
                  </span>
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
    )
}