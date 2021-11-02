import * as React from 'react';
import { BlockIcon, WarningIcon, CommentsIcon, SaveIcon, SharedIcon } from '../../../../Icons';
import styles from './menuitemslist.css';
import { Text, EColor } from '../../../../Text';

interface IMenuItemsListProps {
    postId: string;
}

export function MenuItemsList({ postId }: IMenuItemsListProps) {
    return (
        <ul className={styles.menuItemsList}>
            <li className={styles.menuItem} onClick={() => console.log(postId)}>
                <CommentsIcon />
                <Text size={12} color={EColor.grey99}>Комментарии</Text>
            </li>
            <div className={styles.divider} />
            <li className={styles.menuItem} onClick={() => console.log(postId)}>
                <SharedIcon />
                <Text size={12} color={EColor.grey99}>Поделиться</Text>
            </li>
            <div className={styles.divider} />
            <li className={styles.menuItem}>
                <WarningIcon />
                <Text size={12} color={EColor.grey99}>Скрыть</Text>
            </li>
            <div className={styles.divider} />
            <li className={styles.menuItem} onClick={() => console.log(postId)}>
                <SaveIcon />
                <Text size={12} color={EColor.grey99}>Сохранить</Text>
            </li>
            <div className={styles.divider} />
            <li className={styles.menuItem}>
                <WarningIcon />
                <Text size={12} color={EColor.grey99}>Пожаловаться</Text>
            </li>
        </ul>
    );
}