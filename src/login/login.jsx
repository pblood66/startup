import React from 'react'

import "./login.css"

export function Login() {
    return (
     <main class="container-fluid text-center">
        <div class="login-form">
            <h1>Sign In/Register</h1>    
            <form method="get" action="play.html" />
                <div>
                    <input class="form-control" type="text" placeholder="username" />
                    <input class="form-control" type="text" placeholder="password" />
                </div>
                <div class="login-group">
                    <button type="submit" class="btn btn-primary">Login</button>
                    <button type="submit" class="btn btn-secondary">Register</button>
                    <button type="reset" class="btn btn-outline-secondary" >Clear</button>
                </div>
        </div>
    </main>
    );
}