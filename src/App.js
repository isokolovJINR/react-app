import './styles/App.css';
import React, {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route, Link, Redirect} from 'react-router-dom';

import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";



function App() {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('auth'))
        {
            setIsAuth(true);
        }
    }, []);
    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <AppRouter/>
        </AuthContext.Provider>
    )
}

export default App;
