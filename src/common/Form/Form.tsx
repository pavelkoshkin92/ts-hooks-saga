import React, { FC } from 'react';
import './Form.scss';
import styles from './Form.scss';
import { Props } from "./types";

const Form: FC<Props> = ({children, onSubmit}) => {
    return (
        <form
            noValidate
            onSubmit={onSubmit}
            className={styles.form}
        >
            {children}
            <button type="submit" className={styles.submitBtn}>Submit</button>
        </form>
    )
};

export default Form;
