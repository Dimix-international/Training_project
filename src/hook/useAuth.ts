import {useContext} from "react";
import {AuthContext} from "../hoc/AuthProvider";

export const useAuth = () => {
    return useContext(AuthContext); //получаем доступ к контексту
}

//чтобы не делать все выше в каждой компоненте вынесли все в функцию
//после ее вызова все данные value из AuthContext будут доступны