import React from 'react';
import './App.css'
import {Home} from "./pages/Home/Home";
import {Post} from "./pages/Post/Post";
import {Login} from "./pages/Login/Login";
import {Routes, Route, Navigate} from "react-router-dom";
import {NewPost} from "./pages/NewPost/NewPost";
import {EditedPost} from "./pages/EditPost/EditedPost";
import {Layout} from "./Layout";

import {RequireAuth} from "./hoc/RequireAuth";
import {AuthProvider} from "./hoc/AuthProvider";
import {AboutPage} from "./pages/About/About";
import {OurTeam} from "./pages/OurTeam/OurTeam";
import {OurProducts} from "./pages/Products/Products";

export const App = () => {

    return (
        <AuthProvider>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path={'login'} element={<Login/>}/>

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
                    <Route path={'about'} element={<AboutPage />}>
                        <Route path={'contacts'}
                               element={<p>+375 29 151 25 30</p>}/>
                        <Route path={'team'}
                               element={<OurTeam />}/>
                        <Route path={'products'}
                               element={<OurProducts />}/>
                    </Route>

                    <Route path={'*'} element={<div>Ошибка</div>}/>
                </Route>
            </Routes>
        </AuthProvider>
    );
}

