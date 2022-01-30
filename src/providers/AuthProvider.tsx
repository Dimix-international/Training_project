import React, {ReactElement, useMemo, useReducer} from "react";
import {AuthContext} from "../context/auth-context";
import {authReducer} from "../reducer/auth-reducer";
import {getInfoUserStorage} from "../helpers/helper-storage";


export type userType = {
    name: string | null,
    email: string | null,
    id: string | null,
}

export const AuthProvider = ({children}: { children: ReactElement }) => {

    const [authUser, authDispatch] = useReducer(authReducer, {
        name: getInfoUserStorage()?.name || null,
        email: getInfoUserStorage()?.email ||null,
        id: getInfoUserStorage()?.id ||null,
    })

    const value = useMemo(() => ({
        authUser, authDispatch
    }), [authUser])

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}