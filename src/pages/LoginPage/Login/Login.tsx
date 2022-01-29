import React from "react";
import {Link, useLocation} from "react-router-dom";
import {useSignIn} from "../../Login/hook/useSignIn";
import {Form} from "../../Login/Form";
import s from '../LoginPage.module.scss'
import {useApp} from "../../../hook/useApp";

export const Login = React.memo(() => {

    const location = useLocation();
    const {handleLogin} = useSignIn();
    const {appState} = useApp();
    //получаем инфу откуда мы пришли
    const fromPage = (location.state as any)?.from?.pathname || '/';

    const handleSubmit = (email: string, password: string) => {
        handleLogin(fromPage, email, password)
    }

    return (
        <div className={s.login}>
            <Form title={'Sign in'} callback={handleSubmit}/>
            <Link to={'/register'}> Create an account</Link>
            {
                appState.isLoading && <p style={{
                    marginTop: '5px',
                    color: 'purple',
                    fontSize: '18px',
                    letterSpacing: '1px',
                }}>loading...</p>
            }
            {
                appState.error && <p style={{
                    color: 'red'
                }}>{appState.error}</p>
            }
        </div>
    )
})