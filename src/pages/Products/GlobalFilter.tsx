import React from "react";
import '../OurTeam/Table/BsicTable.css'
import {useState} from "react";
import {useAsyncDebounce} from "react-table";

type GlobalFilterType = {
    preGlobalFilteredRows: any,
    globalFilter: any,
    setGlobalFilter: any
}
export const GlobalFilter: React.FC<GlobalFilterType> = (
    {
        preGlobalFilteredRows,
        globalFilter,
        setGlobalFilter,
    }) => {

    const count = preGlobalFilteredRows.length;
    const [value, setValue] = useState(globalFilter);

    const onChange = useAsyncDebounce((value:string) => {
        setGlobalFilter(value || undefined)
    },400)

    return (
        <>
            <label htmlFor="search">Search</label>
            <input
                id={'search'}
                className={'input'}
                type="text"
                value={value || ''}
                onChange={(e) => {
                    setValue(e.target.value);
                    onChange(e.target.value)
                }}
                placeholder={`${count} records...`}
            />
        </>
    )
}