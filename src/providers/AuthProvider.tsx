import React, {ReactElement, useMemo, useReducer} from "react";
import {AuthContext} from "../context/auth-context";
import {authReducer} from "../reducer/auth-reducer";


export type userType = {
    email: string | null,
    token: string | null,
    id: string | null,
}

export const AuthProvider = ({children}: { children: ReactElement }) => {

    const [authUser, authDispatch] = useReducer(authReducer, {
        email: null,
        token: null,
        id: null,
    })

    //callback - функция navigate
    /*    const signIn = (callback: () => void) => {
            callback(); //будет сделана переадресация
        }

        const signOut = (callback: () => void) => {
            callback();
        }*/

    const value = useMemo(() => ({
        authUser, authDispatch
    }), [authUser])
    //все эти методы будут доступны в любом компоненте

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}