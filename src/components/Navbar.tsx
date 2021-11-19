import React from 'react';
import {Link} from 'react-router-dom';
import s from './Navbar.module.scss'

type NavbarType = {
    user: boolean
};

export const Navbar: React.FC<NavbarType> = React.memo((props) => {

    const {user} = props;

    return (
        <aside className={s.navbar}>
            <span className={s.logo}>
                <Link className={s.link} to={'/'}>Dimix App</Link>
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
                                Dimix
                            </li>
                            <li className={s.list__item}>
                                Logout
                            </li>
                        </ul>
                        <Link className={`${s.link} ${s.logo}`} to={'/post/new'}> Create new post</Link>
                    </>
                    : <Link className={s.link} to={'/login'}>Login in</Link>
            }

        </aside>
    );
})