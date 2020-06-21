import React, { FC } from 'react';
import './Spinner.scss';
import styles from './Spinner.scss';

const Spinner: FC = () => (
    <div className={styles.background}>
        <div className={styles.backdrop} />
        <div className={styles.loader} />
    </div>

);

export default Spinner;
