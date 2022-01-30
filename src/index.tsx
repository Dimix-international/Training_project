import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {QueryClientProvider} from "react-query";
import {queryClient} from "./hook/react-query/query-client";
import {ReactQueryDevtools} from "react-query/devtools";
import {AppProvider} from "./providers/AppProvider";
import './firebase';
import {AuthProvider} from "./providers/AuthProvider"; //для firebase

ReactDOM.render(
    <BrowserRouter basename={'/Training_project'}>
        <AppProvider>
            <AuthProvider>
                <QueryClientProvider client={queryClient}>
                    <App/>
                    <ReactQueryDevtools/>
                </QueryClientProvider>
            </AuthProvider>
        </AppProvider>
    </BrowserRouter>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
