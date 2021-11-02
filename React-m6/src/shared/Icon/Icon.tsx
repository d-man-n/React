import * as React from 'react';
import styles from './icon.css';
import { BlockIcon, WarningIcon, CommentsIcon, SaveIcon, SharedIcon, MenuIcon } from '../Icons';



export enum EIcons {
    block = 'img',
    // comments = 'CommentsIcon',
    // menu = 'MenuIcon',
    // save = 'SaveIcon',
    // shared = 'SharedIcon',
    // warning = 'WarningIcon',
}


interface IIconProps {
    Name: EIcons;
    size?: number;
}

export function Icon({Name, size=14}: IIconProps) {
    return (
        <Name width={size} height={size}/>
    );
}