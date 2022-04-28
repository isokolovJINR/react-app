import './styles/App.css';
import React from "react";
import {BrowserRouter, Routes, Route, Link, Redirect} from 'react-router-dom';

import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";



function App() {
    return (
        <AppRouter></AppRouter>
    )
}

export default App;
