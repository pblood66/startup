import React from 'react';

import { Login } from "./login";
import { Authenticated } from "./authenticated";
import { AuthState } from "./authstate";

export function Home({userName, authState, onAuthChange}) {
    return (
        <div>
            {authState === AuthState.Authenticated && (
                <Authenticated 
                userName={userName}
                onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)}
                />
            )}
            {authState === AuthState.Unauthenticated && (
                <Login userName={userName}
                onLogin={(loginUserName) => {
                    onAuthChange(loginUserName, authState.Authenticated);
                }}
                />
            )}
        </div>
    );
}