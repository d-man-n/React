import React from 'react';
import styles from './preview.css';

export function Preview() {
    return(
        <div className={styles.preview}>
        <img 
            className={styles.previewImg} 
            src="https://cdn.dribbble.com/users/914722/screenshots/15891744/media/3f3c60f408d20a7610ead5dc6dc9710b.png" 
            alt=""
        />
    </div>
    );
}