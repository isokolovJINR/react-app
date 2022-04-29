import React from 'react';
import {useRoutes} from "react-router-dom";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import About from "../pages/About";
import Login from "../pages/Login";

const PublicRoutes = () => {
    let element = useRoutes([
        // A route object has the same properties as a <Route>
        // element. The `children` is just an array of child routes.
        {
            path: '/',
            element: <Login />,
            children: [
                { path: "login", element: <Login/> },
            ],
        },

    ]);

    return element;
};

export default PublicRoutes;