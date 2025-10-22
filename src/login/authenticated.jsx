import React from 'react';

import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

// import './authenticated css'

export function Authenticated(props) {
    const navigate = useNavigate();

    async function logout() {
        localStorage.removeItem('userName');
        props.onLogout();
    }

    return (
        <div className='welcome'>
            <h1>Welcome: {props.userName}</h1>

            <Button variant='primary' onClick={() => navigate('/play')}>
                Play
            </Button>
            <Button variant='secondary' onClick={() => logout()}>
                Logout
            </Button>
        </div>
    )
}