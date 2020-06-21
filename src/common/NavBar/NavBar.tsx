import React, { FC } from 'react';
import styles from './NavBar.scss';
import { Props } from "./types";

const NavBar: FC<Props> = ({onLogout}) => {
    return (
        <div className={styles.nav}>
            <button className={styles.btn} onClick={onLogout}>Log out</button>
        </div>
    )
};

export default NavBar;
