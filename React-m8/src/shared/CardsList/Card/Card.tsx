import React from 'react';
import styles from './card.css';
import { Preview } from './Preview';
import { TextContent } from './TextContent';
import { Menu } from './Menu';
import { Controls } from './Controls';

interface ICardItems {
    [n: string]: string;
}

interface ICard {
    post?: { data: ICardItems };
}

export function Card( props: ICard ) {
    return(
        <li className={styles.card}>
            <TextContent />
            <Preview />
            <Menu />
            <Controls />
        </li>
    );
}