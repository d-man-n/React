import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import style from './header.less';

function HeaderComponent() {
    return (
        <header>
            <h1 className={style.h1}>
                Hello React
            </h1>
        </header>
    )
}

export const Header = hot(HeaderComponent)
