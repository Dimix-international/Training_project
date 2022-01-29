import React from "react";
import {Link} from "react-router-dom";
import {useRegister} from "../../Login/hook/useSignUp";
import {Form} from "../../Login/Form";
import s from '../LoginPage.module.scss'
import {useApp} from "../../../hook/useApp";

export const Register = React.memo(() => {

    const {handleRegister} = useRegister();
    const {appState} = useApp();

    const handleSubmit = (email: string, password: string) => {
        handleRegister(email, password)
        //replace:true - по кнопке назад не сможем вернутся на страницу логинизации
    }

    return (
        <div className={s.login}>
            <Form title={'Registration'} callback={handleSubmit}/>
            <p>
                Already have an account ?
                <Link to={'/login'}> Sign in</Link>
            </p>
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
                    marginTop: '5px',
                    color: 'red'
                }}>{appState.error}</p>
            }
        </div>
    )
})