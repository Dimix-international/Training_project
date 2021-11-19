import React from 'react';
import './App.css'
import {Navbar} from "./components/Navbar";
import {Home} from "./pages/Home/Home";
import {Post} from "./pages/Post/Post";
import {Login} from "./pages/Login/Login";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {NewPost} from "./pages/NewPost/NewPost";
import {EditedPost} from "./pages/EditPost/EditedPost";
import {Layout} from "./Layout";


export const App = () => {

    const user = true;

    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path={'/'} element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path={'login'}
                               element={user ? <Navigate to={"/"}/> :
                                   <Login/>}/>
                        <Route path={'post/:id'}
                               element={user ? <Post/> :
                                   <Navigate to={'/login'}/>}/>
                        <Route path={'post/new'} element={<NewPost/>}/>
                        <Route path={'post/:id/edit'} element={<EditedPost/>}/>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

