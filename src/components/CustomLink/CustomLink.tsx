
import React from "react";
import { Link, useMatch } from "react-router-dom";
import s from './CustomLink.module.scss'

type CustomLinkType = {
    to:string
    addclass :string
}
export const CustomLink: React.FC<CustomLinkType> = (
    {children, to, ...props}) => {

    // const match = useMatch(to);
    //переработаем чтобы срабатывало во вложенных роутах когда about/team
    const match = useMatch({
        path: to, //главная страница
        //если главная страница - то берем полный путь т.е. состоит только из /
        end: to.length === 1
    });
    const finallyClass = match ? `${s.link} ${s.active} ${props.addclass}` : `${s.link} ${props.addclass}`

    return (
        <Link
            to={to}
            className={finallyClass}
            {...props}
        >
            {children}
        </Link>
    )
}