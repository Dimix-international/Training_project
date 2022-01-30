import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import {useCallback, useState} from "react";
import {useAuth} from "../../../hook/useAuth";
import {useNavigate} from "react-router-dom";
import {useQuery} from "react-query";

export type InfoType = {
    name:string,
    email: string,
    password: string,
    fromPage?: string
}

const signUser = async (email: string, password: string) => {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
}

export const useSignIn = () => {
    const {authDispatch} = useAuth();

    const [info, setInfo] = useState<InfoType>({
        name: '',
        email: '',
        password: '',
        fromPage: '',
    });

    const navigate = useNavigate(); //является функцией
    const{error, isLoading} = useQuery(
        ['user', `${info.email}${info.password}`],
        () => signUser(info.email, info.password),
        {
            enabled: !!info.email,
            staleTime: 0,
            cacheTime: 0,

            onSuccess: (data) => {
                authDispatch({
                    type: 'set-user', payload: {
                        name: info.name,
                        email: data.user.email,
                        id: data.user.uid
                    }
                });
                navigate(`${info.fromPage}`, {replace: true});
            },
        }
    )

    const setInfoHandler = useCallback((name:string, fromPage: string, email: string, password: string) => {
        setInfo({name, fromPage, email, password})
    }, [])

    return {
        setInfoHandler,
        error,
        isLoading
    }
}