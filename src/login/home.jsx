import React from 'react';

import { Login } from "./login";
import { Authenticated } from "./authenticated";
import { AuthState } from "./authstate";

export function Home({userName, authState, onAuthChange}) {
    return (
        <main>
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
                        onAuthChange(loginUserName, AuthState.Authenticated);
                    }}
                    />
                )}
            </div>
        </main>
    );
}