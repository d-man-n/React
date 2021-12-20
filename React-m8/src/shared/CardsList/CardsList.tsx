import React, {useContext} from 'react';
import { Card } from './Card/Card';
import styles from './cardslist.css';
import { postsContext } from '../context/postsContext';

export function CardsList() {
    const posts = useContext(postsContext);
    console.log(posts)
    


    return(
        <ul className={styles.cardsList}>
            {
                posts.map((el) => {
                    return (
                        <Card post={el}/>
                    )
                })
            }

        </ul>
    );
}