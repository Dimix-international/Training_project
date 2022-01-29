import {useContext} from "react";
import {AuthContext} from "../context/auth-context";

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useShortLink must be used inside a ShortLink');
    return context; //получаем доступ к контексту
}
