import {createContext} from "react";
import {userType} from "../providers/AuthProvider";


export enum AuthActionOperationType {
    SetUser = 'set-user',
    DeleteUser = 'delete-user',
    Default = 'default'
}
export type AuthActionsType = {
    type: `${AuthActionOperationType}`,
    payload?: userType
}

export type AuthDispatchType = (action:AuthActionsType) => void;
export type AuthContextType = {authUser:userType, authDispatch:AuthDispatchType};

export const AuthContext = createContext<AuthContextType | undefined>(undefined)