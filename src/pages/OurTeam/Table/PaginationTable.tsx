import {
    useTable,
    usePagination,
    UsePaginationInstanceProps,
    TableInstance
} from "react-table";
import MOCK_DATA from '../../../data/MOCK_DATA.json';
import {COLUMNS, GROUPED_COLUMNS} from "../column";
import {useMemo} from "react";
import './BsicTable.css'

export const PaginationTable = () => {

    // const columns = useMemo(() => COLUMNS, []);
    const columns = useMemo(() => GROUPED_COLUMNS, []);
    const data = useMemo(() => MOCK_DATA, []);
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
        state,
        prepareRow,
    } = useTable({
        // @ts-ignore
        columns,
        data,

        initialState: {pageIndex: 3} as any //стартовая страница 4
    }, usePagination) as UsePaginationInstanceProps<any> & TableInstance<any>;

    const {pageIndex, pageSize} = state as any;

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
                    page.map((row: any) => {
                        prepareRow(row);
                        return (

                            <tr {...row.getRowProps()}>
                                {

                                    row.cells.map((cell: any) => {
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
            </table>
            <div className={'btns'}>
                <span>
                Page {' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>
                </span>
                <span>
                    | Go to page: {' '}
                    <input
                        className={'input'}
                        type={'number'}
                        defaultValue={pageIndex + 1}
                        onChange={e => {
                            const pageNumber = e.target.value
                                ? Number(e.target.value) - 1
                                : 0;
                            gotoPage(pageNumber);
                        }}
                    />
                </span>
                <select
                    className={'select'}
                    value={pageSize}
                    onChange={e => setPageSize(Number(e.target.value))}
                    >
                    {
                        [10,25,50].map(pageSize => (
                            <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                            </option>
                        ))
                    }
                </select>
                <button disabled={!canPreviousPage}
                        onClick={() => gotoPage(0)}>{'<<'}
                </button>
                <button disabled={!canPreviousPage}
                        onClick={() => previousPage()}>Previous
                </button>
                <button disabled={!canNextPage}
                        onClick={() => nextPage()}>Next
                </button>
                <button disabled={!canNextPage}
                        onClick={() => gotoPage(pageCount - 1)}>{'>>'}
                </button>
            </div>
            {/*{
                pageOptions.map((p:any) => (
                    <span onClick={() => gotoPage(p)}>{p + 1}</span>
                ))
            }*/}
        </>
    )
}