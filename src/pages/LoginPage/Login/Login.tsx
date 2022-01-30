import React from "react";
import {Link, useLocation} from "react-router-dom";
import {useSignIn} from "../../Login/hook/useSignIn";
import {Form} from "../../Login/Form";
import s from '../LoginPage.module.scss'


export const Login = React.memo(() => {

    const location = useLocation();
    const {setInfoHandler, isLoading, error} = useSignIn();

    //получаем инфу откуда мы пришли
    const fromPage = (location.state as any)?.from?.pathname || '/';

    const handleSubmit = (name:string, email: string, password: string) => {
        setInfoHandler(name, fromPage, email, password)
    }

    return (
        <div className={s.login}>
            <Form title={'Sign in'} callback={handleSubmit}/>
            <Link to={'/register'}> Create an account</Link>
            {
                isLoading && <p style={{
                    marginTop: '5px',
                    color: 'purple',
                    fontSize: '18px',
                    letterSpacing: '1px',
                }}>loading...</p>
            }
            {
                error && <p style={{
                    marginTop: '5px',
                    color: 'red'
                }}>{(error as any).toString()}</p>
            }
        </div>
    )
})