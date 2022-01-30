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
        }
    }
    const actions = {
        'set-error-app': setError,
    } as AppReducerReturnType

    return (actions[action.type] || actions['default'])()
}