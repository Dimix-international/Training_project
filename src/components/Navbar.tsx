import React from 'react';
import s from './Navbar.module.scss'
import {useAuth} from "../hook/useAuth";
import {CustomLink} from "./CustomLink/CustomLink";

type NavbarType = {};

export const Navbar: React.FC<NavbarType> = React.memo((props) => {
        const {authUser: user, authDispatch} = useAuth();

        const onClickHandler = () => {
            authDispatch({type: 'delete-user'})
        }

        return (
            <aside className={s.navbar}>
                <div className={s.container}>
                <span className={s.logo}>
                <CustomLink addclass={s.link} to={'/'}>Dimix App</CustomLink>
            </span>
                    {
                        user.name
                            ? <>
                                <ul className={s.list}>
                                    <li className={s.list__item}>
                                        <img className={s.avatar}
                                             src="https://pngimg.com/uploads/chrome_logo/chrome_logo_PNG3.png"
                                             alt="avatar"/>
                                    </li>
                                    <li className={s.list__item}>
                                        {user.name}
                                    </li>
                                    <button onClick={onClickHandler} type={'button'}
                                            className={s.btn}>
                                        Sign out
                                    </button>

                                </ul>
                                <CustomLink addclass={`${s.link} ${s.logo}`}
                                            to={'/post/new'}> Create new
                                    post</CustomLink>
                            </>
                            : <CustomLink addclass={s.link} to={'/login'}>Sign
                                in</CustomLink>
                    }
                    <CustomLink addclass={s.link} to={'/about'}> About
                        us</CustomLink>
                </div>

            </aside>
        );
    }
)