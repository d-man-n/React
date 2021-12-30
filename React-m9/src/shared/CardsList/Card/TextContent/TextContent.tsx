import React from 'react';
import styles from './textContent.css';

import { Title } from './Title';
import { UserLink } from './UserLink';

interface ITextContent {
    author: string;
    title: string;
    created: number;
}

export function TextContent( { author, title, created }: ITextContent ) {
    const date = new Date(Date.now() - created);

    return(
        <div className={styles.textContent} >
            <div className={styles.metaData}>
                <UserLink author={author}/>
                <span className={styles.createdAt}>
                    <span className={styles.publishedLabel}>опубликовано </span>
                    {date.toString()}
                </span>
            </div>
            <Title title={title}/>
        </div>
    );
}