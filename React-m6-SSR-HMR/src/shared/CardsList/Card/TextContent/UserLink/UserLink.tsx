import React from 'react';
import styles from './userLink.css';

export function UserLink() {
    return(
        <div className={styles.userLink}>
            <img 
                className={styles.avatar} 
                src="https://cdn.dribbble.com/users/914722/avatars/normal/ed44f87a2d4e9f25c0d17d3d4a6212fc.jpg?1560098438" 
                alt="avatar"
            />
            <a href="#user-url" className={styles.username}>Дмитрий Гришин</a>
        </div>
    )
};