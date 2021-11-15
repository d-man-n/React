import * as React from 'react';
import { hot } from 'react-hot-loader/root';

export function HeaderComponent() {
    return (
        <header>
            <h1>Hello, Reddit!!!</h1>
        </header>
    );
}

export const Header = hot(HeaderComponent);