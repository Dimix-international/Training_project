import '../OurTeam/Table/BsicTable.css'
import {useEffect, useMemo, useState} from "react";
import axios from "axios";
import {useGlobalFilter, useSortBy, useTable} from "react-table";
import {GlobalFilter} from "./GlobalFilter";


//https://fakestoreapi.com/products
type ResponseGetProductsType = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
}
export const OurProducts = () => {

    const [products, setProducts] = useState<Array<ResponseGetProductsType>>([]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get<Array<ResponseGetProductsType>>('https://fakestoreapi.com/products');
            setProducts(response.data)
        } catch (e) {
            console.log(e )
        }
    }

    const productsData = useMemo(() => [...products], [products]);
    const productsColumns = useMemo(() => products[0]
        ? Object.keys(products[0]).filter(key => key !== 'rating').map(key => {

            //сделаем чтобы картинка отображалась
            if(key === 'image') {
                return {
                    Header: key,
                    accessor: key,
                    Cell: ({value}: {value:string}) => <img className={'image'} src={value} alt="value"/>,
                }
            }
            return {
                Header: key === 'id' ? 'Number' : key, //переименуем таблицу id на number
                accessor: key
            }
        })
        : []
        , [products])

    const tableHooks = (hooks: any) => {
        //добавим свою колонку
        hooks.visibleColumns.push((columns: any) => [
            ...columns,
            {
                id: 'Edit',
                Header: 'Edit',
                Cell: ({row}: any) => (
                    <button className={'button'} onClick={() => {
                        alert(row.values.price)
                    }
                    }>
                        Edit
                    </button>
                )
            }
        ])
    }

    const tableInstance = useTable({
            columns: productsColumns,
            data: productsData
        } as any,
        useGlobalFilter, //важно чтобы перед tableHooks
        tableHooks,
        useSortBy,
    );
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        //для сортировки
        //@ts-ignore
        preGlobalFilteredRows,
        //@ts-ignore
        setGlobalFilter,
        state
    } = tableInstance;

    const isEven = (index: number) => index % 2 === 0;

    useEffect(() => {
        fetchProducts();
    }, []);


    return (
        <div>
            <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={(state as any).globalFilter}
                setGlobalFilter={setGlobalFilter}
            />
            <table {...getTableProps()}>
                <thead>
                {
                    headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column => {
                                    if(column.Header === 'price') { //сортировка только по цене
                                        return (
                                            <th {...column.getHeaderProps((column as any).getSortByToggleProps())}>
                                                {
                                                    column.render('Header')
                                                }
                                                {
                                                    <span>
                                                 {(column as any).isSorted
                                                     ? (column as any).isSortedDesc
                                                         ? '🔽'
                                                         : '🔼'
                                                     : ''}
                                            </span>
                                                }
                                            </th>
                                        )
                                    } else{
                                        return (
                                            <th {...column.getHeaderProps()}>
                                                {
                                                    column.render('Header')
                                                }
                                            </th>
                                        )
                                    }

                            })
                            }
                        </tr>
                    ))
                }
                </thead>
                <tbody {...getTableBodyProps()}>
                {
                    rows.map((row, index) => {
                        prepareRow(row)
                        return (
                            <tr
                                {...row.getRowProps()}
                                className={isEven(index) ? 'purple' : ''}>
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
            </table>
        </div>
    )
}