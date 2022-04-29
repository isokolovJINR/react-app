import React, {useContext} from 'react';
import Navbar from "./UI/Navbar/Navbar";
import {BrowserRouter, Route, Routes as R, Outlet} from "react-router-dom";
import PrivateRoutes from "../router/PrivateRoutes";
import PublicRoutes from "../router/PublicRoutes";
import {AuthContext} from "../context";

const AppRouter = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext) ;
    console.log(isAuth);
    return (
        isAuth
            ?
                <BrowserRouter>
                    <div className="App">
                        <Navbar/><PrivateRoutes/>
                    </div>
                </BrowserRouter>
            :
                <BrowserRouter>
                    <div className="App">
                        <PublicRoutes/>
                    </div>
                </BrowserRouter>
    );
};

export default AppRouter;