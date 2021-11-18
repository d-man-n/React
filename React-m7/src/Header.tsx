import { hot } from 'react-hot-loader/root';
import React from 'react';
import styles from './header.css';

export const HeaderComponent = () => {
    return (
    <div className={styles.header}>Hellow from React component!!!11</div>
    );
}

export const Header = hot(HeaderComponent);