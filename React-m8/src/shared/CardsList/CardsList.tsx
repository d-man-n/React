import React, {useContext} from 'react';
import { Card } from './Card/Card';
import styles from './cardslist.css';
import { postsContext } from '../context/postsContext';

export function CardsList() {
    const posts = useContext(postsContext);
    console.log(posts.children)
    


    return(
        <ul className={styles.cardsList}>
            {posts.children &&
                posts.children.map(el => {
                    return (<Card data={el} />)
                })
            }
        </ul>
    );
}