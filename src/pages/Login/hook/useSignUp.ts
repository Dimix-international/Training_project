import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import {useCallback} from "react";
import {useAuth} from "../../../hook/useAuth";
import {useApp} from "../../../hook/useApp";
import {useNavigate} from "react-router-dom";


export const useRegister = () => {
    const {authDispatch} = useAuth();
    const {appDispatch} = useApp();
    const navigate = useNavigate(); //является функцией

    const handleRegister = useCallback((email: string, password: string) => {
        appDispatch({
            type: 'set-loading-app', payload: {
                isLoading:true
            }
        });
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}: { user: any }) => {
                authDispatch({
                    type: 'set-user', payload: {
                        email: user.email,
                        token: user.accessToken,
                        id: user.uid
                    }
                });
                appDispatch({
                    type: 'set-error-app', payload: {
                        error: null,
                        isLoading:false
                    }
                });
                navigate('/', {replace: true})
            })
            .catch(e => {
                appDispatch({
                    type: 'set-error-app', payload: {
                        error: e.message,
                        isLoading:false
                    }
                })
            });
    }, [authDispatch,appDispatch, navigate])

    return {
        handleRegister
    }
}