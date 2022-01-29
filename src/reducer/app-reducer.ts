import {
    AppActionOperationType,
    AppActionsType,
} from "../context/app-context";
import {AppStateType} from "../providers/AppProvider";


type AppReducerReturnType = {
    [key in `${AppActionOperationType}`]: () => AppStateType
}

export const appReducer = (state: AppStateType, action: AppActionsType): AppStateType => {

    const setError = (): AppStateType => {
        return {
            ...state,
            error: action.payload.error,
            isLoading: action.payload.isLoading,
        }
    }
    const setLoading = (): AppStateType => {
        return {...state, isLoading: action.payload.isLoading}
    }

    const actions = {
        'set-error-app': setError,
        'set-loading-app': setLoading,
    } as AppReducerReturnType

    return (actions[action.type] || actions['default'])()
}