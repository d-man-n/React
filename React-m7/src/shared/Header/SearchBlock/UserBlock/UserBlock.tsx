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
        <a className={styles.userBox}>
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