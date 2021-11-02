import * as React from 'react';
import styles from './icon.css';
import { BlockIcon, WarningIcon, CommentsIcon, SaveIcon, SharedIcon, MenuIcon } from '../Icons';
import classNames from 'classnames';

type TSizes = 28 | 20 | 16 | 14 | 12 | 10;

const icons = {
    block: BlockIcon,
    warning: WarningIcon,
    comments: CommentsIcon,
    save: SaveIcon,
    shared: SharedIcon,
    menu: MenuIcon,
}

export enum EIcons {
    block = 'block',
    comments = 'comments',
    menu = 'menu',
    save = 'save',
    shared = 'shared',
    warning = 'warning',
}


interface IIconProps {
    Name: EIcons;
    size?: TSizes;
}

export function Icon({Name, size=14}: IIconProps) {
    const Icon = icons[Name];

    const classes = classNames(
        styles[`s${size}`]
    );

    return (
        <Icon />
    );
}