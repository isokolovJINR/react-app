import React from 'react';
import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import {
    useRoutes
} from 'react-router-dom';

const PrivateRoutes = () => {
    let element = useRoutes([
        // A route object has the same properties as a <Route>
        // element. The `children` is just an array of child routes.
        // {
        //     path: 'posts',
        //     element: <Posts />,
        //     children: [
        //         { path: "", element: <Posts /> },
        //     ],
        // },
        {
            path: '/',
            element: <Posts />,
            children: [
                { path: "posts", element: <Posts /> },
            ],
        },
        { path: "posts/:id", element: <PostIdPage/> },
        { path: "about", element: <About /> },
    ]);

    return element;
};

export default PrivateRoutes;