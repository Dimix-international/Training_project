import React from "react";
import {Link} from "react-router-dom";
import {useRegister} from "../../Login/hook/useRegister";
import {Form} from "../../Login/Form";
import s from '../LoginPage.module.scss'

export const Register = React.memo(() => {

    const {error, isLoading, setInfoHandler} = useRegister();

    const handleSubmit = (name:string, email: string, password: string) => {
        setInfoHandler(name, email, password)
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