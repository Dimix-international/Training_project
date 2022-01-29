import React from 'react';
import {useLocation, Navigate} from "react-router-dom";
import {useAuth} from "../hook/useAuth";


//будет обеспечить переадресацию
type RequireAuthType = {}
export const RequireAuth: React.FC<RequireAuthType> = React.memo(({children}: any) => {

    const location = useLocation();
    const {authUser:user} = useAuth();

    if (!user.token) {
        //если не авторизованы - сделаем переадресацию
        //state={{from: location}} - уточняем откуда мы пришли
        // чтобы после регистрации могли вернуться на страницу с которой был редирект
        return <Navigate to={'/login'} state={{from: location}}/>
    }
    return children;//отрисовываем любую страницу переданную если можем на неё попасть
})