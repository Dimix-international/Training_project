import React, {ChangeEvent} from "react";
import s from './FilteringTable.module.css'

type ColumnType = {
    filterValue:string,
    setFilter:(value:string) => void
}
type ColumnFilter = {
    column: ColumnType
}
export const ColumnFilter:React.FC<ColumnFilter> = ({column}) => {

    const { filterValue, setFilter } = column
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) =>{
        setFilter(e.target.value)
    }
    return (
        <span>
            Search: {''}
            <input
                className={s.input}
                type={'text'}
                value={filterValue || ''}
                onChange={onChangeHandler}
            />
        </span>
    )
}