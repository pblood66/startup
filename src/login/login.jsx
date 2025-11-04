import React from 'react'
import {useNavigate} from "react-router-dom"
import Button from 'react-bootstrap/Button';

import { MessageDialog } from './messageDialog';
import "./login.css"

export function Login(props) {
    const navigate = useNavigate();

    const [userName, setUserName] = React.useState(props.userName);
    const [password, setPassword] = React.useState('');
    const [displayError, setDisplayError] = React.useState(null);

    const test = "hello world";

    async function loginUser() {
        loginOrCreate(`/api/auth/login`);
    }

  async function registerUser() {
        loginOrCreate(`/api/auth/create`);
    }

    async function loginOrCreate(endpoint) {
        const response = await fetch(endpoint, {
        method: 'post',
        body: JSON.stringify({ username: userName, password: password }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        });
        if (response?.status === 200) {
            localStorage.setItem('userName', userName);
            props.onLogin(userName);
        } else {
        const body = await response.json();
        setDisplayError(`⚠ Error: ${body.msg}`);
        }
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
        <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
    </main>
    );
}