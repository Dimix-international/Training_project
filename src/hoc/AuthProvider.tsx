import React, {createContext, ReactElement, useState} from "react";

type AuthContextType = {
    user: string | null,
    signIn: (newUser: string, callback: () => void) => void
    signOut: (callback: () => void) => void
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({children}: { children: ReactElement }) => {

    const [user, setUser] = useState<string | null>(null);


    //callback - функция navigate
    const signIn = (newUser: string, callback: () => void) => {
        setUser(newUser);
        callback(); //будет сделана переадресация
    }

    const signOut = (callback: () => void) => {
        setUser(null); //user больше нету
        callback();
    }

    const value: AuthContextType = {user, signIn, signOut}
    //все эти методы будут доступны в любом компоненте


    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}