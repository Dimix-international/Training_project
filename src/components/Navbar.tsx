import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import s from './Navbar.module.scss'
import {useAuth} from "../hook/useAuth";
import {CustomLink} from "./CustomLink/CustomLink";

type NavbarType = {};

export const Navbar: React.FC<NavbarType> = React.memo((props) => {


    const navigate = useNavigate();

    const {user} = useAuth();
    const {signOut} = useAuth();

    const onClickHandler =() => {
        signOut(() => navigate('/', {replace:true}))
    }

    return (
        <aside className={s.navbar}>
            <div className={s.container}>
                <span className={s.logo}>
                <CustomLink addClass={s.link} to={'/'}>Dimix App</CustomLink>
            </span>
                {
                    user
                        ? <>
                            <ul className={s.list}>
                                <li className={s.list__item}>
                                    <img className={s.avatar}
                                         src="https://pngimg.com/uploads/chrome_logo/chrome_logo_PNG3.png"
                                         alt="avatar"/>
                                </li>
                                <li className={s.list__item}>
                                    {user}
                                </li>
                                <button onClick={onClickHandler} type={'button'}
                                        className={s.btn}>
                                    Logout
                                </button>

                            </ul>
                            <CustomLink addClass={`${s.link} ${s.logo}`}
                                  to={'/post/new'}> Create new post</CustomLink>
                        </>
                        : <CustomLink addClass={s.link} to={'/login'}>Login in</CustomLink>
                }
                <CustomLink addClass={s.link} to={'/about'}> About us</CustomLink>
            </div>

        </aside>
    );
}
)