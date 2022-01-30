import React, {FormEvent, useState} from 'react';
import s from './Login.module.scss'


type FormType = {
    title:string,
    callback:(name:string, email:string, password:string) => void
}
export const Form: React.FC<FormType> = React.memo((props) => {
    const {title, callback} = props;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (email && password.length > 6) {
            callback(name, email,password )
        }
        //replace:true - по кнопке назад не сможем вернутся на страницу логинизации
    }

    return (
        <div className={s.login}>
            <h1 className={s.title}>{title}</h1>
            <form onSubmit={handleSubmit} className={s.inputs}>
                <input type="text" placeholder={'Name'} value={name}
                       onChange={e => setName(e.currentTarget.value)}
                />
                <input type="email" placeholder={'Email'} value={email}
                       onChange={e => setEmail(e.currentTarget.value)}
                />
                <input type="password" value={password}
                       onChange={e => setPassword(e.currentTarget.value)}
                       placeholder={'Password'}
                       pattern='^.{6,}$'
                />
                <button type={'submit'} className={s.submit}>Enter</button>
            </form>
            {/*{fromPage} например будет надпись 'post/new' - вы хотели попасть сюда а попали на логин*/}
        </div>
    );
})

