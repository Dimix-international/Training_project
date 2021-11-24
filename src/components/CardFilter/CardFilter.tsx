import React, {ChangeEvent, FormEvent, useState} from 'react';
import s from './Card.Filter.module.scss'
import {URLSearchParamsInit} from 'react-router-dom';


type CardFilterType = {
    setSearchParams: (params: URLSearchParamsInit) => void
    latest: boolean
    postQuery: string
}

export const CardFilter: React.FC<CardFilterType> = React.memo((props) => {

    const {setSearchParams, latest, postQuery} = props;

    const [tempSearch, setTempSearch] = useState(postQuery);
    const [checked, setChecked] = useState(latest);

    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target;
        //получим то что пользователь набрал руками
        //@ts-ignore
        const query = form.search.value;
        //@ts-ignore
        const isLatest = form.latest.checked;

        const params: URLSearchParamsInit = {};

        if (query.length) params.title = query;
        if (isLatest) params.latest = 'true';
        //http://localhost:3000/?title=цена&latest=true

        /*setSearchParams({title: query})*/
        setSearchParams(params);

    }
    const changeTempSearch = (e: ChangeEvent<HTMLInputElement>) => setTempSearch(e.currentTarget.value);
    const changeIsChecked = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked);

    return (
        <form className={s.form} autoComplete={'off'}
              onSubmit={onSubmitHandler}>
            <input className={s.input} type="search"
                   name={'search'} value={tempSearch}
                   onChange={changeTempSearch}/>
            <label className={s.labelCheckbox} htmlFor={'latest'}>
                New only
                <input id={'latest'} className={s.checkbox} type="checkbox"
                       name={'latest'} checked={checked}
                       onChange={changeIsChecked}/>
            </label>
            <input className={s.button} type="submit"
                   value={'Search'}/>
        </form>
    )
})