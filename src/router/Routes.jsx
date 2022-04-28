import React from 'react';
import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import {
    useRoutes
} from 'react-router-dom';

const Routes = () => {
    let element = useRoutes([
        // A route object has the same properties as a <Route>
        // element. The `children` is just an array of child routes.
        {
            path: 'posts',
            element: <Posts />,
            children: [
                { path: "", element: <Posts /> },
                { path: ":id", element: <PostIdPage/> },
            ],
        },
        { path: "about", element: <About /> },
        // { path: "posts/:id", element: <PostIdPage /> },


        // { path: '', element: <About /> },
        // {
        //     path: 'posts',
        //     element: <Posts />,
        //     children: [
        //         { path: '/', element: <Posts /> },
        //         { path: ':id', element: <PostIdPage /> },
        //     ]
        // }
    ]);

    // {path: '/about', component: About, exact: true},
    // {path: '/posts', component: Posts, exact: true},
    // {path: '/posts/:id', component: PostIdPage, exact: true},
    // // {path: '*', component: Posts, exact: true},
    return element;
};

export default Routes;