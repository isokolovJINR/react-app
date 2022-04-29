import React, {useContext} from 'react';
import {Link, Outlet, useNavigate} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";


const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext) ;
    const navigator = useNavigate();
    const logOut = event => {
        event.preventDefault();
        setIsAuth(false);
        localStorage.removeItem('auth');
        navigator('/');
    }
    return (
        <div className='navbar'>
            <MyButton onClick={logOut}>
                Log Out
            </MyButton>
            <div className="navbar__links">
                <Link to={'/about'}> About</Link>
                <Link to={'/posts'}> POSTS</Link>
            </div>
            <Outlet />
        </div>

    );
};

export default Navbar;