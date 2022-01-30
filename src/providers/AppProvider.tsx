import React, {ReactElement, useMemo, useReducer} from "react";
import {AppContext} from "../context/app-context";
import {appReducer} from "../reducer/app-reducer";

export type AppStateType = {
    error: string | null
}

export const AppProvider = ({children}: { children: ReactElement }) => {

    const [appState, appDispatch] = useReducer(appReducer, {
        error: null,
    })

    const value = useMemo(() => ({
        appState, appDispatch
    }), [appState])

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}