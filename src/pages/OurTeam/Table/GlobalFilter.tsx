import React, {ChangeEvent, useState} from "react";
import {useAsyncDebounce} from 'react-table'
import s from './FilteringTable.module.css'

type GlobalFilterType = {
    filter:string,
    setFilter:(value:string) => void
}
export const GlobalFilter:React.FC<GlobalFilterType> = ({filter, setFilter}) => {

    const [value, setValue] = useState(filter);

    const onChangeDebounce = useAsyncDebounce(value => {
        setFilter(value || undefined)
    }, 1000)
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) =>{
        setValue(e.target.value)
        onChangeDebounce(e.target.value)
    }
    return (
        <span>
            Search: {''}
            <input
                className={s.input}
                type={'text'}
                value={value || ''}
                onChange={onChangeHandler}
            />
        </span>
    )
}