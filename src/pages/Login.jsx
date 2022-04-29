import React, {useContext} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const navigator = useNavigate();
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
        navigator('/');
    }
    return (

        <div>
            <h1>page for login</h1>
            <form onSubmit={login}>
                <MyInput type={'text'} placeholder={"Enter login"}></MyInput>
                <MyInput type={'password'} placeholder={"Enter pass"}></MyInput>
                <MyButton>Log IN</MyButton>
            </form>
        </div>
    );
};

export default Login;