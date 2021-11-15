import React from 'react';
import styles from './menu.css';
import { Dropdown } from '../../../Dropdown';
import { GenericList } from '../../../GenericList';
import { generateId } from '../../../../utils/react/generateRandomIndex';
import { merge } from "../../../../utils/js/merge";
import { MenuIcon } from '../../../Icons';

const LIST = [
    {As: 'li' as const, text: 'Комментарии'},
    {As: 'li' as const, text: 'Поделиться'},
    {As: 'li' as const, text: 'Скрыть'},
    {As: 'li' as const, text: 'Сохранить'},
    {As: 'li' as const, text: 'Пожаловаться'},
].map(generateId)

export function Menu() {
    const handleItemClick = (id: string) => {
            console.log(id);
        }

    return(
        <div className={styles.menu}>
            <Dropdown 
                onClose={() => console.log('çlosed')} 
                onOpen={() => console.log('ópened')} 
                isOpen={false} 
                button={
                    <button className={styles.menuButton}>
                        <MenuIcon />
                    </button>
                }
            >
                <ul className={styles.menuList}>
                    <GenericList list={ LIST.map(merge({onClick: handleItemClick })) } />  
                </ul>
 
            </Dropdown>
        </div>
    );
}