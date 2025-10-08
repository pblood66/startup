import React from 'react'
import {useNavigate} from "react-router-dom"
import Button from 'react-bootstrap/Button';

import "./login.css"

export function Login() {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault(); // prevent page reload
        // you can add login validation here later
        navigate("/play");
    };
    
    return (
     <main class="container-fluid text-center">
        <div class="login-form">
            <h1>Sign In/Register</h1>    
            <div>
                <input class="form-control" type="text" placeholder="username" />
                <input class="form-control" type="text" placeholder="password" />
            </div>
            <div class="login-group">
                    <Button onClick={handleLogin} variant="primary" type="submit" className="btn btn-primary">Login</Button>
                    <Button onClick={handleLogin} variant="secondary" type="submit" className="btn btn-secondary">Register</Button>
            </div>
        </div>
    </main>
    );
}