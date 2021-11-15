import React from 'react';
import { Break } from '../../../Break';
import { IconAnon } from '../../../Icons';
import { EColor, Text } from '../../../Text';
import styles from './userblock.css';

interface IUserBlockProps {
    avtarSrc?: string;
    username?: string;
}

export function UserBlock({ avtarSrc, username }: IUserBlockProps) {
    return (
        <a 
            href="https://www.reddit.com/api/v1/authorize?client_id=4wjPw9ijdCQB9Bx-c4RMyg&response_type=token&state=random_string&redirect_uri=http://localhost:9000/&scope=read submit identity" 
            className={styles.userBox}
        >
            <div className={styles.avatarBox}>
                {avtarSrc
                    ? <img src={avtarSrc} alt="user" className={styles.avatarImage} />
                    : <IconAnon />
                }
            </div>

            <div className={styles.username}>
                <Break />
                <Text size={20} color={username? EColor.black : EColor.grey99} >{username || 'Аноним'} </Text>
            </div>
        </a>
    );
}