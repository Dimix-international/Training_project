import React from 'react';
import './App.css'
import {Home} from "./pages/Home/Home";
import {Post} from "./pages/Post/Post";
import {Navigate, Route, Routes} from "react-router-dom";
import {NewPost} from "./pages/NewPost/NewPost";
import {EditedPost} from "./pages/EditPost/EditedPost";
import {Layout} from "./Layout";

import {RequireAuth} from "./hoc/RequireAuth";
import {AboutPage} from "./pages/About/About";
import {OurTeam} from "./pages/OurTeam/OurTeam";
import {OurProducts} from "./pages/Products/Products";
import {Login} from "./pages/LoginPage/Login/Login";
import {Register} from "./pages/LoginPage/Register/Register";
import {useAuth} from "./hook/useAuth";

export const App = () => {
    const {authUser} = useAuth();

    return (
            <Routes>
                <Route path={`/`} element={<Layout/>}>
                    <Route path={`/`} element={<Navigate to={`home/:${authUser.id}`}/>}/>
                    <Route path={`home/:${authUser.id}`} element={<Home/>}/>
                    <Route path={'login'} element={<Login/>}/>
                    <Route path={'register'} element={<Register/>}/>
                    <Route path={'post/:id'} element={
                        <RequireAuth>
                            <Post/>
                        </RequireAuth>
                    }/>

                    <Route path={'post/new'} element={
                        <RequireAuth>
                            {/*когда пользователь попробует перейти по адресу'post/new'
                                он сначала попадет в RequireAuth, если авторизован -
                                вернем в children - т.е. <NewPost/> , иначе будет редирект*/}
                            <NewPost/>
                        </RequireAuth>
                    }/>

                    {/*вариант когда два пути ведут на один компонент*/}
                    {/*<Route path={'post/create'} element={<NewPost/>}/>*/}

                    {/*replace - не сохранит в истории посещение post/create*/}
                    <Route path={'post/create'}
                           element={<Navigate to={'/post/new'} replace/>}/>
                    <Route path={'post/:id/edit'} element={<EditedPost/>}/>

                    {/*about/* -любой адрес который начинается с about/ всегда имеет компонент AboutPage*/}
                    <Route path={'about'} element={<AboutPage/>}>
                        <Route path={'contacts'}
                               element={<p>+375 29 151 25 30</p>}/>
                        <Route path={'team'}
                               element={<OurTeam/>}/>
                        <Route path={'products'}
                               element={<OurProducts/>}/>
                    </Route>
                    <Route path={'*'} element={<div>Ошибка</div>}/>
                </Route>
            </Routes>
    );
}

