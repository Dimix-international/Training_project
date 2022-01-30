import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth'
import {useCallback, useState} from "react";
import {useAuth} from "../../../hook/useAuth";
import {useApp} from "../../../hook/useApp";
import {useNavigate, useSearchParams} from "react-router-dom";
import {InfoType} from "./useSignIn";
import {useQuery} from "react-query";


const registerUser = async (email: string, password: string) => {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password);
}

export const useRegister = () => {
    const {authDispatch} = useAuth();
    const navigate = useNavigate(); //является функцией
    const [searchParams, setSearchParams] = useSearchParams();

    const [info, setInfo] = useState<InfoType>({
        name: '',
        email: '',
        password: '',
    })

    const {error, isLoading} = useQuery(
        ['user', `${info.email}${info.password}`],
        () => registerUser(info.email, info.password),
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
            }
        }
    )

    const setInfoHandler = useCallback((name: string, email: string, password: string) => {
        setInfo({name, email, password})
    }, [])


    return {
        setInfoHandler,
        error,
        isLoading,
    }
}