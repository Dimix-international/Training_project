import React from 'react';
import {Routes, Route, Link, Outlet} from "react-router-dom";
import s from './About.module.scss'


type AboutPageType = {}
export const AboutPage: React.FC<AboutPageType> = React.memo(() => {

    return (
        <div className={s.about}>
            <div className={s.container}>
                <h2 className={s.title}>About us</h2>
                <div className={s.about__links}>
                    <ul>
                        <li><Link  className={s.link} to={'contacts'}>Our
                            contacts</Link></li>
                        <li><Link className={s.link} to={'team'}>Our team</Link>
                        </li>
                    </ul>
                </div>

                {/*<Routes>
                    <Route path={'contacts'}
                           element={<p>+375 29 151 25 30</p>}/>
                    <Route path={'team'}
                           element={<p>Dimix company</p>}/>
                </Routes>*/}
                <Outlet />
            </div>
        </div>
    );
})

