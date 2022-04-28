import React from 'react';
import Navbar from "./UI/Navbar/Navbar";
import {BrowserRouter, Route, Routes as R, Outlet} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import {routes} from "../router/index";
import Routes from "../router/Routes";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <div className="App">
                <Routes/>
                <Outlet />
            </div>

        </BrowserRouter>


    );
};

export default AppRouter;