import {
    AuthActionOperationType,
    AuthActionsType
} from "../context/auth-context";
import {userType} from "../providers/AuthProvider";
import {setInfoUserStorage} from "../helpers/helper-storage";


export type AuthReducerReturnType = {
    [key in `${AuthActionOperationType}`]: () => userType
}

export const authReducer = (state: userType, action: AuthActionsType): userType => {

    const signIn = (): userType => {
        setInfoUserStorage(action.payload as userType)
        return {...action.payload as userType}
    }

    const signOut = (): userType => {
        setInfoUserStorage({name: null, email: null, id: null})
        return {...state, name: null, email: null, id: null}
    }

    const actions = {
        'set-user': signIn,
        'delete-user': signOut,
        'default': () => state
    } as AuthReducerReturnType

    return (actions[action.type] || actions['default'])()
}