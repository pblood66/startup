import React from 'react'
import {useNavigate} from "react-router-dom"
import Button from 'react-bootstrap/Button';

import "./login.css"

export function Login(props) {
    const navigate = useNavigate();

    const [userName, setUserName] = React.useState(props.userName);
    const [password, setPassword] = React.useState('');

    const test = "hello world";

    async function loginUser() {
        localStorage.setItem('userName', userName);
        props.onLogin(userName);
    }

    async function registerUser() {
        localStorage.setItem('userName', userName);
        props.onLogin(userName);
    }

    const handleLogin = (e) => {
        e.preventDefault(); // prevent page reload
        // you can add login validation here later
        loginUser()
        navigate("/play");
    };
    
    return (
     <main className="container-fluid text-center">
        <div className="login-form">
            <h1>Sign In/Register</h1>    
            <div>
                <input className="form-control" type="text" onChange={(e) => setUserName(e.target.value)} placeholder="username" />
                <input className="form-control" type="text" onChange={(e) => setPassword(e.target.value)} placeholder="password" />
            </div>
            <div className="login-group">
                    <Button onClick={() => loginUser()} variant="primary" type="submit" disabled={!userName || !password}>Login</Button>
                    <Button onClick={() => registerUser()} variant="secondary" type="submit" disabled={!userName || !password}>Register</Button>
            </div>
        </div>
    </main>
    );
}