import {format} from 'date-fns';
import {ColumnFilter} from "./Table/ColumnsFilter";

export const COLUMNS = [
    {
        Header: 'Id',
        Footer: 'Id',
        accessor: 'id',
        Filter: ColumnFilter,
        sticky: 'left',
    },
    {
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'first_name',
        sticky: 'left',
    },
    {
        Header: 'Last Name',
        Footer: 'Last Name',
        accessor: 'last_name',
        sticky: 'left',
    },
    {
        Header: 'Date of Birth',
        Footer: 'Date of Birth',
        accessor: 'date_of_birth',
        Cell: ({value}: { value: Date }) => {
            return format(new Date(value), 'dd/MM/yyyy')
        },
    },
    {
        Header: 'Country',
        Footer: 'Country',
        accessor: 'country',
    },
    {
        Header: 'Phone',
        Footer: 'Phone',
        accessor: 'phone',
    },
    //для stickyColumns
    {
        Header: 'Email',
        Footer: 'Email',
        accessor: 'email',
    },
    {
        Header: 'Age',
        Footer: 'Age',
        accessor: 'age',
    },
];

export const GROUPED_COLUMNS = [
    {
        Header: 'Id',
        Footer: 'Id',
        accessor: 'id',
       // Filter: ColumnFilter,
        disableFilters: true //убрали фильтрацию
    },
    {
        Header: 'Name',
        Footer: 'Name',
        columns: [
            {
                Header: 'First Name',
                Footer: 'First Name',
                accessor: 'first_name',
             //   Filter: ColumnFilter,
            },
            {
                Header: 'Last Name',
                Footer: 'Last Name',
                accessor: 'last_name',
              //  Filter: ColumnFilter,
            },
        ]
    },
    {
        Header: 'Info',
        Footer: 'Info',
        columns: [
            {
                Header: 'Date of Birth',
                Footer: 'Date of Birth',
                accessor: 'date_of_birth',
                Cell: ({value}: { value: Date }) => {
                    return format(new Date(value), 'dd/MM/yyyy')
                },
              //  Filter: ColumnFilter,
            },
            {
                Header: 'Country',
                Footer: 'Country',
                accessor: 'country',
               // Filter: ColumnFilter,
            },
            {
                Header: 'Phone',
                Footer: 'Phone',
                accessor: 'phone',
              //  Filter: ColumnFilter,
            },
        ]
    },
]