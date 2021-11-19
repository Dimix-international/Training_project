import React from 'react';
import s from './Login.module.scss'
import {posts} from "../../data";

import Google from '../../assets/img/google.png';
import Facebook from '../../assets/img/facebook.png';
import Github from '../../assets/img/github.png';

type LoginType = {}
export const Login: React.FC<LoginType> = React.memo(() => {

    return (
        <div className={s.login}>
            <h1 className={s.title}>Choose a Login Method</h1>
            <div className={s.body}>
                <div className={s.btns}>
                    <div className={`${s.loginBtn} ${s.google}`}>
                        <img src={Google} alt=""/>
                        <span>Google</span>
                    </div>
                    <div className={`${s.loginBtn} ${s.facebook}`}>
                        <img src={Facebook} alt=""/>
                        <span>Facebook</span>
                    </div>
                    <div className={`${s.loginBtn} ${s.github}`}>
                        <img src={Github} alt=""/>
                        <span>Github</span>
                    </div>
                </div>
                <div className={s.center}>
                    <div className={s.line}> </div>
                    <div className={s.or}>OR</div>
                </div>
                <div className={s.inputs}>
                    <input type="text" placeholder={'Username'}/>
                    <input type="text" placeholder={'Password'}/>
                    <button className={s.submit}>Enter</button>
                </div>
            </div>
        </div>
    );
})

