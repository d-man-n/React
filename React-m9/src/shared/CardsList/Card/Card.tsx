import React from 'react';
import styles from './card.css';
import { Preview } from './Preview';
import { TextContent } from './TextContent';
import { Menu } from './Menu';
import { Controls } from './Controls';
 import { IPostsData } from '../../../hooks/usePostsData';

interface ICard {
    post: IPostsData;
}

export function Card( props: ICard ) {
    const { post } = props;
    return(
        <li key={post.id} className={styles.card}>
            <TextContent author={post.author} title={post.title} created={post.created}/>
            <Preview />
            <Menu />
            <Controls />
        </li>
    );
}