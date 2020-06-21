import React, { FC } from 'react';
import { Props } from './types';
import styles from './Input.scss';

const Input: FC<Props> = ({
                              type,
                              value,
                              label,
                              name,
                              error,
                              onChange,
                              onFocus,
                              onBlur}) => (
    <div className={styles.inputField}>
        <label className={styles.label} htmlFor={name}>{label}</label>
        <input
            className={styles.input}
            type={type}
            value={value}
            name={name}
            id={name}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
        <p className={styles.error}>{error}</p>
    </div>
);

export default Input;
