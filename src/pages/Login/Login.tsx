import React, {FormEvent} from 'react';
import s from './Login.module.scss'


import Google from '../../assets/img/google.png';
import Facebook from '../../assets/img/facebook.png';
import Github from '../../assets/img/github.png';
import {useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../../hook/useAuth";

type LoginType = {}
export const Login: React.FC<LoginType> = React.memo(() => {

    const navigate = useNavigate(); //является функцией
    const location = useLocation();

    const {signIn} = useAuth();

    //получаем инфу откуда мы пришли
    const fromPage = location.state?.from?.pathname || '/';
    //например будет надпись 'post/new' - вы хотели попасть сюда а попали на логин

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target; //получаем форму
        //@ts-ignore
        const user = form.username.value;

        signIn(user, () => navigate(fromPage, {replace:true}))
        //replace:true - по кнопке назад не сможем вернутся на страницу логинизации
    }

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
                <form onSubmit={handleSubmit} className={s.inputs}>
                    <input name={'username'} type="text" placeholder={'Username'}/>
                    {/*<input name={'password'} type="password" placeholder={'Password'}/>*/}
                    <button type={'submit'} className={s.submit}>Enter</button>
                </form>
            </div>
            {fromPage}
            {/*например будет надпись 'post/new' - вы хотели попасть сюда а попали на логин*/}
        </div>
    );
})

