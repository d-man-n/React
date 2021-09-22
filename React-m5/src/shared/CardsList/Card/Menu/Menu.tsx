import React from 'react';
import styles from './menu.css';
import { Dropdown } from '../../../Dropdown';
import { GenericList } from '../../../GenericList';
import { generateId } from '../../../../utils/react/generateRandomIndex';
import { merge } from "../../../../utils/js/merge";

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
                        <svg width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9"/>
                            <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9"/>
                            <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9"/>
                        </svg>
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